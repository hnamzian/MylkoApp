import { API } from "./api";

export interface EmployeeResponse extends API {
  employee: Employee;
}

export interface EmployeesResponse extends API {
  employees: Employee[];
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  hiringDate: string;
  position: string;
  DairyId: number;
  AdminId: number;
}
