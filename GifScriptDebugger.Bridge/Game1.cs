using GifScript;
using Microsoft.Xna.Framework;
using System.Collections.Generic;
using Texture2D = Bridge.Html5.HTMLImageElement;
using Bridge.Html5;
using System;
using System.Threading.Tasks;
using Bridge;

namespace GifScriptDebugger
{
    static class Extensions
    {
        public static Color ToXNAColor(this ColorRGB self)
        {
            return new Color(self.R, self.G, self.B);
        }

        public static Rectangle ToRectangle(this Vector2 topLeft, Vector2 size)
        {
            return new Rectangle((int)topLeft.X, (int)topLeft.Y, (int)size.X, (int)size.Y);
        }
    }

    /// <summary>
    /// This is the main type for your game.
    /// </summary>
    public class Game1
    {
        Texture2D pointerTexture;
        Texture2D runningTexture;
        Texture2D breakpointTexture;
        Texture2D runTexture;
        Texture2D stepInTexture;
        Texture2D stepOverTexture;
        Texture2D stepOutTexture;
        Texture2D restartTexture;
        GifScriptState gifScriptState = new GifScriptState();

        GifCube showingCube;
        ColorRGB showingPosition;
        Vector2 cubeScreenPos = new Vector2(30, 30);
        Vector2 blockSize = new Vector2(50, 35);
        Vector2 registersScreenPos = new Vector2(850, 140);
        float registersScreenSpacing = 35 + 5;
        List<int> keyUps = new List<int>();
        List<int> keyDowns = new List<int>();
        Point mousePoint;
        bool mouseDown = false;
        static Game1 current;

        static void KeyUp (KeyboardEvent e)
        {
            current.keyUps.Add(e.KeyCode);
        }

        static void KeyDown (KeyboardEvent e)
        {
            current.keyDowns.Add(e.KeyCode);
        }

        public Game1()
        {
            current = this;
            //canvas.AddEventListener(EventType.KeyUp, e =>
            //{
            //    keyUps.Add(e.ToDynamic().charCode);
            //});
            //canvas.AddEventListener(EventType.KeyDown, e =>
            //{
            //    keyDowns.Add(e.ToDynamic().charCode);
            //});
            canvas.OnMouseDown = e =>
            {
                mousePoint = new Point(
                    x: e.LayerX,
                    y: e.LayerY);
                mouseDown = true;
            };
            LoadContent();
        }

        int frameN = 0;

        public static void Main ()
        {
            new Game1();
        }

        /// <summary>
        /// LoadContent will be called once per game and is the place to load
        /// all of your content.
        /// </summary>
        protected async Task LoadContent()
        {
            pointerTexture = await LoadImage("pointer");
            runningTexture = await LoadImage("running");
            breakpointTexture = await LoadImage("breakpoint");
            runTexture = await LoadImage("run");
            stepInTexture = await LoadImage("stepin");
            stepOverTexture = await LoadImage("stepover");
            stepOutTexture = await LoadImage("stepout");
            restartTexture = await LoadImage("restart");
            
            //ui.Add(new UIButton("Run (F5)", runTexture, new Rectangle(100, 650, 120, 40), defaultButtonStyle, DoRun));
            //ui.Add(new UIButton("Step In (F11)", stepInTexture, new Rectangle(240, 650, 120, 40), defaultButtonStyle, DoStepIn));
            //ui.Add(new UIButton("Step Over (F10)", stepOverTexture, new Rectangle(380, 650, 120, 40), defaultButtonStyle, DoStepOver));
            //ui.Add(new UIButton("Step Out (^F11)", stepOutTexture, new Rectangle(520, 650, 120, 40), defaultButtonStyle, DoStepOut));
            //ui.Add(new UIButton("Restart", restartTexture, new Rectangle(660, 650, 120, 40), defaultButtonStyle, DoRestart));

            await DoRestart();
        }

        static void ImageLoaded (Texture2D image)
        {
            task.SetResult(image);
        }

        static void GifLoaded (byte[][][] frames)
        {
            task2.SetResult(frames);
        }

        static TaskCompletionSource<Texture2D> task;
        static TaskCompletionSource<byte[][][]> task2;

        public async Task<Texture2D> LoadImage(string v)
        {
            Texture2D image = new Texture2D
            {
                Src = $"Content/{v}.png"
            };
            image.OnLoad = e => ImageLoaded(image);
            task = new TaskCompletionSource<Texture2D>();
            return await task.Task;
        }

