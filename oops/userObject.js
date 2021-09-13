const User = require('./userClass');

const john = new User('John', 'john12@gmail.com');

console.log(john.getInfo());

john.enrollCourse('Node Boot Camp');
john.enrollCourse('Java Camp');

console.log(john.getCourseList());