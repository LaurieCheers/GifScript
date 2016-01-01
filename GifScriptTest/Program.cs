using Jillzhang.GifUtility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GifScript;
using System.Drawing;
using System.Drawing.Imaging;

namespace GifScriptTest
{
    class Program
    {
        static void Main(string[] args)
        {
            GifImage gifImage = GifDecoder.Decode(@"C:\Users\Laurie\Pictures\fillpink.gif");
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
            scriptState.Tick();
            GifCube output = scriptState.GetOutputCube();
            Bitmap bmp = new Bitmap(256, 256, PixelFormat.Format24bppRgb);
            Rectangle rect = new Rectangle(0, 0, bmp.Width, bmp.Height);
            BitmapData bmpData = bmp.LockBits(rect, ImageLockMode.ReadWrite, bmp.PixelFormat);

            // Declare an array to hold the bytes of the bitmap.
            int numBytes = Math.Abs(bmpData.Stride) * bmp.Height;
            byte[] rgbValues = new byte[numBytes];
            int Idx = 0;
            for (int X = 0; X < 256; X++)
            {
                for (int Y = 0; Y < 256; Y++)
                {
                    ColorRGB col = output[new ColorRGB((byte)X, (byte)Y, 0)];
                    rgbValues[Idx++] = col.R;
                    rgbValues[Idx++] = col.G;
                    rgbValues[Idx++] = col.B;
                }
            }

            // Copy the RGB values back to the bitmap
            System.Runtime.InteropServices.Marshal.Copy(rgbValues, 0, bmpData.Scan0, numBytes);

            // Unlock the bits.
            bmp.UnlockBits(bmpData);

            bmp.Save(@"C:\Users\Laurie\Pictures\fillpinkOUT.gif", ImageFormat.Gif);
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
