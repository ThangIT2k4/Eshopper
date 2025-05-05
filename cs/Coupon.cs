using System;
using System.Collections.Generic;

namespace WebDT.Models.Giam_gia
{
    public static class Coupon
    {
        private static Dictionary<string, float> couponValues = new Dictionary<string, float>
    {
        { "COUPON1", 0.1f },
        { "COUPON2", 0.2f },
        { "COUPON3", 0.3f },
        { "COUPON4", 0.4f }
    };

        public static float? GetDiscount(string code)
        {
            if (couponValues.TryGetValue(code.ToUpper(), out float value))
            {
                return value;
            }
            return null;
        }
    }


}
