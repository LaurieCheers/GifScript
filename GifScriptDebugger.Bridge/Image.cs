using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge;

namespace ImageStyler
{
    public class Color
    {
        private int _value;

        public override bool Equals(object o)
        {
            Color color = o as Color;
            if (color == null)
                return false;
            return color.Value == Value;
        }

        public Color (int Value)
        {
            this._value = Value;
        }

        public Color(byte R, byte G, byte B, byte A)
        {
            _value = A + (B * 0x100) + (G * 0x10000) + (R * 0x1000000);
        }

        public byte R => this[0];
        public byte G => this[1];
        public byte B => this[2];
        public byte A => this[3];

        public int Value { get { return _value; } set { _value = value; } }

        public byte this [int index]
        {
            get
            {
                int possibility = (int)Math.Pow(0x100, 3 - index);
                return (byte)((_value & (possibility * 0xff)) / possibility);
            }
        }
    }
    
    public class Image
    {
        private ImageData _data;

        public HTMLImageElement DisplayImage
        {
            get
            {
                var canvas = new HTMLCanvasElement
                {
                    Width = (int)Width,
                    Height = (int)Height
                };
                var context = canvas.GetContext(CanvasTypes.CanvasContext2DType.CanvasRenderingContext2D);
                context.PutImageData(_data, 0, 0);
                return new HTMLImageElement
                {
                    Src = canvas.ToDataURL()
                };
            }
        }

        public uint Width => _data.Width;
        public uint Height => _data.Height;

        public Color this[int X, int Y]
        {
            get
            {
                return GetColor((uint)(X + Y * Width));
            }
            set
            {
                SetColor((uint)(X + Y * Width), value);
            }
        }

        private Color GetColor(uint v) => new Color(_data.Data[v * 4], _data.Data[v * 4 + 1], _data.Data[v * 4 + 2], _data.Data[v * 4 + 3]);

        private void SetColor(uint v, Color color)
        {
            for (int n = 0; n < 4; n++)
                _data.Data[(uint)(v * 4 + n)] = color[n];
        }

        public Image(HTMLInputElement input)
        {
            File file = input.Files[0];
            Node reader = Script.Write<Node>("new FileReader()");
            reader.AddEventListener(EventType.Load, () =>
            {
                var image = new HTMLImageElement
                {
                    Src = (string) reader.ToDynamic().result,
                    OnLoad = e => ImageLoad(e.Target as HTMLImageElement)
                };
            }, false);
            reader.ToDynamic().readAsDataURL(file);
        }

        public Image(HTMLImageElement image)
        {
            ImageLoad(image);
        }
        
        public Image (uint width, uint height)
        {
            _data = new ImageData(width, height);
            Load?.Invoke();
        }

        private void ImageLoad(HTMLImageElement image)
        {
            var canvas = new HTMLCanvasElement
            {
                Width = image.Width,
                Height = image.Height
            };
            var context = canvas.GetContext(CanvasTypes.CanvasContext2DType.CanvasRenderingContext2D);
            context.DrawImage(image, 0, 0);
            _data = context.GetImageData(0, 0, canvas.Width, canvas.Height);
            Load?.Invoke();
        }

        public event Action Load;
    }
}
