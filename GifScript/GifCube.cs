using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GifScript
{
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
    }

    public struct ColorRGB
    {
        public byte R;
        public byte G;
        public byte B;

        public ColorRGB(byte r, byte g, byte b)
        {
            R = r;
            G = g;
            B = b;
        }

        public bool IsBlack()
        {
            return R == 0 && G == 0 && B == 0;
        }

        public ColorCategory ToCategory()
        {
            if (R == 0 && G == 0 && B == 0)
                return ColorCategory.Black;
            if (R == 255 && G == 255 && B == 255)
                return ColorCategory.White;
            if (R > G && R > B)
                return ColorCategory.Red;
            if (G > R && G > B)
                return ColorCategory.Green;
            if (B > R && B > G)
                return ColorCategory.Blue;
            if (R == G && R > B)
                return ColorCategory.Yellow;
            if (G == B && G > R)
                return ColorCategory.Cyan;
            if (B == R && B > G)
                return ColorCategory.Magenta;
            return ColorCategory.Grey;
        }

        /*        public override bool Equals(object obj)
                {
                    if (obj is ColorRGB)
                        return this == (ColorRGB)obj;
                    else
                        return false;
                }

                public static bool operator==(ColorRGB a, ColorRGB b)
                {
                    return a.R == b.R && a.G == b.G && a.B == b.B;
                }

                public static bool operator !=(ColorRGB a, ColorRGB b)
                {
                    return a.R != b.R || a.G != b.G || a.B != b.B;
                }*/

        public static ColorRGB Black = new ColorRGB(0,0,0);

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
    }

    public class GifCubeSlice
    {
        ColorRGB[,] pixels = new ColorRGB[256,256];

        public GifCubeSlice()
        {
        }

        public GifCubeSlice(byte[] indexedPixels, short width, ColorRGB[] palette)
        {
            short x = 0;
            short y = 0;
            foreach (byte p in indexedPixels)
            {
                if (x < 256)
                {
                    pixels[x, y] = palette[p];
                }

                x++;
                if (x == width)
                {
                    x = 0;
                    y++;
                }
                if (y >= 256)
                {
                    break;
                }
            }
        }

        public ColorRGB this[ColorRGB index]
        {
            get { return pixels[index.R, index.G]; }
            set { pixels[index.R, index.G] = value; }
        }

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
        }
    }

    public class GifCube
    {
        GifCubeSlice[] slices = new GifCubeSlice[256];

        public void AddFrame(byte T, GifCubeSlice slice)
        {
            slices[T] = slice;
        }

        public int GetRegionShape(ColorRGB sourcePos)
        {
            return slices[sourcePos.B].GetRegionShape(sourcePos);
        }

        public ColorRGB this[ColorRGB index]
        {
            get
            {
                if (slices[index.B] != null)
                    return slices[index.B][index];
                else
                    return ColorRGB.Black;
            }

            set
            {
                if (slices[index.B] == null)
                    AddFrame(index.B, new GifCubeSlice());

                slices[index.B][index] = value;
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

        public bool FollowEdge(ColorRGB startPos, ColorDir startFacing, out ColorRGB endPos, out ColorDir endFacing)
        {
            return slices[startPos.B].FollowEdge(startPos, startFacing, out endPos, out endFacing);
        }
    }

    public struct GifCursor
    {
        public ColorRGB position;
        public GifCube cube;

        public GifCursor(ColorRGB position, GifCube cube)
        {
            this.position = position;
            this.cube = cube;
        }

        public ColorRGB Read()
        {
            return cube[position];
        }

        public void Write(ColorRGB color)
        {
            cube[position] = color;
        }
    }

    struct GifStackFrame
    {
        public GifCursor cursor;
        public ColorRGB position
        {
            get { return cursor.position; }
        }
        public ColorDir facing;
        public GifCube program
        {
            get { return cursor.cube; }
        }

        public GifStackFrame(GifCube program, ColorRGB position, ColorDir facing)
        {
            cursor.cube = program;
            cursor.position = position;
            this.facing = facing;
        }

        public GifStackFrame GetFrameForNextCommand()
        {
            GifStackFrame result = new GifStackFrame(program, position, facing);
            result.NextCommand();
            return result;
        }

        public void NextCommand()
        {
            ColorRGB newPosition;
            ColorDir newFacing;
            if (program.FollowEdge(position, facing, out newPosition, out newFacing))
            {
                cursor.position = newPosition;
                facing = newFacing;
            }
        }
    }

    public class GifScriptState
    {
        GifCursor input;
        GifCursor output;
        List<GifStackFrame> stack;

        public void Init(GifCube program)
        {
            stack = new List<GifStackFrame>() { new GifStackFrame(program, ColorRGB.Black, ColorDir.PlusR) };
            input.cube = new GifCube();
            output.cube = new GifCube();
        }

        public GifCube GetOutputCube()
        {
            return output.cube;
        }

        public void Tick()
        {
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
        }

        public void CopyPixel(ColorCategory category)
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
        }
    }
}
