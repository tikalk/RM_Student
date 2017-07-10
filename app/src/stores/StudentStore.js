import {action, computed, observable} from "../../node_modules/mobx/lib/mobx";
import Student from "../model/Student";

class StudentStore {

	@observable student;

	@action
	setStudent(student) {
		this.student = new Student(student);
	}

	@computed
	get fullName() {
		return `${this.student.firstName} ${this.student.lastName}`;
	}

}

export default StudentStore;