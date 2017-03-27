using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GifScript
{
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

        //public ColorRGB(Color col): this(col.R, col.G, col.B)
        //{
        //}

        public static ColorRGB operator +(ColorRGB lhs, ColorRGB rhs)
        {
            return new ColorRGB((byte)(lhs.R + rhs.R), (byte)(lhs.G + rhs.G), (byte)(lhs.B + rhs.B));
        }

        public static bool operator ==(ColorRGB lhs, ColorRGB rhs)
        {
            return lhs.R == rhs.R && lhs.G == rhs.G && lhs.B == rhs.B;
        }
        public static bool operator !=(ColorRGB lhs, ColorRGB rhs)
        {
            return lhs.R != rhs.R || lhs.G != rhs.G || lhs.B != rhs.B;
        }

        public bool Equals(ColorRGB other)
        {
            return this == other;
        }

        //public override int GetHashCode()
        //{
        //    return (R << 16) + (G << 8) + B;
        //}

        public bool IsBlack()
        {
            return R == 0 && G == 0 && B == 0;
        }

        public int hexSignature { get { return (R16 << 8) + (G16 << 4) + B16; } }

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
            if (R16 < 15)
            {
                overflow = false;
                return new ColorRGB((byte)(0x11 * (R16 + 1)), G, B);
            }
            else if (G16 < 15)
            {
                overflow = false;
                return new ColorRGB(0, (byte)(0x11 * (G16 + 1)), B);
            }
            else if (B16 < 15)
            {
                overflow = false;
                return new ColorRGB(0, 0, (byte)(0x11 * (B16 + 1)));
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
                if (newB + addB <= 255)
                {
                    newB = (byte)(newB + addB);
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
                else if (newB < 255)
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

        public GifCubeSlice(byte[][] image)
        {
            for(int x = 0; x < 16; ++x)
            {
                for(int y = 0; y < 16; ++y)
                {
                    var item = image[x + y * 16];
                    pixels[x, y] = new ColorRGB(item[0], item[1], item[2]);
                }
            }
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

        public ColorRGB this[int X, int Y]
        {
            get { return pixels[X, Y]; }
            set { pixels[X, Y] = value; }
        }
    }

    public class GifCube
    {
        GifCubeSlice[] slices = new GifCubeSlice[16];

        public GifCube()
        {
        }

        public GifCube(byte[][][] decoder)
        {
            for(byte frameIdx = 0; frameIdx < decoder.Length && frameIdx < 16; ++frameIdx)
            {
                AddFrame(frameIdx, new GifCubeSlice(decoder[frameIdx]));
            }
        }

        public void AddFrame(byte T, GifCubeSlice slice)
        {
            slices[T] = slice;
        }

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

        //public ColorRGB this[int R, int G, int B]
        //{
        //    get
        //    {
        //        if (slices[B] != null)
        //            return slices[B][R, G];
        //        else
        //            return ColorRGB.Black;
        //    }
        //}

        //public void Save(string filename)
        //{
        //    AnimatedGifEncoder e = new AnimatedGifEncoder();
        //    e.Start(filename);
        //    e.SetDelay(200);
        //    //-1:no repeat,0:always repeat
        //    e.SetRepeat(0);

        //    int lastFrame = 15;
        //    // find the last interesting frame
        //    while (lastFrame > 0)
        //    {
        //        GifCubeSlice slice = slices[lastFrame];
        //        if (slice != null)
        //        {
        //            break;
        //        }
        //        lastFrame--;
        //    }

        //    for (int frame = 0; frame <= lastFrame; frame++)
        //    {
        //        GifCubeSlice slice = slices[frame];

        //        Bitmap bmp = new Bitmap(16, 16, PixelFormat.Format8bppIndexed);
        //        ColorPalette colorPalette = bmp.Palette;
        //        Rectangle rect = new Rectangle(0, 0, bmp.Width, bmp.Height);
        //        BitmapData bmpData = bmp.LockBits(rect, ImageLockMode.ReadWrite, bmp.PixelFormat);

        //        // Declare an array to hold the bytes of the bitmap.
        //        int numBytes = Math.Abs(bmpData.Stride) * bmp.Height;
        //        byte[] rgbValues = new byte[numBytes];
        //        byte Idx = 0;
        //        for (int Y = 0; Y < 16; Y++)
        //        {
        //            for (int X = 0; X < 16; X++)
        //            {
        //                ColorRGB col;
        //                if (slice != null)
        //                    col = slices[frame][X, Y];
        //                else
        //                    col = ColorRGB.Black;

        //                colorPalette.Entries[Idx] = Color.FromArgb(col.R, col.G, col.B);
        //                rgbValues[Idx] = Idx;
        //                Idx++;
        //            }
        //        }

        //        // Copy the RGB values back to the bitmap
        //        System.Runtime.InteropServices.Marshal.Copy(rgbValues, 0, bmpData.Scan0, numBytes);

        //        // Unlock the bits.
        //        bmp.UnlockBits(bmpData);

        //        bmp.Palette = colorPalette;
        //        e.AddFrame(bmp);// Image.FromFile(imageFilePaths[i]));
        //    }
        //    e.Finish();


        //    //@"C:\Users\Laurie\Pictures\fillpinkOUT.gif"
        //    //bmp.Save(filename, ImageFormat.Gif);
        //}
    }

    public interface IGifValue
    {
        IGifValue Copy();
        ColorRGB Read();
        void Write(ColorRGB color, out bool error);
    }

    public class GifCursor : IGifValue
    {
        public ColorRGB register;
        public ColorRGB position;
        public GifCube cube;

        public GifCursor(ColorRGB register, ColorRGB position, GifCube cube)
        {
            this.register = register;
            this.position = position;
            this.cube = cube;
        }

        public IGifValue Copy()
        {
            return new GifCursor(register, position, cube);
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

    public class GifValue_Readonly : IGifValue
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

    public class GifStackFrame
    {
        public readonly IGifValue LHSValue;
        public readonly int RHSInstruction;
        public readonly ColorRGB runningRegister;

        public GifStackFrame(ColorRGB runningRegister)
        {
            this.runningRegister = runningRegister;
            this.RHSInstruction = 0;
        }

        public GifStackFrame(IGifValue LHSValue, int RHSInstruction, ColorRGB runningRegister)
        {
            this.LHSValue = LHSValue.Copy();
            this.RHSInstruction = RHSInstruction;
            this.runningRegister = runningRegister;
        }
    }

    public class GifScriptState
    {
        public ColorRGB runningRegister { get; private set; }
        public readonly GifCube registerPositions = new GifCube();
        GifCube[,,] registerTargets = new GifCube[16, 16, 16];
        public IGifValue current { get; private set; }
        public Stack<GifStackFrame> stack { get; private set; }
        public bool halted { get; private set; }

        public void Init(GifCube program)
        {
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

            runningRegister = ColorRGB.White;
            registerTargets[runningRegister.R16, runningRegister.G16, runningRegister.B16] = program;
            registerTargets[8, 8, 8] = registerPositions;
            current = new GifValue_Readonly(ColorRGB.Black);
            halted = false;
        }

        public GifCube GetRegisterTarget(ColorRGB register)
        {
            return registerTargets[register.R16, register.G16, register.B16];
        }

        public ColorRGB GetRegisterPosition(ColorRGB register)
        {
            return registerPositions[register];
        }

        public void Tick()
        {
            if (halted)
                return;

            ColorRGB programPosition = registerPositions[runningRegister];
            GifCube program = GetRegisterTarget(runningRegister);
            ColorRGB instruction = program[programPosition];
            ColorRGB currentColor = current.Read();

            // point to the next instruction
            bool overflow;
            registerPositions[runningRegister] = registerPositions[runningRegister].Increment(out overflow);

            if (overflow)
            {
                halted = true;
                return;
            }

            switch (instruction.hexSignature)
            {
                case 0x000: // Return
                    DoReturn(current);
                    break;
                case 0xCCC: // Assign
                    stack.Push(new GifStackFrame(current, 0xCCC, runningRegister));
                    break;
                case 0xC8C: // Call
                    stack.Push(new GifStackFrame(current, 0xC8C, runningRegister));
                    break;

                case 0xC04: // Load GIF
                    break;
                case 0xC84: // Save GIF
                    //registerTargets[currentColor.R16, currentColor.G16, currentColor.B16].Save(GetRegisterName(currentColor) + ".gif");
                    break;
                case 0xCC4: // Retarget
                    stack.Push(new GifStackFrame(current, 0xCC4, runningRegister));
                    break;

                case 0x00C: // RegisterPos
                    current = new GifCursor(currentColor, currentColor, registerPositions);
                    break;
                case 0x08C: // RegisterVal
                    current = new GifCursor(currentColor, registerPositions[currentColor], registerTargets[currentColor.R16, currentColor.G16, currentColor.B16]);
                    break;
                case 0x0CC: // Data
                    current = new GifCursor(ColorRGB.White, currentColor, registerTargets[15,15,15]);
                    break;

                case 0xC0C: // Modify
                    bool failed;
                    registerPositions[runningRegister] = registerPositions[runningRegister] + new ColorRGB(48, 0, 0);
                    current = Modify(currentColor,
                        new ColorRGB[] {
                            program[programPosition + new ColorRGB(16, 0, 0)],
                            program[programPosition + new ColorRGB(32, 0, 0)],
                            program[programPosition + new ColorRGB(48, 0, 0)]
                        },
                        out failed
                    );

                    if (failed)
                    {
                        DoReturn(current);
                    }
                    break;

                default:
                    current = new GifCursor(runningRegister, programPosition, program);
                    break;
            }
        }

        string GetRegisterName(ColorRGB registerId)
        {
            return "" + GetHexChar(registerId.R16) + GetHexChar(registerId.R16) + GetHexChar(registerId.G16) + GetHexChar(registerId.G16) + GetHexChar(registerId.B16) + GetHexChar(registerId.B16);
        }

        char GetHexChar(byte C16)
        {
            return "0123456789abcdef"[C16];
        }

        void DoReturn(IGifValue returnValue)
        {
            if (stack.Count == 0)
            {
                halted = true;
                return;
            }
            else
            {
                GifStackFrame returnFrame = stack.Pop();
                runningRegister = returnFrame.runningRegister;

                switch (returnFrame.RHSInstruction)
                {
                    case 0xCCC: // Assign
                        bool failure;
                        returnValue.Write(returnFrame.LHSValue.Read(), out failure);
                        if (failure)
                        {
                            DoReturn(returnValue);
                        }
                        break;
                    case 0xC8C: // Call
                        stack.Push(new GifStackFrame(returnFrame.runningRegister));
                        current = returnFrame.LHSValue;
                        runningRegister = returnValue.Read();
                        break;
                    case 0xCC4: // Retarget
                        ColorRGB lhsColor = returnFrame.LHSValue.Read();
                        ColorRGB rhsColor = returnValue.Read();
                        registerTargets[rhsColor.R16, rhsColor.G16, rhsColor.B16] = registerTargets[lhsColor.R16, lhsColor.G16, lhsColor.B16];
                        break;
                    default:
                        break;
                }
            }
        }

        enum ModifyRule
        {
            Unknown,
            CopyR,
            CopyG,
            CopyB,
            SetConstant,
            Invert,
            Add,
            OverflowR,
            OverflowG,
            OverflowB,
            Wrap255Add,
            Wrap255OverflowR,
            Wrap255OverflowG,
            Wrap255OverflowB,
            Wrap272Add,
            Wrap272OverflowR,
            Wrap272OverflowG,
            Wrap272OverflowB
        };

        IGifValue Modify(ColorRGB value, ColorRGB[] modifyExamples, out bool error)
        {
            //Given a sequence of example values, extrapolate the rule that's generating the sequence, and apply it to our value.

            // first step: if value is one of the examples, don't bother. We know exactly what to return.
            for (int Idx = 0; Idx < modifyExamples.Length - 1; ++Idx)
            {
                if (modifyExamples[Idx].Equals(value))
                {
                    error = false;
                    return new GifValue_Readonly(modifyExamples[Idx + 1]);
                }
            }

            ModifyRule[] rules = new ModifyRule[3];
            int[] parameters = new int[3];
            byte[][] examples = new byte[][] {
                new byte[] { modifyExamples[0].R, modifyExamples[1].R, modifyExamples[2].R },
                new byte[] { modifyExamples[0].G, modifyExamples[1].G, modifyExamples[2].G },
                new byte[] { modifyExamples[0].B, modifyExamples[1].B, modifyExamples[2].B },
            };
            rules[0] = DeduceModifyRule(examples, 0, ref parameters[0]);
            rules[1] = DeduceModifyRule(examples, 1, ref parameters[1]);
            rules[2] = DeduceModifyRule(examples, 2, ref parameters[2]);

            //if we have at least one Unknown rule and at least one Wrap255Add or Wrap272Add, try inserting some Overflow rules.
            if (rules[1] == ModifyRule.Unknown)
            {
                //NB try to resolve the green channel first; the others are allowed to chain their Overflows off it, but not vice versa
                rules[1] = TryOverflowRule(rules, parameters, examples, 1);
            }

            if (rules[0] == ModifyRule.Unknown)
            {
                rules[0] = TryOverflowRule(rules, parameters, examples, 0);
            }

            if (rules[2] == ModifyRule.Unknown)
            {
                rules[2] = TryOverflowRule(rules, parameters, examples, 2);
            }

            bool errorR, errorG, errorB;
            byte[] input = new byte[] { value.R, value.G, value.B };
            byte R = ApplyRule(input, rules, parameters, 0, out errorR);
            byte G = ApplyRule(input, rules, parameters, 1, out errorG);
            byte B = ApplyRule(input, rules, parameters, 2, out errorB);

            error = errorR || errorG || errorB;
            return new GifValue_Readonly(new ColorRGB(R, G, B));
        }

        ModifyRule DeduceModifyRule(byte[][] examples, int channel, ref int parameter)
        {
            byte[] channelExamples = examples[channel];

            if (channelExamples[0] == channelExamples[1] && channelExamples[0] == channelExamples[2])
            {
                return ModifyRule.CopyR + channel;
            }

            if (channelExamples[1] == examples[0][0] && channelExamples[2] == examples[0][1])
                return ModifyRule.CopyR;

            if (channelExamples[1] == examples[1][0] && channelExamples[2] == examples[1][1])
                return ModifyRule.CopyG;

            if (channelExamples[1] == examples[2][0] && channelExamples[2] == examples[2][1])
                return ModifyRule.CopyB;

            if (channelExamples[1] == channelExamples[2])
            {
                parameter = channelExamples[1];
                return ModifyRule.SetConstant;
            }

            if (channelExamples[1] == 255 - channelExamples[0] && channelExamples[2] == 255 - channelExamples[1])
            {
                return ModifyRule.Invert;
            }

            if (channelExamples[1] - channelExamples[0] == channelExamples[2] - channelExamples[1])
            {
                parameter = channelExamples[1] - channelExamples[0];
                return ModifyRule.Add;
            }

            if ((channelExamples[1] + 256 - channelExamples[0]) % 256 == (channelExamples[2] + 256 - channelExamples[1]) % 256)
            {
                parameter = (channelExamples[1] + 256 - channelExamples[0]) % 256;
                if (parameter > 127)
                    parameter -= 256;
                else if (parameter < -128)
                    parameter += 256;
                return ModifyRule.Wrap255Add;
            }

            // a bit weird, but we also support a wrap ceiling of 272 - because we want 0xEE, 0xFF, 0x00 to be a valid wrapping sequence.
            if ((channelExamples[1] + 272 - channelExamples[0]) % 272 == (channelExamples[2] + 272 - channelExamples[1]) % 272)
            {
                parameter = (channelExamples[1] + 272 - channelExamples[0]) % 272;
                if (parameter > 127)
                    parameter -= 256;
                else if (parameter < -128)
                    parameter += 256;
                return ModifyRule.Wrap272Add;
            }

            return ModifyRule.Unknown;
        }

        byte ApplyRule(byte[] input, ModifyRule[] rules, int[] parameters, int channel, out bool error)
        {
            error = false;

            switch (rules[channel])
            {
                case ModifyRule.CopyR:
                    return input[0];
                case ModifyRule.CopyG:
                    return input[1];
                case ModifyRule.CopyB:
                    return input[2];
                case ModifyRule.SetConstant:
                    return (byte)parameters[channel];
                case ModifyRule.Invert:
                    return (byte)(255 - input[channel]);
                case ModifyRule.Add:
                    {
                        int result = input[channel] + parameters[channel];
                        if (result < 0 || result > 255)
                        {
                            error = true;
                        }
                        return (byte)result;
                    }
                case ModifyRule.Wrap255Add:
                    {
                        int result = input[channel] + parameters[channel];
                        return (byte)result;
                    }
                case ModifyRule.Wrap272Add:
                    {
                        int result = input[channel] + parameters[channel];
                        return (byte)(result % 272);
                    }
                case ModifyRule.OverflowR:
                case ModifyRule.OverflowG:
                case ModifyRule.OverflowB:
                    {
                        if (CheckOverflow(rules[channel] - ModifyRule.OverflowR, input, rules, parameters))
                        {
                            int result = input[channel] + parameters[channel];
                            if (result < 0 || result > 255)
                            {
                                error = true;
                            }
                            return (byte)result;
                        }
                        else
                        {
                            return input[channel];
                        }
                    }
                case ModifyRule.Wrap255OverflowR:
                case ModifyRule.Wrap255OverflowG:
                case ModifyRule.Wrap255OverflowB:
                    {
                        if (CheckOverflow(rules[channel] - ModifyRule.Wrap255OverflowR, input, rules, parameters))
                        {
                            int result = input[channel] + parameters[channel];
                            return (byte)result;
                        }
                        else
                        {
                            return input[channel];
                        }
                    }
                case ModifyRule.Wrap272OverflowR:
                case ModifyRule.Wrap272OverflowG:
                case ModifyRule.Wrap272OverflowB:
                    {
                        if (CheckOverflow(rules[channel] - ModifyRule.Wrap272OverflowR, input, rules, parameters))
                        {
                            int result = input[channel] + parameters[channel];
                            return (byte)(result % 272);
                        }
                        else
                        {
                            return input[channel];
                        }
                    }
                default:
                    error = true;
                    return 0;
            }
        }

        int[] overflowTryOrder = new int[] { 1, 0, 2 };

        ModifyRule TryOverflowRule(ModifyRule[] rulesSoFar, int[] parameters, byte[][] examples, int channel)
        {
            byte[] channelExamples = examples[channel];
            byte[] example0 = new byte[] { examples[0][0], examples[1][0], examples[2][0] };
            byte[] example1 = new byte[] { examples[0][1], examples[1][1], examples[2][1] };

            for (int tryOrderIdx = 0; tryOrderIdx < 3; tryOrderIdx++)
            {
                int tryChannel = overflowTryOrder[tryOrderIdx];
                if (rulesSoFar[tryChannel] >= ModifyRule.Wrap255Add)
                {
                    bool overflow0 = CheckOverflow(tryChannel, example0, rulesSoFar, parameters);
                    bool overflow1 = CheckOverflow(tryChannel, example1, rulesSoFar, parameters);

                    // for an overflow rule to fit, this channel must change when and only when the target overflows
                    if (overflow0 != (channelExamples[0] != channelExamples[1]))
                        break;
                    if (overflow1 != (channelExamples[1] != channelExamples[2]))
                        break;
                    // and the overflow must happen exactly once
                    if (overflow0 == overflow1)
                        break;

                    byte channelExampleA;
                    byte channelExampleB;
                    if (overflow0)
                    {
                        channelExampleA = channelExamples[0];
                        channelExampleB = channelExamples[1];
                    }
                    else // therefore overflow1
                    {
                        channelExampleA = channelExamples[1];
                        channelExampleB = channelExamples[2];
                    }

                    int parameter;
                    if (rulesSoFar[tryChannel] >= ModifyRule.Wrap272Add)
                        parameter = (channelExampleB + 272 - channelExampleA) % 272;
                    else
                        parameter = (channelExampleB + 256 - channelExampleA) % 256;

                    if (parameter > 127)
                        parameter -= 256;
                    else if (parameter < -128)
                        parameter += 256;

                    parameters[channel] = parameter;
                    if (channelExampleA + parameter != channelExampleB)
                    {
                        // the overflow rule itself overflowed!
                        if (rulesSoFar[tryChannel] >= ModifyRule.Wrap272Add)
                        {
                            return ModifyRule.Wrap272OverflowR + tryChannel;
                        }
                        else
                        {
                            return ModifyRule.Wrap255OverflowR + tryChannel;
                        }
                    }
                    else
                    {
                        return ModifyRule.OverflowR + tryChannel;
                    }
                }
            }

            return ModifyRule.Unknown;
        }

        bool CheckOverflow(int channel, byte[] RGB, ModifyRule[] rules, int[] parameters)
        {
            int newValue = RGB[channel] + parameters[channel];
            switch (rules[channel])
            {
                case ModifyRule.Wrap255Add:
                case ModifyRule.Wrap272Add:
                    return newValue < 0 || newValue > 255;

                case ModifyRule.Wrap255OverflowR:
                case ModifyRule.Wrap272OverflowR:
                    if (CheckOverflow(0, RGB, rules, parameters))
                        return newValue < 0 || newValue > 255;
                    else
                        return false;

                case ModifyRule.Wrap255OverflowG:
                case ModifyRule.Wrap272OverflowG:
                    if (CheckOverflow(1, RGB, rules, parameters))
                        return newValue < 0 || newValue > 255;
                    else
                        return false;

                case ModifyRule.Wrap255OverflowB:
                case ModifyRule.Wrap272OverflowB:
                    if (CheckOverflow(2, RGB, rules, parameters))
                        return newValue < 0 || newValue > 255;
                    else
                        return false;

                default:
                    return false;
            }
        }
    }
}
