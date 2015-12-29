using Jillzhang.GifUtility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GifScriptTest
{
    class Program
    {
        static void Main(string[] args)
        {
            GifImage gifImage = GifDecoder.Decode(@"C:\Users\Laurie\Pictures\test.gif");

        }
    }
}
