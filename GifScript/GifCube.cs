using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
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

        public static ColorRGB operator +(ColorRGB lhs, ColorRGB rhs)
        {
            return new ColorRGB((byte)(lhs.R + rhs.R), (byte)(lhs.G + rhs.G), (byte)(lhs.B + rhs.B));
        }

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
    }

    public class GifCube
    {
        GifCubeSlice[] slices = new GifCubeSlice[16];

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

        public void Save(string filename)
        {
            Bitmap bmp = new Bitmap(256, 256, PixelFormat.Format24bppRgb);
            Rectangle rect = new Rectangle(0, 0, bmp.Width, bmp.Height);
            BitmapData bmpData = bmp.LockBits(rect, ImageLockMode.ReadWrite, bmp.PixelFormat);

            // Declare an array to hold the bytes of the bitmap.
            int numBytes = Math.Abs(bmpData.Stride) * bmp.Height;
            byte[] rgbValues = new byte[numBytes];
            int Idx = 0;
            for (int Y = 0; Y < 256; Y++)
            {
                for (int X = 0; X < 256; X++)
                {
                    ColorRGB col = this[new ColorRGB((byte)X, (byte)Y, 0)];
                    rgbValues[Idx++] = col.B;
                    rgbValues[Idx++] = col.G;
                    rgbValues[Idx++] = col.R;
                }
            }

            // Copy the RGB values back to the bitmap
            System.Runtime.InteropServices.Marshal.Copy(rgbValues, 0, bmpData.Scan0, numBytes);

            // Unlock the bits.
            bmp.UnlockBits(bmpData);

            //@"C:\Users\Laurie\Pictures\fillpinkOUT.gif"
            bmp.Save(filename, ImageFormat.Gif);
        }
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

    class GifStackFrame
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
        GifCube program;
        ColorRGB runningRegister;
        GifCube registerPositions = new GifCube();
        GifCube[,,] registerTargets = new GifCube[16, 16, 16];
        string[,,] registerNames = new string[16, 16, 16];
        IGifValue current;
        bool literalMode;
        Stack<GifStackFrame> stack;
        public bool halted { get; private set; }

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

            runningRegister = ColorRGB.White;
            registerTargets[runningRegister.R16, runningRegister.G16, runningRegister.B16] = program;
            registerTargets[8, 8, 8] = registerPositions;
            current = new GifValue_Readonly(ColorRGB.Black);
            halted = false;
            literalMode = false;
        }

        public void Tick()
        {
            if (halted)
                return;

            ColorRGB programPosition = registerPositions[runningRegister];
            ColorRGB instruction = registerTargets[runningRegister.R16, runningRegister.G16, runningRegister.B16][programPosition];
            ColorRGB currentColor = current.Read();

            // point to the next instruction
            bool overflow;
            registerPositions[runningRegister] = registerPositions[runningRegister].AddOffset(16, out overflow);

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
                        DoReturn(current);
                        break;
                    case 0x080: // Assign
                        stack.Push(new GifStackFrame(current, 0x080, runningRegister));
                        break;
                    case 0x0C0: // Call
                        stack.Push(new GifStackFrame(current, 0x0C0, runningRegister));
                        break;

                    case 0xC00: // Load GIF
                        break;
                    case 0xC80: // Save GIF
                        registerTargets[currentColor.R16, currentColor.G16, currentColor.B16].Save(GetRegisterName(currentColor)+".gif");
                        break;
                    case 0xCC0: // Retarget
                        stack.Push(new GifStackFrame(current, 0xCC0, runningRegister));
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
                        registerPositions[runningRegister] = registerPositions[runningRegister] + new ColorRGB(48, 0, 0);
                        current = Modify(currentColor,
                            new ColorRGB[] {
                                program[programPosition + new ColorRGB(16, 0, 0)],
                                program[programPosition + new ColorRGB(32, 0, 0)],
                                program[programPosition + new ColorRGB(48, 0, 0)]
                            },
                            out failed
                        );

                        if(failed)
                        {
                            DoReturn(current);
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

        string GetRegisterName(ColorRGB registerId)
        {
            string name = registerNames[registerId.R16, registerId.G16, registerId.B16];
            if (name != null)
                return name;

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
                    case 0x080: // Assign
                        bool failure;
                        returnValue.Write(returnFrame.LHSValue.Read(), out failure);
                        if(failure)
                        {
                            DoReturn(returnValue);
                        }
                        break;
                    case 0x0C0: // Call
                        stack.Push(new GifStackFrame(returnFrame.runningRegister));
                        runningRegister = returnValue.Read();
                        break;
                    case 0xCC0: // Retarget
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
            Add,
            WrapAdd,
            OverflowR,
            OverflowG,
            OverflowB
        };

        IGifValue Modify(ColorRGB value, ColorRGB[] modifyExamples, out bool error)
        {
            //Given a sequence of example values, extrapolate the rule that's generating the sequence, and apply it to our value.

            // first step: if value is one of the examples, don't bother. We know exactly what to return.
            for(int Idx = 0; Idx < modifyExamples.Length-1; ++Idx)
            {
                if (modifyExamples[Idx].Equals(value))
                {
                    error = false;
                    return new GifValue_Readonly(modifyExamples[Idx + 1]);
                }
            }

            ModifyRule[] rules = new ModifyRule[3];
            int[] parameters = new int[3];
            rules[0] = DeduceModifyRule(new byte[] { modifyExamples[0].R, modifyExamples[1].R, modifyExamples[2].R }, modifyExamples, ModifyRule.CopyR, ref parameters[0]);
            rules[1] = DeduceModifyRule(new byte[] { modifyExamples[0].G, modifyExamples[1].G, modifyExamples[2].G }, modifyExamples, ModifyRule.CopyG, ref parameters[1]);
            rules[2] = DeduceModifyRule(new byte[] { modifyExamples[0].B, modifyExamples[1].B, modifyExamples[2].B }, modifyExamples, ModifyRule.CopyB, ref parameters[2]);

            //TODO: if we have at least one ModifyRule.Unknown and at least one ModifyRule.WrapAdd, try inserting some Overflow rules.

            bool errorR, errorG, errorB;
            byte R = ApplyRule(value.R, value, rules[0], parameters[0], out errorR);
            byte G = ApplyRule(value.G, value, rules[1], parameters[1], out errorG);
            byte B = ApplyRule(value.B, value, rules[2], parameters[2], out errorB);

            error = errorR || errorG || errorB;
            return new GifValue_Readonly(new ColorRGB(R, G, B));
        }

        ModifyRule DeduceModifyRule(byte[] examples, ColorRGB[] allChannels, ModifyRule unchangedRule, ref int parameter)
        {
            if (examples[0] == examples[1] && examples[0] == examples[2])
                return unchangedRule;

            if (examples[1] == allChannels[0].R && examples[2] == allChannels[1].R)
                return ModifyRule.CopyR;

            if (examples[1] == allChannels[0].G && examples[2] == allChannels[1].G)
                return ModifyRule.CopyG;

            if (examples[1] == allChannels[0].B && examples[2] == allChannels[1].B)
                return ModifyRule.CopyB;

            if (examples[1] == examples[2])
            {
                parameter = examples[1];
                return ModifyRule.SetConstant;
            }

            if (examples[1]-examples[0] == examples[2]-examples[1])
            {
                parameter = examples[1]-examples[0];
                return ModifyRule.Add;
            }

            if ((examples[1]+256 - examples[0])%256 == (examples[2]+256 - examples[1])%256)
            {
                parameter = (examples[1]+256 - examples[0])%256;
                if (parameter > 127)
                    parameter -= 256;
                return ModifyRule.WrapAdd;
            }

            return ModifyRule.Unknown;
        }

        byte ApplyRule(byte channel, ColorRGB input, ModifyRule rule, int parameter, out bool error)
        {
            error = false;

            switch (rule)
            {
                case ModifyRule.CopyR:
                    return input.R;
                case ModifyRule.CopyG:
                    return input.G;
                case ModifyRule.CopyB:
                    return input.B;
                case ModifyRule.SetConstant:
                    return (byte)parameter;
                case ModifyRule.Add:
                    {
                        int result = channel + parameter;
                        if (result < 0 || result > 255)
                        {
                            error = true;
                        }
                        return (byte)result;
                    }
                case ModifyRule.WrapAdd:
                    {
                        int result = channel + parameter;
                        return (byte)result;
                    }
                default:
                    error = true;
                    return 0;
            }
        }
    }
}
