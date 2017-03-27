Bridge.assembly("GifScriptDebugger.Bridge", function ($asm, globals) {
    "use strict";

    Bridge.define("ImageStyler.Color", {
        _value: 0,
        $ctor1: function (Value) {
            this.$initialize();
            this._value = Value;
        },
        ctor: function (R, G, B, A) {
            this.$initialize();
            this._value = (((((A + (((B * 256) | 0))) | 0) + (((G * 65536) | 0))) | 0) + (((R * 16777216) | 0))) | 0;
        },
        getR: function () {
            return this.getItem(0);
        },
        getG: function () {
            return this.getItem(1);
        },
        getB: function () {
            return this.getItem(2);
        },
        getA: function () {
            return this.getItem(3);
        },
        getValue: function () {
            return this._value;
        },
        setValue: function (value) {
            this._value = value;
        },
        getItem: function (index) {
            var possibility = Bridge.Int.clip32(Math.pow(256, ((3 - index) | 0)));
            return ((((Bridge.Int.div((this._value & (((possibility * 255) | 0))), possibility)) | 0)) & 255);
        },
        equals: function (o) {
            var color = Bridge.as(o, ImageStyler.Color);
            if (color == null) {
                return false;
            }
            return color.getValue() === this.getValue();
        }
    });

    Bridge.define("ImageStyler.Image", {
        _data: null,
        config: {
            events: {
                Load: null
            }
        },
        $ctor1: function (input) {
            this.$initialize();
            var file = input.files[0];
            var reader = new FileReader();
            reader.addEventListener("load", Bridge.fn.bind(this, function () {
                var image = Bridge.merge(new Image(), {
                    src: Bridge.cast(reader.result, String),
                    onload: Bridge.fn.bind(this, $asm.$.ImageStyler.Image.f1)
                } );
            }), false);
            reader.readAsDataURL(file);
        },
        ctor: function (image) {
            this.$initialize();
            this.imageLoad(image);
        },
        $ctor2: function (width, height) {
            this.$initialize();
            this._data = new ImageData(width, height);
            !Bridge.staticEquals(this.Load, null) ? this.Load() : null;
        },
        getDisplayImage: function () {
            var canvas = Bridge.merge(document.createElement('canvas'), {
                width: ((this.getWidth()) | 0),
                height: ((this.getHeight()) | 0)
            } );
            var context = canvas.getContext("2d");
            context.putImageData(this._data, 0, 0);
            return Bridge.merge(new Image(), {
                src: canvas.toDataURL()
            } );
        },
        getWidth: function () {
            return this._data.width;
        },
        getHeight: function () {
            return this._data.height;
        },
        getItem: function (X, Y) {
            return this.getColor(System.Int64.clipu32(System.Int64(X).add(System.Int64(Y).mul(System.Int64(this.getWidth())))));
        },
        setItem: function (X, Y, value) {
            this.setColor(System.Int64.clipu32(System.Int64(X).add(System.Int64(Y).mul(System.Int64(this.getWidth())))), value);
        },
        getColor: function (v) {
            return new ImageStyler.Color.ctor(this._data.data[((v * 4) >>> 0)], this._data.data[((((v * 4) >>> 0) + 1) >>> 0)], this._data.data[((((v * 4) >>> 0) + 2) >>> 0)], this._data.data[((((v * 4) >>> 0) + 3) >>> 0)]);
        },
        setColor: function (v, color) {
            for (var n = 0; n < 4; n = (n + 1) | 0) {
                this._data.data[System.Int64(v * 4).add(System.Int64(n))] = color.getItem(n);
            }
        },
        imageLoad: function (image) {
            var canvas = Bridge.merge(document.createElement('canvas'), {
                width: image.width,
                height: image.height
            } );
            var context = canvas.getContext("2d");
            context.drawImage(image, 0, 0);
            this._data = context.getImageData(0, 0, canvas.width, canvas.height);
            !Bridge.staticEquals(this.Load, null) ? this.Load() : null;
        }
    });

    Bridge.ns("ImageStyler.Image", $asm.$);

    Bridge.apply($asm.$.ImageStyler.Image, {
        f1: function (e) {
            this.imageLoad(Bridge.as(e.target, HTMLImageElement));
        }
    });
});
