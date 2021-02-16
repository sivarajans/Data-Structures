import HashTable from './Hash Table';


let hashtable = new HashTable(10);

hashtable.add(5, { mike: 5 });
hashtable.add(1, { one: 1 });
hashtable.add('5', { sttringFiv: 1 });
hashtable.add('x1231', { len5: true });
hashtable.add('who', { len3: true });

console.log(hashtable.elements);

hashtable.remove('5');
hashtable.remove('12345');
hashtable.remove(1);
let one = hashtable.find(1);
let three = hashtable.find(3);
let five = hashtable.find('x1231');
let unknown = hashtable.find('23d');

