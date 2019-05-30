import { API } from "./api";
import { ADMIN } from "./admin";

export interface AuthRSP {
  success: boolean;
  message: string;
  admin: ADMIN;
  token: string;
}
