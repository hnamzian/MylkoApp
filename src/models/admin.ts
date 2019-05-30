import { API } from "./api";

export interface ADMIN {
  id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminAPI extends API {
  admin: ADMIN;
}
