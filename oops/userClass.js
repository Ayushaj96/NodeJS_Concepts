class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    courseList = [];

    getInfo(){
        return {name: this.name, email: this.email};
    }
    enrollCourse(courseName){
        this.courseList.push(courseName);
    }
    getCourseList() {
        return this.courseList;
    }
}

module.exports = User;