using GifScript;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using LRCEngine;
using System.Collections.Generic;

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
    public class Game1 : Game
    {
        GraphicsDeviceManager graphics;
        SpriteBatch spriteBatch;

        SpriteFont font;
        Texture2D whiteTexture;
        Texture2D pointerTexture;
        Texture2D runningTexture;
        Texture2D breakpointTexture;
        Texture2D runTexture;
        Texture2D stepInTexture;
        Texture2D stepOverTexture;
        Texture2D stepOutTexture;
        Texture2D restartTexture;
        Texture2D pinheadTexture;
        GifScriptState gifScriptState = new GifScriptState();
        InputState inputState = new InputState();

        GifCube showingCube;
        ColorRGB showingPosition;
        Vector2 cubeScreenPos = new Vector2(30, 30);
        Vector2 blockSize = new Vector2(50, 35);
        Vector2 registersScreenPos = new Vector2(850, 140);
        float registersScreenSpacing = 35 + 5;

        UIContainer ui;

        public Game1()
        {
            graphics = new GraphicsDeviceManager(this);
            graphics.PreferredBackBufferWidth = 1024;
            graphics.PreferredBackBufferHeight = 720;
            Content.RootDirectory = "Content";

            IsMouseVisible = true;
        }

        /// <summary>
        /// Allows the game to perform any initialization it needs to before starting to run.
        /// This is where it can query for any required services and load any non-graphic
        /// related content.  Calling base.Initialize will enumerate through any components
        /// and initialize them as well.
        /// </summary>
        protected override void Initialize()
        {
            // TODO: Add your initialization logic here

            base.Initialize();
        }

        /// <summary>
        /// LoadContent will be called once per game and is the place to load
        /// all of your content.
        /// </summary>
        protected override void LoadContent()
        {
            // Create a new SpriteBatch, which can be used to draw textures.
            spriteBatch = new SpriteBatch(GraphicsDevice);

            font = Content.Load<SpriteFont>("Arial");
            whiteTexture = Content.Load<Texture2D>("white");
            pointerTexture = Content.Load<Texture2D>("pointer");
            runningTexture = Content.Load<Texture2D>("running");
            breakpointTexture = Content.Load<Texture2D>("breakpoint");
            runTexture = Content.Load<Texture2D>("run");
            stepInTexture = Content.Load<Texture2D>("stepin");
            stepOverTexture = Content.Load<Texture2D>("stepover");
            stepOutTexture = Content.Load<Texture2D>("stepout");
            restartTexture = Content.Load<Texture2D>("restart");
            pinheadTexture = Content.Load<Texture2D>("pinhead");

            ui = new UIContainer();
            UIButtonStyle defaultButtonStyle = UIButton.GetDefaultStyle(Content);
            ui.Add(new UIButton("Run (F5)", runTexture, new Rectangle(100, 650, 120, 40), defaultButtonStyle, DoRun));
            ui.Add(new UIButton("Step In (F11)", stepInTexture, new Rectangle(240, 650, 120, 40), defaultButtonStyle, DoStepIn));
            ui.Add(new UIButton("Step Over (F10)", stepOverTexture, new Rectangle(380, 650, 120, 40), defaultButtonStyle, DoStepOver));
            ui.Add(new UIButton("Step Out (^F11)", stepOutTexture, new Rectangle(520, 650, 120, 40), defaultButtonStyle, DoStepOut));
            ui.Add(new UIButton("Restart", restartTexture, new Rectangle(660, 650, 120, 40), defaultButtonStyle, DoRestart));

            DoRestart();
        }

        /// <summary>
        /// UnloadContent will be called once per game and is the place to unload
        /// game-specific content.
        /// </summary>
        protected override void UnloadContent()
        {
            // TODO: Unload any non ContentManager content here
        }

        /// <summary>
        /// Allows the game to run logic such as updating the world,
        /// checking for collisions, gathering input, and playing audio.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override void Update(GameTime gameTime)
        {
            inputState.Update();
            inputState.hoveringElement = ui.GetMouseHover(inputState.MousePos);
            ui.Update(inputState);

            if(inputState.WasKeyJustReleased(Keys.F11))
            {
                if (inputState.IsKeyDown(Keys.LeftShift) || inputState.IsKeyDown(Keys.RightShift))
                {
                    DoStepOut();
                }
                else
                {
                    DoStepIn();
                }
            }

            if (inputState.WasKeyJustReleased(Keys.F10))
            {
                DoStepOver();
            }

            if (inputState.WasKeyJustReleased(Keys.F5))
            {
                DoRun();
            }

            if (inputState.WasMouseLeftJustReleased())
            {
                Vector2 mousePos = inputState.MousePos;
                Vector2 pixelPos = (mousePos - cubeScreenPos) / blockSize;

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
                                break;
                            }
                        }

                        if (!removed)
                        {
                            Breakpoint newBreakpoint = new Breakpoint();
                            newBreakpoint.cube = showingCube;
                            newBreakpoint.position = breakpointPos;
                            breakpoints.Add(newBreakpoint);
                        }
                    }
                    else if(((int)pixelPos.Y) == 16)
                    {
                        showingPosition = new ColorRGB(showingPosition.R, showingPosition.G, (byte)((int)pixelPos.X * 17));
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

            base.Update(gameTime);
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

        /// <summary>
        /// This is called when the game should draw itself.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(new Color(94, 54, 54));

            // TODO: Add your drawing code here
            spriteBatch.Begin();

            DrawCube(showingCube, showingPosition.B16, showingPosition, new Vector2(30, 30), blockSize);

            spriteBatch.DrawString(font, "Current color: ", new Vector2(850, 20), Color.Black);
            IGifValue currentValue = gifScriptState.current;
            DrawGifValue(currentValue, new Vector2(850, 40), blockSize);

            spriteBatch.DrawString(font, "Registers: ", new Vector2(850, 100), Color.Black);
            spriteBatch.DrawString(font, "Name", new Vector2(850, 120), Color.Black);
            spriteBatch.DrawString(font, "Pos", new Vector2(900, 120), Color.Black);
            spriteBatch.DrawString(font, "Value", new Vector2(950, 120), Color.Black);
            Vector2 registerDrawPos = registersScreenPos;
            foreach(ColorRGB register in interestingRegisters)
            {
                DrawColorBlock(register, registerDrawPos, blockSize);

                ColorRGB registerPos = gifScriptState.GetRegisterPosition(register);
                DrawColorBlock(registerPos, new Vector2(registerDrawPos.X + blockSize.X + 1, registerDrawPos.Y), blockSize);
                DrawCell(gifScriptState.GetRegisterTarget(register), registerPos.R16, registerPos.G16, registerPos.B16, new Vector2(registerDrawPos.X + blockSize.X*2 + 2, registerDrawPos.Y), blockSize);

                if (gifScriptState.runningRegister == register)
                {
                    spriteBatch.Draw(runningTexture, new Vector2(registerDrawPos.X + 17, registerDrawPos.Y + 18), Color.White);
                }

                registerDrawPos.Y += registersScreenSpacing;
            }

            ui.Draw(spriteBatch);

            //            spriteBatch.Draw(whiteTexture, new Rectangle(100, 100, 100, 100), Color.Red);
            spriteBatch.End();

            base.Draw(gameTime);
        }

        void DrawCube(GifCube cube, int frame, ColorRGB highlightPos, Vector2 pos, Vector2 size)
        {
            for (int x = 0; x < 16; ++x)
            {
                spriteBatch.DrawString(font, ""+GetHexChar(x), new Vector2(pos.X + 16 + x*size.X, pos.Y - 20), new Color(x*16, 0,0));
                spriteBatch.DrawString(font, "" + GetHexChar(x), new Vector2(pos.X + 16 + x * size.X, pos.Y + 10 + 16 * size.Y), showingPosition.B16 == x? Color.Yellow: new Color(0, 0, x * 16));
            }

            for (int y = 0; y < 16; ++y)
            {
                spriteBatch.DrawString(font, "" + GetHexChar(y), new Vector2(pos.X - 16, pos.Y + 10 + y*size.Y), new Color(0, y * 16, 0));
            }
            spriteBatch.Draw(whiteTexture, pos.ToRectangle(size*16), Color.Black);
            spriteBatch.Draw(whiteTexture, new Vector2(pos.X + highlightPos.R16*size.X - 1, pos.Y + highlightPos.G16 * size.Y - 1).ToRectangle(new Vector2(size.X+2, size.Y+2)), Color.White);
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
                    spriteBatch.Draw(breakpointTexture, new Vector2(pos.X + b.position.R16 * size.X + 35, pos.Y + b.position.G16 * size.Y + 18), Color.White);
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

        void DrawPointer(ColorRGB color, Vector2 pos, Vector2 size)
        {
            spriteBatch.Draw(pointerTexture, new Rectangle((int)(pos.X), (int)(pos.Y + size.Y-16), 16, 16), Color.White);
            spriteBatch.Draw(pinheadTexture, new Rectangle((int)(pos.X-8), (int)(pos.Y + size.Y - 8), 16, 16), color.ToXNAColor());
        }

        void DrawCell(GifCube cube, int x, int y, int z, Vector2 pos, Vector2 size)
        {
            ColorRGB color = cube[x, y, z];
            spriteBatch.Draw(whiteTexture, pos.ToRectangle(size), cube[x, y, z].ToXNAColor());
            spriteBatch.DrawString(font, ColorToString(color), pos, GetContrastingColor(color));
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
            spriteBatch.Draw(whiteTexture, pos.ToRectangle(size), color.ToXNAColor());
            spriteBatch.DrawString(font, GetHexString(color), pos, GetContrastingColor(color));
        }

        void DoRestart()
        {
            NGif.GifDecoder decoder = new NGif.GifDecoder();
            if (decoder.Read("../../../../../Examples/colorcube2.gif") == 0)
            {
                gifScriptState = new GifScriptState();
                gifScriptState.Init(new GifCube(decoder));

                AddInterestingRegister(gifScriptState.runningRegister);
                ShowRegister(gifScriptState.runningRegister);
            }
        }
    }
}
