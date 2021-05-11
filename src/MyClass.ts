export class MyClass {
	private value: string;

	constructor({ value }: { value: string }) {
		this.value = value;
	}

	print() {
		console.log(this.value);
	}
}