        /// <summary>
        /// Allows the game to run logic such as updating the world,
        /// checking for collisions, gathering input, and playing audio.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected void Update()
        {
            if(keyUps.Contains(KeyboardEvent.DOM_VK_I))
            {
                if (keyDowns.Contains(KeyboardEvent.DOM_VK_SHIFT))
                {
                    DoStepOut();
                }
                else
                {
                    DoStepIn();
                }
            }

            if (keyUps.Contains(KeyboardEvent.DOM_VK_F10))
            {
                DoStepOver();
            }

            if (keyUps.Contains(KeyboardEvent.DOM_VK_F5))
            {
                DoRun();
            }

            if (mouseDown)
            {
                Vector2 mousePos = mousePoint.ToVector2();
                Vector2 mousePos_ = mousePos;
                Vector2 pixelPos = (mousePos_ - cubeScreenPos) / blockSize;

                if (pixelPos.X >= 0 && pixelPos.X < 16)
                {
                    if (pixelPos.Y >= 0 && pixelPos.Y < 16)
                    {
                        // toggle breakpoint
                        ColorRGB breakpointPos = new ColorRGB((byte)((int)pixelPos.X * 17), (byte)((int)pixelPos.Y * 17), showingPosition.B);
                        bool removed = false;
                        for (int Idx = 0; Idx < breakpoints.Count; ++Idx)
                        {
                            Breakpoint currentBreakpoint = breakpoints[Idx];
                            if (currentBreakpoint.cube == showingCube && currentBreakpoint.position == breakpointPos)
                            {
                                breakpoints.RemoveAt(Idx);
                                removed = true;
                                needsRedraw = true;
                                break;
                            }
                        }

                        if (!removed)
                        {
                            Breakpoint newBreakpoint = new Breakpoint();
                            newBreakpoint.cube = showingCube;
                            newBreakpoint.position = breakpointPos;
                            breakpoints.Add(newBreakpoint);
                            needsRedraw = true;
                        }
                    }
                    else if(((int)pixelPos.Y) == 16)
                    {
                        showingPosition = new ColorRGB(showingPosition.R, showingPosition.G, (byte)((int)pixelPos.X * 17));
                        needsRedraw = true;
                    }
                }
                else
                {
                    Vector2 registerPos = (mousePos - registersScreenPos);
                    registerPos.Y /= registersScreenSpacing;

                    if (registerPos.X > 0)
                    {
                        int registerIndex = (int)registerPos.Y;
                        if (registerIndex >= 0 && registerIndex < interestingRegisters.Count)
                        {
                            ShowRegister(interestingRegisters[registerIndex]);
                        }
                    }
                }
            }
            mouseDown = false;
            keyDowns.Clear();
            keyUps.Clear();
            Draw();
        }

        void DoStepIn()
        {
            gifScriptState.Tick();
            UpdateToScriptState();
        }

        void DoStepOut()
        {
            int targetStackSize = gifScriptState.stack.Count - 1;
            do
            {
                gifScriptState.Tick();
                UpdateToScriptState();
            }
            while (!gifScriptState.halted && !HitBreakpoint() && gifScriptState.stack.Count > targetStackSize);
        }

        void DoStepOver()
        {
            int targetStackSize = gifScriptState.stack.Count;
            do
            {
                gifScriptState.Tick();
                UpdateToScriptState();
            }
            while (!gifScriptState.halted && !HitBreakpoint() && gifScriptState.stack.Count > targetStackSize);
        }

        void DoRun()
        {
            do
            {
                gifScriptState.Tick();
                UpdateToScriptState();
            }
            while (!gifScriptState.halted && !HitBreakpoint());
        }

        bool HitBreakpoint()
        {
            GifCube cube = gifScriptState.GetRegisterTarget(gifScriptState.runningRegister);
            ColorRGB position = gifScriptState.GetRegisterPosition(gifScriptState.runningRegister);

            foreach (Breakpoint b in breakpoints)
            {
                if (b.cube != cube)
                    continue;

                if (b.position != position)
                    continue;

                return true;
            }

            return false;
        }

        void UpdateToScriptState()
        {
            needsRedraw = true;

            AddInterestingRegister(gifScriptState.runningRegister);
            if (gifScriptState.current is GifCursor)
            {
                AddInterestingRegister(((GifCursor)gifScriptState.current).register);
            }

            ShowRegister(gifScriptState.runningRegister);
        }

        class Breakpoint
        {
            public GifCube cube;
            public ColorRGB position;
        }
        List<Breakpoint> breakpoints = new List<Breakpoint>();

        void ShowRegister(ColorRGB register)
        {
            showingCube = gifScriptState.GetRegisterTarget(register);
            showingPosition = gifScriptState.GetRegisterPosition(register);
            needsRedraw = true;
        }

        HashSet<ColorRGB> interestingRegistersSet = new HashSet<ColorRGB>();
        List<ColorRGB> interestingRegisters = new List<ColorRGB>();

        void AddInterestingRegister(ColorRGB register)
        {
            if (!interestingRegistersSet.Contains(register))
            {
                interestingRegistersSet.Add(register);
                interestingRegisters.Add(register);
            }
        }

