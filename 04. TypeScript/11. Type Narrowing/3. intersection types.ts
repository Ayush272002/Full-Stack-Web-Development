// Define two types
type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role: string;
};

type ManagerWithEmployeeInfo = Employee & Manager;

const manager : ManagerWithEmployeeInfo = {
    id : 123,
    name : "xyz",
    department : "abc",
    role : "lmn",
}

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);