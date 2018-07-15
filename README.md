# GifScript
GifScript is a simple esoteric programming language by Laurie and Michael Cheers. 
## A Note on Pronunciation
As all right-minded people know, the G in GIF should be pronounced Spanish-style, like the J in Jalapeno.
## Data Types
GifScript has two data types: colors, and color cubes.

A color is a standard 3-byte RGB color, ranging from #000000 (pure black) to #FFFFFF (pure white).

A color cube is a 16x16x16 grid of colors. Entries from the grid are indexed by color, where red is the X axis, green is the Y axis, and blue is the Z axis. Since the cube is only 16 pixels wide, the lower 4 bits of each color are ignored for this. (For example, any color between #102030 and #1F2F3F addresses the same pixel - the one 1 across, 2 down, and 3 in. By convention, we would call this pixel #112233.)

On disk, we store color cubes in the GIF file format: 16x16 pixel images, with the Z axis being represented by 16 frames.

## Anatomy of a GifScript program
Each GifScript program is a color cube. The GifScript interpreter reads it like a book - evaluating the first frame's top left pixel, continuing to the right until it overflows to the next line, and so on. And when it finishes the first frame, it resumes at the top left pixel of the second frame, etc. If it gets all the way to position #FFFFFF, the program halts.

Aside from the program itself, the interpreter maintains two important pieces of state -

**Current Color:** this is initially #000000 (black), but instructions can change it. Most instructions use the current color in some way.

**Registers:** In GifScript you have access to 4096 registers (16x16x16), identified (you guessed it) by color. Each register points to a specific pixel within a specific color cube. Initially, each one points to position #000000 of its own unique pure black color cube, but you can load new cubes for them to point to, or make them point to each other's cubes.

One thing worth noting - at any given moment, one of the registers is the "running" register, and it points to the pixel that the interpreter will read next. By default, that's register #FFFFFF. When GifScript starts, register #FFFFFF points to the program cube, and setting its position changes what instruction is be executed next. (in other words, this is a "Goto".)

## Worked Example
Before we get into the technical specifications, it's probably helpful to work through a simple example  to see how GifScript code hangs together. Here's the program:

![](https://raw.githubusercontent.com/LaurieCheers/GifScript/master/Examples/docexample.png)

Or if we zoom in a little -

![](https://raw.githubusercontent.com/LaurieCheers/GifScript/master/gifscript_example0.png)

A natural way to read GifScript code is to consider it as individual blocks separated by Return instructions. So for example, the line above contains three blocks. Let's read the first block.

* Reading from left to right, the first color we encounter is #888833. This color has no special meaning - all it means is that we record this color as the current color.
* The second color is #CCCCCC, the Assign instruction. Nothing happens just yet, but next time we see a return statement, we're going to assign something to have the color #888833.
* The third color is #884400. Again, this has no special meaning, so we just make #884400 the current color.
* Next we encounter #0000CC, the Register-Position instruction. The current color is #884400, so this means we'll get the position of register #884400. That position becomes the current color.
* And finally we see #000000, the Return instruction. The Assign we had queued up can now resolve, so we set the position of register #884400. It now points to the pixel at #888833 within its color cube - namely, in the middle (88 along and 88 down) of its fourth frame (33).

The second block proceeds in a similar way, except that instead of using the Register-Position instruction, it uses Register-Value, and instead of the color #888833, it uses #EE77CC. So whereas the first block changed which pixel the register pointed to, this block sets the color of that pixel. Specifically, it makes it the color #EE77CC, a rather nice pink.

In the final block, there are just two instructions. We set the current color to #884400, and then save the color cube of register #884400 as a GIF file. Hence, if you run this program, you should find that it creates a file named "884400.gif", with one pink pixel in the middle of one of its frames: 

![](https://raw.githubusercontent.com/LaurieCheers/GifScript/master/Examples/docexample_out.png)

PS: Why are we using register #884400? No particular reason, except that it's a nice color that's not easily mistaken for any of the instruction colors.

## Instructions
GifScript understands the following 10 special instruction colors:

![](https://raw.githubusercontent.com/LaurieCheers/GifScript/master/gifscript_instructions2.png)

### Return (#000000)
Return the current color from the current function. If we're not currently in a function, terminate.

NB: All the instructions below that "evaluate the right-hand side" do so by executing the right-hand side like a function. In other words, it will run the right-hand side code until it hits a "return" instruction, then go back to evaluate the instruction that was expecting a right-hand side value, and then resume execution after that return instruction.

### Assign (#CCCCCC)
`right-hand-side.pixel = current-color`

Evaluate the right-hand side. Write the current color into that pixel's contents. (If that pixel is not assignable, return instead).

### Call (#CC88CC)
`right-hand-side.register.call()`

Evaluate the right-hand side. That register becomes the running register. (Until it returns). The current color is unaffected.

### Load (#CC0044)
`current-color.register.load(current-color.register.filename)`

Load a gif into the selected register. The filename will be determined by the register's color: for example register #FF4400 loads "ff4400.gif".

### Save (#CC8844)
`current-color.register.save(current-color.register.filename)`

Save the selected register as a gif, using the same filename as for loading.

### Retarget (#CCCC44)
`right-hand-side.register.cube = current-color.register.cube`

Evaluate the right-hand side. Make that register point to the current-color register's color cube.

### RegisterPos (#0000CC)
`current-color = current-color.register.position`

Get the position of the selected register. (Assigning to this value will move the register.)

### RegisterVal (#0088CC)
`current color = current-color.register.pixel`

Get the color pointed to by the selected register. (Assigning to this value will modify the register's color cube.)

### Data (#00CCCC)
`current-color = running-register.cube[current-color]`

Get the selected pixel from the running program. (Assigning to this value will modify the program.)

### Modify (#CC00CC)
`current-color = modify(current-color)`

Deduce a pattern from the next 3 pixels, and apply that pattern to current-color. (See Modifiers.) If the pattern can't be deduced or the result overflows, return instead. Resume execution after those pixels. (The resultant value is not assignable.)

### Other
`current-color = this-pixel`

If the interpreter reads any color other than the 12 above, it simply records that pixel as the current color. (Assigning to this value will modify the program.)

## Modifiers
You might have noticed that GifScript has no instructions for supporting basic math functionality such as adding, subtracting, or comparing numbers. That's where the Modify instruction comes in! Each Modify instruction is followed by three colors that illustrate the modification you want to make. Each pair of colors (the first and second, and the second and third) is illustrating a before-and-after transition.

### Example 1:

![](https://raw.githubusercontent.com/LaurieCheers/GifScript/master/gifscript_example1.png)

Here we see a simple add modifier, which will add 32 points to the blue channel at each step. If this overflows the blue channel, the modifier fails. (In other words, acts like a Return instruction - this can be a useful building block for logic.)

### Example 2:

![](https://raw.githubusercontent.com/LaurieCheers/GifScript/master/gifscript_example2.png)

If you don't want to fail on overflow, show an example of the overflow behaviour you want. In this case we're overflowing into the (full) green channel, which in turn overflows into the red channel. NB: For GifScript to understand your intent, the first two example colors should illustrate an addition that does not overflow, and the third should illustrate the overflow.

Hopefully this shows you the kinds of operations that are possible with modifiers. To be precise, the system understands the following operations, and will try out each of these rules, in this order, for each channel until it finds one that fits the examples it has been given.

* **None**	The same value as before.
* **Channel**	The (old) value from another channel.
* **Constant**	Set to a specific value.
* **Invert**	255 minus the old value.
* **Add**	Increase (or decrease) by a constant; fail if the value overflows.
* **Wrap Add**	Increase (or decrease) by a constant; wrap around if the value overflows.
* **Overflow**	Increase or decrease by a constant when another (specific) channel's Wrap Add or Overflow channel overflows.