        HTMLCanvasElement canvas = Document.GetElementById<HTMLCanvasElement>("canvas");

        public void DrawString (string text, Vector2 position, Color color)
        {
            context.FillStyle = color.JavascriptColor;
            context.FillText(text, (int)position.X, (int)position.Y + 14);
        }
        
        public void DrawRectangle (Rectangle rectangle, Color color)
        {
            context.FillStyle = color.JavascriptColor;
            context.FillRect(rectangle.X, rectangle.Y, rectangle.Width, rectangle.Height);
        }

        public CanvasRenderingContext2D context;

        bool needsRedraw = true;

        /// <summary>
        /// This is called when the game should draw itself.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected void Draw()
        {
            if (!needsRedraw)
                return;

            needsRedraw = false;

            context = canvas.GetContext(CanvasTypes.CanvasContext2DType.CanvasRenderingContext2D);
            context.Font = "9px arial";
            DrawRectangle(new Rectangle(0, 0, 1024, 720), new Color(94, 54, 54));

            DrawCube(showingCube, showingPosition.B16, showingPosition, new Vector2(30, 30), blockSize);

            DrawString("Current color: ", new Vector2(850, 20), Color.Black);
            IGifValue currentValue = gifScriptState.current;
            DrawGifValue(currentValue, new Vector2(850, 40), blockSize);

            DrawString("Registers: ", new Vector2(850, 100), Color.Black);
            DrawString("Name", new Vector2(850, 120), Color.Black);
            DrawString("Pos", new Vector2(900, 120), Color.Black);
            DrawString("Value", new Vector2(950, 120), Color.Black);
            Vector2 registerDrawPos = registersScreenPos;
            foreach(ColorRGB register in interestingRegisters)
            {
                DrawColorBlock(register, registerDrawPos, blockSize);

                ColorRGB registerPos = gifScriptState.GetRegisterPosition(register);
                DrawColorBlock(registerPos, new Vector2(registerDrawPos.X + blockSize.X + 1, registerDrawPos.Y), blockSize);
                DrawCell(gifScriptState.GetRegisterTarget(register), registerPos.R16, registerPos.G16, registerPos.B16, new Vector2(registerDrawPos.X + blockSize.X*2 + 2, registerDrawPos.Y), blockSize);

                if (gifScriptState.runningRegister == register)
                {
                    DrawImage(runningTexture, new Vector2(registerDrawPos.X + 17, registerDrawPos.Y + 18));
                }

                registerDrawPos.Y += registersScreenSpacing;
            }
            Global.RequestAnimationFrame(e => Draw());
        }

        void DrawCube(GifCube cube, int frame, ColorRGB highlightPos, Vector2 pos, Vector2 size)
        {
            for (int x = 0; x < 16; ++x)
            {
                DrawString("" + GetHexChar(x), new Vector2(pos.X + 16 + x*size.X, pos.Y - 20), new Color(x*16, 0,0));
                DrawString("" + GetHexChar(x), new Vector2(pos.X + 16 + x * size.X, pos.Y + 10 + 16 * size.Y), showingPosition.B16 == x? Color.Yellow: new Color(0, 0, x * 16));
            }

            for (int y = 0; y < 16; ++y)
            {
                DrawString("" + GetHexChar(y), new Vector2(pos.X - 16, pos.Y + 10 + y*size.Y), new Color(0, y * 16, 0));
            }
            Vector2 size_ = size;
            DrawRectangle(pos.ToRectangle(size_*16), Color.Black);
            size_ = size;
            DrawRectangle(new Vector2(pos.X + highlightPos.R16*size_.X - 1, pos.Y + highlightPos.G16 * size_.Y - 1).ToRectangle(new Vector2(size_.X+2, size_.Y+2)), Color.White);
            for (int x = 0; x < 16; ++x)
            {
                for (int y = 0; y < 16; ++y)
                {
                    DrawCell(cube, x, y, frame, new Vector2(pos.X + x*size.X, pos.Y+y*size.Y), new Vector2(size.X-1, size.Y-1));
                }
            }

            foreach (Breakpoint b in breakpoints)
            {
                if (b.cube == showingCube && b.position.B16 == showingPosition.B16)
                {
                    DrawImage(breakpointTexture, new Vector2(pos.X + b.position.R16 * size.X + 35, pos.Y + b.position.G16 * size.Y + 18));
                }
            }

            foreach (ColorRGB register in interestingRegisters)
            {
                GifCube registerCube = gifScriptState.GetRegisterTarget(register);
                if(cube == registerCube)
                {
                    ColorRGB registerPos = gifScriptState.GetRegisterPosition(register);
                    if (registerPos.B16 == frame)
                    {
                        DrawPointer(register, new Vector2(pos.X + registerPos.R16 * size.X, pos.Y + registerPos.G16 * size.Y), size);
                    }
                }
            }
        }

