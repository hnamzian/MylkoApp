import { API } from "./api";
import { USER } from "./user";

export interface AuthRSP {
  success: boolean;
  message: string;
  user: USER;
  token: string;
}
