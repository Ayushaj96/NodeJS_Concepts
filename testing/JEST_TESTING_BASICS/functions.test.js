const functions = require('./functions');

test('Adds  2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});

test('Adds  2 + 2 to NOT equal 4', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test('User Should be John Wick Obj', () => {
	expect(functions.createUser()).toEqual({
		firstName: 'John',
		lastName: 'Wick',
	});
});

// Regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin Should be in usernames', () => {
	usernames = ['john', 'admin'];
	expect(usernames).toContain('admin');
});

// Promise
// test('User fetched name should be Leanne Graham', () => {
// 	expect.assertions(1);
// 	return functions.fetchUser().then((data) => {
// 		expect(data.name).toEqual('Leanne Graham');
// 	});
// });

// Async Await
test('User fetched name should be Leanne Graham', async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual('Leanne Graham');
});
