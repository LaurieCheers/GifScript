using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Jillzhang.GifUtility;

namespace UnitTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void GifScriptTest()
        {
            GifImage gifImage = GifDecoder.Decode(@"C:\Users\Laurie\Pictures\test.gif");
        }
    }
}
