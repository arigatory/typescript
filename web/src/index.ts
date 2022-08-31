import { User } from './models/User';
const user = new User({ name: 'John', age: 22 });

user.set({name: 'Ivan', age: 22});
user.set({age:100});
console.log(user.get('name'));
console.log(user.get('age'));
