const HashTable = require('../lib/Hash Table/Hash Table').default;
var assert = require('assert');


describe("Hash Table", () => {
    it("verify hashtable", () => {
        let hashtable = new HashTable(10);
        hashtable.add(5, { mike: 5 });
        hashtable.add(1, { one: 1 });
        hashtable.add('5', { sttringFiv: 1 });
        hashtable.add('x1231', { len5: true });
        hashtable.add('who', { len3: true });

        hashtable.remove('5');
        hashtable.remove('12345');
        hashtable.remove(1);
        let one = hashtable.find(1);
        let three = hashtable.find(3);
        let fiveletter = hashtable.find('x1231');
        let who = hashtable.find('who');
        let unknown = hashtable.find('23d');

        assert.strictEqual(one, null);
        assert.strictEqual(three, null);
        assert.strictEqual(fiveletter.value.len5, true);
        assert.strictEqual(unknown, null);
        assert.strictEqual(who.value.len3, true);
    });
});



