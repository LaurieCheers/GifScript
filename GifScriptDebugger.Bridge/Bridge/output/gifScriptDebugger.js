Bridge.assembly("GifScriptDebugger.Bridge", function ($asm, globals) {
    "use strict";

    Bridge.define("GifScriptDebugger.Extensions", {
        statics: {
            toXNAColor: function (self) {
                return new Microsoft.Xna.Framework.Color.$ctor6(self.r, self.g, self.b);
            },
            toRectangle: function (topLeft, size) {
                return new Microsoft.Xna.Framework.Rectangle.$ctor2(Bridge.Int.clip32(topLeft.x), Bridge.Int.clip32(topLeft.y), Bridge.Int.clip32(size.x), Bridge.Int.clip32(size.y));
            }
        }
    });

    /** @namespace GifScriptDebugger */

    /**
     * This is the main type for your game.
     *
     * @public
     * @class GifScriptDebugger.Game1
     */
    Bridge.define("GifScriptDebugger.Game1", {
        statics: {
            current: null,
            task: null,
            task2: null,
            keyUp: function (e) {
                GifScriptDebugger.Game1.current.keyUps.add(e.keyCode);
            },
            keyDown: function (e) {
                GifScriptDebugger.Game1.current.keyDowns.add(e.keyCode);
            },
            imageLoaded: function (image) {
                GifScriptDebugger.Game1.task.setResult(image);
            },
            gifLoaded: function (frames) {
                GifScriptDebugger.Game1.task2.setResult(frames);
            },
            loadGif: function (value) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        new SuperGif().load(value, $asm.$.GifScriptDebugger.Game1.f1);
                                            GifScriptDebugger.Game1.task2 = new System.Threading.Tasks.TaskCompletionSource();
                                            $task1 = GifScriptDebugger.Game1.task2.task;
                                            $step = 1;
                                            $task1.continueWith($asyncBody);
                                            return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult($taskResult1);
                                            return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            }
        },
        pointerTexture: null,
        runningTexture: null,
        breakpointTexture: null,
        runTexture: null,
        stepInTexture: null,
        stepOverTexture: null,
        stepOutTexture: null,
        restartTexture: null,
        gifScriptState: null,
        showingCube: null,
        registersScreenSpacing: 40,
        keyUps: null,
        keyDowns: null,
        mouseDown: false,
        frameN: 0,
        breakpoints: null,
        interestingRegistersSet: null,
        interestingRegisters: null,
        canvas: null,
        context: null,
        instructionNames: null,
        config: {
            init: function () {
                this.gifScriptState = new GifScript.GifScriptState();
                this.showingPosition = new GifScript.ColorRGB();
                this.cubeScreenPos = new Microsoft.Xna.Framework.Vector2.$ctor2(30, 30);
                this.blockSize = new Microsoft.Xna.Framework.Vector2.$ctor2(50, 35);
                this.registersScreenPos = new Microsoft.Xna.Framework.Vector2.$ctor2(850, 140);
                this.keyUps = new (System.Collections.Generic.List$1(System.Int32))();
                this.keyDowns = new (System.Collections.Generic.List$1(System.Int32))();
                this.mousePoint = new Microsoft.Xna.Framework.Point();
                this.breakpoints = new (System.Collections.Generic.List$1(GifScriptDebugger.Game1.Breakpoint))();
                this.interestingRegistersSet = new (System.Collections.Generic.HashSet$1(GifScript.ColorRGB)).ctor();
                this.interestingRegisters = new (System.Collections.Generic.List$1(GifScript.ColorRGB))();
                this.canvas = document.getElementById("canvas");
                this.instructionNames = $asm.$.GifScriptDebugger.Game1.f2(new (System.Collections.Generic.Dictionary$2(System.Int32,String))());
            }
        },
        ctor: function () {
            this.$initialize();
            GifScriptDebugger.Game1.current = this;
            //canvas.AddEventListener(EventType.KeyUp, e =>
            //{
            //    keyUps.Add(e.ToDynamic().charCode);
            //});
            //canvas.AddEventListener(EventType.KeyDown, e =>
            //{
            //    keyDowns.Add(e.ToDynamic().charCode);
            //});
            this.canvas.onmousedown = Bridge.fn.bind(this, $asm.$.GifScriptDebugger.Game1.f3);
            this.loadContent();
            Bridge.global.setInterval(Bridge.fn.cacheBind(this, this.update));
        },
        $main: function () {
            new GifScriptDebugger.Game1();
        },
        /**
         * LoadContent will be called once per game and is the place to load
         all of your content.
         *
         * @instance
         * @protected
         * @this GifScriptDebugger.Game1
         * @memberof GifScriptDebugger.Game1
         * @return  {void}
         */
        loadContent: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $taskResult2, 
                $task3, 
                $taskResult3, 
                $task4, 
                $taskResult4, 
                $task5, 
                $taskResult5, 
                $task6, 
                $taskResult6, 
                $task7, 
                $taskResult7, 
                $task8, 
                $taskResult8, 
                $task9, 
                $jumpFromFinally, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    for (;;) {
                        $step = System.Array.min([0,1,2,3,4,5,6,7,8,9], $step);
                        switch ($step) {
                            case 0: {
                                $task1 = this.loadImage("pointer");
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                            }
                            case 1: {
                                $taskResult1 = $task1.getAwaitedResult();
                                this.pointerTexture = $taskResult1;
                                    $task2 = this.loadImage("running");
                                    $step = 2;
                                    $task2.continueWith($asyncBody, true);
                                    return;
                            }
                            case 2: {
                                $taskResult2 = $task2.getAwaitedResult();
                                this.runningTexture = $taskResult2;
                                    $task3 = this.loadImage("breakpoint");
                                    $step = 3;
                                    $task3.continueWith($asyncBody, true);
                                    return;
                            }
                            case 3: {
                                $taskResult3 = $task3.getAwaitedResult();
                                this.breakpointTexture = $taskResult3;
                                    $task4 = this.loadImage("run");
                                    $step = 4;
                                    $task4.continueWith($asyncBody, true);
                                    return;
                            }
                            case 4: {
                                $taskResult4 = $task4.getAwaitedResult();
                                this.runTexture = $taskResult4;
                                    $task5 = this.loadImage("stepin");
                                    $step = 5;
                                    $task5.continueWith($asyncBody, true);
                                    return;
                            }
                            case 5: {
                                $taskResult5 = $task5.getAwaitedResult();
                                this.stepInTexture = $taskResult5;
                                    $task6 = this.loadImage("stepover");
                                    $step = 6;
                                    $task6.continueWith($asyncBody, true);
                                    return;
                            }
                            case 6: {
                                $taskResult6 = $task6.getAwaitedResult();
                                this.stepOverTexture = $taskResult6;
                                    $task7 = this.loadImage("stepout");
                                    $step = 7;
                                    $task7.continueWith($asyncBody, true);
                                    return;
                            }
                            case 7: {
                                $taskResult7 = $task7.getAwaitedResult();
                                this.stepOutTexture = $taskResult7;
                                    $task8 = this.loadImage("restart");
                                    $step = 8;
                                    $task8.continueWith($asyncBody, true);
                                    return;
                            }
                            case 8: {
                                $taskResult8 = $task8.getAwaitedResult();
                                this.restartTexture = $taskResult8;

                                    //ui.Add(new UIButton("Run (F5)", runTexture, new Rectangle(100, 650, 120, 40), defaultButtonStyle, DoRun));
                                    //ui.Add(new UIButton("Step In (F11)", stepInTexture, new Rectangle(240, 650, 120, 40), defaultButtonStyle, DoStepIn));
                                    //ui.Add(new UIButton("Step Over (F10)", stepOverTexture, new Rectangle(380, 650, 120, 40), defaultButtonStyle, DoStepOver));
                                    //ui.Add(new UIButton("Step Out (^F11)", stepOutTexture, new Rectangle(520, 650, 120, 40), defaultButtonStyle, DoStepOut));
                                    //ui.Add(new UIButton("Restart", restartTexture, new Rectangle(660, 650, 120, 40), defaultButtonStyle, DoRestart));

                                    $task9 = this.doRestart();
                                    $step = 9;
                                    $task9.continueWith($asyncBody, true);
                                    return;
                            }
                            case 9: {
                                $task9.getAwaitedResult();
                                return;
                            }
                            default: {
                                return;
                            }
                        }
                    }
                }, arguments);

            $asyncBody();
        },
        loadImage: function (v) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                image, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    image = Bridge.merge(new Image(), {
                                            src: System.String.format("Content/{0}.png", v)
                                        } );
                                        image.onload = function (e) {
                                            GifScriptDebugger.Game1.imageLoaded(image);
                                        };
                                        GifScriptDebugger.Game1.task = new System.Threading.Tasks.TaskCompletionSource();
                                        $task1 = GifScriptDebugger.Game1.task.task;
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    $tcs.setResult($taskResult1);
                                        return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);

            $asyncBody();
            return $tcs.task;
        },
        /**
         * Allows the game to run logic such as updating the world,
         checking for collisions, gathering input, and playing audio.
         *
         * @instance
         * @protected
         * @this GifScriptDebugger.Game1
         * @memberof GifScriptDebugger.Game1
         * @return  {void}
         */
        update: function () {
            if (this.keyUps.contains(73)) {
                if (this.keyDowns.contains(16)) {
                    this.doStepOut();
                } else {
                    this.doStepIn();
                }
            }

            if (this.keyUps.contains(121)) {
                this.doStepOver();
            }

            if (this.keyUps.contains(116)) {
                this.doRun();
            }

            if (this.mouseDown) {
                var mousePos = this.mousePoint.toVector2().$clone();
                var mousePos_ = mousePos.$clone();
                var pixelPos = Microsoft.Xna.Framework.Vector2.op_Division((Microsoft.Xna.Framework.Vector2.op_Subtraction(mousePos_, this.cubeScreenPos)), this.blockSize);

                if (pixelPos.x >= 0 && pixelPos.x < 16) {
                    if (pixelPos.y >= 0 && pixelPos.y < 16) {
                        // toggle breakpoint
                        var breakpointPos = new GifScript.ColorRGB.$ctor1(((((Bridge.Int.clip32(pixelPos.x) * 17) | 0)) & 255), ((((Bridge.Int.clip32(pixelPos.y) * 17) | 0)) & 255), this.showingPosition.b);
                        var removed = false;
                        for (var Idx = 0; Idx < this.breakpoints.getCount(); Idx = (Idx + 1) | 0) {
                            var currentBreakpoint = this.breakpoints.getItem(Idx);
                            if (Bridge.referenceEquals(currentBreakpoint.cube, this.showingCube) && GifScript.ColorRGB.op_Equality(currentBreakpoint.position, breakpointPos)) {
                                this.breakpoints.removeAt(Idx);
                                removed = true;
                                break;
                            }
                        }

                        if (!removed) {
                            var newBreakpoint = new GifScriptDebugger.Game1.Breakpoint();
                            newBreakpoint.cube = this.showingCube;
                            newBreakpoint.position = breakpointPos.$clone();
                            this.breakpoints.add(newBreakpoint);
                        }
                    } else if (Bridge.Int.clip32(pixelPos.y) === 16) {
                        this.showingPosition = new GifScript.ColorRGB.$ctor1(this.showingPosition.r, this.showingPosition.g, ((((Bridge.Int.clip32(pixelPos.x) * 17) | 0)) & 255));
                    }
                } else {
                    var registerPos = (Microsoft.Xna.Framework.Vector2.op_Subtraction(mousePos, this.registersScreenPos));
                    registerPos.y /= this.registersScreenSpacing;

                    if (registerPos.x > 0) {
                        var registerIndex = Bridge.Int.clip32(registerPos.y);
                        if (registerIndex >= 0 && registerIndex < this.interestingRegisters.getCount()) {
                            this.showRegister(this.interestingRegisters.getItem(registerIndex).$clone());
                        }
                    }
                }
            }
            this.mouseDown = false;
            this.keyDowns.clear();
            this.keyUps.clear();
            this.draw();
        },
        doStepIn: function () {
            this.gifScriptState.tick();
            this.updateToScriptState();
        },
        doStepOut: function () {
            var targetStackSize = (this.gifScriptState.getstack().getCount() - 1) | 0;
            do {
                this.gifScriptState.tick();
                this.updateToScriptState();
            } while (!this.gifScriptState.gethalted() && !this.hitBreakpoint() && this.gifScriptState.getstack().getCount() > targetStackSize);
        },
        doStepOver: function () {
            var targetStackSize = this.gifScriptState.getstack().getCount();
            do {
                this.gifScriptState.tick();
                this.updateToScriptState();
            } while (!this.gifScriptState.gethalted() && !this.hitBreakpoint() && this.gifScriptState.getstack().getCount() > targetStackSize);
        },
        doRun: function () {
            do {
                this.gifScriptState.tick();
                this.updateToScriptState();
            } while (!this.gifScriptState.gethalted() && !this.hitBreakpoint());
        },
        hitBreakpoint: function () {
            var $t;
            var cube = this.gifScriptState.getRegisterTarget(this.gifScriptState.getrunningRegister().$clone());
            var position = this.gifScriptState.getRegisterPosition(this.gifScriptState.getrunningRegister().$clone()).$clone();

            $t = Bridge.getEnumerator(this.breakpoints);
            while ($t.moveNext()) {
                var b = $t.getCurrent();
                if (!Bridge.referenceEquals(b.cube, cube)) {
                    continue;
                }

                if (GifScript.ColorRGB.op_Inequality(b.position, position)) {
                    continue;
                }

                return true;
            }

            return false;
        },
        updateToScriptState: function () {
            this.addInterestingRegister(this.gifScriptState.getrunningRegister().$clone());
            if (Bridge.is(this.gifScriptState.getcurrent(), GifScript.GifCursor)) {
                this.addInterestingRegister(Bridge.cast(this.gifScriptState.getcurrent(), GifScript.GifCursor).register.$clone());
            }

            this.showRegister(this.gifScriptState.getrunningRegister().$clone());
        },
        showRegister: function (register) {
            this.showingCube = this.gifScriptState.getRegisterTarget(register.$clone());
            this.showingPosition = this.gifScriptState.getRegisterPosition(register.$clone()).$clone();
        },
        addInterestingRegister: function (register) {
            if (!this.interestingRegistersSet.contains(register.$clone())) {
                this.interestingRegistersSet.add(register.$clone());
                this.interestingRegisters.add(register.$clone());
            }
        },
        drawString: function (text, position, color) {
            this.context.fillStyle = color.getJavascriptColor();
            this.context.fillText(text, position.x, ((Bridge.Int.clip32(position.y) + 14) | 0));
        },
        drawRectangle: function (rectangle, color) {
            this.context.fillStyle = color.getJavascriptColor();
            this.context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        },
        /**
         * This is called when the game should draw itself.
         *
         * @instance
         * @protected
         * @this GifScriptDebugger.Game1
         * @memberof GifScriptDebugger.Game1
         * @return  {void}
         */
        draw: function () {
            var $t;
            this.context = this.canvas.getContext("2d");
            this.context.font = "9px arial";
            this.drawRectangle(new Microsoft.Xna.Framework.Rectangle.$ctor2(0, 0, 1024, 720), new Microsoft.Xna.Framework.Color.$ctor6(94, 54, 54));

            this.drawCube(this.showingCube, this.showingPosition.B16, this.showingPosition.$clone(), new Microsoft.Xna.Framework.Vector2.$ctor2(30, 30), this.blockSize.$clone());

            this.drawString("Current color: ", new Microsoft.Xna.Framework.Vector2.$ctor2(850, 20), Microsoft.Xna.Framework.Color.getBlack().$clone());
            var currentValue = this.gifScriptState.getcurrent();
            this.drawGifValue(currentValue, new Microsoft.Xna.Framework.Vector2.$ctor2(850, 40), this.blockSize.$clone());

            this.drawString("Registers: ", new Microsoft.Xna.Framework.Vector2.$ctor2(850, 100), Microsoft.Xna.Framework.Color.getBlack().$clone());
            this.drawString("Name", new Microsoft.Xna.Framework.Vector2.$ctor2(850, 120), Microsoft.Xna.Framework.Color.getBlack().$clone());
            this.drawString("Pos", new Microsoft.Xna.Framework.Vector2.$ctor2(900, 120), Microsoft.Xna.Framework.Color.getBlack().$clone());
            this.drawString("Value", new Microsoft.Xna.Framework.Vector2.$ctor2(950, 120), Microsoft.Xna.Framework.Color.getBlack().$clone());
            var registerDrawPos = this.registersScreenPos.$clone();
            $t = Bridge.getEnumerator(this.interestingRegisters);
            while ($t.moveNext()) {
                var register = $t.getCurrent();
                this.drawColorBlock(register.$clone(), registerDrawPos.$clone(), this.blockSize.$clone());

                var registerPos = this.gifScriptState.getRegisterPosition(register.$clone()).$clone();
                this.drawColorBlock(registerPos.$clone(), new Microsoft.Xna.Framework.Vector2.$ctor2(registerDrawPos.x + this.blockSize.x + 1, registerDrawPos.y), this.blockSize.$clone());
                this.drawCell(this.gifScriptState.getRegisterTarget(register.$clone()), registerPos.R16, registerPos.G16, registerPos.B16, new Microsoft.Xna.Framework.Vector2.$ctor2(registerDrawPos.x + this.blockSize.x * 2 + 2, registerDrawPos.y), this.blockSize.$clone());

                if (GifScript.ColorRGB.op_Equality(this.gifScriptState.getrunningRegister(), register)) {
                    this.drawImage(this.runningTexture, new Microsoft.Xna.Framework.Vector2.$ctor2(registerDrawPos.x + 17, registerDrawPos.y + 18));
                }

                registerDrawPos.y += this.registersScreenSpacing;
            }
            Bridge.global.requestAnimationFrame(Bridge.fn.bind(this, $asm.$.GifScriptDebugger.Game1.f4));
        },
        drawCube: function (cube, frame, highlightPos, pos, size) {
            var $t, $t1;
            for (var x = 0; x < 16; x = (x + 1) | 0) {
                this.drawString("" + String.fromCharCode(this.getHexChar(x)), new Microsoft.Xna.Framework.Vector2.$ctor2(pos.x + 16 + x * size.x, pos.y - 20), new Microsoft.Xna.Framework.Color.$ctor6(((x * 16) | 0), 0, 0));
                this.drawString("" + String.fromCharCode(this.getHexChar(x)), new Microsoft.Xna.Framework.Vector2.$ctor2(pos.x + 16 + x * size.x, pos.y + 10 + 16 * size.y), this.showingPosition.B16 === x ? Microsoft.Xna.Framework.Color.getYellow() : new Microsoft.Xna.Framework.Color.$ctor6(0, 0, ((x * 16) | 0)));
            }

            for (var y = 0; y < 16; y = (y + 1) | 0) {
                this.drawString("" + String.fromCharCode(this.getHexChar(y)), new Microsoft.Xna.Framework.Vector2.$ctor2(pos.x - 16, pos.y + 10 + y * size.y), new Microsoft.Xna.Framework.Color.$ctor6(0, ((y * 16) | 0), 0));
            }
            var size_ = size.$clone();
            this.drawRectangle(GifScriptDebugger.Extensions.toRectangle(pos, Microsoft.Xna.Framework.Vector2.op_Multiply$1(size_, 16)), Microsoft.Xna.Framework.Color.getBlack().$clone());
            size_ = size.$clone();
            this.drawRectangle(GifScriptDebugger.Extensions.toRectangle(new Microsoft.Xna.Framework.Vector2.$ctor2(pos.x + highlightPos.R16 * size_.x - 1, pos.y + highlightPos.G16 * size_.y - 1), new Microsoft.Xna.Framework.Vector2.$ctor2(size_.x + 2, size_.y + 2)), Microsoft.Xna.Framework.Color.getWhite().$clone());
            for (var x1 = 0; x1 < 16; x1 = (x1 + 1) | 0) {
                for (var y1 = 0; y1 < 16; y1 = (y1 + 1) | 0) {
                    this.drawCell(cube, x1, y1, frame, new Microsoft.Xna.Framework.Vector2.$ctor2(pos.x + x1 * size.x, pos.y + y1 * size.y), new Microsoft.Xna.Framework.Vector2.$ctor2(size.x - 1, size.y - 1));
                }
            }

            $t = Bridge.getEnumerator(this.breakpoints);
            while ($t.moveNext()) {
                var b = $t.getCurrent();
                if (Bridge.referenceEquals(b.cube, this.showingCube) && b.position.B16 === this.showingPosition.B16) {
                    this.drawImage(this.breakpointTexture, new Microsoft.Xna.Framework.Vector2.$ctor2(pos.x + b.position.R16 * size.x + 35, pos.y + b.position.G16 * size.y + 18));
                }
            }

            $t1 = Bridge.getEnumerator(this.interestingRegisters);
            while ($t1.moveNext()) {
                var register = $t1.getCurrent();
                var registerCube = this.gifScriptState.getRegisterTarget(register.$clone());
                if (Bridge.referenceEquals(cube, registerCube)) {
                    var registerPos = this.gifScriptState.getRegisterPosition(register.$clone()).$clone();
                    if (registerPos.B16 === frame) {
                        this.drawPointer(register.$clone(), new Microsoft.Xna.Framework.Vector2.$ctor2(pos.x + registerPos.R16 * size.x, pos.y + registerPos.G16 * size.y), size.$clone());
                    }
                }
            }
        },
        drawImage: function (image, position) {
            this.context.drawImage(image, position.x, position.y);
        },
        drawPointer: function (color, pos, size) {
            this.drawImage(this.pointerTexture, new Microsoft.Xna.Framework.Vector2.$ctor2(Bridge.Int.clip32(pos.x), Bridge.Int.clip32(pos.y + size.y - 16)));
            this.drawRectangle(new Microsoft.Xna.Framework.Rectangle.$ctor2(Bridge.Int.clip32(pos.x - 8), Bridge.Int.clip32(pos.y + size.y - 8), 16, 16), GifScriptDebugger.Extensions.toXNAColor(color));
        },
        drawCell: function (cube, x, y, z, pos, size) {
            var color = cube.getItem(new GifScript.ColorRGB.$ctor1(((((x * 17) | 0)) & 255), ((((y * 17) | 0)) & 255), ((((z * 17) | 0)) & 255))).$clone();
            this.drawRectangle(GifScriptDebugger.Extensions.toRectangle(pos, size.$clone()), GifScriptDebugger.Extensions.toXNAColor(color));
            this.drawString(this.colorToString(color.$clone()), pos.$clone(), this.getContrastingColor(color.$clone()).$clone());
        },
        getContrastingColor: function (color) {
            if (color.isBlack()) {
                return new Microsoft.Xna.Framework.Color.$ctor8(0.2, 0.2, 0.2);
            } else {
                return color.G16 >= 8 ? Microsoft.Xna.Framework.Color.getBlack() : Microsoft.Xna.Framework.Color.getWhite();
            }
        },
        getHexString: function (color) {
            return System.String.concat(this.getHexString$1(color.r), this.getHexString$1(color.g), this.getHexString$1(color.b));
        },
        getHexString$1: function (C16) {
            return "" + String.fromCharCode(this.getHexChar(C16 >> 4)) + String.fromCharCode(this.getHexChar(C16 % 16));
        },
        getHexChar: function (C16) {
            return "0123456789ABCDEF".charCodeAt(C16);
        },
        colorToString: function (color) {
            if (color.r === ((color.R16 * 17) | 0) && color.g === ((color.G16 * 17) | 0) && color.b === ((color.B16 * 17) | 0)) {
                var hexSignature = color.gethexSignature();
                var result = { };
                if (this.instructionNames.tryGetValue(hexSignature, result)) {
                    return result.v;
                }
            }

            return this.getHexString(color.$clone());
        },
        drawGifValue: function (value, pos, size) {
            if (Bridge.is(value, GifScript.GifCursor)) {
                var cursor = Bridge.cast(value, GifScript.GifCursor);
                this.drawCell(cursor.cube, cursor.position.R16, cursor.position.G16, cursor.position.B16, pos.$clone(), size.$clone());
            } else {
                this.drawColorBlock(value.GifScript$IGifValue$read().$clone(), pos.$clone(), size.$clone());
            }
        },
        drawColorBlock: function (color, pos, size) {
            this.drawRectangle(GifScriptDebugger.Extensions.toRectangle(pos, size.$clone()), GifScriptDebugger.Extensions.toXNAColor(color));
            this.drawString(this.getHexString(color.$clone()), pos.$clone(), this.getContrastingColor(color.$clone()).$clone());
        },
        doRestart: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                $returnValue, 
                decoder, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = GifScriptDebugger.Game1.loadGif("colorcube2.gif");
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    decoder = $taskResult1;
                                        this.gifScriptState = new GifScript.GifScriptState();
                                        this.gifScriptState.init(new GifScript.GifCube.$ctor1(decoder));

                                        this.addInterestingRegister(this.gifScriptState.getrunningRegister().$clone());
                                        this.showRegister(this.gifScriptState.getrunningRegister().$clone());
                                    $tcs.setResult(null);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);

            $asyncBody();
            return $tcs.task;
        }
    });

    Bridge.ns("GifScriptDebugger.Game1", $asm.$);

    Bridge.apply($asm.$.GifScriptDebugger.Game1, {
        f1: function (frames) {
            GifScriptDebugger.Game1.gifLoaded(frames);
        },
        f2: function (_o1) {
            _o1.add(0, "RTN");
            _o1.add(3276, "SET");
            _o1.add(3212, "CALL");
            _o1.add(3076, "LOAD");
            _o1.add(3204, "SAVE");
            _o1.add(3268, "TARG");
            _o1.add(12, "POS");
            _o1.add(140, "VAL");
            _o1.add(204, "DATA");
            _o1.add(3084, "MOD");
            return _o1;
        },
        f3: function (e) {
            this.mousePoint = new Microsoft.Xna.Framework.Point.$ctor2(e.layerX, e.layerY);
            this.mouseDown = true;
        },
        f4: function (e) {
            this.draw();
        }
    });

    Bridge.define("GifScriptDebugger.Game1.Breakpoint", {
        cube: null,
        config: {
            init: function () {
                this.position = new GifScript.ColorRGB();
            }
        }
    });
});
