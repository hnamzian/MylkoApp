import { API } from "./api";

export interface SMSRQ {
  mobile: string;
}

export interface SMSRSP extends API {
  sms: {
    code: string;
    token: string;
  }
}
