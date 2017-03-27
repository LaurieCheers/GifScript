Bridge.assembly("GifScriptDebugger.Bridge", function ($asm, globals) {
    "use strict";

    /** @namespace Microsoft.Xna.Framework */

    /**
     * Describes a 32-bit packed color.
     *
     * @public
     * @class Microsoft.Xna.Framework.Color
     * @implements  System.IEquatable$1
     */
    Bridge.define("Microsoft.Xna.Framework.Color", {
        inherits: function () { return [System.IEquatable$1(Microsoft.Xna.Framework.Color)]; },
        $kind: "struct",
        statics: {
            ctor: function () {
                Microsoft.Xna.Framework.Color.setTransparentBlack(new Microsoft.Xna.Framework.Color.$ctor10(0));
                Microsoft.Xna.Framework.Color.setTransparent(new Microsoft.Xna.Framework.Color.$ctor10(0));
                Microsoft.Xna.Framework.Color.setAliceBlue(new Microsoft.Xna.Framework.Color.$ctor10(4294965488));
                Microsoft.Xna.Framework.Color.setAntiqueWhite(new Microsoft.Xna.Framework.Color.$ctor10(4292340730));
                Microsoft.Xna.Framework.Color.setAqua(new Microsoft.Xna.Framework.Color.$ctor10(4294967040));
                Microsoft.Xna.Framework.Color.setAquamarine(new Microsoft.Xna.Framework.Color.$ctor10(4292149119));
                Microsoft.Xna.Framework.Color.setAzure(new Microsoft.Xna.Framework.Color.$ctor10(4294967280));
                Microsoft.Xna.Framework.Color.setBeige(new Microsoft.Xna.Framework.Color.$ctor10(4292670965));
                Microsoft.Xna.Framework.Color.setBisque(new Microsoft.Xna.Framework.Color.$ctor10(4291093759));
                Microsoft.Xna.Framework.Color.setBlack(new Microsoft.Xna.Framework.Color.$ctor10(4278190080));
                Microsoft.Xna.Framework.Color.setBlanchedAlmond(new Microsoft.Xna.Framework.Color.$ctor10(4291685375));
                Microsoft.Xna.Framework.Color.setBlue(new Microsoft.Xna.Framework.Color.$ctor10(4294901760));
                Microsoft.Xna.Framework.Color.setBlueViolet(new Microsoft.Xna.Framework.Color.$ctor10(4293012362));
                Microsoft.Xna.Framework.Color.setBrown(new Microsoft.Xna.Framework.Color.$ctor10(4280953509));
                Microsoft.Xna.Framework.Color.setBurlyWood(new Microsoft.Xna.Framework.Color.$ctor10(4287084766));
                Microsoft.Xna.Framework.Color.setCadetBlue(new Microsoft.Xna.Framework.Color.$ctor10(4288716383));
                Microsoft.Xna.Framework.Color.setChartreuse(new Microsoft.Xna.Framework.Color.$ctor10(4278255487));
                Microsoft.Xna.Framework.Color.setChocolate(new Microsoft.Xna.Framework.Color.$ctor10(4280183250));
                Microsoft.Xna.Framework.Color.setCoral(new Microsoft.Xna.Framework.Color.$ctor10(4283465727));
                Microsoft.Xna.Framework.Color.setCornflowerBlue(new Microsoft.Xna.Framework.Color.$ctor10(4293760356));
                Microsoft.Xna.Framework.Color.setCornsilk(new Microsoft.Xna.Framework.Color.$ctor10(4292671743));
                Microsoft.Xna.Framework.Color.setCrimson(new Microsoft.Xna.Framework.Color.$ctor10(4282127580));
                Microsoft.Xna.Framework.Color.setCyan(new Microsoft.Xna.Framework.Color.$ctor10(4294967040));
                Microsoft.Xna.Framework.Color.setDarkBlue(new Microsoft.Xna.Framework.Color.$ctor10(4287299584));
                Microsoft.Xna.Framework.Color.setDarkCyan(new Microsoft.Xna.Framework.Color.$ctor10(4287335168));
                Microsoft.Xna.Framework.Color.setDarkGoldenrod(new Microsoft.Xna.Framework.Color.$ctor10(4278945464));
                Microsoft.Xna.Framework.Color.setDarkGray(new Microsoft.Xna.Framework.Color.$ctor10(4289309097));
                Microsoft.Xna.Framework.Color.setDarkGreen(new Microsoft.Xna.Framework.Color.$ctor10(4278215680));
                Microsoft.Xna.Framework.Color.setDarkKhaki(new Microsoft.Xna.Framework.Color.$ctor10(4285249469));
                Microsoft.Xna.Framework.Color.setDarkMagenta(new Microsoft.Xna.Framework.Color.$ctor10(4287299723));
                Microsoft.Xna.Framework.Color.setDarkOliveGreen(new Microsoft.Xna.Framework.Color.$ctor10(4281297749));
                Microsoft.Xna.Framework.Color.setDarkOrange(new Microsoft.Xna.Framework.Color.$ctor10(4278226175));
                Microsoft.Xna.Framework.Color.setDarkOrchid(new Microsoft.Xna.Framework.Color.$ctor10(4291572377));
                Microsoft.Xna.Framework.Color.setDarkRed(new Microsoft.Xna.Framework.Color.$ctor10(4278190219));
                Microsoft.Xna.Framework.Color.setDarkSalmon(new Microsoft.Xna.Framework.Color.$ctor10(4286224105));
                Microsoft.Xna.Framework.Color.setDarkSeaGreen(new Microsoft.Xna.Framework.Color.$ctor10(4287347855));
                Microsoft.Xna.Framework.Color.setDarkSlateBlue(new Microsoft.Xna.Framework.Color.$ctor10(4287315272));
                Microsoft.Xna.Framework.Color.setDarkSlateGray(new Microsoft.Xna.Framework.Color.$ctor10(4283387695));
                Microsoft.Xna.Framework.Color.setDarkTurquoise(new Microsoft.Xna.Framework.Color.$ctor10(4291939840));
                Microsoft.Xna.Framework.Color.setDarkViolet(new Microsoft.Xna.Framework.Color.$ctor10(4292018324));
                Microsoft.Xna.Framework.Color.setDeepPink(new Microsoft.Xna.Framework.Color.$ctor10(4287829247));
                Microsoft.Xna.Framework.Color.setDeepSkyBlue(new Microsoft.Xna.Framework.Color.$ctor10(4294950656));
                Microsoft.Xna.Framework.Color.setDimGray(new Microsoft.Xna.Framework.Color.$ctor10(4285098345));
                Microsoft.Xna.Framework.Color.setDodgerBlue(new Microsoft.Xna.Framework.Color.$ctor10(4294938654));
                Microsoft.Xna.Framework.Color.setFirebrick(new Microsoft.Xna.Framework.Color.$ctor10(4280427186));
                Microsoft.Xna.Framework.Color.setFloralWhite(new Microsoft.Xna.Framework.Color.$ctor10(4293982975));
                Microsoft.Xna.Framework.Color.setForestGreen(new Microsoft.Xna.Framework.Color.$ctor10(4280453922));
                Microsoft.Xna.Framework.Color.setFuchsia(new Microsoft.Xna.Framework.Color.$ctor10(4294902015));
                Microsoft.Xna.Framework.Color.setGainsboro(new Microsoft.Xna.Framework.Color.$ctor10(4292664540));
                Microsoft.Xna.Framework.Color.setGhostWhite(new Microsoft.Xna.Framework.Color.$ctor10(4294965496));
                Microsoft.Xna.Framework.Color.setGold(new Microsoft.Xna.Framework.Color.$ctor10(4278245375));
                Microsoft.Xna.Framework.Color.setGoldenrod(new Microsoft.Xna.Framework.Color.$ctor10(4280329690));
                Microsoft.Xna.Framework.Color.setGray(new Microsoft.Xna.Framework.Color.$ctor10(4286611584));
                Microsoft.Xna.Framework.Color.setGreen(new Microsoft.Xna.Framework.Color.$ctor10(4278222848));
                Microsoft.Xna.Framework.Color.setGreenYellow(new Microsoft.Xna.Framework.Color.$ctor10(4281335725));
                Microsoft.Xna.Framework.Color.setHoneydew(new Microsoft.Xna.Framework.Color.$ctor10(4293984240));
                Microsoft.Xna.Framework.Color.setHotPink(new Microsoft.Xna.Framework.Color.$ctor10(4290013695));
                Microsoft.Xna.Framework.Color.setIndianRed(new Microsoft.Xna.Framework.Color.$ctor10(4284243149));
                Microsoft.Xna.Framework.Color.setIndigo(new Microsoft.Xna.Framework.Color.$ctor10(4286709835));
                Microsoft.Xna.Framework.Color.setIvory(new Microsoft.Xna.Framework.Color.$ctor10(4293984255));
                Microsoft.Xna.Framework.Color.setKhaki(new Microsoft.Xna.Framework.Color.$ctor10(4287424240));
                Microsoft.Xna.Framework.Color.setLavender(new Microsoft.Xna.Framework.Color.$ctor10(4294633190));
                Microsoft.Xna.Framework.Color.setLavenderBlush(new Microsoft.Xna.Framework.Color.$ctor10(4294308095));
                Microsoft.Xna.Framework.Color.setLawnGreen(new Microsoft.Xna.Framework.Color.$ctor10(4278254716));
                Microsoft.Xna.Framework.Color.setLemonChiffon(new Microsoft.Xna.Framework.Color.$ctor10(4291689215));
                Microsoft.Xna.Framework.Color.setLightBlue(new Microsoft.Xna.Framework.Color.$ctor10(4293318829));
                Microsoft.Xna.Framework.Color.setLightCoral(new Microsoft.Xna.Framework.Color.$ctor10(4286611696));
                Microsoft.Xna.Framework.Color.setLightCyan(new Microsoft.Xna.Framework.Color.$ctor10(4294967264));
                Microsoft.Xna.Framework.Color.setLightGoldenrodYellow(new Microsoft.Xna.Framework.Color.$ctor10(4292016890));
                Microsoft.Xna.Framework.Color.setLightGray(new Microsoft.Xna.Framework.Color.$ctor10(4292072403));
                Microsoft.Xna.Framework.Color.setLightGreen(new Microsoft.Xna.Framework.Color.$ctor10(4287688336));
                Microsoft.Xna.Framework.Color.setLightPink(new Microsoft.Xna.Framework.Color.$ctor10(4290885375));
                Microsoft.Xna.Framework.Color.setLightSalmon(new Microsoft.Xna.Framework.Color.$ctor10(4286226687));
                Microsoft.Xna.Framework.Color.setLightSeaGreen(new Microsoft.Xna.Framework.Color.$ctor10(4289376800));
                Microsoft.Xna.Framework.Color.setLightSkyBlue(new Microsoft.Xna.Framework.Color.$ctor10(4294626951));
                Microsoft.Xna.Framework.Color.setLightSlateGray(new Microsoft.Xna.Framework.Color.$ctor10(4288252023));
                Microsoft.Xna.Framework.Color.setLightSteelBlue(new Microsoft.Xna.Framework.Color.$ctor10(4292789424));
                Microsoft.Xna.Framework.Color.setLightYellow(new Microsoft.Xna.Framework.Color.$ctor10(4292935679));
                Microsoft.Xna.Framework.Color.setLime(new Microsoft.Xna.Framework.Color.$ctor10(4278255360));
                Microsoft.Xna.Framework.Color.setLimeGreen(new Microsoft.Xna.Framework.Color.$ctor10(4281519410));
                Microsoft.Xna.Framework.Color.setLinen(new Microsoft.Xna.Framework.Color.$ctor10(4293325050));
                Microsoft.Xna.Framework.Color.setMagenta(new Microsoft.Xna.Framework.Color.$ctor10(4294902015));
                Microsoft.Xna.Framework.Color.setMaroon(new Microsoft.Xna.Framework.Color.$ctor10(4278190208));
                Microsoft.Xna.Framework.Color.setMediumAquamarine(new Microsoft.Xna.Framework.Color.$ctor10(4289383782));
                Microsoft.Xna.Framework.Color.setMediumBlue(new Microsoft.Xna.Framework.Color.$ctor10(4291624960));
                Microsoft.Xna.Framework.Color.setMediumOrchid(new Microsoft.Xna.Framework.Color.$ctor10(4292040122));
                Microsoft.Xna.Framework.Color.setMediumPurple(new Microsoft.Xna.Framework.Color.$ctor10(4292571283));
                Microsoft.Xna.Framework.Color.setMediumSeaGreen(new Microsoft.Xna.Framework.Color.$ctor10(4285641532));
                Microsoft.Xna.Framework.Color.setMediumSlateBlue(new Microsoft.Xna.Framework.Color.$ctor10(4293814395));
                Microsoft.Xna.Framework.Color.setMediumSpringGreen(new Microsoft.Xna.Framework.Color.$ctor10(4288346624));
                Microsoft.Xna.Framework.Color.setMediumTurquoise(new Microsoft.Xna.Framework.Color.$ctor10(4291613000));
                Microsoft.Xna.Framework.Color.setMediumVioletRed(new Microsoft.Xna.Framework.Color.$ctor10(4286911943));
                Microsoft.Xna.Framework.Color.setMidnightBlue(new Microsoft.Xna.Framework.Color.$ctor10(4285536537));
                Microsoft.Xna.Framework.Color.setMintCream(new Microsoft.Xna.Framework.Color.$ctor10(4294639605));
                Microsoft.Xna.Framework.Color.setMistyRose(new Microsoft.Xna.Framework.Color.$ctor10(4292994303));
                Microsoft.Xna.Framework.Color.setMoccasin(new Microsoft.Xna.Framework.Color.$ctor10(4290110719));
                Microsoft.Xna.Framework.Color.setMonoGameOrange(new Microsoft.Xna.Framework.Color.$ctor10(4278205671));
                Microsoft.Xna.Framework.Color.setNavajoWhite(new Microsoft.Xna.Framework.Color.$ctor10(4289584895));
                Microsoft.Xna.Framework.Color.setNavy(new Microsoft.Xna.Framework.Color.$ctor10(4286578688));
                Microsoft.Xna.Framework.Color.setOldLace(new Microsoft.Xna.Framework.Color.$ctor10(4293326333));
                Microsoft.Xna.Framework.Color.setOlive(new Microsoft.Xna.Framework.Color.$ctor10(4278222976));
                Microsoft.Xna.Framework.Color.setOliveDrab(new Microsoft.Xna.Framework.Color.$ctor10(4280520299));
                Microsoft.Xna.Framework.Color.setOrange(new Microsoft.Xna.Framework.Color.$ctor10(4278232575));
                Microsoft.Xna.Framework.Color.setOrangeRed(new Microsoft.Xna.Framework.Color.$ctor10(4278207999));
                Microsoft.Xna.Framework.Color.setOrchid(new Microsoft.Xna.Framework.Color.$ctor10(4292243674));
                Microsoft.Xna.Framework.Color.setPaleGoldenrod(new Microsoft.Xna.Framework.Color.$ctor10(4289390830));
                Microsoft.Xna.Framework.Color.setPaleGreen(new Microsoft.Xna.Framework.Color.$ctor10(4288215960));
                Microsoft.Xna.Framework.Color.setPaleTurquoise(new Microsoft.Xna.Framework.Color.$ctor10(4293848751));
                Microsoft.Xna.Framework.Color.setPaleVioletRed(new Microsoft.Xna.Framework.Color.$ctor10(4287852763));
                Microsoft.Xna.Framework.Color.setPapayaWhip(new Microsoft.Xna.Framework.Color.$ctor10(4292210687));
                Microsoft.Xna.Framework.Color.setPeachPuff(new Microsoft.Xna.Framework.Color.$ctor10(4290370303));
                Microsoft.Xna.Framework.Color.setPeru(new Microsoft.Xna.Framework.Color.$ctor10(4282353101));
                Microsoft.Xna.Framework.Color.setPink(new Microsoft.Xna.Framework.Color.$ctor10(4291543295));
                Microsoft.Xna.Framework.Color.setPlum(new Microsoft.Xna.Framework.Color.$ctor10(4292714717));
                Microsoft.Xna.Framework.Color.setPowderBlue(new Microsoft.Xna.Framework.Color.$ctor10(4293320880));
                Microsoft.Xna.Framework.Color.setPurple(new Microsoft.Xna.Framework.Color.$ctor10(4286578816));
                Microsoft.Xna.Framework.Color.setRed(new Microsoft.Xna.Framework.Color.$ctor10(4278190335));
                Microsoft.Xna.Framework.Color.setRosyBrown(new Microsoft.Xna.Framework.Color.$ctor10(4287598524));
                Microsoft.Xna.Framework.Color.setRoyalBlue(new Microsoft.Xna.Framework.Color.$ctor10(4292962625));
                Microsoft.Xna.Framework.Color.setSaddleBrown(new Microsoft.Xna.Framework.Color.$ctor10(4279453067));
                Microsoft.Xna.Framework.Color.setSalmon(new Microsoft.Xna.Framework.Color.$ctor10(4285694202));
                Microsoft.Xna.Framework.Color.setSandyBrown(new Microsoft.Xna.Framework.Color.$ctor10(4284523764));
                Microsoft.Xna.Framework.Color.setSeaGreen(new Microsoft.Xna.Framework.Color.$ctor10(4283927342));
                Microsoft.Xna.Framework.Color.setSeaShell(new Microsoft.Xna.Framework.Color.$ctor10(4293850623));
                Microsoft.Xna.Framework.Color.setSienna(new Microsoft.Xna.Framework.Color.$ctor10(4281160352));
                Microsoft.Xna.Framework.Color.setSilver(new Microsoft.Xna.Framework.Color.$ctor10(4290822336));
                Microsoft.Xna.Framework.Color.setSkyBlue(new Microsoft.Xna.Framework.Color.$ctor10(4293643911));
                Microsoft.Xna.Framework.Color.setSlateBlue(new Microsoft.Xna.Framework.Color.$ctor10(4291648106));
                Microsoft.Xna.Framework.Color.setSlateGray(new Microsoft.Xna.Framework.Color.$ctor10(4287660144));
                Microsoft.Xna.Framework.Color.setSnow(new Microsoft.Xna.Framework.Color.$ctor10(4294638335));
                Microsoft.Xna.Framework.Color.setSpringGreen(new Microsoft.Xna.Framework.Color.$ctor10(4286578432));
                Microsoft.Xna.Framework.Color.setSteelBlue(new Microsoft.Xna.Framework.Color.$ctor10(4290019910));
                Microsoft.Xna.Framework.Color.setTan(new Microsoft.Xna.Framework.Color.$ctor10(4287411410));
                Microsoft.Xna.Framework.Color.setTeal(new Microsoft.Xna.Framework.Color.$ctor10(4286611456));
                Microsoft.Xna.Framework.Color.setThistle(new Microsoft.Xna.Framework.Color.$ctor10(4292394968));
                Microsoft.Xna.Framework.Color.setTomato(new Microsoft.Xna.Framework.Color.$ctor10(4282868735));
                Microsoft.Xna.Framework.Color.setTurquoise(new Microsoft.Xna.Framework.Color.$ctor10(4291878976));
                Microsoft.Xna.Framework.Color.setViolet(new Microsoft.Xna.Framework.Color.$ctor10(4293821166));
                Microsoft.Xna.Framework.Color.setWheat(new Microsoft.Xna.Framework.Color.$ctor10(4289978101));
                Microsoft.Xna.Framework.Color.setWhite(new Microsoft.Xna.Framework.Color.$ctor10(4294967295));
                Microsoft.Xna.Framework.Color.setWhiteSmoke(new Microsoft.Xna.Framework.Color.$ctor10(4294309365));
                Microsoft.Xna.Framework.Color.setYellow(new Microsoft.Xna.Framework.Color.$ctor10(4278255615));
                Microsoft.Xna.Framework.Color.setYellowGreen(new Microsoft.Xna.Framework.Color.$ctor10(4281519514));
            },
            config: {
                properties: {
                    /**
                     * TransparentBlack color (R:0,G:0,B:0,A:0).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getTransparentBlack
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * TransparentBlack color (R:0,G:0,B:0,A:0).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setTransparentBlack
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    TransparentBlack: null,
                    /**
                     * Transparent color (R:0,G:0,B:0,A:0).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getTransparent
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Transparent color (R:0,G:0,B:0,A:0).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setTransparent
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Transparent: null,
                    /**
                     * AliceBlue color (R:240,G:248,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getAliceBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * AliceBlue color (R:240,G:248,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setAliceBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    AliceBlue: null,
                    /**
                     * AntiqueWhite color (R:250,G:235,B:215,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getAntiqueWhite
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * AntiqueWhite color (R:250,G:235,B:215,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setAntiqueWhite
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    AntiqueWhite: null,
                    /**
                     * Aqua color (R:0,G:255,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getAqua
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Aqua color (R:0,G:255,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setAqua
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Aqua: null,
                    /**
                     * Aquamarine color (R:127,G:255,B:212,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getAquamarine
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Aquamarine color (R:127,G:255,B:212,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setAquamarine
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Aquamarine: null,
                    /**
                     * Azure color (R:240,G:255,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getAzure
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Azure color (R:240,G:255,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setAzure
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Azure: null,
                    /**
                     * Beige color (R:245,G:245,B:220,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getBeige
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Beige color (R:245,G:245,B:220,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setBeige
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Beige: null,
                    /**
                     * Bisque color (R:255,G:228,B:196,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getBisque
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Bisque color (R:255,G:228,B:196,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setBisque
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Bisque: null,
                    /**
                     * Black color (R:0,G:0,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getBlack
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Black color (R:0,G:0,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setBlack
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Black: null,
                    /**
                     * BlanchedAlmond color (R:255,G:235,B:205,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getBlanchedAlmond
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * BlanchedAlmond color (R:255,G:235,B:205,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setBlanchedAlmond
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    BlanchedAlmond: null,
                    /**
                     * Blue color (R:0,G:0,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Blue color (R:0,G:0,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Blue: null,
                    /**
                     * BlueViolet color (R:138,G:43,B:226,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getBlueViolet
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * BlueViolet color (R:138,G:43,B:226,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setBlueViolet
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    BlueViolet: null,
                    /**
                     * Brown color (R:165,G:42,B:42,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getBrown
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Brown color (R:165,G:42,B:42,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setBrown
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Brown: null,
                    /**
                     * BurlyWood color (R:222,G:184,B:135,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getBurlyWood
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * BurlyWood color (R:222,G:184,B:135,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setBurlyWood
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    BurlyWood: null,
                    /**
                     * CadetBlue color (R:95,G:158,B:160,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getCadetBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * CadetBlue color (R:95,G:158,B:160,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setCadetBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    CadetBlue: null,
                    /**
                     * Chartreuse color (R:127,G:255,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getChartreuse
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Chartreuse color (R:127,G:255,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setChartreuse
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Chartreuse: null,
                    /**
                     * Chocolate color (R:210,G:105,B:30,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getChocolate
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Chocolate color (R:210,G:105,B:30,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setChocolate
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Chocolate: null,
                    /**
                     * Coral color (R:255,G:127,B:80,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getCoral
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Coral color (R:255,G:127,B:80,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setCoral
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Coral: null,
                    /**
                     * CornflowerBlue color (R:100,G:149,B:237,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getCornflowerBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * CornflowerBlue color (R:100,G:149,B:237,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setCornflowerBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    CornflowerBlue: null,
                    /**
                     * Cornsilk color (R:255,G:248,B:220,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getCornsilk
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Cornsilk color (R:255,G:248,B:220,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setCornsilk
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Cornsilk: null,
                    /**
                     * Crimson color (R:220,G:20,B:60,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getCrimson
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Crimson color (R:220,G:20,B:60,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setCrimson
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Crimson: null,
                    /**
                     * Cyan color (R:0,G:255,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getCyan
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Cyan color (R:0,G:255,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setCyan
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Cyan: null,
                    /**
                     * DarkBlue color (R:0,G:0,B:139,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkBlue color (R:0,G:0,B:139,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkBlue: null,
                    /**
                     * DarkCyan color (R:0,G:139,B:139,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkCyan
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkCyan color (R:0,G:139,B:139,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkCyan
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkCyan: null,
                    /**
                     * DarkGoldenrod color (R:184,G:134,B:11,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkGoldenrod
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkGoldenrod color (R:184,G:134,B:11,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkGoldenrod
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkGoldenrod: null,
                    /**
                     * DarkGray color (R:169,G:169,B:169,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkGray
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkGray color (R:169,G:169,B:169,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkGray
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkGray: null,
                    /**
                     * DarkGreen color (R:0,G:100,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkGreen color (R:0,G:100,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkGreen: null,
                    /**
                     * DarkKhaki color (R:189,G:183,B:107,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkKhaki
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkKhaki color (R:189,G:183,B:107,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkKhaki
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkKhaki: null,
                    /**
                     * DarkMagenta color (R:139,G:0,B:139,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkMagenta
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkMagenta color (R:139,G:0,B:139,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkMagenta
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkMagenta: null,
                    /**
                     * DarkOliveGreen color (R:85,G:107,B:47,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkOliveGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkOliveGreen color (R:85,G:107,B:47,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkOliveGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkOliveGreen: null,
                    /**
                     * DarkOrange color (R:255,G:140,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkOrange
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkOrange color (R:255,G:140,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkOrange
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkOrange: null,
                    /**
                     * DarkOrchid color (R:153,G:50,B:204,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkOrchid
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkOrchid color (R:153,G:50,B:204,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkOrchid
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkOrchid: null,
                    /**
                     * DarkRed color (R:139,G:0,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkRed
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkRed color (R:139,G:0,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkRed
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkRed: null,
                    /**
                     * DarkSalmon color (R:233,G:150,B:122,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkSalmon
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkSalmon color (R:233,G:150,B:122,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkSalmon
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkSalmon: null,
                    /**
                     * DarkSeaGreen color (R:143,G:188,B:139,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkSeaGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkSeaGreen color (R:143,G:188,B:139,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkSeaGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkSeaGreen: null,
                    /**
                     * DarkSlateBlue color (R:72,G:61,B:139,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkSlateBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkSlateBlue color (R:72,G:61,B:139,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkSlateBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkSlateBlue: null,
                    /**
                     * DarkSlateGray color (R:47,G:79,B:79,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkSlateGray
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkSlateGray color (R:47,G:79,B:79,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkSlateGray
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkSlateGray: null,
                    /**
                     * DarkTurquoise color (R:0,G:206,B:209,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkTurquoise
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkTurquoise color (R:0,G:206,B:209,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkTurquoise
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkTurquoise: null,
                    /**
                     * DarkViolet color (R:148,G:0,B:211,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDarkViolet
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DarkViolet color (R:148,G:0,B:211,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDarkViolet
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DarkViolet: null,
                    /**
                     * DeepPink color (R:255,G:20,B:147,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDeepPink
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DeepPink color (R:255,G:20,B:147,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDeepPink
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DeepPink: null,
                    /**
                     * DeepSkyBlue color (R:0,G:191,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDeepSkyBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DeepSkyBlue color (R:0,G:191,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDeepSkyBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DeepSkyBlue: null,
                    /**
                     * DimGray color (R:105,G:105,B:105,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDimGray
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DimGray color (R:105,G:105,B:105,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDimGray
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DimGray: null,
                    /**
                     * DodgerBlue color (R:30,G:144,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getDodgerBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * DodgerBlue color (R:30,G:144,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setDodgerBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    DodgerBlue: null,
                    /**
                     * Firebrick color (R:178,G:34,B:34,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getFirebrick
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Firebrick color (R:178,G:34,B:34,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setFirebrick
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Firebrick: null,
                    /**
                     * FloralWhite color (R:255,G:250,B:240,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getFloralWhite
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * FloralWhite color (R:255,G:250,B:240,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setFloralWhite
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    FloralWhite: null,
                    /**
                     * ForestGreen color (R:34,G:139,B:34,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getForestGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * ForestGreen color (R:34,G:139,B:34,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setForestGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    ForestGreen: null,
                    /**
                     * Fuchsia color (R:255,G:0,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getFuchsia
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Fuchsia color (R:255,G:0,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setFuchsia
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Fuchsia: null,
                    /**
                     * Gainsboro color (R:220,G:220,B:220,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getGainsboro
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Gainsboro color (R:220,G:220,B:220,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setGainsboro
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Gainsboro: null,
                    /**
                     * GhostWhite color (R:248,G:248,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getGhostWhite
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * GhostWhite color (R:248,G:248,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setGhostWhite
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    GhostWhite: null,
                    /**
                     * Gold color (R:255,G:215,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getGold
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Gold color (R:255,G:215,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setGold
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Gold: null,
                    /**
                     * Goldenrod color (R:218,G:165,B:32,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getGoldenrod
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Goldenrod color (R:218,G:165,B:32,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setGoldenrod
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Goldenrod: null,
                    /**
                     * Gray color (R:128,G:128,B:128,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getGray
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Gray color (R:128,G:128,B:128,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setGray
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Gray: null,
                    /**
                     * Green color (R:0,G:128,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Green color (R:0,G:128,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Green: null,
                    /**
                     * GreenYellow color (R:173,G:255,B:47,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getGreenYellow
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * GreenYellow color (R:173,G:255,B:47,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setGreenYellow
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    GreenYellow: null,
                    /**
                     * Honeydew color (R:240,G:255,B:240,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getHoneydew
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Honeydew color (R:240,G:255,B:240,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setHoneydew
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Honeydew: null,
                    /**
                     * HotPink color (R:255,G:105,B:180,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getHotPink
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * HotPink color (R:255,G:105,B:180,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setHotPink
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    HotPink: null,
                    /**
                     * IndianRed color (R:205,G:92,B:92,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getIndianRed
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * IndianRed color (R:205,G:92,B:92,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setIndianRed
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    IndianRed: null,
                    /**
                     * Indigo color (R:75,G:0,B:130,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getIndigo
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Indigo color (R:75,G:0,B:130,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setIndigo
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Indigo: null,
                    /**
                     * Ivory color (R:255,G:255,B:240,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getIvory
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Ivory color (R:255,G:255,B:240,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setIvory
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Ivory: null,
                    /**
                     * Khaki color (R:240,G:230,B:140,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getKhaki
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Khaki color (R:240,G:230,B:140,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setKhaki
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Khaki: null,
                    /**
                     * Lavender color (R:230,G:230,B:250,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLavender
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Lavender color (R:230,G:230,B:250,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLavender
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Lavender: null,
                    /**
                     * LavenderBlush color (R:255,G:240,B:245,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLavenderBlush
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LavenderBlush color (R:255,G:240,B:245,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLavenderBlush
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LavenderBlush: null,
                    /**
                     * LawnGreen color (R:124,G:252,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLawnGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LawnGreen color (R:124,G:252,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLawnGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LawnGreen: null,
                    /**
                     * LemonChiffon color (R:255,G:250,B:205,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLemonChiffon
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LemonChiffon color (R:255,G:250,B:205,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLemonChiffon
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LemonChiffon: null,
                    /**
                     * LightBlue color (R:173,G:216,B:230,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightBlue color (R:173,G:216,B:230,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightBlue: null,
                    /**
                     * LightCoral color (R:240,G:128,B:128,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightCoral
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightCoral color (R:240,G:128,B:128,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightCoral
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightCoral: null,
                    /**
                     * LightCyan color (R:224,G:255,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightCyan
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightCyan color (R:224,G:255,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightCyan
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightCyan: null,
                    /**
                     * LightGoldenrodYellow color (R:250,G:250,B:210,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightGoldenrodYellow
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightGoldenrodYellow color (R:250,G:250,B:210,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightGoldenrodYellow
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightGoldenrodYellow: null,
                    /**
                     * LightGray color (R:211,G:211,B:211,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightGray
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightGray color (R:211,G:211,B:211,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightGray
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightGray: null,
                    /**
                     * LightGreen color (R:144,G:238,B:144,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightGreen color (R:144,G:238,B:144,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightGreen: null,
                    /**
                     * LightPink color (R:255,G:182,B:193,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightPink
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightPink color (R:255,G:182,B:193,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightPink
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightPink: null,
                    /**
                     * LightSalmon color (R:255,G:160,B:122,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightSalmon
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightSalmon color (R:255,G:160,B:122,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightSalmon
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightSalmon: null,
                    /**
                     * LightSeaGreen color (R:32,G:178,B:170,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightSeaGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightSeaGreen color (R:32,G:178,B:170,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightSeaGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightSeaGreen: null,
                    /**
                     * LightSkyBlue color (R:135,G:206,B:250,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightSkyBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightSkyBlue color (R:135,G:206,B:250,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightSkyBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightSkyBlue: null,
                    /**
                     * LightSlateGray color (R:119,G:136,B:153,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightSlateGray
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightSlateGray color (R:119,G:136,B:153,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightSlateGray
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightSlateGray: null,
                    /**
                     * LightSteelBlue color (R:176,G:196,B:222,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightSteelBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightSteelBlue color (R:176,G:196,B:222,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightSteelBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightSteelBlue: null,
                    /**
                     * LightYellow color (R:255,G:255,B:224,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLightYellow
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LightYellow color (R:255,G:255,B:224,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLightYellow
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LightYellow: null,
                    /**
                     * Lime color (R:0,G:255,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLime
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Lime color (R:0,G:255,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLime
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Lime: null,
                    /**
                     * LimeGreen color (R:50,G:205,B:50,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLimeGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * LimeGreen color (R:50,G:205,B:50,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLimeGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    LimeGreen: null,
                    /**
                     * Linen color (R:250,G:240,B:230,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getLinen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Linen color (R:250,G:240,B:230,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setLinen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Linen: null,
                    /**
                     * Magenta color (R:255,G:0,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMagenta
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Magenta color (R:255,G:0,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMagenta
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Magenta: null,
                    /**
                     * Maroon color (R:128,G:0,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMaroon
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Maroon color (R:128,G:0,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMaroon
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Maroon: null,
                    /**
                     * MediumAquamarine color (R:102,G:205,B:170,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMediumAquamarine
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MediumAquamarine color (R:102,G:205,B:170,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMediumAquamarine
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MediumAquamarine: null,
                    /**
                     * MediumBlue color (R:0,G:0,B:205,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMediumBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MediumBlue color (R:0,G:0,B:205,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMediumBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MediumBlue: null,
                    /**
                     * MediumOrchid color (R:186,G:85,B:211,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMediumOrchid
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MediumOrchid color (R:186,G:85,B:211,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMediumOrchid
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MediumOrchid: null,
                    /**
                     * MediumPurple color (R:147,G:112,B:219,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMediumPurple
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MediumPurple color (R:147,G:112,B:219,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMediumPurple
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MediumPurple: null,
                    /**
                     * MediumSeaGreen color (R:60,G:179,B:113,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMediumSeaGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MediumSeaGreen color (R:60,G:179,B:113,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMediumSeaGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MediumSeaGreen: null,
                    /**
                     * MediumSlateBlue color (R:123,G:104,B:238,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMediumSlateBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MediumSlateBlue color (R:123,G:104,B:238,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMediumSlateBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MediumSlateBlue: null,
                    /**
                     * MediumSpringGreen color (R:0,G:250,B:154,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMediumSpringGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MediumSpringGreen color (R:0,G:250,B:154,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMediumSpringGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MediumSpringGreen: null,
                    /**
                     * MediumTurquoise color (R:72,G:209,B:204,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMediumTurquoise
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MediumTurquoise color (R:72,G:209,B:204,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMediumTurquoise
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MediumTurquoise: null,
                    /**
                     * MediumVioletRed color (R:199,G:21,B:133,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMediumVioletRed
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MediumVioletRed color (R:199,G:21,B:133,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMediumVioletRed
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MediumVioletRed: null,
                    /**
                     * MidnightBlue color (R:25,G:25,B:112,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMidnightBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MidnightBlue color (R:25,G:25,B:112,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMidnightBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MidnightBlue: null,
                    /**
                     * MintCream color (R:245,G:255,B:250,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMintCream
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MintCream color (R:245,G:255,B:250,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMintCream
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MintCream: null,
                    /**
                     * MistyRose color (R:255,G:228,B:225,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMistyRose
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MistyRose color (R:255,G:228,B:225,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMistyRose
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MistyRose: null,
                    /**
                     * Moccasin color (R:255,G:228,B:181,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMoccasin
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Moccasin color (R:255,G:228,B:181,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMoccasin
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Moccasin: null,
                    /**
                     * MonoGame orange theme color (R:231,G:60,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getMonoGameOrange
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * MonoGame orange theme color (R:231,G:60,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setMonoGameOrange
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    MonoGameOrange: null,
                    /**
                     * NavajoWhite color (R:255,G:222,B:173,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getNavajoWhite
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * NavajoWhite color (R:255,G:222,B:173,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setNavajoWhite
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    NavajoWhite: null,
                    /**
                     * Navy color (R:0,G:0,B:128,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getNavy
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Navy color (R:0,G:0,B:128,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setNavy
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Navy: null,
                    /**
                     * OldLace color (R:253,G:245,B:230,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getOldLace
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * OldLace color (R:253,G:245,B:230,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setOldLace
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    OldLace: null,
                    /**
                     * Olive color (R:128,G:128,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getOlive
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Olive color (R:128,G:128,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setOlive
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Olive: null,
                    /**
                     * OliveDrab color (R:107,G:142,B:35,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getOliveDrab
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * OliveDrab color (R:107,G:142,B:35,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setOliveDrab
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    OliveDrab: null,
                    /**
                     * Orange color (R:255,G:165,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getOrange
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Orange color (R:255,G:165,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setOrange
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Orange: null,
                    /**
                     * OrangeRed color (R:255,G:69,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getOrangeRed
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * OrangeRed color (R:255,G:69,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setOrangeRed
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    OrangeRed: null,
                    /**
                     * Orchid color (R:218,G:112,B:214,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getOrchid
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Orchid color (R:218,G:112,B:214,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setOrchid
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Orchid: null,
                    /**
                     * PaleGoldenrod color (R:238,G:232,B:170,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPaleGoldenrod
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * PaleGoldenrod color (R:238,G:232,B:170,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPaleGoldenrod
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    PaleGoldenrod: null,
                    /**
                     * PaleGreen color (R:152,G:251,B:152,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPaleGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * PaleGreen color (R:152,G:251,B:152,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPaleGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    PaleGreen: null,
                    /**
                     * PaleTurquoise color (R:175,G:238,B:238,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPaleTurquoise
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * PaleTurquoise color (R:175,G:238,B:238,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPaleTurquoise
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    PaleTurquoise: null,
                    /**
                     * PaleVioletRed color (R:219,G:112,B:147,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPaleVioletRed
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * PaleVioletRed color (R:219,G:112,B:147,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPaleVioletRed
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    PaleVioletRed: null,
                    /**
                     * PapayaWhip color (R:255,G:239,B:213,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPapayaWhip
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * PapayaWhip color (R:255,G:239,B:213,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPapayaWhip
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    PapayaWhip: null,
                    /**
                     * PeachPuff color (R:255,G:218,B:185,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPeachPuff
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * PeachPuff color (R:255,G:218,B:185,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPeachPuff
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    PeachPuff: null,
                    /**
                     * Peru color (R:205,G:133,B:63,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPeru
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Peru color (R:205,G:133,B:63,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPeru
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Peru: null,
                    /**
                     * Pink color (R:255,G:192,B:203,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPink
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Pink color (R:255,G:192,B:203,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPink
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Pink: null,
                    /**
                     * Plum color (R:221,G:160,B:221,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPlum
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Plum color (R:221,G:160,B:221,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPlum
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Plum: null,
                    /**
                     * PowderBlue color (R:176,G:224,B:230,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPowderBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * PowderBlue color (R:176,G:224,B:230,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPowderBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    PowderBlue: null,
                    /**
                     * Purple color (R:128,G:0,B:128,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getPurple
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Purple color (R:128,G:0,B:128,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setPurple
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Purple: null,
                    /**
                     * Red color (R:255,G:0,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getRed
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Red color (R:255,G:0,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setRed
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Red: null,
                    /**
                     * RosyBrown color (R:188,G:143,B:143,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getRosyBrown
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * RosyBrown color (R:188,G:143,B:143,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setRosyBrown
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    RosyBrown: null,
                    /**
                     * RoyalBlue color (R:65,G:105,B:225,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getRoyalBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * RoyalBlue color (R:65,G:105,B:225,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setRoyalBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    RoyalBlue: null,
                    /**
                     * SaddleBrown color (R:139,G:69,B:19,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSaddleBrown
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * SaddleBrown color (R:139,G:69,B:19,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSaddleBrown
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    SaddleBrown: null,
                    /**
                     * Salmon color (R:250,G:128,B:114,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSalmon
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Salmon color (R:250,G:128,B:114,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSalmon
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Salmon: null,
                    /**
                     * SandyBrown color (R:244,G:164,B:96,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSandyBrown
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * SandyBrown color (R:244,G:164,B:96,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSandyBrown
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    SandyBrown: null,
                    /**
                     * SeaGreen color (R:46,G:139,B:87,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSeaGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * SeaGreen color (R:46,G:139,B:87,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSeaGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    SeaGreen: null,
                    /**
                     * SeaShell color (R:255,G:245,B:238,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSeaShell
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * SeaShell color (R:255,G:245,B:238,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSeaShell
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    SeaShell: null,
                    /**
                     * Sienna color (R:160,G:82,B:45,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSienna
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Sienna color (R:160,G:82,B:45,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSienna
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Sienna: null,
                    /**
                     * Silver color (R:192,G:192,B:192,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSilver
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Silver color (R:192,G:192,B:192,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSilver
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Silver: null,
                    /**
                     * SkyBlue color (R:135,G:206,B:235,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSkyBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * SkyBlue color (R:135,G:206,B:235,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSkyBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    SkyBlue: null,
                    /**
                     * SlateBlue color (R:106,G:90,B:205,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSlateBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * SlateBlue color (R:106,G:90,B:205,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSlateBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    SlateBlue: null,
                    /**
                     * SlateGray color (R:112,G:128,B:144,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSlateGray
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * SlateGray color (R:112,G:128,B:144,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSlateGray
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    SlateGray: null,
                    /**
                     * Snow color (R:255,G:250,B:250,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSnow
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Snow color (R:255,G:250,B:250,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSnow
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Snow: null,
                    /**
                     * SpringGreen color (R:0,G:255,B:127,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSpringGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * SpringGreen color (R:0,G:255,B:127,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSpringGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    SpringGreen: null,
                    /**
                     * SteelBlue color (R:70,G:130,B:180,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getSteelBlue
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * SteelBlue color (R:70,G:130,B:180,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setSteelBlue
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    SteelBlue: null,
                    /**
                     * Tan color (R:210,G:180,B:140,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getTan
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Tan color (R:210,G:180,B:140,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setTan
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Tan: null,
                    /**
                     * Teal color (R:0,G:128,B:128,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getTeal
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Teal color (R:0,G:128,B:128,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setTeal
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Teal: null,
                    /**
                     * Thistle color (R:216,G:191,B:216,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getThistle
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Thistle color (R:216,G:191,B:216,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setThistle
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Thistle: null,
                    /**
                     * Tomato color (R:255,G:99,B:71,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getTomato
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Tomato color (R:255,G:99,B:71,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setTomato
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Tomato: null,
                    /**
                     * Turquoise color (R:64,G:224,B:208,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getTurquoise
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Turquoise color (R:64,G:224,B:208,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setTurquoise
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Turquoise: null,
                    /**
                     * Violet color (R:238,G:130,B:238,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getViolet
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Violet color (R:238,G:130,B:238,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setViolet
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Violet: null,
                    /**
                     * Wheat color (R:245,G:222,B:179,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getWheat
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Wheat color (R:245,G:222,B:179,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setWheat
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Wheat: null,
                    /**
                     * White color (R:255,G:255,B:255,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getWhite
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * White color (R:255,G:255,B:255,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setWhite
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    White: null,
                    /**
                     * WhiteSmoke color (R:245,G:245,B:245,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getWhiteSmoke
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * WhiteSmoke color (R:245,G:245,B:245,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setWhiteSmoke
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    WhiteSmoke: null,
                    /**
                     * Yellow color (R:255,G:255,B:0,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getYellow
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * Yellow color (R:255,G:255,B:0,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setYellow
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    Yellow: null,
                    /**
                     * YellowGreen color (R:154,G:205,B:50,A:255).
                     *
                     * @static
                     * @public
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function getYellowGreen
                     * @return  {Microsoft.Xna.Framework.Color}
                     */
                    /**
                     * YellowGreen color (R:154,G:205,B:50,A:255).
                     *
                     * @static
                     * @private
                     * @this Microsoft.Xna.Framework.Color
                     * @memberof Microsoft.Xna.Framework.Color
                     * @function setYellowGreen
                     * @param   {Microsoft.Xna.Framework.Color}    value
                     * @return  {void}
                     */
                    YellowGreen: null
                },
                init: function () {
                    this.TransparentBlack = new Microsoft.Xna.Framework.Color();
                    this.Transparent = new Microsoft.Xna.Framework.Color();
                    this.AliceBlue = new Microsoft.Xna.Framework.Color();
                    this.AntiqueWhite = new Microsoft.Xna.Framework.Color();
                    this.Aqua = new Microsoft.Xna.Framework.Color();
                    this.Aquamarine = new Microsoft.Xna.Framework.Color();
                    this.Azure = new Microsoft.Xna.Framework.Color();
                    this.Beige = new Microsoft.Xna.Framework.Color();
                    this.Bisque = new Microsoft.Xna.Framework.Color();
                    this.Black = new Microsoft.Xna.Framework.Color();
                    this.BlanchedAlmond = new Microsoft.Xna.Framework.Color();
                    this.Blue = new Microsoft.Xna.Framework.Color();
                    this.BlueViolet = new Microsoft.Xna.Framework.Color();
                    this.Brown = new Microsoft.Xna.Framework.Color();
                    this.BurlyWood = new Microsoft.Xna.Framework.Color();
                    this.CadetBlue = new Microsoft.Xna.Framework.Color();
                    this.Chartreuse = new Microsoft.Xna.Framework.Color();
                    this.Chocolate = new Microsoft.Xna.Framework.Color();
                    this.Coral = new Microsoft.Xna.Framework.Color();
                    this.CornflowerBlue = new Microsoft.Xna.Framework.Color();
                    this.Cornsilk = new Microsoft.Xna.Framework.Color();
                    this.Crimson = new Microsoft.Xna.Framework.Color();
                    this.Cyan = new Microsoft.Xna.Framework.Color();
                    this.DarkBlue = new Microsoft.Xna.Framework.Color();
                    this.DarkCyan = new Microsoft.Xna.Framework.Color();
                    this.DarkGoldenrod = new Microsoft.Xna.Framework.Color();
                    this.DarkGray = new Microsoft.Xna.Framework.Color();
                    this.DarkGreen = new Microsoft.Xna.Framework.Color();
                    this.DarkKhaki = new Microsoft.Xna.Framework.Color();
                    this.DarkMagenta = new Microsoft.Xna.Framework.Color();
                    this.DarkOliveGreen = new Microsoft.Xna.Framework.Color();
                    this.DarkOrange = new Microsoft.Xna.Framework.Color();
                    this.DarkOrchid = new Microsoft.Xna.Framework.Color();
                    this.DarkRed = new Microsoft.Xna.Framework.Color();
                    this.DarkSalmon = new Microsoft.Xna.Framework.Color();
                    this.DarkSeaGreen = new Microsoft.Xna.Framework.Color();
                    this.DarkSlateBlue = new Microsoft.Xna.Framework.Color();
                    this.DarkSlateGray = new Microsoft.Xna.Framework.Color();
                    this.DarkTurquoise = new Microsoft.Xna.Framework.Color();
                    this.DarkViolet = new Microsoft.Xna.Framework.Color();
                    this.DeepPink = new Microsoft.Xna.Framework.Color();
                    this.DeepSkyBlue = new Microsoft.Xna.Framework.Color();
                    this.DimGray = new Microsoft.Xna.Framework.Color();
                    this.DodgerBlue = new Microsoft.Xna.Framework.Color();
                    this.Firebrick = new Microsoft.Xna.Framework.Color();
                    this.FloralWhite = new Microsoft.Xna.Framework.Color();
                    this.ForestGreen = new Microsoft.Xna.Framework.Color();
                    this.Fuchsia = new Microsoft.Xna.Framework.Color();
                    this.Gainsboro = new Microsoft.Xna.Framework.Color();
                    this.GhostWhite = new Microsoft.Xna.Framework.Color();
                    this.Gold = new Microsoft.Xna.Framework.Color();
                    this.Goldenrod = new Microsoft.Xna.Framework.Color();
                    this.Gray = new Microsoft.Xna.Framework.Color();
                    this.Green = new Microsoft.Xna.Framework.Color();
                    this.GreenYellow = new Microsoft.Xna.Framework.Color();
                    this.Honeydew = new Microsoft.Xna.Framework.Color();
                    this.HotPink = new Microsoft.Xna.Framework.Color();
                    this.IndianRed = new Microsoft.Xna.Framework.Color();
                    this.Indigo = new Microsoft.Xna.Framework.Color();
                    this.Ivory = new Microsoft.Xna.Framework.Color();
                    this.Khaki = new Microsoft.Xna.Framework.Color();
                    this.Lavender = new Microsoft.Xna.Framework.Color();
                    this.LavenderBlush = new Microsoft.Xna.Framework.Color();
                    this.LawnGreen = new Microsoft.Xna.Framework.Color();
                    this.LemonChiffon = new Microsoft.Xna.Framework.Color();
                    this.LightBlue = new Microsoft.Xna.Framework.Color();
                    this.LightCoral = new Microsoft.Xna.Framework.Color();
                    this.LightCyan = new Microsoft.Xna.Framework.Color();
                    this.LightGoldenrodYellow = new Microsoft.Xna.Framework.Color();
                    this.LightGray = new Microsoft.Xna.Framework.Color();
                    this.LightGreen = new Microsoft.Xna.Framework.Color();
                    this.LightPink = new Microsoft.Xna.Framework.Color();
                    this.LightSalmon = new Microsoft.Xna.Framework.Color();
                    this.LightSeaGreen = new Microsoft.Xna.Framework.Color();
                    this.LightSkyBlue = new Microsoft.Xna.Framework.Color();
                    this.LightSlateGray = new Microsoft.Xna.Framework.Color();
                    this.LightSteelBlue = new Microsoft.Xna.Framework.Color();
                    this.LightYellow = new Microsoft.Xna.Framework.Color();
                    this.Lime = new Microsoft.Xna.Framework.Color();
                    this.LimeGreen = new Microsoft.Xna.Framework.Color();
                    this.Linen = new Microsoft.Xna.Framework.Color();
                    this.Magenta = new Microsoft.Xna.Framework.Color();
                    this.Maroon = new Microsoft.Xna.Framework.Color();
                    this.MediumAquamarine = new Microsoft.Xna.Framework.Color();
                    this.MediumBlue = new Microsoft.Xna.Framework.Color();
                    this.MediumOrchid = new Microsoft.Xna.Framework.Color();
                    this.MediumPurple = new Microsoft.Xna.Framework.Color();
                    this.MediumSeaGreen = new Microsoft.Xna.Framework.Color();
                    this.MediumSlateBlue = new Microsoft.Xna.Framework.Color();
                    this.MediumSpringGreen = new Microsoft.Xna.Framework.Color();
                    this.MediumTurquoise = new Microsoft.Xna.Framework.Color();
                    this.MediumVioletRed = new Microsoft.Xna.Framework.Color();
                    this.MidnightBlue = new Microsoft.Xna.Framework.Color();
                    this.MintCream = new Microsoft.Xna.Framework.Color();
                    this.MistyRose = new Microsoft.Xna.Framework.Color();
                    this.Moccasin = new Microsoft.Xna.Framework.Color();
                    this.MonoGameOrange = new Microsoft.Xna.Framework.Color();
                    this.NavajoWhite = new Microsoft.Xna.Framework.Color();
                    this.Navy = new Microsoft.Xna.Framework.Color();
                    this.OldLace = new Microsoft.Xna.Framework.Color();
                    this.Olive = new Microsoft.Xna.Framework.Color();
                    this.OliveDrab = new Microsoft.Xna.Framework.Color();
                    this.Orange = new Microsoft.Xna.Framework.Color();
                    this.OrangeRed = new Microsoft.Xna.Framework.Color();
                    this.Orchid = new Microsoft.Xna.Framework.Color();
                    this.PaleGoldenrod = new Microsoft.Xna.Framework.Color();
                    this.PaleGreen = new Microsoft.Xna.Framework.Color();
                    this.PaleTurquoise = new Microsoft.Xna.Framework.Color();
                    this.PaleVioletRed = new Microsoft.Xna.Framework.Color();
                    this.PapayaWhip = new Microsoft.Xna.Framework.Color();
                    this.PeachPuff = new Microsoft.Xna.Framework.Color();
                    this.Peru = new Microsoft.Xna.Framework.Color();
                    this.Pink = new Microsoft.Xna.Framework.Color();
                    this.Plum = new Microsoft.Xna.Framework.Color();
                    this.PowderBlue = new Microsoft.Xna.Framework.Color();
                    this.Purple = new Microsoft.Xna.Framework.Color();
                    this.Red = new Microsoft.Xna.Framework.Color();
                    this.RosyBrown = new Microsoft.Xna.Framework.Color();
                    this.RoyalBlue = new Microsoft.Xna.Framework.Color();
                    this.SaddleBrown = new Microsoft.Xna.Framework.Color();
                    this.Salmon = new Microsoft.Xna.Framework.Color();
                    this.SandyBrown = new Microsoft.Xna.Framework.Color();
                    this.SeaGreen = new Microsoft.Xna.Framework.Color();
                    this.SeaShell = new Microsoft.Xna.Framework.Color();
                    this.Sienna = new Microsoft.Xna.Framework.Color();
                    this.Silver = new Microsoft.Xna.Framework.Color();
                    this.SkyBlue = new Microsoft.Xna.Framework.Color();
                    this.SlateBlue = new Microsoft.Xna.Framework.Color();
                    this.SlateGray = new Microsoft.Xna.Framework.Color();
                    this.Snow = new Microsoft.Xna.Framework.Color();
                    this.SpringGreen = new Microsoft.Xna.Framework.Color();
                    this.SteelBlue = new Microsoft.Xna.Framework.Color();
                    this.Tan = new Microsoft.Xna.Framework.Color();
                    this.Teal = new Microsoft.Xna.Framework.Color();
                    this.Thistle = new Microsoft.Xna.Framework.Color();
                    this.Tomato = new Microsoft.Xna.Framework.Color();
                    this.Turquoise = new Microsoft.Xna.Framework.Color();
                    this.Violet = new Microsoft.Xna.Framework.Color();
                    this.Wheat = new Microsoft.Xna.Framework.Color();
                    this.White = new Microsoft.Xna.Framework.Color();
                    this.WhiteSmoke = new Microsoft.Xna.Framework.Color();
                    this.Yellow = new Microsoft.Xna.Framework.Color();
                    this.YellowGreen = new Microsoft.Xna.Framework.Color();
                }
            },
            /**
             * Performs linear interpolation of {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Color
             * @memberof Microsoft.Xna.Framework.Color
             * @param   {Microsoft.Xna.Framework.Color}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Color}    value2    Destination {@link }.
             * @param   {number}                           amount    Interpolation factor.
             * @return  {Microsoft.Xna.Framework.Color}              Interpolated {@link }.
             */
            lerp: function (value1, value2, amount) {
                amount = Microsoft.Xna.Framework.MathHelper.clamp$1(amount, 0, 1);
                return new Microsoft.Xna.Framework.Color.$ctor7(Bridge.Int.clip32(Microsoft.Xna.Framework.MathHelper.lerp(value1.getR(), value2.getR(), amount)), Bridge.Int.clip32(Microsoft.Xna.Framework.MathHelper.lerp(value1.getG(), value2.getG(), amount)), Bridge.Int.clip32(Microsoft.Xna.Framework.MathHelper.lerp(value1.getB(), value2.getB(), amount)), Bridge.Int.clip32(Microsoft.Xna.Framework.MathHelper.lerp(value1.getA(), value2.getA(), amount)));
            },
            /**
             * {@link } should be used instead of this function.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Color
             * @memberof Microsoft.Xna.Framework.Color
             * @param   {Microsoft.Xna.Framework.Color}    value1    
             * @param   {Microsoft.Xna.Framework.Color}    value2    
             * @param   {number}                           amount
             * @return  {Microsoft.Xna.Framework.Color}              Interpolated {@link }.
             */
            lerpPrecise: function (value1, value2, amount) {
                amount = Microsoft.Xna.Framework.MathHelper.clamp$1(amount, 0, 1);
                return new Microsoft.Xna.Framework.Color.$ctor7(Bridge.Int.clip32(Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.getR(), value2.getR(), amount)), Bridge.Int.clip32(Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.getG(), value2.getG(), amount)), Bridge.Int.clip32(Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.getB(), value2.getB(), amount)), Bridge.Int.clip32(Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.getA(), value2.getA(), amount)));
            },
            /**
             * Multiply {@link } by value.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Color
             * @memberof Microsoft.Xna.Framework.Color
             * @param   {Microsoft.Xna.Framework.Color}    value    Source {@link }.
             * @param   {number}                           scale    Multiplicator.
             * @return  {Microsoft.Xna.Framework.Color}             Multiplication result.
             */
            multiply: function (value, scale) {
                return new Microsoft.Xna.Framework.Color.$ctor7(Bridge.Int.clip32(value.getR() * scale), Bridge.Int.clip32(value.getG() * scale), Bridge.Int.clip32(value.getB() * scale), Bridge.Int.clip32(value.getA() * scale));
            },
            /**
             * Translate a non-premultipled alpha {@link } to a {@link } that contains premultiplied alpha.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Color
             * @memberof Microsoft.Xna.Framework.Color
             * @param   {Microsoft.Xna.Framework.Vector4}    vector    A {@link } representing color.
             * @return  {Microsoft.Xna.Framework.Color}                A {@link } which contains premultiplied alpha data.
             */
            fromNonPremultiplied: function (vector) {
                return new Microsoft.Xna.Framework.Color.$ctor9(vector.x * vector.w, vector.y * vector.w, vector.z * vector.w, vector.w);
            },
            /**
             * Translate a non-premultipled alpha {@link } to a {@link } that contains premultiplied alpha.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Color
             * @memberof Microsoft.Xna.Framework.Color
             * @param   {number}                           r    Red component value.
             * @param   {number}                           g    Green component value.
             * @param   {number}                           b    Blue component value.
             * @param   {number}                           a    Alpha component value.
             * @return  {Microsoft.Xna.Framework.Color}         A {@link } which contains premultiplied alpha data.
             */
            fromNonPremultiplied$1: function (r, g, b, a) {
                return new Microsoft.Xna.Framework.Color.$ctor7(((Bridge.Int.div(((r * a) | 0), 255)) | 0), ((Bridge.Int.div(((g * a) | 0), 255)) | 0), ((Bridge.Int.div(((b * a) | 0), 255)) | 0), a);
            }/**
             * Compares whether two {@link } instances are equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Color
             * @memberof Microsoft.Xna.Framework.Color
             * @param   {Microsoft.Xna.Framework.Color}    a    {@link } instance on the left of the equal sign.
             * @param   {Microsoft.Xna.Framework.Color}    b    {@link } instance on the right of the equal sign.
             * @return  {boolean}                               <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Equality: function (a, b) {
                return (a._packedValue === b._packedValue);
            }/**
             * Compares whether two {@link } instances are not equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Color
             * @memberof Microsoft.Xna.Framework.Color
             * @param   {Microsoft.Xna.Framework.Color}    a    {@link } instance on the left of the not equal sign.
             * @param   {Microsoft.Xna.Framework.Color}    b    {@link } instance on the right of the not equal sign.
             * @return  {boolean}                               <pre><code>true</code></pre> if the instances are not equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Inequality: function (a, b) {
                return (a._packedValue !== b._packedValue);
            }/**
             * Multiply {@link } by value.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Color
             * @memberof Microsoft.Xna.Framework.Color
             * @param   {Microsoft.Xna.Framework.Color}    value    Source {@link }.
             * @param   {number}                           scale    Multiplicator.
             * @return  {Microsoft.Xna.Framework.Color}             Multiplication result.
             */
            ,
            op_Multiply: function (value, scale) {
                return new Microsoft.Xna.Framework.Color.$ctor7(Bridge.Int.clip32(value.getR() * scale), Bridge.Int.clip32(value.getG() * scale), Bridge.Int.clip32(value.getB() * scale), Bridge.Int.clip32(value.getA() * scale));
            },
            getDefaultValue: function () { return new Microsoft.Xna.Framework.Color(); }
        },
        _packedValue: 0,
        config: {
            alias: [
            "equalsT", "System$IEquatable$1$Microsoft$Xna$Framework$Color$equalsT"
            ]
        },
        /**
         * Constructs an RGBA color from a packed value.
         The value is a 32-bit unsigned integer, with R in the least significant octet.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {number}    packedValue    The packed value.
         * @return  {void}
         */
        $ctor10: function (packedValue) {
            this.$initialize();
            this._packedValue = packedValue;
        },
        /**
         * Constructs an RGBA color from the XYZW unit length components of a vector.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {Microsoft.Xna.Framework.Vector4}    color    A {@link } representing color.
         * @return  {void}
         */
        $ctor4: function (color) {
            Microsoft.Xna.Framework.Color.$ctor7.call(this, Bridge.Int.clip32(color.x * 255), Bridge.Int.clip32(color.y * 255), Bridge.Int.clip32(color.z * 255), Bridge.Int.clip32(color.w * 255));
        },
        /**
         * Constructs an RGBA color from the XYZ unit length components of a vector. Alpha value will be opaque.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {Microsoft.Xna.Framework.Vector3}    color    A {@link } representing color.
         * @return  {void}
         */
        $ctor3: function (color) {
            Microsoft.Xna.Framework.Color.$ctor6.call(this, Bridge.Int.clip32(color.x * 255), Bridge.Int.clip32(color.y * 255), Bridge.Int.clip32(color.z * 255));
        },
        /**
         * Constructs an RGBA color from a {@link } and an alpha value.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {Microsoft.Xna.Framework.Color}    color    A {@link } for RGB values of new {@link } instance.
         * @param   {number}                           alpha    The alpha component value from 0 to 255.
         * @return  {void}
         */
        $ctor1: function (color, alpha) {
            this.$initialize();
            if ((System.Int64(alpha).and(System.Int64(4294967040))).ne(System.Int64(0))) {
                var clampedA = (Microsoft.Xna.Framework.MathHelper.clamp(alpha, 0, 255)) >>> 0;

                this._packedValue = ((((color._packedValue & 16777215) >>> 0)) | (((clampedA << 24) >>> 0))) >>> 0;
            } else {
                this._packedValue = ((((color._packedValue & 16777215) >>> 0)) | ((((alpha >>> 0) << 24) >>> 0))) >>> 0;
            }
        },
        /**
         * Constructs an RGBA color from color and alpha value.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {Microsoft.Xna.Framework.Color}    color    A {@link } for RGB values of new {@link } instance.
         * @param   {number}                           alpha    Alpha component value from 0.0f to 1.0f.
         * @return  {void}
         */
        $ctor2: function (color, alpha) {
            Microsoft.Xna.Framework.Color.$ctor1.call(this, color, Bridge.Int.clip32(alpha * 255));
        },
        /**
         * Constructs an RGBA color from scalars representing red, green and blue values. Alpha value will be opaque.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {number}    r    Red component value from 0.0f to 1.0f.
         * @param   {number}    g    Green component value from 0.0f to 1.0f.
         * @param   {number}    b    Blue component value from 0.0f to 1.0f.
         * @return  {void}
         */
        $ctor8: function (r, g, b) {
            Microsoft.Xna.Framework.Color.$ctor6.call(this, Bridge.Int.clip32(r * 255), Bridge.Int.clip32(g * 255), Bridge.Int.clip32(b * 255));
        },
        /**
         * Constructs an RGBA color from scalars representing red, green, blue and alpha values.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {number}    r        Red component value from 0.0f to 1.0f.
         * @param   {number}    g        Green component value from 0.0f to 1.0f.
         * @param   {number}    b        Blue component value from 0.0f to 1.0f.
         * @param   {number}    alpha    Alpha component value from 0.0f to 1.0f.
         * @return  {void}
         */
        $ctor9: function (r, g, b, alpha) {
            Microsoft.Xna.Framework.Color.$ctor7.call(this, Bridge.Int.clip32(r * 255), Bridge.Int.clip32(g * 255), Bridge.Int.clip32(b * 255), Bridge.Int.clip32(alpha * 255));
        },
        /**
         * Constructs an RGBA color from scalars representing red, green and blue values. Alpha value will be opaque.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {number}    r    Red component value from 0 to 255.
         * @param   {number}    g    Green component value from 0 to 255.
         * @param   {number}    b    Blue component value from 0 to 255.
         * @return  {void}
         */
        $ctor6: function (r, g, b) {
            this.$initialize();
            this._packedValue = 4278190080; // A = 255

            if ((System.Int64((r | g | b)).and(System.Int64(4294967040))).ne(System.Int64(0))) {
                var clampedR = (Microsoft.Xna.Framework.MathHelper.clamp(r, 0, 255)) >>> 0;
                var clampedG = (Microsoft.Xna.Framework.MathHelper.clamp(g, 0, 255)) >>> 0;
                var clampedB = (Microsoft.Xna.Framework.MathHelper.clamp(b, 0, 255)) >>> 0;

                this._packedValue = (this._packedValue | ((((((((clampedB << 16) >>> 0)) | (((clampedG << 8) >>> 0))) >>> 0) | (clampedR)) >>> 0))) >>> 0;
            } else {
                this._packedValue = (this._packedValue | (((((((((b >>> 0) << 16) >>> 0)) | ((((g >>> 0) << 8) >>> 0))) >>> 0) | (r >>> 0)) >>> 0))) >>> 0;
            }
        },
        /**
         * Constructs an RGBA color from scalars representing red, green, blue and alpha values.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {number}    r        Red component value from 0 to 255.
         * @param   {number}    g        Green component value from 0 to 255.
         * @param   {number}    b        Blue component value from 0 to 255.
         * @param   {number}    alpha    Alpha component value from 0 to 255.
         * @return  {void}
         */
        $ctor7: function (r, g, b, alpha) {
            this.$initialize();
            if ((System.Int64((r | g | b | alpha)).and(System.Int64(4294967040))).ne(System.Int64(0))) {
                var clampedR = (Microsoft.Xna.Framework.MathHelper.clamp(r, 0, 255)) >>> 0;
                var clampedG = (Microsoft.Xna.Framework.MathHelper.clamp(g, 0, 255)) >>> 0;
                var clampedB = (Microsoft.Xna.Framework.MathHelper.clamp(b, 0, 255)) >>> 0;
                var clampedA = (Microsoft.Xna.Framework.MathHelper.clamp(alpha, 0, 255)) >>> 0;

                this._packedValue = ((((((((clampedA << 24) >>> 0)) | (((clampedB << 16) >>> 0))) >>> 0) | (((clampedG << 8) >>> 0))) >>> 0) | (clampedR)) >>> 0;
            } else {
                this._packedValue = (((((((((alpha >>> 0) << 24) >>> 0)) | ((((b >>> 0) << 16) >>> 0))) >>> 0) | ((((g >>> 0) << 8) >>> 0))) >>> 0) | (r >>> 0)) >>> 0;
            }
        },
        /**
         * Constructs an RGBA color from scalars representing red, green, blue and alpha values.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {number}    r        
         * @param   {number}    g        
         * @param   {number}    b        
         * @param   {number}    alpha
         * @return  {void}
         */
        $ctor5: function (r, g, b, alpha) {
            this.$initialize();
            this._packedValue = ((((((((alpha << 24) >>> 0)) | (((b << 16) >>> 0))) >>> 0) | (((g << 8) >>> 0))) >>> 0) | (r)) >>> 0;
        },
        ctor: function () {
            this.$initialize();
        },
        getJavascriptColor: function () {
            return System.String.format("#{0}{1}{2}", System.String.alignString(this.getR().toString(16), 2, 48), System.String.alignString(this.getG().toString(16), 2, 48), System.String.alignString(this.getB().toString(16), 2, 48));
        },
        /**
         * Gets or sets the blue component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getB
         * @return  {number}
         */
        /**
         * Gets or sets the blue component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setB
         * @param   {number}    value
         * @return  {void}
         */
        getB: function () {
            return ((this._packedValue >>> 16) & 255);
        },
        /**
         * Gets or sets the blue component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getB
         * @return  {number}
         */
        /**
         * Gets or sets the blue component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setB
         * @param   {number}    value
         * @return  {void}
         */
        setB: function (value) {
            this._packedValue = ((((this._packedValue & 4278255615) >>> 0)) | (((value << 16) >>> 0))) >>> 0;
        },
        /**
         * Gets or sets the green component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getG
         * @return  {number}
         */
        /**
         * Gets or sets the green component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setG
         * @param   {number}    value
         * @return  {void}
         */
        getG: function () {
            return ((this._packedValue >>> 8) & 255);
        },
        /**
         * Gets or sets the green component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getG
         * @return  {number}
         */
        /**
         * Gets or sets the green component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setG
         * @param   {number}    value
         * @return  {void}
         */
        setG: function (value) {
            this._packedValue = ((((this._packedValue & 4294902015) >>> 0)) | (((value << 8) >>> 0))) >>> 0;
        },
        /**
         * Gets or sets the red component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getR
         * @return  {number}
         */
        /**
         * Gets or sets the red component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setR
         * @param   {number}    value
         * @return  {void}
         */
        getR: function () {
            return (this._packedValue & 255);
        },
        /**
         * Gets or sets the red component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getR
         * @return  {number}
         */
        /**
         * Gets or sets the red component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setR
         * @param   {number}    value
         * @return  {void}
         */
        setR: function (value) {
            this._packedValue = ((((this._packedValue & 4294967040) >>> 0)) | value) >>> 0;
        },
        /**
         * Gets or sets the alpha component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getA
         * @return  {number}
         */
        /**
         * Gets or sets the alpha component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setA
         * @param   {number}    value
         * @return  {void}
         */
        getA: function () {
            return ((this._packedValue >>> 24) & 255);
        },
        /**
         * Gets or sets the alpha component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getA
         * @return  {number}
         */
        /**
         * Gets or sets the alpha component.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setA
         * @param   {number}    value
         * @return  {void}
         */
        setA: function (value) {
            this._packedValue = ((((this._packedValue & 16777215) >>> 0)) | (((value << 24) >>> 0))) >>> 0;
        },
        /**
         * Gets or sets packed value of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getPackedValue
         * @return  {number}
         */
        /**
         * Gets or sets packed value of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setPackedValue
         * @param   {number}    value
         * @return  {void}
         */
        getPackedValue: function () {
            return this._packedValue;
        },
        /**
         * Gets or sets packed value of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function getPackedValue
         * @return  {number}
         */
        /**
         * Gets or sets packed value of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @function setPackedValue
         * @param   {number}    value
         * @return  {void}
         */
        setPackedValue: function (value) {
            this._packedValue = value;
        },
        getDebugDisplayString: function () {
            return [this.getR().toString(), "  ", this.getG().toString(), "  ", this.getB().toString(), "  ", this.getA().toString()].toString().split(',').join('');
        },
        /**
         * Gets the hash code of this {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @return  {number}        Hash code of this {@link }.
         */
        getHashCode: function () {
            return Bridge.getHashCode(this._packedValue);
        },
        /**
         * Compares whether current instance is equal to specified object.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {Object}     obj    The {@link } to compare.
         * @return  {boolean}           <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equals: function (obj) {
            return ((Bridge.is(obj, Microsoft.Xna.Framework.Color)) && this.equalsT(System.Nullable.getValue(Bridge.cast(obj, Microsoft.Xna.Framework.Color))));
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @param   {Microsoft.Xna.Framework.Color}    other    The {@link } to compare.
         * @return  {boolean}                                   <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equalsT: function (other) {
            return this.getPackedValue() === other.getPackedValue();
        },
        /**
         * Gets a {@link } representation for this object.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @return  {Microsoft.Xna.Framework.Vector3}        A {@link } representation for this object.
         */
        toVector3: function () {
            return new Microsoft.Xna.Framework.Vector3.$ctor3(this.getR() / 255.0, this.getG() / 255.0, this.getB() / 255.0);
        },
        /**
         * Gets a {@link } representation for this object.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @return  {Microsoft.Xna.Framework.Vector4}        A {@link } representation for this object.
         */
        toVector4: function () {
            return new Microsoft.Xna.Framework.Vector4.$ctor4(this.getR() / 255.0, this.getG() / 255.0, this.getB() / 255.0, this.getA() / 255.0);
        },
        /**
         * Returns a {@link } representation of this {@link } in the format:
         {R:[red] G:[green] B:[blue] A:[alpha]}
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Color
         * @memberof Microsoft.Xna.Framework.Color
         * @return  {string}        {@link } representation of this {@link }.
         */
        toString: function () {
            var sb = new System.Text.StringBuilder("", 25);
            sb.append("{R:");
            sb.append(this.getR());
            sb.append(" G:");
            sb.append(this.getG());
            sb.append(" B:");
            sb.append(this.getB());
            sb.append(" A:");
            sb.append(this.getA());
            sb.append("}");
            return sb.toString();
        },
        $clone: function (to) {
            var s = to || new Microsoft.Xna.Framework.Color();
            s._packedValue = this._packedValue;
            return s;
        }
    });

    /**
     * Contains commonly used precalculated values and mathematical operations.
     *
     * @static
     * @abstract
     * @public
     * @class Microsoft.Xna.Framework.MathHelper
     */
    Bridge.define("Microsoft.Xna.Framework.MathHelper", {
        statics: {
            /**
             * Represents the mathematical static readonlyant e(2.71828175).
             *
             * @instance
             */
            e: 0,
            /**
             * Represents the log base ten of e(0.4342945).
             *
             * @instance
             */
            log10E: 0.4342945,
            /**
             * Represents the log base two of e(1.442695).
             *
             * @instance
             */
            log2E: 1.442695,
            /**
             * Represents the value of pi(3.14159274).
             *
             * @instance
             */
            pi: 0,
            /**
             * Represents the value of pi divided by two(1.57079637).
             *
             * @instance
             */
            piOver2: 0,
            /**
             * Represents the value of pi divided by four(0.7853982).
             *
             * @instance
             */
            piOver4: 0,
            /**
             * Represents the value of pi times two(6.28318548).
             *
             * @instance
             */
            twoPi: 0,
            config: {
                init: function () {
                    this.e = Math.E;
                    this.pi = Math.PI;
                    this.piOver2 = Math.PI / 2.0;
                    this.piOver4 = Math.PI / 4.0;
                    this.twoPi = Math.PI * 2.0;
                }
            },
            /**
             * Returns the Cartesian coordinate for one axis of a point that is defined by a given triangle and two normalized barycentric (areal) coordinates.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1     The coordinate on one axis of vertex 1 of the defining triangle.
             * @param   {number}    value2     The coordinate on the same axis of vertex 2 of the defining triangle.
             * @param   {number}    value3     The coordinate on the same axis of vertex 3 of the defining triangle.
             * @param   {number}    amount1    The normalized barycentric (areal) coordinate b2, equal to the weighting factor for vertex 2, the coordinate of which is specified in value2.
             * @param   {number}    amount2    The normalized barycentric (areal) coordinate b3, equal to the weighting factor for vertex 3, the coordinate of which is specified in value3.
             * @return  {number}               Cartesian coordinate of the specified point with respect to the axis being used.
             */
            barycentric: function (value1, value2, value3, amount1, amount2) {
                return value1 + (value2 - value1) * amount1 + (value3 - value1) * amount2;
            },
            /**
             * Performs a Catmull-Rom interpolation using the specified positions.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1    The first position in the interpolation.
             * @param   {number}    value2    The second position in the interpolation.
             * @param   {number}    value3    The third position in the interpolation.
             * @param   {number}    value4    The fourth position in the interpolation.
             * @param   {number}    amount    Weighting factor.
             * @return  {number}              A position that is the result of the Catmull-Rom interpolation.
             */
            catmullRom: function (value1, value2, value3, value4, amount) {
                // Using formula from http://www.mvps.org/directx/articles/catmull/
                // Internally using doubles not to lose precission
                var amountSquared = amount * amount;
                var amountCubed = amountSquared * amount;
                return 0.5 * (2.0 * value2 + (value3 - value1) * amount + (2.0 * value1 - 5.0 * value2 + 4.0 * value3 - value4) * amountSquared + (3.0 * value2 - value1 - 3.0 * value3 + value4) * amountCubed);
            },
            /**
             * Restricts a value to be within a specified range.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value    The value to clamp.
             * @param   {number}    min      The minimum value. If <pre><code>value</code></pre> is less than <pre><code>min</code></pre>, <pre><code>min</code></pre> will be returned.
             * @param   {number}    max      The maximum value. If <pre><code>value</code></pre> is greater than <pre><code>max</code></pre>, <pre><code>max</code></pre> will be returned.
             * @return  {number}             The clamped value.
             */
            clamp$1: function (value, min, max) {
                // First we check to see if we're greater than the max
                value = (value > max) ? max : value;

                // Then we check to see if we're less than the min.
                value = (value < min) ? min : value;

                // There's no check to see if min > max.
                return value;
            },
            /**
             * Restricts a value to be within a specified range.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value    The value to clamp.
             * @param   {number}    min      The minimum value. If <pre><code>value</code></pre> is less than <pre><code>min</code></pre>, <pre><code>min</code></pre> will be returned.
             * @param   {number}    max      The maximum value. If <pre><code>value</code></pre> is greater than <pre><code>max</code></pre>, <pre><code>max</code></pre> will be returned.
             * @return  {number}             The clamped value.
             */
            clamp: function (value, min, max) {
                value = (value > max) ? max : value;
                value = (value < min) ? min : value;
                return value;
            },
            /**
             * Calculates the absolute value of the difference of two values.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1    Source value.
             * @param   {number}    value2    Source value.
             * @return  {number}              Distance between the two values.
             */
            distance: function (value1, value2) {
                return Math.abs(value1 - value2);
            },
            /**
             * Performs a Hermite spline interpolation.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1      Source position.
             * @param   {number}    tangent1    Source tangent.
             * @param   {number}    value2      Source position.
             * @param   {number}    tangent2    Source tangent.
             * @param   {number}    amount      Weighting factor.
             * @return  {number}                The result of the Hermite spline interpolation.
             */
            hermite: function (value1, tangent1, value2, tangent2, amount) {
                // All transformed to double not to lose precission
                // Otherwise, for high numbers of param:amount the result is NaN instead of Infinity
                var v1 = value1, v2 = value2, t1 = tangent1, t2 = tangent2, s = amount, result;
                var sCubed = s * s * s;
                var sSquared = s * s;

                if (amount === 0.0) {
                    result = value1;
                } else {
                    if (amount === 1.0) {
                        result = value2;
                    } else {
                        result = (2 * v1 - 2 * v2 + t2 + t1) * sCubed + (3 * v2 - 3 * v1 - 2 * t1 - t2) * sSquared + t1 * s + v1;
                    }
                }
                return result;
            },
            /**
             * Linearly interpolates between two values.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1    Source value.
             * @param   {number}    value2    Destination value.
             * @param   {number}    amount    Value between 0 and 1 indicating the weight of value2.
             * @return  {number}              Interpolated value.
             */
            lerp: function (value1, value2, amount) {
                return value1 + (value2 - value1) * amount;
            },
            /**
             * Linearly interpolates between two values.
             This method is a less efficient, more precise version of {@link }.
             See remarks for more info.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1    Source value.
             * @param   {number}    value2    Destination value.
             * @param   {number}    amount    Value between 0 and 1 indicating the weight of value2.
             * @return  {number}              Interpolated value.
             */
            lerpPrecise: function (value1, value2, amount) {
                return ((1 - amount) * value1) + (value2 * amount);
            },
            /**
             * Returns the greater of two values.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1    Source value.
             * @param   {number}    value2    Source value.
             * @return  {number}              The greater value.
             */
            max$1: function (value1, value2) {
                return value1 > value2 ? value1 : value2;
            },
            /**
             * Returns the greater of two values.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1    Source value.
             * @param   {number}    value2    Source value.
             * @return  {number}              The greater value.
             */
            max: function (value1, value2) {
                return value1 > value2 ? value1 : value2;
            },
            /**
             * Returns the lesser of two values.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1    Source value.
             * @param   {number}    value2    Source value.
             * @return  {number}              The lesser value.
             */
            min$1: function (value1, value2) {
                return value1 < value2 ? value1 : value2;
            },
            /**
             * Returns the lesser of two values.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1    Source value.
             * @param   {number}    value2    Source value.
             * @return  {number}              The lesser value.
             */
            min: function (value1, value2) {
                return value1 < value2 ? value1 : value2;
            },
            /**
             * Interpolates between two values using a cubic equation.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    value1    Source value.
             * @param   {number}    value2    Source value.
             * @param   {number}    amount    Weighting value.
             * @return  {number}              Interpolated value.
             */
            smoothStep: function (value1, value2, amount) {
                // It is expected that 0 < amount < 1
                // If amount < 0, return value1
                // If amount > 1, return value2
                var result = Microsoft.Xna.Framework.MathHelper.clamp$1(amount, 0.0, 1.0);
                result = Microsoft.Xna.Framework.MathHelper.hermite(value1, 0.0, value2, 0.0, result);

                return result;
            },
            /**
             * Converts radians to degrees.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    radians    The angle in radians.
             * @return  {number}               The angle in degrees.
             */
            toDegrees: function (radians) {
                return radians * 57.295779513082323;
            },
            /**
             * Converts degrees to radians.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    degrees    The angle in degrees.
             * @return  {number}               The angle in radians.
             */
            toRadians: function (degrees) {
                return degrees * 0.017453292519943295;
            },
            /**
             * Reduces a given angle to a value between π and -π.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}    angle    The angle to reduce, in radians.
             * @return  {number}             The new angle, in radians.
             */
            wrapAngle: function (angle) {
                if ((angle > -Microsoft.Xna.Framework.MathHelper.pi) && (angle <= Microsoft.Xna.Framework.MathHelper.pi)) {
                    return angle;
                }
                angle %= Microsoft.Xna.Framework.MathHelper.twoPi;
                if (angle <= -Microsoft.Xna.Framework.MathHelper.pi) {
                    return angle + Microsoft.Xna.Framework.MathHelper.twoPi;
                }
                if (angle > Microsoft.Xna.Framework.MathHelper.pi) {
                    return angle - Microsoft.Xna.Framework.MathHelper.twoPi;
                }
                return angle;
            },
            /**
             * Determines if value is powered by two.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.MathHelper
             * @memberof Microsoft.Xna.Framework.MathHelper
             * @param   {number}     value    A value.
             * @return  {boolean}             <pre><code>true</code></pre> if <pre><code>value</code></pre> is powered by two; otherwise <pre><code>false</code></pre>.
             */
            isPowerOfTwo: function (value) {
                return (value > 0) && ((value & (((value - 1) | 0))) === 0);
            }
        }
    });

    /**
     * Describes a 2D-point.
     *
     * @public
     * @class Microsoft.Xna.Framework.Point
     * @implements  System.IEquatable$1
     */
    Bridge.define("Microsoft.Xna.Framework.Point", {
        inherits: function () { return [System.IEquatable$1(Microsoft.Xna.Framework.Point)]; },
        $kind: "struct",
        statics: {
            config: {
                init: function () {
                    this.zeroPoint = new Microsoft.Xna.Framework.Point.ctor();
                }
            },
            /**
             * Returns a {@link } with coordinates 0, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Point
             * @memberof Microsoft.Xna.Framework.Point
             * @function getZero
             * @return  {Microsoft.Xna.Framework.Point}
             */
            /**
             * Returns a {@link } with coordinates 0, 0.
             *
             * @instance
             * @function setZero
             */
            getZero: function () {
                return Microsoft.Xna.Framework.Point.zeroPoint.$clone();
            }/**
             * Adds two points.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Point
             * @memberof Microsoft.Xna.Framework.Point
             * @param   {Microsoft.Xna.Framework.Point}    value1    Source {@link } on the left of the add sign.
             * @param   {Microsoft.Xna.Framework.Point}    value2    Source {@link } on the right of the add sign.
             * @return  {Microsoft.Xna.Framework.Point}              Sum of the points.
             */
            ,
            op_Addition: function (value1, value2) {
                return new Microsoft.Xna.Framework.Point.$ctor2(((value1.x + value2.x) | 0), ((value1.y + value2.y) | 0));
            }/**
             * Subtracts a {@link } from a {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Point
             * @memberof Microsoft.Xna.Framework.Point
             * @param   {Microsoft.Xna.Framework.Point}    value1    Source {@link } on the left of the sub sign.
             * @param   {Microsoft.Xna.Framework.Point}    value2    Source {@link } on the right of the sub sign.
             * @return  {Microsoft.Xna.Framework.Point}              Result of the subtraction.
             */
            ,
            op_Subtraction: function (value1, value2) {
                return new Microsoft.Xna.Framework.Point.$ctor2(((value1.x - value2.x) | 0), ((value1.y - value2.y) | 0));
            }/**
             * Multiplies the components of two points by each other.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Point
             * @memberof Microsoft.Xna.Framework.Point
             * @param   {Microsoft.Xna.Framework.Point}    value1    Source {@link } on the left of the mul sign.
             * @param   {Microsoft.Xna.Framework.Point}    value2    Source {@link } on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Point}              Result of the multiplication.
             */
            ,
            op_Multiply: function (value1, value2) {
                return new Microsoft.Xna.Framework.Point.$ctor2(((value1.x * value2.x) | 0), ((value1.y * value2.y) | 0));
            }/**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Point
             * @memberof Microsoft.Xna.Framework.Point
             * @param   {Microsoft.Xna.Framework.Point}    source     Source {@link } on the left of the div sign.
             * @param   {Microsoft.Xna.Framework.Point}    divisor    Divisor {@link } on the right of the div sign.
             * @return  {Microsoft.Xna.Framework.Point}               The result of dividing the points.
             */
            ,
            op_Division: function (source, divisor) {
                return new Microsoft.Xna.Framework.Point.$ctor2(((Bridge.Int.div(source.x, divisor.x)) | 0), ((Bridge.Int.div(source.y, divisor.y)) | 0));
            }/**
             * Compares whether two {@link } instances are equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Point
             * @memberof Microsoft.Xna.Framework.Point
             * @param   {Microsoft.Xna.Framework.Point}    a    {@link } instance on the left of the equal sign.
             * @param   {Microsoft.Xna.Framework.Point}    b    {@link } instance on the right of the equal sign.
             * @return  {boolean}                               <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Equality: function (a, b) {
                return a.equalsT(b.$clone());
            }/**
             * Compares whether two {@link } instances are not equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Point
             * @memberof Microsoft.Xna.Framework.Point
             * @param   {Microsoft.Xna.Framework.Point}    a    {@link } instance on the left of the not equal sign.
             * @param   {Microsoft.Xna.Framework.Point}    b    {@link } instance on the right of the not equal sign.
             * @return  {boolean}                               <pre><code>true</code></pre> if the instances are not equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Inequality: function (a, b) {
                return !a.equalsT(b.$clone());
            },
            getDefaultValue: function () { return new Microsoft.Xna.Framework.Point(); }
        },
        /**
         * The x coordinate of this {@link }.
         *
         * @instance
         */
        x: 0,
        /**
         * The y coordinate of this {@link }.
         *
         * @instance
         */
        y: 0,
        config: {
            alias: [
            "equalsT", "System$IEquatable$1$Microsoft$Xna$Framework$Point$equalsT"
            ]
        },
        /**
         * Constructs a point with X and Y from two values.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Point
         * @memberof Microsoft.Xna.Framework.Point
         * @param   {number}    x    The x coordinate in 2d-space.
         * @param   {number}    y    The y coordinate in 2d-space.
         * @return  {void}
         */
        $ctor2: function (x, y) {
            this.$initialize();
            this.x = x;
            this.y = y;
        },
        /**
         * Constructs a point with X and Y set to the same value.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Point
         * @memberof Microsoft.Xna.Framework.Point
         * @param   {number}    value    The x and y coordinates in 2d-space.
         * @return  {void}
         */
        $ctor1: function (value) {
            this.$initialize();
            this.x = value;
            this.y = value;
        },
        ctor: function () {
            this.$initialize();
        },
        getDebugDisplayString: function () {
            return [this.x.toString(), "  ", this.y.toString()].join('');
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Point
         * @memberof Microsoft.Xna.Framework.Point
         * @param   {Object}     obj    The {@link } to compare.
         * @return  {boolean}           <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equals: function (obj) {
            return (Bridge.is(obj, Microsoft.Xna.Framework.Point)) && this.equalsT(System.Nullable.getValue(Bridge.cast(obj, Microsoft.Xna.Framework.Point)));
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Point
         * @memberof Microsoft.Xna.Framework.Point
         * @param   {Microsoft.Xna.Framework.Point}    other    The {@link } to compare.
         * @return  {boolean}                                   <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equalsT: function (other) {
            return ((this.x === other.x) && (this.y === other.y));
        },
        /**
         * Gets the hash code of this {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Point
         * @memberof Microsoft.Xna.Framework.Point
         * @return  {number}        Hash code of this {@link }.
         */
        getHashCode: function () {
            var hash = 17;
            hash = (((hash * 23) | 0) + Bridge.getHashCode(this.x)) | 0;
            hash = (((hash * 23) | 0) + Bridge.getHashCode(this.y)) | 0;
            return hash;

        },
        /**
         * Returns a {@link } representation of this {@link } in the format:
         {X:[{@link }] Y:[{@link }]}
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Point
         * @memberof Microsoft.Xna.Framework.Point
         * @return  {string}        {@link } representation of this {@link }.
         */
        toString: function () {
            return "{X:" + this.x + " Y:" + this.y + "}";
        },
        /**
         * Gets a {@link } representation for this object.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Point
         * @memberof Microsoft.Xna.Framework.Point
         * @return  {Microsoft.Xna.Framework.Vector2}        A {@link } representation for this object.
         */
        toVector2: function () {
            return new Microsoft.Xna.Framework.Vector2.$ctor2(this.x, this.y);
        },
        $clone: function (to) {
            var s = to || new Microsoft.Xna.Framework.Point();
            s.x = this.x;
            s.y = this.y;
            return s;
        }
    });

    /**
     * Describes a 2D-rectangle.
     *
     * @public
     * @class Microsoft.Xna.Framework.Rectangle
     * @implements  System.IEquatable$1
     */
    Bridge.define("Microsoft.Xna.Framework.Rectangle", {
        inherits: function () { return [System.IEquatable$1(Microsoft.Xna.Framework.Rectangle)]; },
        $kind: "struct",
        statics: {
            config: {
                init: function () {
                    this.emptyRectangle = new Microsoft.Xna.Framework.Rectangle.ctor();
                }
            },
            /**
             * Returns a {@link } with X=0, Y=0, Width=0, Height=0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Rectangle
             * @memberof Microsoft.Xna.Framework.Rectangle
             * @function getEmpty
             * @return  {Microsoft.Xna.Framework.Rectangle}
             */
            /**
             * Returns a {@link } with X=0, Y=0, Width=0, Height=0.
             *
             * @instance
             * @function setEmpty
             */
            getEmpty: function () {
                return Microsoft.Xna.Framework.Rectangle.emptyRectangle.$clone();
            },
            /**
             * Creates a new {@link } that contains overlapping region of two other rectangles.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Rectangle
             * @memberof Microsoft.Xna.Framework.Rectangle
             * @param   {Microsoft.Xna.Framework.Rectangle}    value1    The first {@link }.
             * @param   {Microsoft.Xna.Framework.Rectangle}    value2    The second {@link }.
             * @return  {Microsoft.Xna.Framework.Rectangle}              Overlapping region of the two rectangles.
             */
            intersect: function (value1, value2) {
                value1 = {v:value1};
                value2 = {v:value2};
                var rectangle = { v : new Microsoft.Xna.Framework.Rectangle() };
                Microsoft.Xna.Framework.Rectangle.intersect$1(value1, value2, rectangle);
                return rectangle.v.$clone();
            },
            /**
             * Creates a new {@link } that contains overlapping region of two other rectangles.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Rectangle
             * @memberof Microsoft.Xna.Framework.Rectangle
             * @param   {Microsoft.Xna.Framework.Rectangle}    value1    The first {@link }.
             * @param   {Microsoft.Xna.Framework.Rectangle}    value2    The second {@link }.
             * @param   {Microsoft.Xna.Framework.Rectangle}    result    Overlapping region of the two rectangles as an output parameter.
             * @return  {void}
             */
            intersect$1: function (value1, value2, result) {
                if (value1.v.intersects(value2.v.$clone())) {
                    var right_side = Math.min(((value1.v.x + value1.v.width) | 0), ((value2.v.x + value2.v.width) | 0));
                    var left_side = Math.max(value1.v.x, value2.v.x);
                    var top_side = Math.max(value1.v.y, value2.v.y);
                    var bottom_side = Math.min(((value1.v.y + value1.v.height) | 0), ((value2.v.y + value2.v.height) | 0));
                    result.v = new Microsoft.Xna.Framework.Rectangle.$ctor2(left_side, top_side, ((right_side - left_side) | 0), ((bottom_side - top_side) | 0));
                } else {
                    result.v = new Microsoft.Xna.Framework.Rectangle.$ctor2(0, 0, 0, 0);
                }
            },
            /**
             * Creates a new {@link } that completely contains two other rectangles.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Rectangle
             * @memberof Microsoft.Xna.Framework.Rectangle
             * @param   {Microsoft.Xna.Framework.Rectangle}    value1    The first {@link }.
             * @param   {Microsoft.Xna.Framework.Rectangle}    value2    The second {@link }.
             * @return  {Microsoft.Xna.Framework.Rectangle}              The union of the two rectangles.
             */
            union: function (value1, value2) {
                var x = Math.min(value1.x, value2.x);
                var y = Math.min(value1.y, value2.y);
                return new Microsoft.Xna.Framework.Rectangle.$ctor2(x, y, ((Math.max(value1.getRight(), value2.getRight()) - x) | 0), ((Math.max(value1.getBottom(), value2.getBottom()) - y) | 0));
            },
            /**
             * Creates a new {@link } that completely contains two other rectangles.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Rectangle
             * @memberof Microsoft.Xna.Framework.Rectangle
             * @param   {Microsoft.Xna.Framework.Rectangle}    value1    The first {@link }.
             * @param   {Microsoft.Xna.Framework.Rectangle}    value2    The second {@link }.
             * @param   {Microsoft.Xna.Framework.Rectangle}    result    The union of the two rectangles as an output parameter.
             * @return  {void}
             */
            union$1: function (value1, value2, result) {
                result.v.x = Math.min(value1.v.x, value2.v.x);
                result.v.y = Math.min(value1.v.y, value2.v.y);
                result.v.width = (Math.max(value1.v.getRight(), value2.v.getRight()) - result.v.x) | 0;
                result.v.height = (Math.max(value1.v.getBottom(), value2.v.getBottom()) - result.v.y) | 0;
            }/**
             * Compares whether two {@link } instances are equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Rectangle
             * @memberof Microsoft.Xna.Framework.Rectangle
             * @param   {Microsoft.Xna.Framework.Rectangle}    a    {@link } instance on the left of the equal sign.
             * @param   {Microsoft.Xna.Framework.Rectangle}    b    {@link } instance on the right of the equal sign.
             * @return  {boolean}                                   <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Equality: function (a, b) {
                return ((a.x === b.x) && (a.y === b.y) && (a.width === b.width) && (a.height === b.height));
            }/**
             * Compares whether two {@link } instances are not equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Rectangle
             * @memberof Microsoft.Xna.Framework.Rectangle
             * @param   {Microsoft.Xna.Framework.Rectangle}    a    {@link } instance on the left of the not equal sign.
             * @param   {Microsoft.Xna.Framework.Rectangle}    b    {@link } instance on the right of the not equal sign.
             * @return  {boolean}                                   <pre><code>true</code></pre> if the instances are not equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Inequality: function (a, b) {
                return !(Microsoft.Xna.Framework.Rectangle.op_Equality(a, b));
            },
            getDefaultValue: function () { return new Microsoft.Xna.Framework.Rectangle(); }
        },
        /**
         * The x coordinate of the top-left corner of this {@link }.
         *
         * @instance
         */
        x: 0,
        /**
         * The y coordinate of the top-left corner of this {@link }.
         *
         * @instance
         */
        y: 0,
        /**
         * The width of this {@link }.
         *
         * @instance
         */
        width: 0,
        /**
         * The height of this {@link }.
         *
         * @instance
         */
        height: 0,
        config: {
            alias: [
            "equalsT", "System$IEquatable$1$Microsoft$Xna$Framework$Rectangle$equalsT"
            ]
        },
        /**
         * Creates a new instance of {@link } struct, with the specified
         position, width, and height.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {number}    x         The x coordinate of the top-left corner of the created {@link }.
         * @param   {number}    y         The y coordinate of the top-left corner of the created {@link }.
         * @param   {number}    width     The width of the created {@link }.
         * @param   {number}    height    The height of the created {@link }.
         * @return  {void}
         */
        $ctor2: function (x, y, width, height) {
            this.$initialize();
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },
        /**
         * Creates a new instance of {@link } struct, with the specified
         location and size.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Point}    location    The x and y coordinates of the top-left corner of the created {@link }.
         * @param   {Microsoft.Xna.Framework.Point}    size        The width and height of the created {@link }.
         * @return  {void}
         */
        $ctor1: function (location, size) {
            this.$initialize();
            this.x = location.x;
            this.y = location.y;
            this.width = size.x;
            this.height = size.y;
        },
        ctor: function () {
            this.$initialize();
        },
        /**
         * Returns the x coordinate of the left edge of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getLeft
         * @return  {number}
         */
        /**
         * Returns the x coordinate of the left edge of this {@link }.
         *
         * @instance
         * @function setLeft
         */
        getLeft: function () {
            return this.x;
        },
        /**
         * Returns the x coordinate of the right edge of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getRight
         * @return  {number}
         */
        /**
         * Returns the x coordinate of the right edge of this {@link }.
         *
         * @instance
         * @function setRight
         */
        getRight: function () {
            return (((this.x + this.width) | 0));
        },
        /**
         * Returns the y coordinate of the top edge of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getTop
         * @return  {number}
         */
        /**
         * Returns the y coordinate of the top edge of this {@link }.
         *
         * @instance
         * @function setTop
         */
        getTop: function () {
            return this.y;
        },
        /**
         * Returns the y coordinate of the bottom edge of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getBottom
         * @return  {number}
         */
        /**
         * Returns the y coordinate of the bottom edge of this {@link }.
         *
         * @instance
         * @function setBottom
         */
        getBottom: function () {
            return (((this.y + this.height) | 0));
        },
        /**
         * Whether or not this {@link } has a {@link } and
         {@link } of 0, and a {@link } of (0, 0).
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getIsEmpty
         * @return  {boolean}
         */
        /**
         * Whether or not this {@link } has a {@link } and
         {@link } of 0, and a {@link } of (0, 0).
         *
         * @instance
         * @function setIsEmpty
         */
        getIsEmpty: function () {
            return ((((this.width === 0) && (this.height === 0)) && (this.x === 0)) && (this.y === 0));
        },
        /**
         * The top-left coordinates of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getLocation
         * @return  {Microsoft.Xna.Framework.Point}
         */
        /**
         * The top-left coordinates of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function setLocation
         * @param   {Microsoft.Xna.Framework.Point}    value
         * @return  {void}
         */
        getLocation: function () {
            return new Microsoft.Xna.Framework.Point.$ctor2(this.x, this.y);
        },
        /**
         * The top-left coordinates of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getLocation
         * @return  {Microsoft.Xna.Framework.Point}
         */
        /**
         * The top-left coordinates of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function setLocation
         * @param   {Microsoft.Xna.Framework.Point}    value
         * @return  {void}
         */
        setLocation: function (value) {
            this.x = value.x;
            this.y = value.y;
        },
        /**
         * The width-height coordinates of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getSize
         * @return  {Microsoft.Xna.Framework.Point}
         */
        /**
         * The width-height coordinates of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function setSize
         * @param   {Microsoft.Xna.Framework.Point}    value
         * @return  {void}
         */
        getSize: function () {
            return new Microsoft.Xna.Framework.Point.$ctor2(this.width, this.height);
        },
        /**
         * The width-height coordinates of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getSize
         * @return  {Microsoft.Xna.Framework.Point}
         */
        /**
         * The width-height coordinates of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function setSize
         * @param   {Microsoft.Xna.Framework.Point}    value
         * @return  {void}
         */
        setSize: function (value) {
            this.width = value.x;
            this.height = value.y;
        },
        /**
         * A {@link } located in the center of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @function getCenter
         * @return  {Microsoft.Xna.Framework.Point}
         */
        /**
         * A {@link } located in the center of this {@link }.
         *
         * @instance
         * @function setCenter
         */
        getCenter: function () {
            return new Microsoft.Xna.Framework.Point.$ctor2(((this.x + (((Bridge.Int.div(this.width, 2)) | 0))) | 0), ((this.y + (((Bridge.Int.div(this.height, 2)) | 0))) | 0));
        },
        getDebugDisplayString: function () {
            return [this.x, "  ", this.y, "  ", this.width, "  ", this.height].toString().split(',').join('');
        },
        /**
         * Gets whether or not the provided coordinates lie within the bounds of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {number}     x    The x coordinate of the point to check for containment.
         * @param   {number}     y    The y coordinate of the point to check for containment.
         * @return  {boolean}         <pre><code>true</code></pre> if the provided coordinates lie inside this {@link }; <pre><code>false</code></pre> otherwise.
         */
        contains$3: function (x, y) {
            return ((((this.x <= x) && (x < (((this.x + this.width) | 0)))) && (this.y <= y)) && (y < (((this.y + this.height) | 0))));
        },
        /**
         * Gets whether or not the provided coordinates lie within the bounds of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {number}     x    The x coordinate of the point to check for containment.
         * @param   {number}     y    The y coordinate of the point to check for containment.
         * @return  {boolean}         <pre><code>true</code></pre> if the provided coordinates lie inside this {@link }; <pre><code>false</code></pre> otherwise.
         */
        contains$4: function (x, y) {
            return ((((this.x <= x) && (x < (((this.x + this.width) | 0)))) && (this.y <= y)) && (y < (((this.y + this.height) | 0))));
        },
        /**
         * Gets whether or not the provided {@link } lies within the bounds of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Point}    value    The coordinates to check for inclusion in this {@link }.
         * @return  {boolean}                                   <pre><code>true</code></pre> if the provided {@link } lies inside this {@link }; <pre><code>false</code></pre> otherwise.
         */
        contains: function (value) {
            return ((((this.x <= value.x) && (value.x < (((this.x + this.width) | 0)))) && (this.y <= value.y)) && (value.y < (((this.y + this.height) | 0))));
        },
        /**
         * Gets whether or not the provided {@link } lies within the bounds of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Point}    value     The coordinates to check for inclusion in this {@link }.
         * @param   {Boolean}                          result    <pre><code>true</code></pre> if the provided {@link } lies inside this {@link }; <pre><code>false</code></pre> otherwise. As an output parameter.
         * @return  {void}
         */
        contains$5: function (value, result) {
            result.v = ((((this.x <= value.v.x) && (value.v.x < (((this.x + this.width) | 0)))) && (this.y <= value.v.y)) && (value.v.y < (((this.y + this.height) | 0))));
        },
        /**
         * Gets whether or not the provided {@link } lies within the bounds of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Vector2}    value    The coordinates to check for inclusion in this {@link }.
         * @return  {boolean}                                     <pre><code>true</code></pre> if the provided {@link } lies inside this {@link }; <pre><code>false</code></pre> otherwise.
         */
        contains$2: function (value) {
            return ((((this.x <= value.x) && (value.x < (((this.x + this.width) | 0)))) && (this.y <= value.y)) && (value.y < (((this.y + this.height) | 0))));
        },
        /**
         * Gets whether or not the provided {@link } lies within the bounds of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Vector2}    value     The coordinates to check for inclusion in this {@link }.
         * @param   {Boolean}                            result    <pre><code>true</code></pre> if the provided {@link } lies inside this {@link }; <pre><code>false</code></pre> otherwise. As an output parameter.
         * @return  {void}
         */
        contains$7: function (value, result) {
            result.v = ((((this.x <= value.v.x) && (value.v.x < (((this.x + this.width) | 0)))) && (this.y <= value.v.y)) && (value.v.y < (((this.y + this.height) | 0))));
        },
        /**
         * Gets whether or not the provided {@link } lies within the bounds of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Rectangle}    value    The {@link } to check for inclusion in this {@link }.
         * @return  {boolean}                                       <pre><code>true</code></pre> if the provided {@link }'s bounds lie entirely inside this {@link }; <pre><code>false</code></pre> otherwise.
         */
        contains$1: function (value) {
            return ((((this.x <= value.x) && ((((value.x + value.width) | 0)) <= (((this.x + this.width) | 0)))) && (this.y <= value.y)) && ((((value.y + value.height) | 0)) <= (((this.y + this.height) | 0))));
        },
        /**
         * Gets whether or not the provided {@link } lies within the bounds of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Rectangle}    value     The {@link } to check for inclusion in this {@link }.
         * @param   {Boolean}                              result    <pre><code>true</code></pre> if the provided {@link }'s bounds lie entirely inside this {@link }; <pre><code>false</code></pre> otherwise. As an output parameter.
         * @return  {void}
         */
        contains$6: function (value, result) {
            result.v = ((((this.x <= value.v.x) && ((((value.v.x + value.v.width) | 0)) <= (((this.x + this.width) | 0)))) && (this.y <= value.v.y)) && ((((value.v.y + value.v.height) | 0)) <= (((this.y + this.height) | 0))));
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Object}     obj    The {@link } to compare.
         * @return  {boolean}           <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equals: function (obj) {
            return (Bridge.is(obj, Microsoft.Xna.Framework.Rectangle)) && Microsoft.Xna.Framework.Rectangle.op_Equality(this, System.Nullable.getValue(Bridge.cast(obj, Microsoft.Xna.Framework.Rectangle)));
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Rectangle}    other    The {@link } to compare.
         * @return  {boolean}                                       <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equalsT: function (other) {
            return Microsoft.Xna.Framework.Rectangle.op_Equality(this, other);
        },
        /**
         * Gets the hash code of this {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @return  {number}        Hash code of this {@link }.
         */
        getHashCode: function () {
            var hash = 17;
            hash = (((hash * 23) | 0) + Bridge.getHashCode(this.x)) | 0;
            hash = (((hash * 23) | 0) + Bridge.getHashCode(this.y)) | 0;
            hash = (((hash * 23) | 0) + Bridge.getHashCode(this.width)) | 0;
            hash = (((hash * 23) | 0) + Bridge.getHashCode(this.height)) | 0;
            return hash;
        },
        /**
         * Adjusts the edges of this {@link } by specified horizontal and vertical amounts.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {number}    horizontalAmount    Value to adjust the left and right edges.
         * @param   {number}    verticalAmount      Value to adjust the top and bottom edges.
         * @return  {void}
         */
        inflate: function (horizontalAmount, verticalAmount) {
            this.x = (this.x - horizontalAmount) | 0;
            this.y = (this.y - verticalAmount) | 0;
            this.width = (this.width + (((horizontalAmount * 2) | 0))) | 0;
            this.height = (this.height + (((verticalAmount * 2) | 0))) | 0;
        },
        /**
         * Adjusts the edges of this {@link } by specified horizontal and vertical amounts.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {number}    horizontalAmount    Value to adjust the left and right edges.
         * @param   {number}    verticalAmount      Value to adjust the top and bottom edges.
         * @return  {void}
         */
        inflate$1: function (horizontalAmount, verticalAmount) {
            this.x = (this.x - Bridge.Int.clip32(horizontalAmount)) | 0;
            this.y = (this.y - Bridge.Int.clip32(verticalAmount)) | 0;
            this.width = (this.width + (((Bridge.Int.clip32(horizontalAmount) * 2) | 0))) | 0;
            this.height = (this.height + (((Bridge.Int.clip32(verticalAmount) * 2) | 0))) | 0;
        },
        /**
         * Gets whether or not the other {@link } intersects with this rectangle.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Rectangle}    value    The other rectangle for testing.
         * @return  {boolean}                                       <pre><code>true</code></pre> if other {@link } intersects with this rectangle; <pre><code>false</code></pre> otherwise.
         */
        intersects: function (value) {
            return value.getLeft() < this.getRight() && this.getLeft() < value.getRight() && value.getTop() < this.getBottom() && this.getTop() < value.getBottom();
        },
        /**
         * Gets whether or not the other {@link } intersects with this rectangle.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Rectangle}    value     The other rectangle for testing.
         * @param   {Boolean}                              result    <pre><code>true</code></pre> if other {@link } intersects with this rectangle; <pre><code>false</code></pre> otherwise. As an output parameter.
         * @return  {void}
         */
        intersects$1: function (value, result) {
            result.v = value.v.getLeft() < this.getRight() && this.getLeft() < value.v.getRight() && value.v.getTop() < this.getBottom() && this.getTop() < value.v.getBottom();
        },
        /**
         * Changes the {@link } of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {number}    offsetX    The x coordinate to add to this {@link }.
         * @param   {number}    offsetY    The y coordinate to add to this {@link }.
         * @return  {void}
         */
        offset$2: function (offsetX, offsetY) {
            this.x = (this.x + offsetX) | 0;
            this.y = (this.y + offsetY) | 0;
        },
        /**
         * Changes the {@link } of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {number}    offsetX    The x coordinate to add to this {@link }.
         * @param   {number}    offsetY    The y coordinate to add to this {@link }.
         * @return  {void}
         */
        offset$3: function (offsetX, offsetY) {
            this.x = (this.x + Bridge.Int.clip32(offsetX)) | 0;
            this.y = (this.y + Bridge.Int.clip32(offsetY)) | 0;
        },
        /**
         * Changes the {@link } of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Point}    amount    The x and y components to add to this {@link }.
         * @return  {void}
         */
        offset: function (amount) {
            this.x = (this.x + amount.x) | 0;
            this.y = (this.y + amount.y) | 0;
        },
        /**
         * Changes the {@link } of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @param   {Microsoft.Xna.Framework.Vector2}    amount    The x and y components to add to this {@link }.
         * @return  {void}
         */
        offset$1: function (amount) {
            this.x = (this.x + Bridge.Int.clip32(amount.x)) | 0;
            this.y = (this.y + Bridge.Int.clip32(amount.y)) | 0;
        },
        /**
         * Returns a {@link } representation of this {@link } in the format:
         {X:[{@link }] Y:[{@link }] Width:[{@link }] Height:[{@link }]}
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Rectangle
         * @memberof Microsoft.Xna.Framework.Rectangle
         * @return  {string}        {@link } representation of this {@link }.
         */
        toString: function () {
            return "{X:" + this.x + " Y:" + this.y + " Width:" + this.width + " Height:" + this.height + "}";
        },
        $clone: function (to) {
            var s = to || new Microsoft.Xna.Framework.Rectangle();
            s.x = this.x;
            s.y = this.y;
            s.width = this.width;
            s.height = this.height;
            return s;
        }
    });

    /**
     * Describes a 2D-vector.
     * // Creates a new {@link } that contains a transformation of 2d-vector by the specified {@link }.
    //
     * // Creates a new {@link } that contains a transformation of 2d-vector by the specified {@link }.
    //
     * // Creates a new {@link } that contains a transformation of 2d-vector by the specified {@link }, representing the rotation.
    //
     * // Creates a new {@link } that contains a transformation of 2d-vector by the specified {@link }, representing the rotation.
    //
     * // Apply transformation on vectors within array of {@link } by the specified {@link } and places the results in an another array.
    //
     * // Apply transformation on vectors within array of {@link } by the specified {@link } and places the results in an another array.
    //
     * // Apply transformation on all vectors within array of {@link } by the specified {@link } and places the results in an another array.
    //
     * // Apply transformation on all vectors within array of {@link } by the specified {@link } and places the results in an another array.
    //
     * // Creates a new {@link } that contains a transformation of the specified normal by the specified {@link }.
    //
     * // Creates a new {@link } that contains a transformation of the specified normal by the specified {@link }.
    //
     * // Apply transformation on normals within array of {@link } by the specified {@link } and places the results in an another array.
    //
     * // Apply transformation on all normals within array of {@link } by the specified {@link } and places the results in an another array.
    //
     *
     * @public
     * @class Microsoft.Xna.Framework.Vector2
     * @implements  System.IEquatable$1
     * @return  {[type]}        Transformed normal.
     */
    Bridge.define("Microsoft.Xna.Framework.Vector2", {
        inherits: function () { return [System.IEquatable$1(Microsoft.Xna.Framework.Vector2)]; },
        $kind: "struct",
        statics: {
            config: {
                init: function () {
                    this.zeroVector = new Microsoft.Xna.Framework.Vector2.$ctor2(0.0, 0.0);
                    this.unitVector = new Microsoft.Xna.Framework.Vector2.$ctor2(1.0, 1.0);
                    this.unitXVector = new Microsoft.Xna.Framework.Vector2.$ctor2(1.0, 0.0);
                    this.unitYVector = new Microsoft.Xna.Framework.Vector2.$ctor2(0.0, 1.0);
                }
            },
            /**
             * Returns a {@link } with components 0, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @function getZero
             * @return  {Microsoft.Xna.Framework.Vector2}
             */
            /**
             * Returns a {@link } with components 0, 0.
             *
             * @instance
             * @function setZero
             */
            getZero: function () {
                return Microsoft.Xna.Framework.Vector2.zeroVector.$clone();
            },
            /**
             * Returns a {@link } with components 1, 1.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @function getOne
             * @return  {Microsoft.Xna.Framework.Vector2}
             */
            /**
             * Returns a {@link } with components 1, 1.
             *
             * @instance
             * @function setOne
             */
            getOne: function () {
                return Microsoft.Xna.Framework.Vector2.unitVector.$clone();
            },
            /**
             * Returns a {@link } with components 1, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @function getUnitX
             * @return  {Microsoft.Xna.Framework.Vector2}
             */
            /**
             * Returns a {@link } with components 1, 0.
             *
             * @instance
             * @function setUnitX
             */
            getUnitX: function () {
                return Microsoft.Xna.Framework.Vector2.unitXVector.$clone();
            },
            /**
             * Returns a {@link } with components 0, 1.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @function getUnitY
             * @return  {Microsoft.Xna.Framework.Vector2}
             */
            /**
             * Returns a {@link } with components 0, 1.
             *
             * @instance
             * @function setUnitY
             */
            getUnitY: function () {
                return Microsoft.Xna.Framework.Vector2.unitYVector.$clone();
            },
            /**
             * Performs vector addition on <b /> and <b />.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector to add.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector to add.
             * @return  {Microsoft.Xna.Framework.Vector2}              The result of the vector addition.
             */
            add: function (value1, value2) {
                value1.x += value2.x;
                value1.y += value2.y;
                return value1.$clone();
            },
            /**
             * Performs vector addition on <b /> and
             <b />, storing the result of the
             addition in <b />.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector to add.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector to add.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The result of the vector addition.
             * @return  {void}
             */
            add$1: function (value1, value2, result) {
                result.v.x = value1.v.x + value2.v.x;
                result.v.y = value1.v.y + value2.v.y;
            },
            /**
             * Creates a new {@link } that contains the cartesian coordinates of a vector specified in barycentric coordinates and relative to 2d-triangle.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1     The first vector of 2d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2     The second vector of 2d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector2}    value3     The third vector of 2d-triangle.
             * @param   {number}                             amount1    Barycentric scalar <pre><code>b2</code></pre> which represents a weighting factor towards second vector of 2d-triangle.
             * @param   {number}                             amount2    Barycentric scalar <pre><code>b3</code></pre> which represents a weighting factor towards third vector of 2d-triangle.
             * @return  {Microsoft.Xna.Framework.Vector2}               The cartesian translation of barycentric coordinates.
             */
            barycentric: function (value1, value2, value3, amount1, amount2) {
                return new Microsoft.Xna.Framework.Vector2.$ctor2(Microsoft.Xna.Framework.MathHelper.barycentric(value1.x, value2.x, value3.x, amount1, amount2), Microsoft.Xna.Framework.MathHelper.barycentric(value1.y, value2.y, value3.y, amount1, amount2));
            },
            /**
             * Creates a new {@link } that contains the cartesian coordinates of a vector specified in barycentric coordinates and relative to 2d-triangle.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1     The first vector of 2d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2     The second vector of 2d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector2}    value3     The third vector of 2d-triangle.
             * @param   {number}                             amount1    Barycentric scalar <pre><code>b2</code></pre> which represents a weighting factor towards second vector of 2d-triangle.
             * @param   {number}                             amount2    Barycentric scalar <pre><code>b3</code></pre> which represents a weighting factor towards third vector of 2d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector2}    result     The cartesian translation of barycentric coordinates as an output parameter.
             * @return  {void}
             */
            barycentric$1: function (value1, value2, value3, amount1, amount2, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.barycentric(value1.v.x, value2.v.x, value3.v.x, amount1, amount2);
                result.v.y = Microsoft.Xna.Framework.MathHelper.barycentric(value1.v.y, value2.v.y, value3.v.y, amount1, amount2);
            },
            /**
             * Creates a new {@link } that contains CatmullRom interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector2}    value3    The third vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector2}    value4    The fourth vector in interpolation.
             * @param   {number}                             amount    Weighting factor.
             * @return  {Microsoft.Xna.Framework.Vector2}              The result of CatmullRom interpolation.
             */
            catmullRom: function (value1, value2, value3, value4, amount) {
                return new Microsoft.Xna.Framework.Vector2.$ctor2(Microsoft.Xna.Framework.MathHelper.catmullRom(value1.x, value2.x, value3.x, value4.x, amount), Microsoft.Xna.Framework.MathHelper.catmullRom(value1.y, value2.y, value3.y, value4.y, amount));
            },
            /**
             * Creates a new {@link } that contains CatmullRom interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector2}    value3    The third vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector2}    value4    The fourth vector in interpolation.
             * @param   {number}                             amount    Weighting factor.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The result of CatmullRom interpolation as an output parameter.
             * @return  {void}
             */
            catmullRom$1: function (value1, value2, value3, value4, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.catmullRom(value1.v.x, value2.v.x, value3.v.x, value4.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.catmullRom(value1.v.y, value2.v.y, value3.v.y, value4.v.y, amount);
            },
            /**
             * Clamps the specified value within a range.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The value to clamp.
             * @param   {Microsoft.Xna.Framework.Vector2}    min       The min value.
             * @param   {Microsoft.Xna.Framework.Vector2}    max       The max value.
             * @return  {Microsoft.Xna.Framework.Vector2}              The clamped value.
             */
            clamp: function (value1, min, max) {
                return new Microsoft.Xna.Framework.Vector2.$ctor2(Microsoft.Xna.Framework.MathHelper.clamp$1(value1.x, min.x, max.x), Microsoft.Xna.Framework.MathHelper.clamp$1(value1.y, min.y, max.y));
            },
            /**
             * Clamps the specified value within a range.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The value to clamp.
             * @param   {Microsoft.Xna.Framework.Vector2}    min       The min value.
             * @param   {Microsoft.Xna.Framework.Vector2}    max       The max value.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The clamped value as an output parameter.
             * @return  {void}
             */
            clamp$1: function (value1, min, max, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.clamp$1(value1.v.x, min.v.x, max.v.x);
                result.v.y = Microsoft.Xna.Framework.MathHelper.clamp$1(value1.v.y, min.v.y, max.v.y);
            },
            /**
             * Returns the distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @return  {number}                                       The distance between two vectors.
             */
            distance: function (value1, value2) {
                var v1 = value1.x - value2.x, v2 = value1.y - value2.y;
                return Math.sqrt((v1 * v1) + (v2 * v2));
            },
            /**
             * Returns the distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @param   {System.Single}                      result    The distance between two vectors as an output parameter.
             * @return  {void}
             */
            distance$1: function (value1, value2, result) {
                var v1 = value1.v.x - value2.v.x, v2 = value1.v.y - value2.v.y;
                result.v = Math.sqrt((v1 * v1) + (v2 * v2));
            },
            /**
             * Returns the squared distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @return  {number}                                       The squared distance between two vectors.
             */
            distanceSquared: function (value1, value2) {
                var v1 = value1.x - value2.x, v2 = value1.y - value2.y;
                return (v1 * v1) + (v2 * v2);
            },
            /**
             * Returns the squared distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @param   {System.Single}                      result    The squared distance between two vectors as an output parameter.
             * @return  {void}
             */
            distanceSquared$1: function (value1, value2, result) {
                var v1 = value1.v.x - value2.v.x, v2 = value1.v.y - value2.v.y;
                result.v = (v1 * v1) + (v2 * v2);
            },
            /**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Divisor {@link }.
             * @return  {Microsoft.Xna.Framework.Vector2}              The result of dividing the vectors.
             */
            divide: function (value1, value2) {
                value1.x /= value2.x;
                value1.y /= value2.y;
                return value1.$clone();
            },
            /**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Divisor {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The result of dividing the vectors as an output parameter.
             * @return  {void}
             */
            divide$2: function (value1, value2, result) {
                result.v.x = value1.v.x / value2.v.x;
                result.v.y = value1.v.y / value2.v.y;
            },
            /**
             * Divides the components of a {@link } by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1     Source {@link }.
             * @param   {number}                             divider    Divisor scalar.
             * @return  {Microsoft.Xna.Framework.Vector2}               The result of dividing a vector by a scalar.
             */
            divide$1: function (value1, divider) {
                var factor = 1 / divider;
                value1.x *= factor;
                value1.y *= factor;
                return value1.$clone();
            },
            /**
             * Divides the components of a {@link } by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1     Source {@link }.
             * @param   {number}                             divider    Divisor scalar.
             * @param   {Microsoft.Xna.Framework.Vector2}    result     The result of dividing a vector by a scalar as an output parameter.
             * @return  {void}
             */
            divide$3: function (value1, divider, result) {
                var factor = 1 / divider;
                result.v.x = value1.v.x * factor;
                result.v.y = value1.v.y * factor;
            },
            /**
             * Returns a dot product of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @return  {number}                                       The dot product of two vectors.
             */
            dot: function (value1, value2) {
                return (value1.x * value2.x) + (value1.y * value2.y);
            },
            /**
             * Returns a dot product of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @param   {System.Single}                      result    The dot product of two vectors as an output parameter.
             * @return  {void}
             */
            dot$1: function (value1, value2, result) {
                result.v = (value1.v.x * value2.v.x) + (value1.v.y * value2.v.y);
            },
            /**
             * Creates a new {@link } that contains hermite spline interpolation.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1      The first position vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    tangent1    The first tangent vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2      The second position vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    tangent2    The second tangent vector.
             * @param   {number}                             amount      Weighting factor.
             * @return  {Microsoft.Xna.Framework.Vector2}                The hermite spline interpolation vector.
             */
            hermite: function (value1, tangent1, value2, tangent2, amount) {
                return new Microsoft.Xna.Framework.Vector2.$ctor2(Microsoft.Xna.Framework.MathHelper.hermite(value1.x, tangent1.x, value2.x, tangent2.x, amount), Microsoft.Xna.Framework.MathHelper.hermite(value1.y, tangent1.y, value2.y, tangent2.y, amount));
            },
            /**
             * Creates a new {@link } that contains hermite spline interpolation.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1      The first position vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    tangent1    The first tangent vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2      The second position vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    tangent2    The second tangent vector.
             * @param   {number}                             amount      Weighting factor.
             * @param   {Microsoft.Xna.Framework.Vector2}    result      The hermite spline interpolation vector as an output parameter.
             * @return  {void}
             */
            hermite$1: function (value1, tangent1, value2, tangent2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.hermite(value1.v.x, tangent1.v.x, value2.v.x, tangent2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.hermite(value1.v.y, tangent1.v.y, value2.v.y, tangent2.v.y, amount);
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @return  {Microsoft.Xna.Framework.Vector2}              The result of linear interpolation of the specified vectors.
             */
            lerp: function (value1, value2, amount) {
                return new Microsoft.Xna.Framework.Vector2.$ctor2(Microsoft.Xna.Framework.MathHelper.lerp(value1.x, value2.x, amount), Microsoft.Xna.Framework.MathHelper.lerp(value1.y, value2.y, amount));
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The result of linear interpolation of the specified vectors as an output parameter.
             * @return  {void}
             */
            lerp$1: function (value1, value2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.lerp(value1.v.x, value2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.lerp(value1.v.y, value2.v.y, amount);
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             Uses {@link } on MathHelper for the interpolation.
             Less efficient but more precise compared to {@link }.
             See remarks section of {@link } on MathHelper for more info.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @return  {Microsoft.Xna.Framework.Vector2}              The result of linear interpolation of the specified vectors.
             */
            lerpPrecise: function (value1, value2, amount) {
                return new Microsoft.Xna.Framework.Vector2.$ctor2(Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.x, value2.x, amount), Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.y, value2.y, amount));
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             Uses {@link } on MathHelper for the interpolation.
             Less efficient but more precise compared to {@link }.
             See remarks section of {@link } on MathHelper for more info.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The result of linear interpolation of the specified vectors as an output parameter.
             * @return  {void}
             */
            lerpPrecise$1: function (value1, value2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.v.x, value2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.v.y, value2.v.y, amount);
            },
            /**
             * Creates a new {@link } that contains a maximal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @return  {Microsoft.Xna.Framework.Vector2}              The {@link } with maximal values from the two vectors.
             */
            max: function (value1, value2) {
                return new Microsoft.Xna.Framework.Vector2.$ctor2(value1.x > value2.x ? value1.x : value2.x, value1.y > value2.y ? value1.y : value2.y);
            },
            /**
             * Creates a new {@link } that contains a maximal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The {@link } with maximal values from the two vectors as an output parameter.
             * @return  {void}
             */
            max$1: function (value1, value2, result) {
                result.v.x = value1.v.x > value2.v.x ? value1.v.x : value2.v.x;
                result.v.y = value1.v.y > value2.v.y ? value1.v.y : value2.v.y;
            },
            /**
             * Creates a new {@link } that contains a minimal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @return  {Microsoft.Xna.Framework.Vector2}              The {@link } with minimal values from the two vectors.
             */
            min: function (value1, value2) {
                return new Microsoft.Xna.Framework.Vector2.$ctor2(value1.x < value2.x ? value1.x : value2.x, value1.y < value2.y ? value1.y : value2.y);
            },
            /**
             * Creates a new {@link } that contains a minimal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    The second vector.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The {@link } with minimal values from the two vectors as an output parameter.
             * @return  {void}
             */
            min$1: function (value1, value2, result) {
                result.v.x = value1.v.x < value2.v.x ? value1.v.x : value2.v.x;
                result.v.y = value1.v.y < value2.v.y ? value1.v.y : value2.v.y;
            },
            /**
             * Creates a new {@link } that contains a multiplication of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector2}              The result of the vector multiplication.
             */
            multiply: function (value1, value2) {
                value1.x *= value2.x;
                value1.y *= value2.y;
                return value1.$clone();
            },
            /**
             * Creates a new {@link } that contains a multiplication of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The result of the vector multiplication as an output parameter.
             * @return  {void}
             */
            multiply$2: function (value1, value2, result) {
                result.v.x = value1.v.x * value2.v.x;
                result.v.y = value1.v.y * value2.v.y;
            },
            /**
             * Creates a new {@link } that contains a multiplication of {@link } and a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1         Source {@link }.
             * @param   {number}                             scaleFactor    Scalar value.
             * @return  {Microsoft.Xna.Framework.Vector2}                   The result of the vector multiplication with a scalar.
             */
            multiply$1: function (value1, scaleFactor) {
                value1.x *= scaleFactor;
                value1.y *= scaleFactor;
                return value1.$clone();
            },
            /**
             * Creates a new {@link } that contains a multiplication of {@link } and a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1         Source {@link }.
             * @param   {number}                             scaleFactor    Scalar value.
             * @param   {Microsoft.Xna.Framework.Vector2}    result         The result of the multiplication with a scalar as an output parameter.
             * @return  {void}
             */
            multiply$3: function (value1, scaleFactor, result) {
                result.v.x = value1.v.x * scaleFactor;
                result.v.y = value1.v.y * scaleFactor;
            },
            /**
             * Creates a new {@link } that contains the specified vector inversion.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector2}             The result of the vector inversion.
             */
            negate: function (value) {
                value.x = -value.x;
                value.y = -value.y;
                return value.$clone();
            },
            /**
             * Creates a new {@link } that contains the specified vector inversion.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value     Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The result of the vector inversion as an output parameter.
             * @return  {void}
             */
            negate$1: function (value, result) {
                result.v.x = -value.v.x;
                result.v.y = -value.v.y;
            },
            /**
             * Creates a new {@link } that contains a normalized values from another vector.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector2}             Unit vector.
             */
            normalize: function (value) {
                var val = 1.0 / Math.sqrt((value.x * value.x) + (value.y * value.y));
                value.x *= val;
                value.y *= val;
                return value.$clone();
            },
            /**
             * Creates a new {@link } that contains a normalized values from another vector.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value     Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    Unit vector as an output parameter.
             * @return  {void}
             */
            normalize$1: function (value, result) {
                var val = 1.0 / Math.sqrt((value.v.x * value.v.x) + (value.v.y * value.v.y));
                result.v.x = value.v.x * val;
                result.v.y = value.v.y * val;
            },
            /**
             * Creates a new {@link } that contains reflect vector of the given vector and normal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    vector    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    normal    Reflection normal.
             * @return  {Microsoft.Xna.Framework.Vector2}              Reflected vector.
             */
            reflect: function (vector, normal) {
                var result = new Microsoft.Xna.Framework.Vector2();
                var val = 2.0 * ((vector.x * normal.x) + (vector.y * normal.y));
                result.x = vector.x - (normal.x * val);
                result.y = vector.y - (normal.y * val);
                return result.$clone();
            },
            /**
             * Creates a new {@link } that contains reflect vector of the given vector and normal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    vector    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    normal    Reflection normal.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    Reflected vector as an output parameter.
             * @return  {void}
             */
            reflect$1: function (vector, normal, result) {
                var val = 2.0 * ((vector.v.x * normal.v.x) + (vector.v.y * normal.v.y));
                result.v.x = vector.v.x - (normal.v.x * val);
                result.v.y = vector.v.y - (normal.v.y * val);
            },
            /**
             * Creates a new {@link } that contains cubic interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Source {@link }.
             * @param   {number}                             amount    Weighting value.
             * @return  {Microsoft.Xna.Framework.Vector2}              Cubic interpolation of the specified vectors.
             */
            smoothStep: function (value1, value2, amount) {
                return new Microsoft.Xna.Framework.Vector2.$ctor2(Microsoft.Xna.Framework.MathHelper.smoothStep(value1.x, value2.x, amount), Microsoft.Xna.Framework.MathHelper.smoothStep(value1.y, value2.y, amount));
            },
            /**
             * Creates a new {@link } that contains cubic interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Source {@link }.
             * @param   {number}                             amount    Weighting value.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    Cubic interpolation of the specified vectors as an output parameter.
             * @return  {void}
             */
            smoothStep$1: function (value1, value2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.smoothStep(value1.v.x, value2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.smoothStep(value1.v.y, value2.v.y, amount);
            },
            /**
             * Creates a new {@link } that contains subtraction of on {@link } from a another.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector2}              The result of the vector subtraction.
             */
            subtract: function (value1, value2) {
                value1.x -= value2.x;
                value1.y -= value2.y;
                return value1.$clone();
            },
            /**
             * Creates a new {@link } that contains subtraction of on {@link } from a another.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector2}    result    The result of the vector subtraction as an output parameter.
             * @return  {void}
             */
            subtract$1: function (value1, value2, result) {
                result.v.x = value1.v.x - value2.v.x;
                result.v.y = value1.v.y - value2.v.y;
            }/**
             * Inverts values in the specified {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value    Source {@link } on the right of the sub sign.
             * @return  {Microsoft.Xna.Framework.Vector2}             Result of the inversion.
             */
            ,
            op_UnaryNegation: function (value) {
                value.x = -value.x;
                value.y = -value.y;
                return value.$clone();
            }/**
             * Adds two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link } on the left of the add sign.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Source {@link } on the right of the add sign.
             * @return  {Microsoft.Xna.Framework.Vector2}              Sum of the vectors.
             */
            ,
            op_Addition: function (value1, value2) {
                value1.x += value2.x;
                value1.y += value2.y;
                return value1.$clone();
            }/**
             * Subtracts a {@link } from a {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link } on the left of the sub sign.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Source {@link } on the right of the sub sign.
             * @return  {Microsoft.Xna.Framework.Vector2}              Result of the vector subtraction.
             */
            ,
            op_Subtraction: function (value1, value2) {
                value1.x -= value2.x;
                value1.y -= value2.y;
                return value1.$clone();
            }/**
             * Multiplies the components of two vectors by each other.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link } on the left of the mul sign.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Source {@link } on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Vector2}              Result of the vector multiplication.
             */
            ,
            op_Multiply: function (value1, value2) {
                value1.x *= value2.x;
                value1.y *= value2.y;
                return value1.$clone();
            }/**
             * Multiplies the components of vector by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value          Source {@link } on the left of the mul sign.
             * @param   {number}                             scaleFactor    Scalar value on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Vector2}                   Result of the vector multiplication with a scalar.
             */
            ,
            op_Multiply$1: function (value, scaleFactor) {
                value.x *= scaleFactor;
                value.y *= scaleFactor;
                return value.$clone();
            }/**
             * Multiplies the components of vector by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {number}                             scaleFactor    Scalar value on the left of the mul sign.
             * @param   {Microsoft.Xna.Framework.Vector2}    value          Source {@link } on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Vector2}                   Result of the vector multiplication with a scalar.
             */
            ,
            op_Multiply$2: function (scaleFactor, value) {
                value.x *= scaleFactor;
                value.y *= scaleFactor;
                return value.$clone();
            }/**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    Source {@link } on the left of the div sign.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    Divisor {@link } on the right of the div sign.
             * @return  {Microsoft.Xna.Framework.Vector2}              The result of dividing the vectors.
             */
            ,
            op_Division: function (value1, value2) {
                value1.x /= value2.x;
                value1.y /= value2.y;
                return value1.$clone();
            }/**
             * Divides the components of a {@link } by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1     Source {@link } on the left of the div sign.
             * @param   {number}                             divider    Divisor scalar on the right of the div sign.
             * @return  {Microsoft.Xna.Framework.Vector2}               The result of dividing a vector by a scalar.
             */
            ,
            op_Division$1: function (value1, divider) {
                var factor = 1 / divider;
                value1.x *= factor;
                value1.y *= factor;
                return value1.$clone();
            }/**
             * Compares whether two {@link } instances are equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    {@link } instance on the left of the equal sign.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    {@link } instance on the right of the equal sign.
             * @return  {boolean}                                      <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Equality: function (value1, value2) {
                return value1.x === value2.x && value1.y === value2.y;
            }/**
             * Compares whether two {@link } instances are not equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector2
             * @memberof Microsoft.Xna.Framework.Vector2
             * @param   {Microsoft.Xna.Framework.Vector2}    value1    {@link } instance on the left of the not equal sign.
             * @param   {Microsoft.Xna.Framework.Vector2}    value2    {@link } instance on the right of the not equal sign.
             * @return  {boolean}                                      <pre><code>true</code></pre> if the instances are not equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Inequality: function (value1, value2) {
                return value1.x !== value2.x || value1.y !== value2.y;
            },
            getDefaultValue: function () { return new Microsoft.Xna.Framework.Vector2(); }
        },
        /**
         * The x coordinate of this {@link }.
         *
         * @instance
         */
        x: 0,
        /**
         * The y coordinate of this {@link }.
         *
         * @instance
         */
        y: 0,
        config: {
            alias: [
            "equalsT", "System$IEquatable$1$Microsoft$Xna$Framework$Vector2$equalsT"
            ]
        },
        /**
         * Constructs a 2d vector with X and Y from two values.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @param   {number}    x    The x coordinate in 2d-space.
         * @param   {number}    y    The y coordinate in 2d-space.
         * @return  {void}
         */
        $ctor2: function (x, y) {
            this.$initialize();
            this.x = x;
            this.y = y;
        },
        /**
         * Constructs a 2d vector with X and Y set to the same value.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @param   {number}    value    The x and y coordinates in 2d-space.
         * @return  {void}
         */
        $ctor1: function (value) {
            this.$initialize();
            this.x = value;
            this.y = value;
        },
        ctor: function () {
            this.$initialize();
        },
        getDebugDisplayString: function () {
            return [System.Single.format(this.x, 'G'), "  ", System.Single.format(this.y, 'G')].join('');
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @param   {Object}     obj    The {@link } to compare.
         * @return  {boolean}           <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equals: function (obj) {
            if (Bridge.is(obj, Microsoft.Xna.Framework.Vector2)) {
                return this.equalsT(System.Nullable.getValue(Bridge.cast(obj, Microsoft.Xna.Framework.Vector2)));
            }

            return false;
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @param   {Microsoft.Xna.Framework.Vector2}    other    The {@link } to compare.
         * @return  {boolean}                                     <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equalsT: function (other) {
            return (this.x === other.x) && (this.y === other.y);
        },
        /**
         * Gets the hash code of this {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @return  {number}        Hash code of this {@link }.
         */
        getHashCode: function () {
            return ((Bridge.getHashCode(this.x) + Bridge.getHashCode(this.y)) | 0);
        },
        /**
         * Returns the length of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @return  {number}        The length of this {@link }.
         */
        length: function () {
            return Math.sqrt((this.x * this.x) + (this.y * this.y));
        },
        /**
         * Returns the squared length of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @return  {number}        The squared length of this {@link }.
         */
        lengthSquared: function () {
            return (this.x * this.x) + (this.y * this.y);
        },
        /**
         * Turns this {@link } to a unit vector with the same direction.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @return  {void}
         */
        normalize: function () {
            var val = 1.0 / Math.sqrt((this.x * this.x) + (this.y * this.y));
            this.x *= val;
            this.y *= val;
        },
        /**
         * Returns a {@link } representation of this {@link } in the format:
         {X:[{@link }] Y:[{@link }]}
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @return  {string}        A {@link } representation of this {@link }.
         */
        toString: function () {
            return "{X:" + System.Single.format(this.x, 'G') + " Y:" + System.Single.format(this.y, 'G') + "}";
        },
        /**
         * Gets a {@link } representation for this object.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector2
         * @memberof Microsoft.Xna.Framework.Vector2
         * @return  {Microsoft.Xna.Framework.Point}        A {@link } representation for this object.
         */
        toPoint: function () {
            return new Microsoft.Xna.Framework.Point.$ctor2(Bridge.Int.clip32(this.x), Bridge.Int.clip32(this.y));
        },
        $clone: function (to) {
            var s = to || new Microsoft.Xna.Framework.Vector2();
            s.x = this.x;
            s.y = this.y;
            return s;
        }
    });

    /**
     * Describes a 3D-vector.
     *
     * @public
     * @class Microsoft.Xna.Framework.Vector3
     * @implements  System.IEquatable$1
     */
    Bridge.define("Microsoft.Xna.Framework.Vector3", {
        inherits: function () { return [System.IEquatable$1(Microsoft.Xna.Framework.Vector3)]; },
        $kind: "struct",
        statics: {
            config: {
                init: function () {
                    this.zero = new Microsoft.Xna.Framework.Vector3.$ctor3(0.0, 0.0, 0.0);
                    this.one = new Microsoft.Xna.Framework.Vector3.$ctor3(1.0, 1.0, 1.0);
                    this.unitX = new Microsoft.Xna.Framework.Vector3.$ctor3(1.0, 0.0, 0.0);
                    this.unitY = new Microsoft.Xna.Framework.Vector3.$ctor3(0.0, 1.0, 0.0);
                    this.unitZ = new Microsoft.Xna.Framework.Vector3.$ctor3(0.0, 0.0, 1.0);
                    this.up = new Microsoft.Xna.Framework.Vector3.$ctor3(0.0, 1.0, 0.0);
                    this.down = new Microsoft.Xna.Framework.Vector3.$ctor3(0.0, -1.0, 0.0);
                    this.right = new Microsoft.Xna.Framework.Vector3.$ctor3(1.0, 0.0, 0.0);
                    this.left = new Microsoft.Xna.Framework.Vector3.$ctor3(-1.0, 0.0, 0.0);
                    this.forward = new Microsoft.Xna.Framework.Vector3.$ctor3(0.0, 0.0, -1.0);
                    this.backward = new Microsoft.Xna.Framework.Vector3.$ctor3(0.0, 0.0, 1.0);
                }
            },
            /**
             * Returns a {@link } with components 0, 0, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getZero
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 0, 0, 0.
             *
             * @instance
             * @function setZero
             */
            getZero: function () {
                return Microsoft.Xna.Framework.Vector3.zero.$clone();
            },
            /**
             * Returns a {@link } with components 1, 1, 1.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getOne
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 1, 1, 1.
             *
             * @instance
             * @function setOne
             */
            getOne: function () {
                return Microsoft.Xna.Framework.Vector3.one.$clone();
            },
            /**
             * Returns a {@link } with components 1, 0, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getUnitX
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 1, 0, 0.
             *
             * @instance
             * @function setUnitX
             */
            getUnitX: function () {
                return Microsoft.Xna.Framework.Vector3.unitX.$clone();
            },
            /**
             * Returns a {@link } with components 0, 1, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getUnitY
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 0, 1, 0.
             *
             * @instance
             * @function setUnitY
             */
            getUnitY: function () {
                return Microsoft.Xna.Framework.Vector3.unitY.$clone();
            },
            /**
             * Returns a {@link } with components 0, 0, 1.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getUnitZ
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 0, 0, 1.
             *
             * @instance
             * @function setUnitZ
             */
            getUnitZ: function () {
                return Microsoft.Xna.Framework.Vector3.unitZ.$clone();
            },
            /**
             * Returns a {@link } with components 0, 1, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getUp
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 0, 1, 0.
             *
             * @instance
             * @function setUp
             */
            getUp: function () {
                return Microsoft.Xna.Framework.Vector3.up.$clone();
            },
            /**
             * Returns a {@link } with components 0, -1, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getDown
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 0, -1, 0.
             *
             * @instance
             * @function setDown
             */
            getDown: function () {
                return Microsoft.Xna.Framework.Vector3.down.$clone();
            },
            /**
             * Returns a {@link } with components 1, 0, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getRight
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 1, 0, 0.
             *
             * @instance
             * @function setRight
             */
            getRight: function () {
                return Microsoft.Xna.Framework.Vector3.right.$clone();
            },
            /**
             * Returns a {@link } with components -1, 0, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getLeft
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components -1, 0, 0.
             *
             * @instance
             * @function setLeft
             */
            getLeft: function () {
                return Microsoft.Xna.Framework.Vector3.left.$clone();
            },
            /**
             * Returns a {@link } with components 0, 0, -1.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getForward
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 0, 0, -1.
             *
             * @instance
             * @function setForward
             */
            getForward: function () {
                return Microsoft.Xna.Framework.Vector3.forward.$clone();
            },
            /**
             * Returns a {@link } with components 0, 0, 1.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @function getBackward
             * @return  {Microsoft.Xna.Framework.Vector3}
             */
            /**
             * Returns a {@link } with components 0, 0, 1.
             *
             * @instance
             * @function setBackward
             */
            getBackward: function () {
                return Microsoft.Xna.Framework.Vector3.backward.$clone();
            },
            /**
             * Performs vector addition on <b /> and <b />.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector to add.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector to add.
             * @return  {Microsoft.Xna.Framework.Vector3}              The result of the vector addition.
             */
            add: function (value1, value2) {
                value1.x += value2.x;
                value1.y += value2.y;
                value1.z += value2.z;
                return value1.$clone();
            },
            /**
             * Performs vector addition on <b /> and
             <b />, storing the result of the
             addition in <b />.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector to add.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector to add.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The result of the vector addition.
             * @return  {void}
             */
            add$1: function (value1, value2, result) {
                result.v.x = value1.v.x + value2.v.x;
                result.v.y = value1.v.y + value2.v.y;
                result.v.z = value1.v.z + value2.v.z;
            },
            /**
             * Creates a new {@link } that contains the cartesian coordinates of a vector specified in barycentric coordinates and relative to 3d-triangle.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1     The first vector of 3d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2     The second vector of 3d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector3}    value3     The third vector of 3d-triangle.
             * @param   {number}                             amount1    Barycentric scalar <pre><code>b2</code></pre> which represents a weighting factor towards second vector of 3d-triangle.
             * @param   {number}                             amount2    Barycentric scalar <pre><code>b3</code></pre> which represents a weighting factor towards third vector of 3d-triangle.
             * @return  {Microsoft.Xna.Framework.Vector3}               The cartesian translation of barycentric coordinates.
             */
            barycentric: function (value1, value2, value3, amount1, amount2) {
                return new Microsoft.Xna.Framework.Vector3.$ctor3(Microsoft.Xna.Framework.MathHelper.barycentric(value1.x, value2.x, value3.x, amount1, amount2), Microsoft.Xna.Framework.MathHelper.barycentric(value1.y, value2.y, value3.y, amount1, amount2), Microsoft.Xna.Framework.MathHelper.barycentric(value1.z, value2.z, value3.z, amount1, amount2));
            },
            /**
             * Creates a new {@link } that contains the cartesian coordinates of a vector specified in barycentric coordinates and relative to 3d-triangle.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1     The first vector of 3d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2     The second vector of 3d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector3}    value3     The third vector of 3d-triangle.
             * @param   {number}                             amount1    Barycentric scalar <pre><code>b2</code></pre> which represents a weighting factor towards second vector of 3d-triangle.
             * @param   {number}                             amount2    Barycentric scalar <pre><code>b3</code></pre> which represents a weighting factor towards third vector of 3d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector3}    result     The cartesian translation of barycentric coordinates as an output parameter.
             * @return  {void}
             */
            barycentric$1: function (value1, value2, value3, amount1, amount2, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.barycentric(value1.v.x, value2.v.x, value3.v.x, amount1, amount2);
                result.v.y = Microsoft.Xna.Framework.MathHelper.barycentric(value1.v.y, value2.v.y, value3.v.y, amount1, amount2);
                result.v.z = Microsoft.Xna.Framework.MathHelper.barycentric(value1.v.z, value2.v.z, value3.v.z, amount1, amount2);
            },
            /**
             * Creates a new {@link } that contains CatmullRom interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector3}    value3    The third vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector3}    value4    The fourth vector in interpolation.
             * @param   {number}                             amount    Weighting factor.
             * @return  {Microsoft.Xna.Framework.Vector3}              The result of CatmullRom interpolation.
             */
            catmullRom: function (value1, value2, value3, value4, amount) {
                return new Microsoft.Xna.Framework.Vector3.$ctor3(Microsoft.Xna.Framework.MathHelper.catmullRom(value1.x, value2.x, value3.x, value4.x, amount), Microsoft.Xna.Framework.MathHelper.catmullRom(value1.y, value2.y, value3.y, value4.y, amount), Microsoft.Xna.Framework.MathHelper.catmullRom(value1.z, value2.z, value3.z, value4.z, amount));
            },
            /**
             * Creates a new {@link } that contains CatmullRom interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector3}    value3    The third vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector3}    value4    The fourth vector in interpolation.
             * @param   {number}                             amount    Weighting factor.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The result of CatmullRom interpolation as an output parameter.
             * @return  {void}
             */
            catmullRom$1: function (value1, value2, value3, value4, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.catmullRom(value1.v.x, value2.v.x, value3.v.x, value4.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.catmullRom(value1.v.y, value2.v.y, value3.v.y, value4.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.catmullRom(value1.v.z, value2.v.z, value3.v.z, value4.v.z, amount);
            },
            /**
             * Clamps the specified value within a range.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The value to clamp.
             * @param   {Microsoft.Xna.Framework.Vector3}    min       The min value.
             * @param   {Microsoft.Xna.Framework.Vector3}    max       The max value.
             * @return  {Microsoft.Xna.Framework.Vector3}              The clamped value.
             */
            clamp: function (value1, min, max) {
                return new Microsoft.Xna.Framework.Vector3.$ctor3(Microsoft.Xna.Framework.MathHelper.clamp$1(value1.x, min.x, max.x), Microsoft.Xna.Framework.MathHelper.clamp$1(value1.y, min.y, max.y), Microsoft.Xna.Framework.MathHelper.clamp$1(value1.z, min.z, max.z));
            },
            /**
             * Clamps the specified value within a range.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The value to clamp.
             * @param   {Microsoft.Xna.Framework.Vector3}    min       The min value.
             * @param   {Microsoft.Xna.Framework.Vector3}    max       The max value.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The clamped value as an output parameter.
             * @return  {void}
             */
            clamp$1: function (value1, min, max, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.clamp$1(value1.v.x, min.v.x, max.v.x);
                result.v.y = Microsoft.Xna.Framework.MathHelper.clamp$1(value1.v.y, min.v.y, max.v.y);
                result.v.z = Microsoft.Xna.Framework.MathHelper.clamp$1(value1.v.z, min.v.z, max.v.z);
            },
            /**
             * Computes the cross product of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    vector1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    vector2    The second vector.
             * @return  {Microsoft.Xna.Framework.Vector3}               The cross product of two vectors.
             */
            cross: function (vector1, vector2) {
                vector1 = {v:vector1};
                vector2 = {v:vector2};
                Microsoft.Xna.Framework.Vector3.cross$1(vector1, vector2, vector1);
                return vector1.v.$clone();
            },
            /**
             * Computes the cross product of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    vector1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    vector2    The second vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    result     The cross product of two vectors as an output parameter.
             * @return  {void}
             */
            cross$1: function (vector1, vector2, result) {
                var x = vector1.v.y * vector2.v.z - vector2.v.y * vector1.v.z;
                var y = -(vector1.v.x * vector2.v.z - vector2.v.x * vector1.v.z);
                var z = vector1.v.x * vector2.v.y - vector2.v.x * vector1.v.y;
                result.v.x = x;
                result.v.y = y;
                result.v.z = z;
            },
            /**
             * Returns the distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @return  {number}                                       The distance between two vectors.
             */
            distance: function (value1, value2) {
                value1 = {v:value1};
                value2 = {v:value2};
                var result = { };
                Microsoft.Xna.Framework.Vector3.distanceSquared$1(value1, value2, result);
                return Math.sqrt(result.v);
            },
            /**
             * Returns the distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @param   {System.Single}                      result    The distance between two vectors as an output parameter.
             * @return  {void}
             */
            distance$1: function (value1, value2, result) {
                Microsoft.Xna.Framework.Vector3.distanceSquared$1(value1, value2, result);
                result.v = Math.sqrt(result.v);
            },
            /**
             * Returns the squared distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @return  {number}                                       The squared distance between two vectors.
             */
            distanceSquared: function (value1, value2) {
                return (value1.x - value2.x) * (value1.x - value2.x) + (value1.y - value2.y) * (value1.y - value2.y) + (value1.z - value2.z) * (value1.z - value2.z);
            },
            /**
             * Returns the squared distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @param   {System.Single}                      result    The squared distance between two vectors as an output parameter.
             * @return  {void}
             */
            distanceSquared$1: function (value1, value2, result) {
                result.v = (value1.v.x - value2.v.x) * (value1.v.x - value2.v.x) + (value1.v.y - value2.v.y) * (value1.v.y - value2.v.y) + (value1.v.z - value2.v.z) * (value1.v.z - value2.v.z);
            },
            /**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Divisor {@link }.
             * @return  {Microsoft.Xna.Framework.Vector3}              The result of dividing the vectors.
             */
            divide: function (value1, value2) {
                value1.x /= value2.x;
                value1.y /= value2.y;
                value1.z /= value2.z;
                return value1.$clone();
            },
            /**
             * Divides the components of a {@link } by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1     Source {@link }.
             * @param   {number}                             divider    Divisor scalar.
             * @return  {Microsoft.Xna.Framework.Vector3}               The result of dividing a vector by a scalar.
             */
            divide$1: function (value1, divider) {
                var factor = 1 / divider;
                value1.x *= factor;
                value1.y *= factor;
                value1.z *= factor;
                return value1.$clone();
            },
            /**
             * Divides the components of a {@link } by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1     Source {@link }.
             * @param   {number}                             divider    Divisor scalar.
             * @param   {Microsoft.Xna.Framework.Vector3}    result     The result of dividing a vector by a scalar as an output parameter.
             * @return  {void}
             */
            divide$3: function (value1, divider, result) {
                var factor = 1 / divider;
                result.v.x = value1.v.x * factor;
                result.v.y = value1.v.y * factor;
                result.v.z = value1.v.z * factor;
            },
            /**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Divisor {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The result of dividing the vectors as an output parameter.
             * @return  {void}
             */
            divide$2: function (value1, value2, result) {
                result.v.x = value1.v.x / value2.v.x;
                result.v.y = value1.v.y / value2.v.y;
                result.v.z = value1.v.z / value2.v.z;
            },
            /**
             * Returns a dot product of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @return  {number}                                       The dot product of two vectors.
             */
            dot: function (value1, value2) {
                return value1.x * value2.x + value1.y * value2.y + value1.z * value2.z;
            },
            /**
             * Returns a dot product of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @param   {System.Single}                      result    The dot product of two vectors as an output parameter.
             * @return  {void}
             */
            dot$1: function (value1, value2, result) {
                result.v = value1.v.x * value2.v.x + value1.v.y * value2.v.y + value1.v.z * value2.v.z;
            },
            /**
             * Creates a new {@link } that contains hermite spline interpolation.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1      The first position vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    tangent1    The first tangent vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2      The second position vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    tangent2    The second tangent vector.
             * @param   {number}                             amount      Weighting factor.
             * @return  {Microsoft.Xna.Framework.Vector3}                The hermite spline interpolation vector.
             */
            hermite: function (value1, tangent1, value2, tangent2, amount) {
                return new Microsoft.Xna.Framework.Vector3.$ctor3(Microsoft.Xna.Framework.MathHelper.hermite(value1.x, tangent1.x, value2.x, tangent2.x, amount), Microsoft.Xna.Framework.MathHelper.hermite(value1.y, tangent1.y, value2.y, tangent2.y, amount), Microsoft.Xna.Framework.MathHelper.hermite(value1.z, tangent1.z, value2.z, tangent2.z, amount));
            },
            /**
             * Creates a new {@link } that contains hermite spline interpolation.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1      The first position vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    tangent1    The first tangent vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2      The second position vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    tangent2    The second tangent vector.
             * @param   {number}                             amount      Weighting factor.
             * @param   {Microsoft.Xna.Framework.Vector3}    result      The hermite spline interpolation vector as an output parameter.
             * @return  {void}
             */
            hermite$1: function (value1, tangent1, value2, tangent2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.hermite(value1.v.x, tangent1.v.x, value2.v.x, tangent2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.hermite(value1.v.y, tangent1.v.y, value2.v.y, tangent2.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.hermite(value1.v.z, tangent1.v.z, value2.v.z, tangent2.v.z, amount);
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @return  {Microsoft.Xna.Framework.Vector3}              The result of linear interpolation of the specified vectors.
             */
            lerp: function (value1, value2, amount) {
                return new Microsoft.Xna.Framework.Vector3.$ctor3(Microsoft.Xna.Framework.MathHelper.lerp(value1.x, value2.x, amount), Microsoft.Xna.Framework.MathHelper.lerp(value1.y, value2.y, amount), Microsoft.Xna.Framework.MathHelper.lerp(value1.z, value2.z, amount));
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The result of linear interpolation of the specified vectors as an output parameter.
             * @return  {void}
             */
            lerp$1: function (value1, value2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.lerp(value1.v.x, value2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.lerp(value1.v.y, value2.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.lerp(value1.v.z, value2.v.z, amount);
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             Uses {@link } on MathHelper for the interpolation.
             Less efficient but more precise compared to {@link }.
             See remarks section of {@link } on MathHelper for more info.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @return  {Microsoft.Xna.Framework.Vector3}              The result of linear interpolation of the specified vectors.
             */
            lerpPrecise: function (value1, value2, amount) {
                return new Microsoft.Xna.Framework.Vector3.$ctor3(Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.x, value2.x, amount), Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.y, value2.y, amount), Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.z, value2.z, amount));
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             Uses {@link } on MathHelper for the interpolation.
             Less efficient but more precise compared to {@link }.
             See remarks section of {@link } on MathHelper for more info.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The result of linear interpolation of the specified vectors as an output parameter.
             * @return  {void}
             */
            lerpPrecise$1: function (value1, value2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.v.x, value2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.v.y, value2.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.v.z, value2.v.z, amount);
            },
            /**
             * Creates a new {@link } that contains a maximal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @return  {Microsoft.Xna.Framework.Vector3}              The {@link } with maximal values from the two vectors.
             */
            max: function (value1, value2) {
                return new Microsoft.Xna.Framework.Vector3.$ctor3(Microsoft.Xna.Framework.MathHelper.max$1(value1.x, value2.x), Microsoft.Xna.Framework.MathHelper.max$1(value1.y, value2.y), Microsoft.Xna.Framework.MathHelper.max$1(value1.z, value2.z));
            },
            /**
             * Creates a new {@link } that contains a maximal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The {@link } with maximal values from the two vectors as an output parameter.
             * @return  {void}
             */
            max$1: function (value1, value2, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.max$1(value1.v.x, value2.v.x);
                result.v.y = Microsoft.Xna.Framework.MathHelper.max$1(value1.v.y, value2.v.y);
                result.v.z = Microsoft.Xna.Framework.MathHelper.max$1(value1.v.z, value2.v.z);
            },
            /**
             * Creates a new {@link } that contains a minimal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @return  {Microsoft.Xna.Framework.Vector3}              The {@link } with minimal values from the two vectors.
             */
            min: function (value1, value2) {
                return new Microsoft.Xna.Framework.Vector3.$ctor3(Microsoft.Xna.Framework.MathHelper.min$1(value1.x, value2.x), Microsoft.Xna.Framework.MathHelper.min$1(value1.y, value2.y), Microsoft.Xna.Framework.MathHelper.min$1(value1.z, value2.z));
            },
            /**
             * Creates a new {@link } that contains a minimal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    The second vector.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The {@link } with minimal values from the two vectors as an output parameter.
             * @return  {void}
             */
            min$1: function (value1, value2, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.min$1(value1.v.x, value2.v.x);
                result.v.y = Microsoft.Xna.Framework.MathHelper.min$1(value1.v.y, value2.v.y);
                result.v.z = Microsoft.Xna.Framework.MathHelper.min$1(value1.v.z, value2.v.z);
            },
            /**
             * Creates a new {@link } that contains a multiplication of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector3}              The result of the vector multiplication.
             */
            multiply: function (value1, value2) {
                value1.x *= value2.x;
                value1.y *= value2.y;
                value1.z *= value2.z;
                return value1.$clone();
            },
            /**
             * Creates a new {@link } that contains a multiplication of {@link } and a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1         Source {@link }.
             * @param   {number}                             scaleFactor    Scalar value.
             * @return  {Microsoft.Xna.Framework.Vector3}                   The result of the vector multiplication with a scalar.
             */
            multiply$1: function (value1, scaleFactor) {
                value1.x *= scaleFactor;
                value1.y *= scaleFactor;
                value1.z *= scaleFactor;
                return value1.$clone();
            },
            /**
             * Creates a new {@link } that contains a multiplication of {@link } and a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1         Source {@link }.
             * @param   {number}                             scaleFactor    Scalar value.
             * @param   {Microsoft.Xna.Framework.Vector3}    result         The result of the multiplication with a scalar as an output parameter.
             * @return  {void}
             */
            multiply$3: function (value1, scaleFactor, result) {
                result.v.x = value1.v.x * scaleFactor;
                result.v.y = value1.v.y * scaleFactor;
                result.v.z = value1.v.z * scaleFactor;
            },
            /**
             * Creates a new {@link } that contains a multiplication of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The result of the vector multiplication as an output parameter.
             * @return  {void}
             */
            multiply$2: function (value1, value2, result) {
                result.v.x = value1.v.x * value2.v.x;
                result.v.y = value1.v.y * value2.v.y;
                result.v.z = value1.v.z * value2.v.z;
            },
            /**
             * Creates a new {@link } that contains the specified vector inversion.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector3}             The result of the vector inversion.
             */
            negate: function (value) {
                value = new Microsoft.Xna.Framework.Vector3.$ctor3(-value.x, -value.y, -value.z);
                return value.$clone();
            },
            /**
             * Creates a new {@link } that contains the specified vector inversion.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value     Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The result of the vector inversion as an output parameter.
             * @return  {void}
             */
            negate$1: function (value, result) {
                result.v.x = -value.v.x;
                result.v.y = -value.v.y;
                result.v.z = -value.v.z;
            },
            /**
             * Creates a new {@link } that contains a normalized values from another vector.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector3}             Unit vector.
             */
            normalize: function (value) {
                var factor = Microsoft.Xna.Framework.Vector3.distance(value.$clone(), Microsoft.Xna.Framework.Vector3.zero.$clone());
                factor = 1.0 / factor;
                return new Microsoft.Xna.Framework.Vector3.$ctor3(value.x * factor, value.y * factor, value.z * factor);
            },
            /**
             * Creates a new {@link } that contains a normalized values from another vector.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value     Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    Unit vector as an output parameter.
             * @return  {void}
             */
            normalize$1: function (value, result) {
                var factor = Microsoft.Xna.Framework.Vector3.distance(value.v.$clone(), Microsoft.Xna.Framework.Vector3.zero.$clone());
                factor = 1.0 / factor;
                result.v.x = value.v.x * factor;
                result.v.y = value.v.y * factor;
                result.v.z = value.v.z * factor;
            },
            /**
             * Creates a new {@link } that contains reflect vector of the given vector and normal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    vector    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    normal    Reflection normal.
             * @return  {Microsoft.Xna.Framework.Vector3}              Reflected vector.
             */
            reflect: function (vector, normal) {
                // I is the original array
                // N is the normal of the incident plane
                // R = I - (2 * N * ( DotProduct[ I,N] ))
                var reflectedVector = new Microsoft.Xna.Framework.Vector3();
                // inline the dotProduct here instead of calling method
                var dotProduct = ((vector.x * normal.x) + (vector.y * normal.y)) + (vector.z * normal.z);
                reflectedVector.x = vector.x - (2.0 * normal.x) * dotProduct;
                reflectedVector.y = vector.y - (2.0 * normal.y) * dotProduct;
                reflectedVector.z = vector.z - (2.0 * normal.z) * dotProduct;

                return reflectedVector.$clone();
            },
            /**
             * Creates a new {@link } that contains reflect vector of the given vector and normal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    vector    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    normal    Reflection normal.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    Reflected vector as an output parameter.
             * @return  {void}
             */
            reflect$1: function (vector, normal, result) {
                // I is the original array
                // N is the normal of the incident plane
                // R = I - (2 * N * ( DotProduct[ I,N] ))

                // inline the dotProduct here instead of calling method
                var dotProduct = ((vector.v.x * normal.v.x) + (vector.v.y * normal.v.y)) + (vector.v.z * normal.v.z);
                result.v.x = vector.v.x - (2.0 * normal.v.x) * dotProduct;
                result.v.y = vector.v.y - (2.0 * normal.v.y) * dotProduct;
                result.v.z = vector.v.z - (2.0 * normal.v.z) * dotProduct;
            },
            /**
             * Creates a new {@link } that contains cubic interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Source {@link }.
             * @param   {number}                             amount    Weighting value.
             * @return  {Microsoft.Xna.Framework.Vector3}              Cubic interpolation of the specified vectors.
             */
            smoothStep: function (value1, value2, amount) {
                return new Microsoft.Xna.Framework.Vector3.$ctor3(Microsoft.Xna.Framework.MathHelper.smoothStep(value1.x, value2.x, amount), Microsoft.Xna.Framework.MathHelper.smoothStep(value1.y, value2.y, amount), Microsoft.Xna.Framework.MathHelper.smoothStep(value1.z, value2.z, amount));
            },
            /**
             * Creates a new {@link } that contains cubic interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Source {@link }.
             * @param   {number}                             amount    Weighting value.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    Cubic interpolation of the specified vectors as an output parameter.
             * @return  {void}
             */
            smoothStep$1: function (value1, value2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.smoothStep(value1.v.x, value2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.smoothStep(value1.v.y, value2.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.smoothStep(value1.v.z, value2.v.z, amount);
            },
            /**
             * Creates a new {@link } that contains subtraction of on {@link } from a another.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector3}              The result of the vector subtraction.
             */
            subtract: function (value1, value2) {
                value1.x -= value2.x;
                value1.y -= value2.y;
                value1.z -= value2.z;
                return value1.$clone();
            },
            /**
             * Creates a new {@link } that contains subtraction of on {@link } from a another.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector3}    result    The result of the vector subtraction as an output parameter.
             * @return  {void}
             */
            subtract$1: function (value1, value2, result) {
                result.v.x = value1.v.x - value2.v.x;
                result.v.y = value1.v.y - value2.v.y;
                result.v.z = value1.v.z - value2.v.z;
            }/**
             * // Creates a new {@link } that contains a transformation of 3d-vector by the specified {@link }.
            //
             * // Creates a new {@link } that contains a transformation of 3d-vector by the specified {@link }.
            //
             * // Creates a new {@link } that contains a transformation of 3d-vector by the specified {@link }, representing the rotation.
            //
             * // Creates a new {@link } that contains a transformation of 3d-vector by the specified {@link }, representing the rotation.
            //
             * // Apply transformation on vectors within array of {@link } by the specified {@link } and places the results in an another array.
            //
             * // Apply transformation on vectors within array of {@link } by the specified {@link } and places the results in an another array.
            //
             * // Apply transformation on all vectors within array of {@link } by the specified {@link } and places the results in an another array.
            //
             * // Apply transformation on all vectors within array of {@link } by the specified {@link } and places the results in an another array.
            //
             * // Creates a new {@link } that contains a transformation of the specified normal by the specified {@link }.
            //
             * // Creates a new {@link } that contains a transformation of the specified normal by the specified {@link }.
            //
             * // Apply transformation on normals within array of {@link } by the specified {@link } and places the results in an another array.
            //
             * // Apply transformation on all normals within array of {@link } by the specified {@link } and places the results in an another array.
            //
             * Compares whether two {@link } instances are equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    {@link } instance on the left of the equal sign.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    {@link } instance on the right of the equal sign.
             * @return  {boolean}                                      <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Equality: function (value1, value2) {
                return value1.x === value2.x && value1.y === value2.y && value1.z === value2.z;
            }/**
             * Compares whether two {@link } instances are not equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    {@link } instance on the left of the not equal sign.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    {@link } instance on the right of the not equal sign.
             * @return  {boolean}                                      <pre><code>true</code></pre> if the instances are not equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Inequality: function (value1, value2) {
                return !(Microsoft.Xna.Framework.Vector3.op_Equality(value1, value2));
            }/**
             * Adds two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link } on the left of the add sign.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Source {@link } on the right of the add sign.
             * @return  {Microsoft.Xna.Framework.Vector3}              Sum of the vectors.
             */
            ,
            op_Addition: function (value1, value2) {
                value1.x += value2.x;
                value1.y += value2.y;
                value1.z += value2.z;
                return value1.$clone();
            }/**
             * Inverts values in the specified {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value    Source {@link } on the right of the sub sign.
             * @return  {Microsoft.Xna.Framework.Vector3}             Result of the inversion.
             */
            ,
            op_UnaryNegation: function (value) {
                value = new Microsoft.Xna.Framework.Vector3.$ctor3(-value.x, -value.y, -value.z);
                return value.$clone();
            }/**
             * Subtracts a {@link } from a {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link } on the left of the sub sign.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Source {@link } on the right of the sub sign.
             * @return  {Microsoft.Xna.Framework.Vector3}              Result of the vector subtraction.
             */
            ,
            op_Subtraction: function (value1, value2) {
                value1.x -= value2.x;
                value1.y -= value2.y;
                value1.z -= value2.z;
                return value1.$clone();
            }/**
             * Multiplies the components of two vectors by each other.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link } on the left of the mul sign.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Source {@link } on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Vector3}              Result of the vector multiplication.
             */
            ,
            op_Multiply: function (value1, value2) {
                value1.x *= value2.x;
                value1.y *= value2.y;
                value1.z *= value2.z;
                return value1.$clone();
            }/**
             * Multiplies the components of vector by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value          Source {@link } on the left of the mul sign.
             * @param   {number}                             scaleFactor    Scalar value on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Vector3}                   Result of the vector multiplication with a scalar.
             */
            ,
            op_Multiply$1: function (value, scaleFactor) {
                value.x *= scaleFactor;
                value.y *= scaleFactor;
                value.z *= scaleFactor;
                return value.$clone();
            }/**
             * Multiplies the components of vector by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {number}                             scaleFactor    Scalar value on the left of the mul sign.
             * @param   {Microsoft.Xna.Framework.Vector3}    value          Source {@link } on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Vector3}                   Result of the vector multiplication with a scalar.
             */
            ,
            op_Multiply$2: function (scaleFactor, value) {
                value.x *= scaleFactor;
                value.y *= scaleFactor;
                value.z *= scaleFactor;
                return value.$clone();
            }/**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1    Source {@link } on the left of the div sign.
             * @param   {Microsoft.Xna.Framework.Vector3}    value2    Divisor {@link } on the right of the div sign.
             * @return  {Microsoft.Xna.Framework.Vector3}              The result of dividing the vectors.
             */
            ,
            op_Division: function (value1, value2) {
                value1.x /= value2.x;
                value1.y /= value2.y;
                value1.z /= value2.z;
                return value1.$clone();
            }/**
             * Divides the components of a {@link } by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector3
             * @memberof Microsoft.Xna.Framework.Vector3
             * @param   {Microsoft.Xna.Framework.Vector3}    value1     Source {@link } on the left of the div sign.
             * @param   {number}                             divider    Divisor scalar on the right of the div sign.
             * @return  {Microsoft.Xna.Framework.Vector3}               The result of dividing a vector by a scalar.
             */
            ,
            op_Division$1: function (value1, divider) {
                var factor = 1 / divider;
                value1.x *= factor;
                value1.y *= factor;
                value1.z *= factor;
                return value1.$clone();
            },
            getDefaultValue: function () { return new Microsoft.Xna.Framework.Vector3(); }
        },
        /**
         * The x coordinate of this {@link }.
         *
         * @instance
         */
        x: 0,
        /**
         * The y coordinate of this {@link }.
         *
         * @instance
         */
        y: 0,
        /**
         * The z coordinate of this {@link }.
         *
         * @instance
         */
        z: 0,
        config: {
            alias: [
            "equalsT", "System$IEquatable$1$Microsoft$Xna$Framework$Vector3$equalsT"
            ]
        },
        /**
         * Constructs a 3d vector with X, Y and Z from three values.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @param   {number}    x    The x coordinate in 3d-space.
         * @param   {number}    y    The y coordinate in 3d-space.
         * @param   {number}    z    The z coordinate in 3d-space.
         * @return  {void}
         */
        $ctor3: function (x, y, z) {
            this.$initialize();
            this.x = x;
            this.y = y;
            this.z = z;
        },
        /**
         * Constructs a 3d vector with X, Y and Z set to the same value.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @param   {number}    value    The x, y and z coordinates in 3d-space.
         * @return  {void}
         */
        $ctor2: function (value) {
            this.$initialize();
            this.x = value;
            this.y = value;
            this.z = value;
        },
        /**
         * Constructs a 3d vector with X, Y from {@link } and Z from a scalar.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @param   {Microsoft.Xna.Framework.Vector2}    value    The x and y coordinates in 3d-space.
         * @param   {number}                             z        The z coordinate in 3d-space.
         * @return  {void}
         */
        $ctor1: function (value, z) {
            this.$initialize();
            this.x = value.x;
            this.y = value.y;
            this.z = z;
        },
        ctor: function () {
            this.$initialize();
        },
        getDebugDisplayString: function () {
            return [System.Single.format(this.x, 'G'), "  ", System.Single.format(this.y, 'G'), "  ", System.Single.format(this.z, 'G')].toString().split(',').join('');
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @param   {Object}     obj    The {@link } to compare.
         * @return  {boolean}           <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equals: function (obj) {
            if (!(Bridge.is(obj, Microsoft.Xna.Framework.Vector3))) {
                return false;
            }

            var other = System.Nullable.getValue(Bridge.cast(obj, Microsoft.Xna.Framework.Vector3));
            return this.x === other.x && this.y === other.y && this.z === other.z;
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @param   {Microsoft.Xna.Framework.Vector3}    other    The {@link } to compare.
         * @return  {boolean}                                     <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equalsT: function (other) {
            return this.x === other.x && this.y === other.y && this.z === other.z;
        },
        /**
         * Gets the hash code of this {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @return  {number}        Hash code of this {@link }.
         */
        getHashCode: function () {
            return Bridge.Int.clip32(this.x + this.y + this.z);
        },
        /**
         * Returns the length of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @return  {number}        The length of this {@link }.
         */
        length: function () {
            var result = Microsoft.Xna.Framework.Vector3.distanceSquared(this, Microsoft.Xna.Framework.Vector3.zero.$clone());
            return Math.sqrt(result);
        },
        /**
         * Returns the squared length of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @return  {number}        The squared length of this {@link }.
         */
        lengthSquared: function () {
            return Microsoft.Xna.Framework.Vector3.distanceSquared(this, Microsoft.Xna.Framework.Vector3.zero.$clone());
        },
        /**
         * Turns this {@link } to a unit vector with the same direction.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @return  {void}
         */
        normalize: function () {
            Microsoft.Xna.Framework.Vector3.normalize$1(Bridge.ref(this), Bridge.ref(this));
        },
        /**
         * Returns a {@link } representation of this {@link } in the format:
         {X:[{@link }] Y:[{@link }] Z:[{@link }]}
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Vector3
         * @memberof Microsoft.Xna.Framework.Vector3
         * @return  {string}        A {@link } representation of this {@link }.
         */
        toString: function () {
            var sb = new System.Text.StringBuilder("", 32);
            sb.append("{X:");
            sb.append(this.x);
            sb.append(" Y:");
            sb.append(this.y);
            sb.append(" Z:");
            sb.append(this.z);
            sb.append("}");
            return sb.toString();
        },
        $clone: function (to) {
            var s = to || new Microsoft.Xna.Framework.Vector3();
            s.x = this.x;
            s.y = this.y;
            s.z = this.z;
            return s;
        }
    });

    /**
     * Describes a 4D-vector.
     *
     * @public
     * @class Microsoft.Xna.Framework.Vector4
     * @implements  System.IEquatable$1
     */
    Bridge.define("Microsoft.Xna.Framework.Vector4", {
        inherits: function () { return [System.IEquatable$1(Microsoft.Xna.Framework.Vector4)]; },
        $kind: "struct",
        statics: {
            config: {
                init: function () {
                    this.zero = new Microsoft.Xna.Framework.Vector4.ctor();
                    this.one = new Microsoft.Xna.Framework.Vector4.$ctor4(1.0, 1.0, 1.0, 1.0);
                    this.unitX = new Microsoft.Xna.Framework.Vector4.$ctor4(1.0, 0.0, 0.0, 0.0);
                    this.unitY = new Microsoft.Xna.Framework.Vector4.$ctor4(0.0, 1.0, 0.0, 0.0);
                    this.unitZ = new Microsoft.Xna.Framework.Vector4.$ctor4(0.0, 0.0, 1.0, 0.0);
                    this.unitW = new Microsoft.Xna.Framework.Vector4.$ctor4(0.0, 0.0, 0.0, 1.0);
                }
            },
            /**
             * Returns a {@link } with components 0, 0, 0, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @function getZero
             * @return  {Microsoft.Xna.Framework.Vector4}
             */
            /**
             * Returns a {@link } with components 0, 0, 0, 0.
             *
             * @instance
             * @function setZero
             */
            getZero: function () {
                return Microsoft.Xna.Framework.Vector4.zero.$clone();
            },
            /**
             * Returns a {@link } with components 1, 1, 1, 1.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @function getOne
             * @return  {Microsoft.Xna.Framework.Vector4}
             */
            /**
             * Returns a {@link } with components 1, 1, 1, 1.
             *
             * @instance
             * @function setOne
             */
            getOne: function () {
                return Microsoft.Xna.Framework.Vector4.one.$clone();
            },
            /**
             * Returns a {@link } with components 1, 0, 0, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @function getUnitX
             * @return  {Microsoft.Xna.Framework.Vector4}
             */
            /**
             * Returns a {@link } with components 1, 0, 0, 0.
             *
             * @instance
             * @function setUnitX
             */
            getUnitX: function () {
                return Microsoft.Xna.Framework.Vector4.unitX.$clone();
            },
            /**
             * Returns a {@link } with components 0, 1, 0, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @function getUnitY
             * @return  {Microsoft.Xna.Framework.Vector4}
             */
            /**
             * Returns a {@link } with components 0, 1, 0, 0.
             *
             * @instance
             * @function setUnitY
             */
            getUnitY: function () {
                return Microsoft.Xna.Framework.Vector4.unitY.$clone();
            },
            /**
             * Returns a {@link } with components 0, 0, 1, 0.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @function getUnitZ
             * @return  {Microsoft.Xna.Framework.Vector4}
             */
            /**
             * Returns a {@link } with components 0, 0, 1, 0.
             *
             * @instance
             * @function setUnitZ
             */
            getUnitZ: function () {
                return Microsoft.Xna.Framework.Vector4.unitZ.$clone();
            },
            /**
             * Returns a {@link } with components 0, 0, 0, 1.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @function getUnitW
             * @return  {Microsoft.Xna.Framework.Vector4}
             */
            /**
             * Returns a {@link } with components 0, 0, 0, 1.
             *
             * @instance
             * @function setUnitW
             */
            getUnitW: function () {
                return Microsoft.Xna.Framework.Vector4.unitW.$clone();
            },
            /**
             * Performs vector addition on <b /> and <b />.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector to add.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector to add.
             * @return  {Microsoft.Xna.Framework.Vector4}              The result of the vector addition.
             */
            add: function (value1, value2) {
                value1.x += value2.x;
                value1.y += value2.y;
                value1.z += value2.z;
                value1.w += value2.w;
                return value1.$clone();
            },
            /**
             * Performs vector addition on <b /> and
             <b />, storing the result of the
             addition in <b />.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector to add.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector to add.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The result of the vector addition.
             * @return  {void}
             */
            add$1: function (value1, value2, result) {
                result.v.x = value1.v.x + value2.v.x;
                result.v.y = value1.v.y + value2.v.y;
                result.v.z = value1.v.z + value2.v.z;
                result.v.w = value1.v.w + value2.v.w;
            },
            /**
             * Creates a new {@link } that contains the cartesian coordinates of a vector specified in barycentric coordinates and relative to 4d-triangle.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1     The first vector of 4d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2     The second vector of 4d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector4}    value3     The third vector of 4d-triangle.
             * @param   {number}                             amount1    Barycentric scalar <pre><code>b2</code></pre> which represents a weighting factor towards second vector of 4d-triangle.
             * @param   {number}                             amount2    Barycentric scalar <pre><code>b3</code></pre> which represents a weighting factor towards third vector of 4d-triangle.
             * @return  {Microsoft.Xna.Framework.Vector4}               The cartesian translation of barycentric coordinates.
             */
            barycentric: function (value1, value2, value3, amount1, amount2) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(Microsoft.Xna.Framework.MathHelper.barycentric(value1.x, value2.x, value3.x, amount1, amount2), Microsoft.Xna.Framework.MathHelper.barycentric(value1.y, value2.y, value3.y, amount1, amount2), Microsoft.Xna.Framework.MathHelper.barycentric(value1.z, value2.z, value3.z, amount1, amount2), Microsoft.Xna.Framework.MathHelper.barycentric(value1.w, value2.w, value3.w, amount1, amount2));
            },
            /**
             * Creates a new {@link } that contains the cartesian coordinates of a vector specified in barycentric coordinates and relative to 4d-triangle.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1     The first vector of 4d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2     The second vector of 4d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector4}    value3     The third vector of 4d-triangle.
             * @param   {number}                             amount1    Barycentric scalar <pre><code>b2</code></pre> which represents a weighting factor towards second vector of 4d-triangle.
             * @param   {number}                             amount2    Barycentric scalar <pre><code>b3</code></pre> which represents a weighting factor towards third vector of 4d-triangle.
             * @param   {Microsoft.Xna.Framework.Vector4}    result     The cartesian translation of barycentric coordinates as an output parameter.
             * @return  {void}
             */
            barycentric$1: function (value1, value2, value3, amount1, amount2, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.barycentric(value1.v.x, value2.v.x, value3.v.x, amount1, amount2);
                result.v.y = Microsoft.Xna.Framework.MathHelper.barycentric(value1.v.y, value2.v.y, value3.v.y, amount1, amount2);
                result.v.z = Microsoft.Xna.Framework.MathHelper.barycentric(value1.v.z, value2.v.z, value3.v.z, amount1, amount2);
                result.v.w = Microsoft.Xna.Framework.MathHelper.barycentric(value1.v.w, value2.v.w, value3.v.w, amount1, amount2);
            },
            /**
             * Creates a new {@link } that contains CatmullRom interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector4}    value3    The third vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector4}    value4    The fourth vector in interpolation.
             * @param   {number}                             amount    Weighting factor.
             * @return  {Microsoft.Xna.Framework.Vector4}              The result of CatmullRom interpolation.
             */
            catmullRom: function (value1, value2, value3, value4, amount) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(Microsoft.Xna.Framework.MathHelper.catmullRom(value1.x, value2.x, value3.x, value4.x, amount), Microsoft.Xna.Framework.MathHelper.catmullRom(value1.y, value2.y, value3.y, value4.y, amount), Microsoft.Xna.Framework.MathHelper.catmullRom(value1.z, value2.z, value3.z, value4.z, amount), Microsoft.Xna.Framework.MathHelper.catmullRom(value1.w, value2.w, value3.w, value4.w, amount));
            },
            /**
             * Creates a new {@link } that contains CatmullRom interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector4}    value3    The third vector in interpolation.
             * @param   {Microsoft.Xna.Framework.Vector4}    value4    The fourth vector in interpolation.
             * @param   {number}                             amount    Weighting factor.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The result of CatmullRom interpolation as an output parameter.
             * @return  {void}
             */
            catmullRom$1: function (value1, value2, value3, value4, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.catmullRom(value1.v.x, value2.v.x, value3.v.x, value4.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.catmullRom(value1.v.y, value2.v.y, value3.v.y, value4.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.catmullRom(value1.v.z, value2.v.z, value3.v.z, value4.v.z, amount);
                result.v.w = Microsoft.Xna.Framework.MathHelper.catmullRom(value1.v.w, value2.v.w, value3.v.w, value4.v.w, amount);
            },
            /**
             * Clamps the specified value within a range.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The value to clamp.
             * @param   {Microsoft.Xna.Framework.Vector4}    min       The min value.
             * @param   {Microsoft.Xna.Framework.Vector4}    max       The max value.
             * @return  {Microsoft.Xna.Framework.Vector4}              The clamped value.
             */
            clamp: function (value1, min, max) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(Microsoft.Xna.Framework.MathHelper.clamp$1(value1.x, min.x, max.x), Microsoft.Xna.Framework.MathHelper.clamp$1(value1.y, min.y, max.y), Microsoft.Xna.Framework.MathHelper.clamp$1(value1.z, min.z, max.z), Microsoft.Xna.Framework.MathHelper.clamp$1(value1.w, min.w, max.w));
            },
            /**
             * Clamps the specified value within a range.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The value to clamp.
             * @param   {Microsoft.Xna.Framework.Vector4}    min       The min value.
             * @param   {Microsoft.Xna.Framework.Vector4}    max       The max value.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The clamped value as an output parameter.
             * @return  {void}
             */
            clamp$1: function (value1, min, max, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.clamp$1(value1.v.x, min.v.x, max.v.x);
                result.v.y = Microsoft.Xna.Framework.MathHelper.clamp$1(value1.v.y, min.v.y, max.v.y);
                result.v.z = Microsoft.Xna.Framework.MathHelper.clamp$1(value1.v.z, min.v.z, max.v.z);
                result.v.w = Microsoft.Xna.Framework.MathHelper.clamp$1(value1.v.w, min.v.w, max.v.w);
            },
            /**
             * Returns the distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @return  {number}                                       The distance between two vectors.
             */
            distance: function (value1, value2) {
                return Math.sqrt(Microsoft.Xna.Framework.Vector4.distanceSquared(value1.$clone(), value2.$clone()));
            },
            /**
             * Returns the distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @param   {System.Single}                      result    The distance between two vectors as an output parameter.
             * @return  {void}
             */
            distance$1: function (value1, value2, result) {
                result.v = Math.sqrt(Microsoft.Xna.Framework.Vector4.distanceSquared(value1.v.$clone(), value2.v.$clone()));
            },
            /**
             * Returns the squared distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @return  {number}                                       The squared distance between two vectors.
             */
            distanceSquared: function (value1, value2) {
                return (value1.w - value2.w) * (value1.w - value2.w) + (value1.x - value2.x) * (value1.x - value2.x) + (value1.y - value2.y) * (value1.y - value2.y) + (value1.z - value2.z) * (value1.z - value2.z);
            },
            /**
             * Returns the squared distance between two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @param   {System.Single}                      result    The squared distance between two vectors as an output parameter.
             * @return  {void}
             */
            distanceSquared$1: function (value1, value2, result) {
                result.v = (value1.v.w - value2.v.w) * (value1.v.w - value2.v.w) + (value1.v.x - value2.v.x) * (value1.v.x - value2.v.x) + (value1.v.y - value2.v.y) * (value1.v.y - value2.v.y) + (value1.v.z - value2.v.z) * (value1.v.z - value2.v.z);
            },
            /**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Divisor {@link }.
             * @return  {Microsoft.Xna.Framework.Vector4}              The result of dividing the vectors.
             */
            divide: function (value1, value2) {
                value1.w /= value2.w;
                value1.x /= value2.x;
                value1.y /= value2.y;
                value1.z /= value2.z;
                return value1.$clone();
            },
            /**
             * Divides the components of a {@link } by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1     Source {@link }.
             * @param   {number}                             divider    Divisor scalar.
             * @return  {Microsoft.Xna.Framework.Vector4}               The result of dividing a vector by a scalar.
             */
            divide$1: function (value1, divider) {
                var factor = 1.0 / divider;
                value1.w *= factor;
                value1.x *= factor;
                value1.y *= factor;
                value1.z *= factor;
                return value1.$clone();
            },
            /**
             * Divides the components of a {@link } by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1     Source {@link }.
             * @param   {number}                             divider    Divisor scalar.
             * @param   {Microsoft.Xna.Framework.Vector4}    result     The result of dividing a vector by a scalar as an output parameter.
             * @return  {void}
             */
            divide$3: function (value1, divider, result) {
                var factor = 1.0 / divider;
                result.v.w = value1.v.w * factor;
                result.v.x = value1.v.x * factor;
                result.v.y = value1.v.y * factor;
                result.v.z = value1.v.z * factor;
            },
            /**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Divisor {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The result of dividing the vectors as an output parameter.
             * @return  {void}
             */
            divide$2: function (value1, value2, result) {
                result.v.w = value1.v.w / value2.v.w;
                result.v.x = value1.v.x / value2.v.x;
                result.v.y = value1.v.y / value2.v.y;
                result.v.z = value1.v.z / value2.v.z;
            },
            /**
             * Returns a dot product of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @return  {number}                                       The dot product of two vectors.
             */
            dot: function (value1, value2) {
                return value1.x * value2.x + value1.y * value2.y + value1.z * value2.z + value1.w * value2.w;
            },
            /**
             * Returns a dot product of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @param   {System.Single}                      result    The dot product of two vectors as an output parameter.
             * @return  {void}
             */
            dot$1: function (value1, value2, result) {
                result.v = value1.v.x * value2.v.x + value1.v.y * value2.v.y + value1.v.z * value2.v.z + value1.v.w * value2.v.w;
            },
            /**
             * Creates a new {@link } that contains hermite spline interpolation.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1      The first position vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    tangent1    The first tangent vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2      The second position vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    tangent2    The second tangent vector.
             * @param   {number}                             amount      Weighting factor.
             * @return  {Microsoft.Xna.Framework.Vector4}                The hermite spline interpolation vector.
             */
            hermite: function (value1, tangent1, value2, tangent2, amount) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(Microsoft.Xna.Framework.MathHelper.hermite(value1.x, tangent1.x, value2.x, tangent2.x, amount), Microsoft.Xna.Framework.MathHelper.hermite(value1.y, tangent1.y, value2.y, tangent2.y, amount), Microsoft.Xna.Framework.MathHelper.hermite(value1.z, tangent1.z, value2.z, tangent2.z, amount), Microsoft.Xna.Framework.MathHelper.hermite(value1.w, tangent1.w, value2.w, tangent2.w, amount));
            },
            /**
             * Creates a new {@link } that contains hermite spline interpolation.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1      The first position vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    tangent1    The first tangent vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2      The second position vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    tangent2    The second tangent vector.
             * @param   {number}                             amount      Weighting factor.
             * @param   {Microsoft.Xna.Framework.Vector4}    result      The hermite spline interpolation vector as an output parameter.
             * @return  {void}
             */
            hermite$1: function (value1, tangent1, value2, tangent2, amount, result) {
                result.v.w = Microsoft.Xna.Framework.MathHelper.hermite(value1.v.w, tangent1.v.w, value2.v.w, tangent2.v.w, amount);
                result.v.x = Microsoft.Xna.Framework.MathHelper.hermite(value1.v.x, tangent1.v.x, value2.v.x, tangent2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.hermite(value1.v.y, tangent1.v.y, value2.v.y, tangent2.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.hermite(value1.v.z, tangent1.v.z, value2.v.z, tangent2.v.z, amount);
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @return  {Microsoft.Xna.Framework.Vector4}              The result of linear interpolation of the specified vectors.
             */
            lerp: function (value1, value2, amount) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(Microsoft.Xna.Framework.MathHelper.lerp(value1.x, value2.x, amount), Microsoft.Xna.Framework.MathHelper.lerp(value1.y, value2.y, amount), Microsoft.Xna.Framework.MathHelper.lerp(value1.z, value2.z, amount), Microsoft.Xna.Framework.MathHelper.lerp(value1.w, value2.w, amount));
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The result of linear interpolation of the specified vectors as an output parameter.
             * @return  {void}
             */
            lerp$1: function (value1, value2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.lerp(value1.v.x, value2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.lerp(value1.v.y, value2.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.lerp(value1.v.z, value2.v.z, amount);
                result.v.w = Microsoft.Xna.Framework.MathHelper.lerp(value1.v.w, value2.v.w, amount);
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             Uses {@link } on MathHelper for the interpolation.
             Less efficient but more precise compared to {@link }.
             See remarks section of {@link } on MathHelper for more info.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @return  {Microsoft.Xna.Framework.Vector4}              The result of linear interpolation of the specified vectors.
             */
            lerpPrecise: function (value1, value2, amount) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.x, value2.x, amount), Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.y, value2.y, amount), Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.z, value2.z, amount), Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.w, value2.w, amount));
            },
            /**
             * Creates a new {@link } that contains linear interpolation of the specified vectors.
             Uses {@link } on MathHelper for the interpolation.
             Less efficient but more precise compared to {@link }.
             See remarks section of {@link } on MathHelper for more info.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @param   {number}                             amount    Weighting value(between 0.0 and 1.0).
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The result of linear interpolation of the specified vectors as an output parameter.
             * @return  {void}
             */
            lerpPrecise$1: function (value1, value2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.v.x, value2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.v.y, value2.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.v.z, value2.v.z, amount);
                result.v.w = Microsoft.Xna.Framework.MathHelper.lerpPrecise(value1.v.w, value2.v.w, amount);
            },
            /**
             * Creates a new {@link } that contains a maximal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @return  {Microsoft.Xna.Framework.Vector4}              The {@link } with maximal values from the two vectors.
             */
            max: function (value1, value2) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(Microsoft.Xna.Framework.MathHelper.max$1(value1.x, value2.x), Microsoft.Xna.Framework.MathHelper.max$1(value1.y, value2.y), Microsoft.Xna.Framework.MathHelper.max$1(value1.z, value2.z), Microsoft.Xna.Framework.MathHelper.max$1(value1.w, value2.w));
            },
            /**
             * Creates a new {@link } that contains a maximal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The {@link } with maximal values from the two vectors as an output parameter.
             * @return  {void}
             */
            max$1: function (value1, value2, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.max$1(value1.v.x, value2.v.x);
                result.v.y = Microsoft.Xna.Framework.MathHelper.max$1(value1.v.y, value2.v.y);
                result.v.z = Microsoft.Xna.Framework.MathHelper.max$1(value1.v.z, value2.v.z);
                result.v.w = Microsoft.Xna.Framework.MathHelper.max$1(value1.v.w, value2.v.w);
            },
            /**
             * Creates a new {@link } that contains a minimal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @return  {Microsoft.Xna.Framework.Vector4}              The {@link } with minimal values from the two vectors.
             */
            min: function (value1, value2) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(Microsoft.Xna.Framework.MathHelper.min$1(value1.x, value2.x), Microsoft.Xna.Framework.MathHelper.min$1(value1.y, value2.y), Microsoft.Xna.Framework.MathHelper.min$1(value1.z, value2.z), Microsoft.Xna.Framework.MathHelper.min$1(value1.w, value2.w));
            },
            /**
             * Creates a new {@link } that contains a minimal values from the two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    The first vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    The second vector.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The {@link } with minimal values from the two vectors as an output parameter.
             * @return  {void}
             */
            min$1: function (value1, value2, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.min$1(value1.v.x, value2.v.x);
                result.v.y = Microsoft.Xna.Framework.MathHelper.min$1(value1.v.y, value2.v.y);
                result.v.z = Microsoft.Xna.Framework.MathHelper.min$1(value1.v.z, value2.v.z);
                result.v.w = Microsoft.Xna.Framework.MathHelper.min$1(value1.v.w, value2.v.w);
            },
            /**
             * Creates a new {@link } that contains a multiplication of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector4}              The result of the vector multiplication.
             */
            multiply: function (value1, value2) {
                value1.w *= value2.w;
                value1.x *= value2.x;
                value1.y *= value2.y;
                value1.z *= value2.z;
                return value1.$clone();
            },
            /**
             * Creates a new {@link } that contains a multiplication of {@link } and a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1         Source {@link }.
             * @param   {number}                             scaleFactor    Scalar value.
             * @return  {Microsoft.Xna.Framework.Vector4}                   The result of the vector multiplication with a scalar.
             */
            multiply$1: function (value1, scaleFactor) {
                value1.w *= scaleFactor;
                value1.x *= scaleFactor;
                value1.y *= scaleFactor;
                value1.z *= scaleFactor;
                return value1.$clone();
            },
            /**
             * Creates a new {@link } that contains a multiplication of {@link } and a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1         Source {@link }.
             * @param   {number}                             scaleFactor    Scalar value.
             * @param   {Microsoft.Xna.Framework.Vector4}    result         The result of the multiplication with a scalar as an output parameter.
             * @return  {void}
             */
            multiply$3: function (value1, scaleFactor, result) {
                result.v.w = value1.v.w * scaleFactor;
                result.v.x = value1.v.x * scaleFactor;
                result.v.y = value1.v.y * scaleFactor;
                result.v.z = value1.v.z * scaleFactor;
            },
            /**
             * Creates a new {@link } that contains a multiplication of two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The result of the vector multiplication as an output parameter.
             * @return  {void}
             */
            multiply$2: function (value1, value2, result) {
                result.v.w = value1.v.w * value2.v.w;
                result.v.x = value1.v.x * value2.v.x;
                result.v.y = value1.v.y * value2.v.y;
                result.v.z = value1.v.z * value2.v.z;
            },
            /**
             * Creates a new {@link } that contains the specified vector inversion.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector4}             The result of the vector inversion.
             */
            negate: function (value) {
                value = new Microsoft.Xna.Framework.Vector4.$ctor4(-value.x, -value.y, -value.z, -value.w);
                return value.$clone();
            },
            /**
             * Creates a new {@link } that contains the specified vector inversion.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value     Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The result of the vector inversion as an output parameter.
             * @return  {void}
             */
            negate$1: function (value, result) {
                result.v.x = -value.v.x;
                result.v.y = -value.v.y;
                result.v.z = -value.v.z;
                result.v.w = -value.v.w;
            },
            /**
             * Creates a new {@link } that contains a normalized values from another vector.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector4}             Unit vector.
             */
            normalize: function (value) {
                var factor = Microsoft.Xna.Framework.Vector4.distanceSquared(value.$clone(), Microsoft.Xna.Framework.Vector4.zero.$clone());
                factor = 1.0 / Math.sqrt(factor);

                return new Microsoft.Xna.Framework.Vector4.$ctor4(value.x * factor, value.y * factor, value.z * factor, value.w * factor);
            },
            /**
             * Creates a new {@link } that contains a normalized values from another vector.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value     Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    Unit vector as an output parameter.
             * @return  {void}
             */
            normalize$1: function (value, result) {
                var factor = Microsoft.Xna.Framework.Vector4.distanceSquared(value.v.$clone(), Microsoft.Xna.Framework.Vector4.zero.$clone());
                factor = 1.0 / Math.sqrt(factor);

                result.v.w = value.v.w * factor;
                result.v.x = value.v.x * factor;
                result.v.y = value.v.y * factor;
                result.v.z = value.v.z * factor;
            },
            /**
             * Creates a new {@link } that contains cubic interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Source {@link }.
             * @param   {number}                             amount    Weighting value.
             * @return  {Microsoft.Xna.Framework.Vector4}              Cubic interpolation of the specified vectors.
             */
            smoothStep: function (value1, value2, amount) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(Microsoft.Xna.Framework.MathHelper.smoothStep(value1.x, value2.x, amount), Microsoft.Xna.Framework.MathHelper.smoothStep(value1.y, value2.y, amount), Microsoft.Xna.Framework.MathHelper.smoothStep(value1.z, value2.z, amount), Microsoft.Xna.Framework.MathHelper.smoothStep(value1.w, value2.w, amount));
            },
            /**
             * Creates a new {@link } that contains cubic interpolation of the specified vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Source {@link }.
             * @param   {number}                             amount    Weighting value.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    Cubic interpolation of the specified vectors as an output parameter.
             * @return  {void}
             */
            smoothStep$1: function (value1, value2, amount, result) {
                result.v.x = Microsoft.Xna.Framework.MathHelper.smoothStep(value1.v.x, value2.v.x, amount);
                result.v.y = Microsoft.Xna.Framework.MathHelper.smoothStep(value1.v.y, value2.v.y, amount);
                result.v.z = Microsoft.Xna.Framework.MathHelper.smoothStep(value1.v.z, value2.v.z, amount);
                result.v.w = Microsoft.Xna.Framework.MathHelper.smoothStep(value1.v.w, value2.v.w, amount);
            },
            /**
             * Creates a new {@link } that contains subtraction of on {@link } from a another.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Source {@link }.
             * @return  {Microsoft.Xna.Framework.Vector4}              The result of the vector subtraction.
             */
            subtract: function (value1, value2) {
                value1.w -= value2.w;
                value1.x -= value2.x;
                value1.y -= value2.y;
                value1.z -= value2.z;
                return value1.$clone();
            },
            /**
             * Creates a new {@link } that contains subtraction of on {@link } from a another.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Source {@link }.
             * @param   {Microsoft.Xna.Framework.Vector4}    result    The result of the vector subtraction as an output parameter.
             * @return  {void}
             */
            subtract$1: function (value1, value2, result) {
                result.v.w = value1.v.w - value2.v.w;
                result.v.x = value1.v.x - value2.v.x;
                result.v.y = value1.v.y - value2.v.y;
                result.v.z = value1.v.z - value2.v.z;
            }/**
             * Inverts values in the specified {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value    Source {@link } on the right of the sub sign.
             * @return  {Microsoft.Xna.Framework.Vector4}             Result of the inversion.
             */
            ,
            op_UnaryNegation: function (value) {
                return new Microsoft.Xna.Framework.Vector4.$ctor4(-value.x, -value.y, -value.z, -value.w);
            }/**
             * Compares whether two {@link } instances are equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    {@link } instance on the left of the equal sign.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    {@link } instance on the right of the equal sign.
             * @return  {boolean}                                      <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Equality: function (value1, value2) {
                return value1.w === value2.w && value1.x === value2.x && value1.y === value2.y && value1.z === value2.z;
            }/**
             * Compares whether two {@link } instances are not equal.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    {@link } instance on the left of the not equal sign.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    {@link } instance on the right of the not equal sign.
             * @return  {boolean}                                      <pre><code>true</code></pre> if the instances are not equal; <pre><code>false</code></pre> otherwise.
             */
            ,
            op_Inequality: function (value1, value2) {
                return !(Microsoft.Xna.Framework.Vector4.op_Equality(value1, value2));
            }/**
             * Adds two vectors.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link } on the left of the add sign.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Source {@link } on the right of the add sign.
             * @return  {Microsoft.Xna.Framework.Vector4}              Sum of the vectors.
             */
            ,
            op_Addition: function (value1, value2) {
                value1.w += value2.w;
                value1.x += value2.x;
                value1.y += value2.y;
                value1.z += value2.z;
                return value1.$clone();
            }/**
             * Subtracts a {@link } from a {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link } on the left of the sub sign.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Source {@link } on the right of the sub sign.
             * @return  {Microsoft.Xna.Framework.Vector4}              Result of the vector subtraction.
             */
            ,
            op_Subtraction: function (value1, value2) {
                value1.w -= value2.w;
                value1.x -= value2.x;
                value1.y -= value2.y;
                value1.z -= value2.z;
                return value1.$clone();
            }/**
             * Multiplies the components of two vectors by each other.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link } on the left of the mul sign.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Source {@link } on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Vector4}              Result of the vector multiplication.
             */
            ,
            op_Multiply: function (value1, value2) {
                value1.w *= value2.w;
                value1.x *= value2.x;
                value1.y *= value2.y;
                value1.z *= value2.z;
                return value1.$clone();
            }/**
             * Multiplies the components of vector by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value          Source {@link } on the left of the mul sign.
             * @param   {number}                             scaleFactor    Scalar value on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Vector4}                   Result of the vector multiplication with a scalar.
             */
            ,
            op_Multiply$1: function (value, scaleFactor) {
                value.w *= scaleFactor;
                value.x *= scaleFactor;
                value.y *= scaleFactor;
                value.z *= scaleFactor;
                return value.$clone();
            }/**
             * Multiplies the components of vector by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {number}                             scaleFactor    Scalar value on the left of the mul sign.
             * @param   {Microsoft.Xna.Framework.Vector4}    value          Source {@link } on the right of the mul sign.
             * @return  {Microsoft.Xna.Framework.Vector4}                   Result of the vector multiplication with a scalar.
             */
            ,
            op_Multiply$2: function (scaleFactor, value) {
                value.w *= scaleFactor;
                value.x *= scaleFactor;
                value.y *= scaleFactor;
                value.z *= scaleFactor;
                return value.$clone();
            }/**
             * Divides the components of a {@link } by the components of another {@link }.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1    Source {@link } on the left of the div sign.
             * @param   {Microsoft.Xna.Framework.Vector4}    value2    Divisor {@link } on the right of the div sign.
             * @return  {Microsoft.Xna.Framework.Vector4}              The result of dividing the vectors.
             */
            ,
            op_Division: function (value1, value2) {
                value1.w /= value2.w;
                value1.x /= value2.x;
                value1.y /= value2.y;
                value1.z /= value2.z;
                return value1.$clone();
            }/**
             * Divides the components of a {@link } by a scalar.
             *
             * @static
             * @public
             * @this Microsoft.Xna.Framework.Vector4
             * @memberof Microsoft.Xna.Framework.Vector4
             * @param   {Microsoft.Xna.Framework.Vector4}    value1     Source {@link } on the left of the div sign.
             * @param   {number}                             divider    Divisor scalar on the right of the div sign.
             * @return  {Microsoft.Xna.Framework.Vector4}               The result of dividing a vector by a scalar.
             */
            ,
            op_Division$1: function (value1, divider) {
                var factor = 1.0 / divider;
                value1.w *= factor;
                value1.x *= factor;
                value1.y *= factor;
                value1.z *= factor;
                return value1.$clone();
            },
            getDefaultValue: function () { return new Microsoft.Xna.Framework.Vector4(); }
        },
        /**
         * The x coordinate of this {@link }.
         *
         * @instance
         */
        x: 0,
        /**
         * The y coordinate of this {@link }.
         *
         * @instance
         */
        y: 0,
        /**
         * The z coordinate of this {@link }.
         *
         * @instance
         */
        z: 0,
        /**
         * The w coordinate of this {@link }.
         *
         * @instance
         */
        w: 0,
        config: {
            alias: [
            "equalsT", "System$IEquatable$1$Microsoft$Xna$Framework$Vector4$equalsT"
            ]
        },
        /**
         * Constructs a 3d vector with X, Y, Z and W from four values.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @param   {number}    x    The x coordinate in 4d-space.
         * @param   {number}    y    The y coordinate in 4d-space.
         * @param   {number}    z    The z coordinate in 4d-space.
         * @param   {number}    w    The w coordinate in 4d-space.
         * @return  {void}
         */
        $ctor4: function (x, y, z, w) {
            this.$initialize();
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        },
        /**
         * Constructs a 3d vector with X and Z from {@link } and Z and W from the scalars.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @param   {Microsoft.Xna.Framework.Vector2}    value    The x and y coordinates in 4d-space.
         * @param   {number}                             z        The z coordinate in 4d-space.
         * @param   {number}                             w        The w coordinate in 4d-space.
         * @return  {void}
         */
        $ctor1: function (value, z, w) {
            this.$initialize();
            this.x = value.x;
            this.y = value.y;
            this.z = z;
            this.w = w;
        },
        /**
         * Constructs a 3d vector with X, Y, Z from {@link } and W from a scalar.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @param   {Microsoft.Xna.Framework.Vector3}    value    The x, y and z coordinates in 4d-space.
         * @param   {number}                             w        The w coordinate in 4d-space.
         * @return  {void}
         */
        $ctor2: function (value, w) {
            this.$initialize();
            this.x = value.x;
            this.y = value.y;
            this.z = value.z;
            this.w = w;
        },
        /**
         * Constructs a 4d vector with X, Y, Z and W set to the same value.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @param   {number}    value    The x, y, z and w coordinates in 4d-space.
         * @return  {void}
         */
        $ctor3: function (value) {
            this.$initialize();
            this.x = value;
            this.y = value;
            this.z = value;
            this.w = value;
        },
        ctor: function () {
            this.$initialize();
        },
        getDebugDisplayString: function () {
            return [System.Single.format(this.x, 'G'), "  ", System.Single.format(this.y, 'G'), "  ", System.Single.format(this.z, 'G'), "  ", System.Single.format(this.w, 'G')].toString().split(',').join('');
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @param   {Object}     obj    The {@link } to compare.
         * @return  {boolean}           <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equals: function (obj) {
            return (Bridge.is(obj, Microsoft.Xna.Framework.Vector4)) ? Microsoft.Xna.Framework.Vector4.op_Equality(this, System.Nullable.getValue(Bridge.cast(obj, Microsoft.Xna.Framework.Vector4))) : false;
        },
        /**
         * Compares whether current instance is equal to specified {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @param   {Microsoft.Xna.Framework.Vector4}    other    The {@link } to compare.
         * @return  {boolean}                                     <pre><code>true</code></pre> if the instances are equal; <pre><code>false</code></pre> otherwise.
         */
        equalsT: function (other) {
            return this.w === other.w && this.x === other.x && this.y === other.y && this.z === other.z;
        },
        /**
         * Gets the hash code of this {@link }.
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @return  {number}        Hash code of this {@link }.
         */
        getHashCode: function () {
            return Bridge.Int.clip32(this.w + this.x + this.y + this.y);
        },
        /**
         * Returns the length of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @return  {number}        The length of this {@link }.
         */
        length: function () {
            var result = Microsoft.Xna.Framework.Vector4.distanceSquared(this, Microsoft.Xna.Framework.Vector4.zero.$clone());
            return Math.sqrt(result);
        },
        /**
         * Returns the squared length of this {@link }.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @return  {number}        The squared length of this {@link }.
         */
        lengthSquared: function () {
            return Microsoft.Xna.Framework.Vector4.distanceSquared(this, Microsoft.Xna.Framework.Vector4.zero.$clone());
        },
        /**
         * Turns this {@link } to a unit vector with the same direction.
         *
         * @instance
         * @public
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @return  {void}
         */
        normalize: function () {
            Microsoft.Xna.Framework.Vector4.normalize$1(Bridge.ref(this), Bridge.ref(this));
        },
        /**
         * Returns a {@link } representation of this {@link } in the format:
         {X:[{@link }] Y:[{@link }] Z:[{@link }] W:[{@link }]}
         *
         * @instance
         * @public
         * @override
         * @this Microsoft.Xna.Framework.Vector4
         * @memberof Microsoft.Xna.Framework.Vector4
         * @return  {string}        A {@link } representation of this {@link }.
         */
        toString: function () {
            return "{X:" + System.Single.format(this.x, 'G') + " Y:" + System.Single.format(this.y, 'G') + " Z:" + System.Single.format(this.z, 'G') + " W:" + System.Single.format(this.w, 'G') + "}";
        },
        $clone: function (to) {
            var s = to || new Microsoft.Xna.Framework.Vector4();
            s.x = this.x;
            s.y = this.y;
            s.z = this.z;
            s.w = this.w;
            return s;
        }
    });
});
