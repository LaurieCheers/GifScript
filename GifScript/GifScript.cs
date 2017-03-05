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
            GifImage gifImage = GifDecoder.Decode(@"..\..\..\Examples\docexample.gif");
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

                AddFrame(cube, sliceT, f.IndexedPixel, gifImage.Width, palette);
            }

            GifScriptState scriptState = new GifScriptState();
            scriptState.Init(cube);
            while (!scriptState.halted)
            {
                scriptState.Tick();
            }

            /*
                        Color32[] pallette = new OcTreeQuantizer(8).Quantizer(bmp);
                        GifHelper.Quantizer(bmp, pallette);

                        GifImage resultImage = new GifImage
                        {
                            Frames = new List<GifFrame>()
                            {
                                new GifFrame() {
                                    Image = bmp,
                                    ImageDescriptor = new ImageDescriptor
                                    {
                                        LctFlag = false,//true,
                                        LctSize = pallette.Length,
                                        Width = 256,
                                        Height = 256,
                                    }
                                }
                            },
                            LogicalScreenDescriptor = new LogicalScreenDescriptor
                            {
                                Width = 256,
                                Height = 256,
                            }
                        };
                        GifEncoder.Encode(resultImage, @"C:\Users\Laurie\Pictures\fillpinkOUT.gif");*/
        }

        public static void AddFrame(GifCube cube, byte sliceT, byte[] pixels, short width, ColorRGB[] palette)
        {
            cube.AddFrame(sliceT, new GifCubeSlice(pixels, width, palette));
        }
    }
}
