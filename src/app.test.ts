// ၁။ node:test နဲ့ node:assert ကနေ လိုအပ်တာတွေ လှမ်းခေါ်ပါမယ်
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('App Tests', () => {

    it('should work correctly', () => {
        // ဥပမာ - ၁ နဲ့ ၁ ပေါင်းရင် ၂ ရမရ စစ်ကြည့်တာပါ
        // Jest ရဲ့ expect().toBe() နေရာမှာ assert.strictEqual() ကို သုံးပါတယ်
        const result = 1 + 1;
        assert.strictEqual(result, 2);
    });

});