using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Jillzhang.GifUtility;

namespace GifScript
{
    public class GifScript
    {
        static void Main(string[] args)
        {
            GifImage gifImage = GifDecoder.Decode(@"..\..\..\Examples\worldmap2.gif");
            ColorRGB[] globalPalette = ColorRGB.MakePalette(gifImage.GlobalColorTable);
            GifCube cube = new GifCube();
            byte sliceT = 0;
            foreach (GifFrame f in gifImage.Frames)
            {
                byte[] colorTableBytes = f.LocalColorTable;
                ColorRGB[] palette;
                if (colorTableBytes == null)
                    palette = globalPalette;
                else
                    palette = ColorRGB.MakePalette(colorTableBytes);

                cube.AddFrame(sliceT, new GifCubeSlice(f.IndexedPixel, gifImage.Width, palette));
            }

            GifScriptState scriptState = new GifScriptState();
            scriptState.Init(cube);
            while (!scriptState.halted)
            {
                scriptState.Tick();
            }
        }
    }
}
