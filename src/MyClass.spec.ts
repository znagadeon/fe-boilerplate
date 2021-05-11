import { MyClass } from './MyClass';

describe('stub', () => {
	const myClass = new MyClass({ value: 'test' });
	myClass.print();

	it('stub', () => {});
});
