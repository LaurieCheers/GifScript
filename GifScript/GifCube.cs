using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GifScript
{
    /*
    public enum ColorDir
    {
        PlusR,
        MinusR,
        PlusG,
        MinusG,
        PlusB,
        MinusB,
    }

    public static class ColorDirExtensions
    {
        public static bool CanStep(this ColorRGB position, ColorDir direction)
        {
            switch (direction)
            {
                case ColorDir.MinusR: return position.R > 0;
                case ColorDir.MinusG: return position.G > 0;
                case ColorDir.PlusR: return position.R < 255;
                case ColorDir.PlusG: return position.G < 255;
                case ColorDir.PlusB: return position.B > 0;
                case ColorDir.MinusB: return position.B < 255;
                default: throw new Exception();
            }
        }

        public static ColorRGB Step(this ColorRGB position, ColorDir direction)
        {
            switch (direction)
            {
                case ColorDir.MinusR: return new ColorRGB((byte)(position.R-1), position.G, position.B);
                case ColorDir.MinusG: return new ColorRGB(position.R, (byte)(position.G-1), position.B);
                case ColorDir.PlusR: return new ColorRGB((byte)(position.R+1), position.G, position.B);
                case ColorDir.PlusG: return new ColorRGB(position.R, (byte)(position.G+1), position.B);
                case ColorDir.PlusB: return new ColorRGB(position.R, position.G, (byte)(position.B+1));
                case ColorDir.MinusB: return new ColorRGB(position.R, position.G, (byte)(position.B-1));
                default: throw new Exception();
            }
        }

        public static ColorDir AnticlockwiseRG(this ColorDir d)
        {
            switch (d)
            {
                case ColorDir.MinusR: return ColorDir.PlusG;
                case ColorDir.MinusG: return ColorDir.MinusR;
                case ColorDir.PlusR: return ColorDir.MinusG;
                case ColorDir.PlusG: return ColorDir.PlusR;
                case ColorDir.PlusB: return ColorDir.PlusB;
                case ColorDir.MinusB: return ColorDir.MinusB;
                default: throw new Exception();
            }
        }

        public static ColorDir ClockwiseRG(this ColorDir d)
        {
            switch (d)
            {
                case ColorDir.MinusR: return ColorDir.MinusG;
                case ColorDir.MinusG: return ColorDir.PlusR;
                case ColorDir.PlusR: return ColorDir.PlusG;
                case ColorDir.PlusG: return ColorDir.MinusR;
                case ColorDir.PlusB: return ColorDir.PlusB;
                case ColorDir.MinusB: return ColorDir.MinusB;
                default: throw new Exception();
            }
        }

        public static ColorDir Negate(this ColorDir d)
        {
            switch(d)
            {
                case ColorDir.MinusR: return ColorDir.PlusR;
                case ColorDir.MinusG: return ColorDir.PlusG;
                case ColorDir.PlusR: return ColorDir.MinusR;
                case ColorDir.PlusG: return ColorDir.MinusG;
                case ColorDir.PlusB: return ColorDir.MinusB;
                case ColorDir.MinusB: return ColorDir.PlusB;
                default: throw new Exception();
            }
        }
    }

    public enum ColorCategory
    {
        Black,
        White,
        Red,
        Green,
        Blue,
        Yellow,
        Cyan,
        Magenta,
        Grey
    }*/

    public struct ColorRGB
    {
        public readonly byte R;
        public readonly byte G;
        public readonly byte B;
        public readonly byte R16;
        public readonly byte G16;
        public readonly byte B16;

        public ColorRGB(byte r, byte g, byte b)
        {
            R = r;
            G = g;
            B = b;
            R16 = (byte)(r / 16);
            G16 = (byte)(g / 16);
            B16 = (byte)(b / 16);
        }

        public static ColorRGB operator +(ColorRGB lhs, ColorRGB rhs)
        {
            return new ColorRGB((byte)(lhs.R + rhs.R), (byte)(lhs.G + rhs.G), (byte)(lhs.B + rhs.B));
        }

        public bool IsBlack()
        {
            return R == 0 && G == 0 && B == 0;
        }

        public int hexSignature { get { return R16 << 8 + G16 << 4 + B16; } }

        public static ColorRGB Black = new ColorRGB(0, 0, 0);
        public static ColorRGB White = new ColorRGB(255, 255, 255);

        public static ColorRGB[] MakePalette(byte[] table)
        {
            ColorRGB[] tab = new ColorRGB[table.Length / 3];
            int i = 0;
            int j = 0;
            while (i < table.Length)
            {
                byte r = table[i++];
                byte g = table[i++];
                byte b = table[i++];
                ColorRGB c = new ColorRGB(r, g, b);
                tab[j++] = c;
            }
            return tab;
        }

        public List<ColorRGB> GetAdjacentRGColors()
        {
            List<ColorRGB> result = new List<ColorRGB>();

            if (R > 0) result.Add(new ColorRGB((byte)(R - 1), G, B));
            if (R < 255) result.Add(new ColorRGB((byte)(R + 1), G, B));

            if (G > 0) result.Add(new ColorRGB(R, (byte)(G - 1), B));
            if (G < 255) result.Add(new ColorRGB(R, (byte)(G + 1), B));

            return result;
        }

        public ColorRGB Increment(out bool overflow)
        {
            if (R < 255)
            {
                overflow = false;
                return new ColorRGB((byte)(R + 1), G, B);
            }
            else if(G < 255)
            {
                overflow = false;
                return new ColorRGB(0, (byte)(G+1), B);
            }
            else if (B < 255)
            {
                overflow = false;
                return new ColorRGB(0, 0, (byte)(B+1));
            }
            else
            {
                overflow = true;
                return new ColorRGB();
            }
        }

        public int GetOffsetTo(ColorRGB next)
        {
            return (next.R - R) + (next.G - G) * 255 + (next.B - B) * 255 * 255;
        }

        public ColorRGB AddOffset(int offset, out bool overflow)
        {
            byte newR = R;
            byte newG = G;
            byte newB = B;
            if (offset > 255 * 255)
            {
                int addB = offset / (255 * 255);
                offset -= addB * 255 * 255;
                if (newB+addB <= 255)
                {
                    newB = (byte)(newB+addB);
                }
                else
                {
                    overflow = true;
                    return ColorRGB.Black;
                }
            }

            if (offset > 255)
            {
                int addG = offset / 255;
                offset -= addG * 255;
                if (newG + addG <= 255)
                {
                    newG = (byte)(newG + addG);
                }
                else if (newB < 255)
                {
                    newG = (byte)(newG + addG - 255);
                    newB++;
                }
                else
                {
                    overflow = true;
                    return ColorRGB.Black;
                }
            }

            if (newR + offset <= 255)
            {
                newR = (byte)(newR + offset);
            }
            else
            {
                newR = (byte)(newR + offset - 255);
                if (newG < 255)
                {
                    newG++;
                }
                else if(newB < 255)
                {
                    newG = 0;
                    newB++;
                }
                else
                {
                    overflow = true;
                    return ColorRGB.Black;
                }
            }

            overflow = false;
            return new ColorRGB(newR, newG, newB);
        }
    }

    public class GifCubeSlice
    {
        ColorRGB[,] pixels = new ColorRGB[16, 16];

        public GifCubeSlice()
        {
        }

        public GifCubeSlice(byte[] indexedPixels, short width, ColorRGB[] palette)
        {
            short x = 0;
            short y = 0;
            foreach (byte p in indexedPixels)
            {
                if (x < 16)
                {
                    pixels[x, y] = palette[p];
                }

                x++;
                if (x == width)
                {
                    x = 0;
                    y++;
                }
                if (y >= 16)
                {
                    break;
                }
            }
        }

        public ColorRGB this[ColorRGB index]
        {
            get { return pixels[index.R16, index.G16]; }
            set { pixels[index.R16, index.G16] = value; }
        }

        /*
        public int GetRegionShape(ColorRGB sourcePos)
        {
            ColorRGB regionColor = this[sourcePos];
            int MAX_REGION_SIZE = 9;
            HashSet<ColorRGB> seenPositions = new HashSet<ColorRGB>();
            HashSet<ColorRGB> activePositions = new HashSet<ColorRGB>() { sourcePos };
            HashSet<ColorRGB> nextActivePositions = new HashSet<ColorRGB>();
            byte minR = sourcePos.R;
            byte minG = sourcePos.G;
            while (activePositions.Count > 0)
            {
                foreach (ColorRGB testPos in activePositions)
                {
                    seenPositions.Add(testPos);
                    foreach (ColorRGB adjacentPos in testPos.GetAdjacentRGColors())
                    {
                        if(this[adjacentPos].Equals(regionColor) && !seenPositions.Contains(adjacentPos))
                        {
                            if (minR > adjacentPos.R)
                                minR = adjacentPos.R;
                            if (minG > adjacentPos.G)
                                minG = adjacentPos.G;
                            nextActivePositions.Add(adjacentPos);
                        }
                    }
                }
                activePositions = nextActivePositions;
                nextActivePositions = new HashSet<ColorRGB>();
                if (activePositions.Count + seenPositions.Count > MAX_REGION_SIZE)
                {
                    return 0;
                }
            }

            int shape = 0;
            foreach (ColorRGB pos in seenPositions)
            {
                int x = pos.R - minR;
                int y = pos.G - minG;
                int bit;
                switch(x)
                {
                    case 0: bit = 1; break;
                    case 1: bit = 2; break;
                    case 2: bit = 4; break;
                    default: return 0;
                }
                switch (y)
                {
                    case 0: break;
                    case 1: bit *= 8; break;
                    case 2: bit *= 64; break;
                    default: return 0;
                }

                shape |= bit;
                bit *= 2;
            }
            return shape;
        }

        public bool FollowEdge(ColorRGB startPos, ColorDir startFacing, out ColorRGB endPos, out ColorDir endFacing)
        {
            ColorRGB regionColor = this[startPos];
            ColorRGB currentPos = startPos;
            ColorDir currentFacing = startFacing.ClockwiseRG();

            while (true)
            {
                ColorRGB nextPos = currentPos.Step(currentFacing);
                ColorRGB nextColor = this[nextPos];

                if (nextPos.Equals(startPos) && currentFacing == startFacing)
                {
                    // we're back at the start: failed to find anything
                    endPos = startPos;
                    endFacing = startFacing;
                    return false;
                }
                else if (nextColor.Equals(regionColor))
                {
                    // found a position to keep looking from
                    currentPos = nextPos;
                    currentFacing = currentFacing.AnticlockwiseRG();
                }
                else if (nextColor.IsBlack())
                {
                    currentFacing = currentFacing.ClockwiseRG();
                }
                else
                {
                    // found a new adjacent region!
                    endPos = nextPos;
                    endFacing = currentFacing.Negate();
                    return true;
                }
            }
        }*/
    }

    public class GifCube
    {
        GifCubeSlice[] slices = new GifCubeSlice[16];

        public void AddFrame(byte T, GifCubeSlice slice)
        {
            slices[T] = slice;
        }

        /*
        public int GetRegionShape(ColorRGB sourcePos)
        {
            return slices[sourcePos.B].GetRegionShape(sourcePos);
        }*/

        public ColorRGB this[ColorRGB index]
        {
            get
            {
                if (slices[index.B16] != null)
                    return slices[index.B16][index];
                else
                    return ColorRGB.Black;
            }

            set
            {
                if (slices[index.B16] == null)
                    AddFrame(index.B16, new GifCubeSlice());

                slices[index.B16][index] = value;
            }
        }

        public ColorRGB this[byte R, byte G, byte B]
        {
            get
            {
                return this[new ColorRGB(R, G, B)];
            }
            set
            {
                this[new ColorRGB(R, G, B)] = value;
            }
        }

        /*
        public bool FollowEdge(ColorRGB startPos, ColorDir startFacing, out ColorRGB endPos, out ColorDir endFacing)
        {
            return slices[startPos.B].FollowEdge(startPos, startFacing, out endPos, out endFacing);
        }*/
    }

    public interface IGifValue
    {
        IGifValue Copy();
        ColorRGB Read();
        void Write(ColorRGB color, out bool error);
    }

    public class GifCursor: IGifValue
    {
        public ColorRGB position;
        public GifCube cube;

        public GifCursor(ColorRGB position, GifCube cube)
        {
            this.position = position;
            this.cube = cube;
        }

        public IGifValue Copy()
        {
            return new GifCursor(position, cube);
        }

        public virtual ColorRGB Read()
        {
            return cube[position];
        }

        public virtual void Write(ColorRGB color, out bool error)
        {
            error = false;
            cube[position] = color;
        }
    }

    public class GifValue_Readonly: IGifValue
    {
        ColorRGB value;
        public GifValue_Readonly(ColorRGB value)
        {
            this.value = value;
        }

        public IGifValue Copy()
        {
            return new GifValue_Readonly(value);
        }

        public ColorRGB Read()
        {
            return value;
        }

        public void Write(ColorRGB color, out bool error)
        {
            error = true;
        }
    }

    /*
    public class GifValue_Modified : IGifValue
    {
        IGifValue basis;

        public GifValue_Modified(IGifValue basis, ColorRGB[] modifyExamples, out bool overflow)
        {
            this.basis = basis;
            overflow = false;
        }

        public IGifValue Copy()
        {
            return new GifValue_Modified(basis);
        }

        public ColorRGB Read()
        {
            return Modify(basis.Read());
        }

        public void Write(ColorRGB color, out bool error)
        {
            bool error1;
            bool error2;

            basis.Write(InverseModify(color, out error1), out error2);
            error = error1 || error2;
        }

        public ColorRGB Modify(ColorRGB color)
        {
            //TODO: apply the modifier properly
            return ColorRGB.Black;
        }

        public ColorRGB InverseModify(ColorRGB color, out bool error)
        {
            error = false;
            return ColorRGB.White;
        }
    }*/

    class GifStackFrame
    {
        public readonly ColorRGB returnPosition;
        public readonly IGifValue LHSValue;
        public readonly int RHSInstruction;

        public GifStackFrame(ColorRGB returnPosition)
        {
            this.returnPosition = returnPosition;
            this.RHSInstruction = 0;
        }

        public GifStackFrame(IGifValue LHSValue, int RHSInstruction)
        {
            this.LHSValue = LHSValue.Copy();
            this.RHSInstruction = RHSInstruction;
        }
    }

    public class GifScriptState
    {
        GifCube program;
        GifCube registerPositions = new GifCube();
        GifCube[,,] registerTargets = new GifCube[16, 16, 16];
        IGifValue current;
        bool literalMode;
        Stack<GifStackFrame> stack;
        bool halted;

        public void Init(GifCube program)
        {
            this.program = program;
            stack = new Stack<GifStackFrame>();
            //stack = new List<GifStackFrame>() { new GifStackFrame(program, ColorRGB.Black, ColorDir.PlusR) };
            for (int x = 0; x < 16; x++)
            {
                for (int y = 0; y < 16; y++)
                {
                    for (int z = 0; z < 16; z++)
                    {
                        registerTargets[x, y, z] = new GifCube();
                    }
                }
            }

            registerTargets[15, 15, 15] = program;
            registerTargets[0, 0, 15] = registerPositions;
            current = new GifValue_Readonly(ColorRGB.Black);
            halted = false;
            literalMode = false;
        }

        public void Tick()
        {
            if (halted)
                return;

            ColorRGB programPosition = registerPositions[ColorRGB.White];
            ColorRGB instruction = program[programPosition];
            ColorRGB currentColor = current.Read();

            // point to the next instruction
            bool overflow;
            registerPositions[ColorRGB.White] = registerPositions[ColorRGB.White].Increment(out overflow);

            if(overflow)
            {
                halted = true;
                return;
            }

            if (literalMode)
            {
                current = new GifCursor(programPosition, program);
                literalMode = false;
            }
            else
            {
                switch (instruction.hexSignature)
                {
                    case 0x000: // Return
                        DoReturn(currentColor);
                        break;
                    case 0x080: // Assign
                        stack.Push(new GifStackFrame(current, 0x080));
                        break;
                    case 0x0C0: // Call
                        stack.Push(new GifStackFrame(current, 0x0C0));
                        break;

                    case 0xC00: // Load GIF
                        break;
                    case 0xC80: // Save GIF
                        break;
                    case 0xCC0: // Retarget
                        stack.Push(new GifStackFrame(current, 0xCC0));
                        break;

                    case 0x00C: // RegisterPos
                        current = new GifCursor(currentColor, registerPositions);
                        break;
                    case 0x08C: // RegisterVal
                        current = new GifCursor(registerPositions[currentColor], registerTargets[currentColor.R16, currentColor.G16, currentColor.B16]);
                        break;
                    case 0x0CC: // Data
                        current = new GifCursor(currentColor, program);
                        break;

                    case 0xC0C: // Modify
                        bool failed;
                        current = Modify(currentColor,
                            new ColorRGB[] {
                                program[programPosition + new ColorRGB(0, 16, 0)],
                                program[programPosition + new ColorRGB(0, 32, 0)],
                                program[programPosition + new ColorRGB(0, 48, 0)],
                                program[programPosition + new ColorRGB(0, 64, 0)]
                            },
                            out failed
                        );

                        if(failed)
                        {
                            DoReturn(currentColor);
                        }
                        break;
                    case 0xC8C: // Name
                        break;
                    case 0xCCC: // Literal
                        literalMode = true;
                        break;

                    default:
                        current = new GifCursor(programPosition, program);
                        break;
                }
            }
        }

        void DoReturn(ColorRGB returnColor)
        {
            if (stack.Count == 0)
            {
                halted = true;
                return;
            }
            else
            {
                GifStackFrame returnFrame = stack.Pop();
                switch (returnFrame.RHSInstruction)
                {
                    case 0x080: // Assign
                        bool failure;
                        returnFrame.LHSValue.Write(returnColor, out failure);
                        if(failure)
                        {
                            DoReturn(returnColor);
                        }
                        break;
                    case 0x0C0: // Call
                        stack.Push(new GifStackFrame(registerPositions[ColorRGB.White]));
                        registerPositions[ColorRGB.White] = returnFrame.LHSValue.Read();
                        break;
                    case 0xCC0: // Retarget
                        ColorRGB lhsColor = returnFrame.LHSValue.Read();
                        registerTargets[lhsColor.R16, lhsColor.G16, lhsColor.B16] = registerTargets[returnColor.R16, returnColor.G16, returnColor.B16];
                        break;
                    default:
                        registerPositions[ColorRGB.White] = returnFrame.returnPosition;
                        break;
                }
            }
        }

        /*
        GifStackFrame stackCurrent = stack.Last();
        ColorRGB regionColor = stackCurrent.program[stackCurrent.position];
        int shape = stackCurrent.program.GetRegionShape(stackCurrent.position);
        switch( shape )
        {
            // identify target colour and region shape, and execute the corresponding instruction
            case 1: // copy pixel
                CopyPixel(regionColor.ToCategory());
                break;
            case (1 + 2 + 4) + (8) + (64): // for each pixel
                ForEachPixel(regionColor.ToCategory());
                break;
            case (1 + 2 + 4) + (8 + 16 + 32) + (64 + 128 + 256): // for each pixel
                ForEachPixel(regionColor.ToCategory());
                break;
        }

        stackCurrent.NextCommand();
    */

        /*public void CopyPixel(ColorCategory category)
        {
            switch(category)
            {
                case ColorCategory.Red: output.Write(input.Read()); break;
                case ColorCategory.Green:
                    {
                        GifStackFrame newStack = stack.Last().GetFrameForNextCommand();
                        output.Write(newStack.cursor.Read());
                        break;
                    }
            }
        }

        public void ForEachPixel(ColorCategory category)
        {
            switch (category)
            {
                case ColorCategory.Red: ForEachPixel(ref input); break;
                case ColorCategory.Blue: ForEachPixel(ref output); break;
            }
        }

        public void ForEachPixel(ref GifCursor cursor)
        {
            GifStackFrame newStack = stack.Last().GetFrameForNextCommand();
            for (int x = 0; x < 256; ++x)
            {
                for (int y = 0; y < 256; ++y)
                {
                    cursor.position = new ColorRGB((byte)x, (byte)y, cursor.position.B);
                    stack.Add(newStack);
                    Tick();
                }
            }
        }*/

        IGifValue Modify(ColorRGB value, ColorRGB[] modifyExamples, out bool error)
        {
            //Given a sequence of example values, extrapolate the rule that's generating the sequence, and apply it to our value.

            // first step: if value is one of the examples, return the next example.
            for(int Idx = 0; Idx < modifyExamples.Length-1; ++Idx)
            {
                if (modifyExamples[Idx].Equals(value))
                {
                    error = false;
                    return new GifValue_Readonly(modifyExamples[Idx + 1]);
                }
            }

            int offset = modifyExamples[0].GetOffsetTo(modifyExamples[1]);
            bool additiveWorks = true;
            for (int Idx = 2; Idx < modifyExamples.Length; ++Idx)
            {
                if(modifyExamples[Idx-1].GetOffsetTo(modifyExamples[Idx]) != offset)
                {
                    additiveWorks = false;
                    break;
                }
            }
            if(additiveWorks)
            {
                return new GifValue_Readonly(value.AddOffset(offset, out error));
            }

            error = false;
            return new GifValue_Readonly(ColorRGB.Black);
        }
    }
}
