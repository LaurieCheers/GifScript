/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("GifScriptDebugger.Bridge", function ($asm, globals) {
    "use strict";

    Bridge.define("GifScript.ColorRGB", {
        $kind: "struct",
        statics: {
            config: {
                init: function () {
                    this.black = new GifScript.ColorRGB.$ctor1(0, 0, 0);
                    this.white = new GifScript.ColorRGB.$ctor1(255, 255, 255);
                }
            },
            makePalette: function (table) {
                var tab = System.Array.init(((Bridge.Int.div(table.length, 3)) | 0), function (){
                    return new GifScript.ColorRGB();
                }, GifScript.ColorRGB);
                var i = 0;
                var j = 0;
                while (i < table.length) {
                    var r = table[Bridge.identity(i, (i = (i + 1) | 0))];
                    var g = table[Bridge.identity(i, (i = (i + 1) | 0))];
                    var b = table[Bridge.identity(i, (i = (i + 1) | 0))];
                    var c = new GifScript.ColorRGB.$ctor1(r, g, b);
                    tab[Bridge.identity(j, (j = (j + 1) | 0))] = c.$clone();
                }
                return tab;
            },
            op_Addition: function (lhs, rhs) {
                return new GifScript.ColorRGB.$ctor1(((((lhs.r + rhs.r) | 0)) & 255), ((((lhs.g + rhs.g) | 0)) & 255), ((((lhs.b + rhs.b) | 0)) & 255));
            },
            op_Equality: function (lhs, rhs) {
                return lhs.r === rhs.r && lhs.g === rhs.g && lhs.b === rhs.b;
            },
            op_Inequality: function (lhs, rhs) {
                return lhs.r !== rhs.r || lhs.g !== rhs.g || lhs.b !== rhs.b;
            },
            getDefaultValue: function () { return new GifScript.ColorRGB(); }
        },
        r: 0,
        g: 0,
        b: 0,
        R16: 0,
        G16: 0,
        B16: 0,
        $ctor1: function (r, g, b) {
            this.$initialize();
            this.r = r;
            this.g = g;
            this.b = b;
            this.R16 = (((Bridge.Int.div(r, 16)) | 0)) & 255;
            this.G16 = (((Bridge.Int.div(g, 16)) | 0)) & 255;
            this.B16 = (((Bridge.Int.div(b, 16)) | 0)) & 255;
        },
        ctor: function () {
            this.$initialize();
        },
        gethexSignature: function () {
            return (((((this.R16 << 8) + (this.G16 << 4)) | 0) + this.B16) | 0);
        },
        equals: function (other) {
            return GifScript.ColorRGB.op_Equality(this, other);
        },
        isBlack: function () {
            return this.r === 0 && this.g === 0 && this.b === 0;
        },
        getAdjacentRGColors: function () {
            var result = new (System.Collections.Generic.List$1(GifScript.ColorRGB))();

            if (this.r > 0) {
                result.add(new GifScript.ColorRGB.$ctor1(((((this.r - 1) | 0)) & 255), this.g, this.b));
            }
            if (this.r < 255) {
                result.add(new GifScript.ColorRGB.$ctor1(((((this.r + 1) | 0)) & 255), this.g, this.b));
            }

            if (this.g > 0) {
                result.add(new GifScript.ColorRGB.$ctor1(this.r, ((((this.g - 1) | 0)) & 255), this.b));
            }
            if (this.g < 255) {
                result.add(new GifScript.ColorRGB.$ctor1(this.r, ((((this.g + 1) | 0)) & 255), this.b));
            }

            return result;
        },
        increment: function (overflow) {
            if (this.R16 < 15) {
                overflow.v = false;
                return new GifScript.ColorRGB.$ctor1(((((17 * (((this.R16 + 1) | 0))) | 0)) & 255), this.g, this.b);
            } else if (this.G16 < 15) {
                overflow.v = false;
                return new GifScript.ColorRGB.$ctor1(0, ((((17 * (((this.G16 + 1) | 0))) | 0)) & 255), this.b);
            } else if (this.B16 < 15) {
                overflow.v = false;
                return new GifScript.ColorRGB.$ctor1(0, 0, ((((17 * (((this.B16 + 1) | 0))) | 0)) & 255));
            } else {
                overflow.v = true;
                return new GifScript.ColorRGB.ctor();
            }
        },
        getOffsetTo: function (next) {
            return (((((((next.r - this.r) | 0)) + (((((next.g - this.g) | 0)) * 255) | 0)) | 0) + (((((((next.b - this.b) | 0)) * 255) | 0) * 255) | 0)) | 0);
        },
        addOffset: function (offset, overflow) {
            var newR = this.r;
            var newG = this.g;
            var newB = this.b;
            if (offset > 65025) {
                var addB = (Bridge.Int.div(offset, (65025))) | 0;
                offset = (offset - (((((addB * 255) | 0) * 255) | 0))) | 0;
                if (((newB + addB) | 0) <= 255) {
                    newB = (((newB + addB) | 0)) & 255;
                } else {
                    overflow.v = true;
                    return GifScript.ColorRGB.black.$clone();
                }
            }

            if (offset > 255) {
                var addG = (Bridge.Int.div(offset, 255)) | 0;
                offset = (offset - (((addG * 255) | 0))) | 0;
                if (((newG + addG) | 0) <= 255) {
                    newG = (((newG + addG) | 0)) & 255;
                } else if (newB < 255) {
                    newG = (((((newG + addG) | 0) - 255) | 0)) & 255;
                    newB = (newB + 1) & 255;
                } else {
                    overflow.v = true;
                    return GifScript.ColorRGB.black.$clone();
                }
            }

            if (((newR + offset) | 0) <= 255) {
                newR = (((newR + offset) | 0)) & 255;
            } else {
                newR = (((((newR + offset) | 0) - 255) | 0)) & 255;
                if (newG < 255) {
                    newG = (newG + 1) & 255;
                } else if (newB < 255) {
                    newG = 0;
                    newB = (newB + 1) & 255;
                } else {
                    overflow.v = true;
                    return GifScript.ColorRGB.black.$clone();
                }
            }

            overflow.v = false;
            return new GifScript.ColorRGB.$ctor1(newR, newG, newB);
        },
        getHashCode: function () {
            var h = Bridge.addHash([2981347765, this.r, this.g, this.b, this.R16, this.G16, this.B16]);
            return h;
        },
        $clone: function (to) {
            var s = to || new GifScript.ColorRGB();
            s.r = this.r;
            s.g = this.g;
            s.b = this.b;
            s.R16 = this.R16;
            s.G16 = this.G16;
            s.B16 = this.B16;
            return s;
        }
    });

    Bridge.define("GifScript.GifCube", {
        slices: null,
        config: {
            init: function () {
                this.slices = System.Array.init(16, null, GifScript.GifCubeSlice);
            }
        },
        ctor: function () {
            this.$initialize();
        },
        $ctor1: function (decoder) {
            this.$initialize();
            for (var frameIdx = 0; frameIdx < decoder.length && frameIdx < 16; frameIdx = (frameIdx + 1) & 255) {
                this.addFrame(frameIdx, new GifScript.GifCubeSlice.$ctor2(decoder[frameIdx]));
            }
        },
        getItem: function (index) {
            if (this.slices[index.B16] != null) {
                return this.slices[index.B16].getItem(index);
            } else {
                return GifScript.ColorRGB.black.$clone();
            }
        },
        setItem: function (index, value) {
            if (this.slices[index.B16] == null) {
                this.addFrame(index.B16, new GifScript.GifCubeSlice.ctor());
            }

            this.slices[index.B16].setItem(index, value.$clone());
        },
        addFrame: function (T, slice) {
            this.slices[T] = slice;
        }
    });

    Bridge.define("GifScript.GifCubeSlice", {
        pixels: null,
        config: {
            init: function () {
                this.pixels = System.Array.create(new GifScript.ColorRGB(), null, GifScript.ColorRGB, 16, 16);
            }
        },
        ctor: function () {
            this.$initialize();
        },
        $ctor2: function (image) {
            this.$initialize();
            for (var x = 0; x < 16; x = (x + 1) | 0) {
                for (var y = 0; y < 16; y = (y + 1) | 0) {
                    var item = image[((x + ((y * 16) | 0)) | 0)];
                    this.pixels.set([x, y], new GifScript.ColorRGB.$ctor1(item[0], item[1], item[2]));
                }
            }
        },
        $ctor1: function (indexedPixels, width, palette) {
            this.$initialize();            var $t;

            var x = 0;
            var y = 0;
            $t = Bridge.getEnumerator(indexedPixels);
            while ($t.moveNext()) {
                var p = $t.getCurrent();
                if (x < 16) {
                    this.pixels.set([x, y], palette[p].$clone());
                }

                x = Bridge.Int.sxs((x + 1) & 65535);
                if (x === width) {
                    x = 0;
                    y = Bridge.Int.sxs((y + 1) & 65535);
                }
                if (y >= 16) {
                    break;
                }
            }
    },
    getItem: function (index) {
        return this.pixels.get([index.R16, index.G16]).$clone();
    },
    setItem: function (index, value) {
        this.pixels.set([index.R16, index.G16], value.$clone());
    },
    getItem$1: function (X, Y) {
        return this.pixels.get([X, Y]).$clone();
    },
    setItem$1: function (X, Y, value) {
        this.pixels.set([X, Y], value.$clone());
    }
    });

    Bridge.define("GifScript.IGifValue", {
        $kind: "interface"
    });

    Bridge.define("GifScript.GifScriptState", {
        registerPositions: null,
        registerTargets: null,
        overflowTryOrder: null,
        config: {
            properties: {
                runningRegister: null,
                current: null,
                stack: null,
                halted: false
            },
            init: function () {
                this.registerPositions = new GifScript.GifCube.ctor();
                this.registerTargets = System.Array.create(null, null, GifScript.GifCube, 16, 16, 16);
                this.overflowTryOrder = System.Array.init([1, 0, 2], System.Int32);
                this.runningRegister = new GifScript.ColorRGB();
            }
        },
        init: function (program) {
            this.setstack(new (System.Collections.Generic.Stack$1(GifScript.GifStackFrame)).ctor());
            //stack = new List<GifStackFrame>() { new GifStackFrame(program, ColorRGB.Black, ColorDir.PlusR) };
            for (var x = 0; x < 16; x = (x + 1) | 0) {
                for (var y = 0; y < 16; y = (y + 1) | 0) {
                    for (var z = 0; z < 16; z = (z + 1) | 0) {
                        this.registerTargets.set([x, y, z], new GifScript.GifCube.ctor());
                    }
                }
            }

            this.setrunningRegister(GifScript.ColorRGB.white.$clone());
            this.registerTargets.set([this.getrunningRegister().R16, this.getrunningRegister().G16, this.getrunningRegister().B16], program);
            this.registerTargets.set([8, 8, 8], this.registerPositions);
            this.setcurrent(new GifScript.GifValue_Readonly(GifScript.ColorRGB.black.$clone()));
            this.sethalted(false);
        },
        getRegisterTarget: function (register) {
            return this.registerTargets.get([register.R16, register.G16, register.B16]);
        },
        getRegisterPosition: function (register) {
            return this.registerPositions.getItem(register);
        },
        tick: function () {
            if (this.gethalted()) {
                return;
            }

            var programPosition = this.registerPositions.getItem(this.getrunningRegister()).$clone();
            var program = this.getRegisterTarget(this.getrunningRegister().$clone());
            var instruction = program.getItem(programPosition).$clone();
            var currentColor = this.getcurrent().GifScript$IGifValue$read().$clone();

            // point to the next instruction
            var overflow = { };
            this.registerPositions.setItem(this.getrunningRegister(), this.registerPositions.getItem(this.getrunningRegister()).increment(overflow).$clone());

            if (overflow.v) {
                this.sethalted(true);
                return;
            }

            switch (instruction.gethexSignature()) {
                case 0:  // Return
                    this.doReturn(this.getcurrent());
                    break;
                case 3276:  // Assign
                    this.getstack().push(new GifScript.GifStackFrame.$ctor1(this.getcurrent(), 3276, this.getrunningRegister().$clone()));
                    break;
                case 3212:  // Call
                    this.getstack().push(new GifScript.GifStackFrame.$ctor1(this.getcurrent(), 3212, this.getrunningRegister().$clone()));
                    break;
                case 3076:  // Load GIF
                    break;
                case 3204:  // Save GIF
                    //registerTargets[currentColor.R16, currentColor.G16, currentColor.B16].Save(GetRegisterName(currentColor) + ".gif");
                    break;
                case 3268:  // Retarget
                    this.getstack().push(new GifScript.GifStackFrame.$ctor1(this.getcurrent(), 3268, this.getrunningRegister().$clone()));
                    break;
                case 12:  // RegisterPos
                    this.setcurrent(new GifScript.GifCursor(currentColor.$clone(), currentColor.$clone(), this.registerPositions));
                    break;
                case 140:  // RegisterVal
                    this.setcurrent(new GifScript.GifCursor(currentColor.$clone(), this.registerPositions.getItem(currentColor), this.registerTargets.get([currentColor.R16, currentColor.G16, currentColor.B16])));
                    break;
                case 204:  // Data
                    this.setcurrent(new GifScript.GifCursor(GifScript.ColorRGB.white.$clone(), currentColor.$clone(), this.registerTargets.get([15, 15, 15])));
                    break;
                case 3084:  // Modify
                    var failed = { };
                    this.registerPositions.setItem(this.getrunningRegister(), GifScript.ColorRGB.op_Addition(this.registerPositions.getItem(this.getrunningRegister()), new GifScript.ColorRGB.$ctor1(48, 0, 0)));
                    this.setcurrent(this.modify(currentColor.$clone(), System.Array.init([program.getItem(GifScript.ColorRGB.op_Addition(programPosition, new GifScript.ColorRGB.$ctor1(16, 0, 0))), program.getItem(GifScript.ColorRGB.op_Addition(programPosition, new GifScript.ColorRGB.$ctor1(32, 0, 0))), program.getItem(GifScript.ColorRGB.op_Addition(programPosition, new GifScript.ColorRGB.$ctor1(48, 0, 0)))], GifScript.ColorRGB), failed));
                    if (failed.v) {
                        this.doReturn(this.getcurrent());
                    }
                    break;
                default: 
                    this.setcurrent(new GifScript.GifCursor(this.getrunningRegister().$clone(), programPosition.$clone(), program));
                    break;
            }
        },
        getRegisterName: function (registerId) {
            return "" + String.fromCharCode(this.getHexChar(registerId.R16)) + String.fromCharCode(this.getHexChar(registerId.R16)) + String.fromCharCode(this.getHexChar(registerId.G16)) + String.fromCharCode(this.getHexChar(registerId.G16)) + String.fromCharCode(this.getHexChar(registerId.B16)) + String.fromCharCode(this.getHexChar(registerId.B16));
        },
        getHexChar: function (C16) {
            return "0123456789abcdef".charCodeAt(C16);
        },
        doReturn: function (returnValue) {
            if (this.getstack().getCount() === 0) {
                this.sethalted(true);
                return;
            } else {
                var returnFrame = this.getstack().pop();
                this.setrunningRegister(returnFrame.runningRegister.$clone());

                switch (returnFrame.rHSInstruction) {
                    case 3276:  // Assign
                        var failure = { };
                        returnValue.GifScript$IGifValue$write(returnFrame.lHSValue.GifScript$IGifValue$read().$clone(), failure);
                        if (failure.v) {
                            this.doReturn(returnValue);
                        }
                        break;
                    case 3212:  // Call
                        this.getstack().push(new GifScript.GifStackFrame.ctor(returnFrame.runningRegister.$clone()));
                        this.setcurrent(returnFrame.lHSValue);
                        this.setrunningRegister(returnValue.GifScript$IGifValue$read().$clone());
                        break;
                    case 3268:  // Retarget
                        var lhsColor = returnFrame.lHSValue.GifScript$IGifValue$read().$clone();
                        var rhsColor = returnValue.GifScript$IGifValue$read().$clone();
                        this.registerTargets.set([rhsColor.R16, rhsColor.G16, rhsColor.B16], this.registerTargets.get([lhsColor.R16, lhsColor.G16, lhsColor.B16]));
                        break;
                    default: 
                        break;
                }
            }
        },
        modify: function (value, modifyExamples, error) {
            //Given a sequence of example values, extrapolate the rule that's generating the sequence, and apply it to our value.

            // first step: if value is one of the examples, don't bother. We know exactly what to return.
            for (var Idx = 0; Idx < ((modifyExamples.length - 1) | 0); Idx = (Idx + 1) | 0) {
                if (modifyExamples[Idx].equals(value.$clone())) {
                    error.v = false;
                    return new GifScript.GifValue_Readonly(modifyExamples[((Idx + 1) | 0)].$clone());
                }
            }

            var rules = System.Array.init(3, 0, GifScript.GifScriptState.ModifyRule);
            var parameters = System.Array.init(3, 0, System.Int32);
            var examples = System.Array.init([System.Array.init([modifyExamples[0].r, modifyExamples[1].r, modifyExamples[2].r], System.Byte), System.Array.init([modifyExamples[0].g, modifyExamples[1].g, modifyExamples[2].g], System.Byte), System.Array.init([modifyExamples[0].b, modifyExamples[1].b, modifyExamples[2].b], System.Byte)], System.Array.type(System.Byte));
            rules[0] = this.deduceModifyRule(examples, 0, Bridge.ref(parameters, 0));
            rules[1] = this.deduceModifyRule(examples, 1, Bridge.ref(parameters, 1));
            rules[2] = this.deduceModifyRule(examples, 2, Bridge.ref(parameters, 2));

            //if we have at least one Unknown rule and at least one Wrap255Add or Wrap272Add, try inserting some Overflow rules.
            if (rules[1] === GifScript.GifScriptState.ModifyRule.Unknown) {
                //NB try to resolve the green channel first; the others are allowed to chain their Overflows off it, but not vice versa
                rules[1] = this.tryOverflowRule(rules, parameters, examples, 1);
            }

            if (rules[0] === GifScript.GifScriptState.ModifyRule.Unknown) {
                rules[0] = this.tryOverflowRule(rules, parameters, examples, 0);
            }

            if (rules[2] === GifScript.GifScriptState.ModifyRule.Unknown) {
                rules[2] = this.tryOverflowRule(rules, parameters, examples, 2);
            }

            var errorR = { }, errorG = { }, errorB = { };
            var input = System.Array.init([value.r, value.g, value.b], System.Byte);
            var R = this.applyRule(input, rules, parameters, 0, errorR);
            var G = this.applyRule(input, rules, parameters, 1, errorG);
            var B = this.applyRule(input, rules, parameters, 2, errorB);

            error.v = errorR.v || errorG.v || errorB.v;
            return new GifScript.GifValue_Readonly(new GifScript.ColorRGB.$ctor1(R, G, B));
        },
        deduceModifyRule: function (examples, channel, parameter) {
            var channelExamples = examples[channel];

            if (channelExamples[0] === channelExamples[1] && channelExamples[0] === channelExamples[2]) {
                return ((GifScript.GifScriptState.ModifyRule.CopyR + channel) | 0);
            }

            if (channelExamples[1] === examples[0][0] && channelExamples[2] === examples[0][1]) {
                return GifScript.GifScriptState.ModifyRule.CopyR;
            }

            if (channelExamples[1] === examples[1][0] && channelExamples[2] === examples[1][1]) {
                return GifScript.GifScriptState.ModifyRule.CopyG;
            }

            if (channelExamples[1] === examples[2][0] && channelExamples[2] === examples[2][1]) {
                return GifScript.GifScriptState.ModifyRule.CopyB;
            }

            if (channelExamples[1] === channelExamples[2]) {
                parameter.v = channelExamples[1];
                return GifScript.GifScriptState.ModifyRule.SetConstant;
            }

            if (channelExamples[1] === ((255 - channelExamples[0]) | 0) && channelExamples[2] === ((255 - channelExamples[1]) | 0)) {
                return GifScript.GifScriptState.ModifyRule.Invert;
            }

            if (((channelExamples[1] - channelExamples[0]) | 0) === ((channelExamples[2] - channelExamples[1]) | 0)) {
                parameter.v = (channelExamples[1] - channelExamples[0]) | 0;
                return GifScript.GifScriptState.ModifyRule.Add;
            }

            if ((((((channelExamples[1] + 256) | 0) - channelExamples[0]) | 0)) % 256 === (((((channelExamples[2] + 256) | 0) - channelExamples[1]) | 0)) % 256) {
                parameter.v = (((((channelExamples[1] + 256) | 0) - channelExamples[0]) | 0)) % 256;
                if (parameter.v > 127) {
                    parameter.v = (parameter.v - 256) | 0;
                } else {
                    if (parameter.v < -128) {
                        parameter.v = (parameter.v + 256) | 0;
                    }
                }
                return GifScript.GifScriptState.ModifyRule.Wrap255Add;
            }

            // a bit weird, but we also support a wrap ceiling of 272 - because we want 0xEE, 0xFF, 0x00 to be a valid wrapping sequence.
            if ((((((channelExamples[1] + 272) | 0) - channelExamples[0]) | 0)) % 272 === (((((channelExamples[2] + 272) | 0) - channelExamples[1]) | 0)) % 272) {
                parameter.v = (((((channelExamples[1] + 272) | 0) - channelExamples[0]) | 0)) % 272;
                if (parameter.v > 127) {
                    parameter.v = (parameter.v - 256) | 0;
                } else {
                    if (parameter.v < -128) {
                        parameter.v = (parameter.v + 256) | 0;
                    }
                }
                return GifScript.GifScriptState.ModifyRule.Wrap272Add;
            }

            return GifScript.GifScriptState.ModifyRule.Unknown;
        },
        applyRule: function (input, rules, parameters, channel, error) {
            error.v = false;

            switch (rules[channel]) {
                case GifScript.GifScriptState.ModifyRule.CopyR: 
                    return input[0];
                case GifScript.GifScriptState.ModifyRule.CopyG: 
                    return input[1];
                case GifScript.GifScriptState.ModifyRule.CopyB: 
                    return input[2];
                case GifScript.GifScriptState.ModifyRule.SetConstant: 
                    return ((parameters[channel]) & 255);
                case GifScript.GifScriptState.ModifyRule.Invert: 
                    return ((((255 - input[channel]) | 0)) & 255);
                case GifScript.GifScriptState.ModifyRule.Add: 
                    {
                        var result = (input[channel] + parameters[channel]) | 0;
                        if (result < 0 || result > 255) {
                            error.v = true;
                        }
                        return (result & 255);
                    }
                case GifScript.GifScriptState.ModifyRule.Wrap255Add: 
                    {
                        var result1 = (input[channel] + parameters[channel]) | 0;
                        return (result1 & 255);
                    }
                case GifScript.GifScriptState.ModifyRule.Wrap272Add: 
                    {
                        var result2 = (input[channel] + parameters[channel]) | 0;
                        return ((result2 % 272) & 255);
                    }
                case GifScript.GifScriptState.ModifyRule.OverflowR: 
                case GifScript.GifScriptState.ModifyRule.OverflowG: 
                case GifScript.GifScriptState.ModifyRule.OverflowB: 
                    {
                        if (this.checkOverflow(((rules[channel] - GifScript.GifScriptState.ModifyRule.OverflowR) | 0), input, rules, parameters)) {
                            var result3 = (input[channel] + parameters[channel]) | 0;
                            if (result3 < 0 || result3 > 255) {
                                error.v = true;
                            }
                            return (result3 & 255);
                        } else {
                            return input[channel];
                        }
                    }
                case GifScript.GifScriptState.ModifyRule.Wrap255OverflowR: 
                case GifScript.GifScriptState.ModifyRule.Wrap255OverflowG: 
                case GifScript.GifScriptState.ModifyRule.Wrap255OverflowB: 
                    {
                        if (this.checkOverflow(((rules[channel] - GifScript.GifScriptState.ModifyRule.Wrap255OverflowR) | 0), input, rules, parameters)) {
                            var result4 = (input[channel] + parameters[channel]) | 0;
                            return (result4 & 255);
                        } else {
                            return input[channel];
                        }
                    }
                case GifScript.GifScriptState.ModifyRule.Wrap272OverflowR: 
                case GifScript.GifScriptState.ModifyRule.Wrap272OverflowG: 
                case GifScript.GifScriptState.ModifyRule.Wrap272OverflowB: 
                    {
                        if (this.checkOverflow(((rules[channel] - GifScript.GifScriptState.ModifyRule.Wrap272OverflowR) | 0), input, rules, parameters)) {
                            var result5 = (input[channel] + parameters[channel]) | 0;
                            return ((result5 % 272) & 255);
                        } else {
                            return input[channel];
                        }
                    }
                default: 
                    error.v = true;
                    return 0;
            }
        },
        tryOverflowRule: function (rulesSoFar, parameters, examples, channel) {
            var channelExamples = examples[channel];
            var example0 = System.Array.init([examples[0][0], examples[1][0], examples[2][0]], System.Byte);
            var example1 = System.Array.init([examples[0][1], examples[1][1], examples[2][1]], System.Byte);

            for (var tryOrderIdx = 0; tryOrderIdx < 3; tryOrderIdx = (tryOrderIdx + 1) | 0) {
                var tryChannel = this.overflowTryOrder[tryOrderIdx];
                if (rulesSoFar[tryChannel] >= GifScript.GifScriptState.ModifyRule.Wrap255Add) {
                    var overflow0 = this.checkOverflow(tryChannel, example0, rulesSoFar, parameters);
                    var overflow1 = this.checkOverflow(tryChannel, example1, rulesSoFar, parameters);

                    // for an overflow rule to fit, this channel must change when and only when the target overflows
                    if (overflow0 !== (channelExamples[0] !== channelExamples[1])) {
                        break;
                    }
                    if (overflow1 !== (channelExamples[1] !== channelExamples[2])) {
                        break;
                    }
                    // and the overflow must happen exactly once
                    if (overflow0 === overflow1) {
                        break;
                    }

                    var channelExampleA;
                    var channelExampleB;
                    if (overflow0) {
                        channelExampleA = channelExamples[0];
                        channelExampleB = channelExamples[1];
                    } else {
                        channelExampleA = channelExamples[1];
                        channelExampleB = channelExamples[2];
                    }

                    var parameter;
                    if (rulesSoFar[tryChannel] >= GifScript.GifScriptState.ModifyRule.Wrap272Add) {
                        parameter = (((((channelExampleB + 272) | 0) - channelExampleA) | 0)) % 272;
                    } else {
                        parameter = (((((channelExampleB + 256) | 0) - channelExampleA) | 0)) % 256;
                    }

                    if (parameter > 127) {
                        parameter = (parameter - 256) | 0;
                    } else {
                        if (parameter < -128) {
                            parameter = (parameter + 256) | 0;
                        }
                    }

                    parameters[channel] = parameter;
                    if (((channelExampleA + parameter) | 0) !== channelExampleB) {
                        // the overflow rule itself overflowed!
                        if (rulesSoFar[tryChannel] >= GifScript.GifScriptState.ModifyRule.Wrap272Add) {
                            return ((GifScript.GifScriptState.ModifyRule.Wrap272OverflowR + tryChannel) | 0);
                        } else {
                            return ((GifScript.GifScriptState.ModifyRule.Wrap255OverflowR + tryChannel) | 0);
                        }
                    } else {
                        return ((GifScript.GifScriptState.ModifyRule.OverflowR + tryChannel) | 0);
                    }
                }
            }

            return GifScript.GifScriptState.ModifyRule.Unknown;
        },
        checkOverflow: function (channel, RGB, rules, parameters) {
            var newValue = (RGB[channel] + parameters[channel]) | 0;
            switch (rules[channel]) {
                case GifScript.GifScriptState.ModifyRule.Wrap255Add: 
                case GifScript.GifScriptState.ModifyRule.Wrap272Add: 
                    return newValue < 0 || newValue > 255;
                case GifScript.GifScriptState.ModifyRule.Wrap255OverflowR: 
                case GifScript.GifScriptState.ModifyRule.Wrap272OverflowR: 
                    if (this.checkOverflow(0, RGB, rules, parameters)) {
                        return newValue < 0 || newValue > 255;
                    } else {
                        return false;
                    }
                case GifScript.GifScriptState.ModifyRule.Wrap255OverflowG: 
                case GifScript.GifScriptState.ModifyRule.Wrap272OverflowG: 
                    if (this.checkOverflow(1, RGB, rules, parameters)) {
                        return newValue < 0 || newValue > 255;
                    } else {
                        return false;
                    }
                case GifScript.GifScriptState.ModifyRule.Wrap255OverflowB: 
                case GifScript.GifScriptState.ModifyRule.Wrap272OverflowB: 
                    if (this.checkOverflow(2, RGB, rules, parameters)) {
                        return newValue < 0 || newValue > 255;
                    } else {
                        return false;
                    }
                default: 
                    return false;
            }
        }
    });

    Bridge.define("GifScript.GifScriptState.ModifyRule", {
        $kind: "enum",
        statics: {
            Unknown: 0,
            CopyR: 1,
            CopyG: 2,
            CopyB: 3,
            SetConstant: 4,
            Invert: 5,
            Add: 6,
            OverflowR: 7,
            OverflowG: 8,
            OverflowB: 9,
            Wrap255Add: 10,
            Wrap255OverflowR: 11,
            Wrap255OverflowG: 12,
            Wrap255OverflowB: 13,
            Wrap272Add: 14,
            Wrap272OverflowR: 15,
            Wrap272OverflowG: 16,
            Wrap272OverflowB: 17
        }
    });

    Bridge.define("GifScript.GifStackFrame", {
        lHSValue: null,
        rHSInstruction: 0,
        config: {
            init: function () {
                this.runningRegister = new GifScript.ColorRGB();
            }
        },
        ctor: function (runningRegister) {
            this.$initialize();
            this.runningRegister = runningRegister.$clone();
            this.rHSInstruction = 0;
        },
        $ctor1: function (LHSValue, RHSInstruction, runningRegister) {
            this.$initialize();
            this.lHSValue = LHSValue.GifScript$IGifValue$copy();
            this.rHSInstruction = RHSInstruction;
            this.runningRegister = runningRegister.$clone();
        }
    });

    Bridge.define("GifScript.GifCursor", {
        inherits: [GifScript.IGifValue],
        cube: null,
        config: {
            alias: [
            "copy", "GifScript$IGifValue$copy",
            "read", "GifScript$IGifValue$read",
            "write", "GifScript$IGifValue$write"
            ],
            init: function () {
                this.register = new GifScript.ColorRGB();
                this.position = new GifScript.ColorRGB();
            }
        },
        ctor: function (register, position, cube) {
            this.$initialize();
            this.register = register.$clone();
            this.position = position.$clone();
            this.cube = cube;
        },
        copy: function () {
            return new GifScript.GifCursor(this.register.$clone(), this.position.$clone(), this.cube);
        },
        read: function () {
            return this.cube.getItem(this.position);
        },
        write: function (color, error) {
            error.v = false;
            this.cube.setItem(this.position, color.$clone());
        }
    });

    Bridge.define("GifScript.GifValue_Readonly", {
        inherits: [GifScript.IGifValue],
        config: {
            alias: [
            "copy", "GifScript$IGifValue$copy",
            "read", "GifScript$IGifValue$read",
            "write", "GifScript$IGifValue$write"
            ],
            init: function () {
                this.value = new GifScript.ColorRGB();
            }
        },
        ctor: function (value) {
            this.$initialize();
            this.value = value.$clone();
        },
        copy: function () {
            return new GifScript.GifValue_Readonly(this.value.$clone());
        },
        read: function () {
            return this.value.$clone();
        },
        write: function (color, error) {
            error.v = true;
        }
    });
});
