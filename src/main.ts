import './style.scss';
import { MyClass } from './MyClass';

document.getElementById('app').innerHTML = 'Hello, world!';

const myClass = new MyClass({
	value: 'test',
});

myClass.print();
