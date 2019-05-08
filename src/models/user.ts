import { API } from "./api";

export interface USER {
  id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserAPI extends API {
  user: USER;
}