        public void DrawImage(Texture2D image, Vector2 position)
        {
            context.DrawImage(image, position.X, position.Y);
        }

        void DrawPointer(ColorRGB color, Vector2 pos, Vector2 size)
        {
            DrawImage(pointerTexture, new Vector2((int)(pos.X), (int)(pos.Y + size.Y-16)));
            DrawRectangle(new Rectangle((int)(pos.X-8), (int)(pos.Y + size.Y - 8), 16, 16), color.ToXNAColor());
        }

        void DrawCell(GifCube cube, int x, int y, int z, Vector2 pos, Vector2 size)
        {
            ColorRGB color = cube[new ColorRGB((byte)(x * 17), (byte)(y * 17), (byte)(z * 17))];
            DrawRectangle(pos.ToRectangle(size), color.ToXNAColor());
            DrawString(ColorToString(color), pos, GetContrastingColor(color));
        }

        Dictionary<int, string> instructionNames = new Dictionary<int, string>()
        {
            { 0x000, "RTN" },
            { 0xCCC, "SET" },
            { 0xC8C, "CALL" },
            { 0xC04, "LOAD" },
            { 0xC84, "SAVE" },
            { 0xCC4, "TARG" },
            { 0x00C, "POS" },
            { 0x08C, "VAL" },
            { 0x0CC, "DATA" },
            { 0xC0C, "MOD" },
        };

        Color GetContrastingColor(ColorRGB color)
        {
            if (color.IsBlack())
                return new Color(0.2f, 0.2f, 0.2f);
            else
                return color.G16 >= 8 ? Color.Black : Color.White;
        }

        string GetHexString(ColorRGB color)
        {
            return GetHexString(color.R) + GetHexString(color.G) + GetHexString(color.B);
        }

        string GetHexString(int C16)
        {
            return "" + GetHexChar(C16>>4) + GetHexChar(C16 % 16);
        }

        char GetHexChar(int C16)
        {
            return "0123456789ABCDEF"[C16];
        }

        string ColorToString(ColorRGB color)
        {
            if (color.R == color.R16 * 17 && color.G == color.G16 * 17 && color.B == color.B16 * 17)
            {
                int hexSignature = color.hexSignature;
                string result;
                if (instructionNames.TryGetValue(hexSignature, out result))
                {
                    return result;
                }
            }

            return GetHexString(color);
        }

        void DrawGifValue(IGifValue value, Vector2 pos, Vector2 size)
        {
            if (value is GifCursor)
            {
                GifCursor cursor = (GifCursor)value;
                DrawCell(cursor.cube, cursor.position.R16, cursor.position.G16, cursor.position.B16, pos, size);
            }
            else
            {
                DrawColorBlock(value.Read(), pos, size);
            }
        }

        void DrawColorBlock(ColorRGB color, Vector2 pos, Vector2 size)
        {
            DrawRectangle(pos.ToRectangle(size), color.ToXNAColor());
            DrawString(GetHexString(color), pos, GetContrastingColor(color));
        }

        static async Task<byte[][][]> LoadGif (string value)
        {
            Script.Write(@"new SuperGif().load({0}, {1})", value, (Action<byte[][][]>)(frames => GifLoaded(frames)));
            task2 = new TaskCompletionSource<byte[][][]>();
            return await task2.Task;
        }

        HTMLInputElement input => Document.GetElementById<HTMLInputElement>("fileInput");
        TaskCompletionSource<string> taskLoadGifPartA;
        TaskCompletionSource<object> inputSelected;
        
        async Task<string> dataUrl1 ()
        {
            await InputSelected();
            File file = input.Files[0];
            Node reader = Script.Write<Node>("new FileReader()");
            reader.AddEventListener(EventType.Load, () =>
                GifLoadPart1(reader.ToDynamic().result), false);
            reader.ToDynamic().readAsDataURL(file);
            return await (taskLoadGifPartA = new TaskCompletionSource<string>()).Task;
        }

        private Task InputSelected()
        {
            input.OnChange = e => inputSelected.SetResult(null);
            return (inputSelected = new TaskCompletionSource<object>()).Task;
        }

        async Task DoRestart()
        {
            byte[][][] decoder = await LoadGif(await dataUrl1());
            {
                gifScriptState = new GifScriptState();
                gifScriptState.Init(new GifCube(decoder));

                AddInterestingRegister(gifScriptState.runningRegister);
                ShowRegister(gifScriptState.runningRegister);
            }
            Global.SetInterval(Update);
        }

        private void GifLoadPart1(string hTMLImageElement)
        {
            taskLoadGifPartA.SetResult(hTMLImageElement);
        }
    }
}
