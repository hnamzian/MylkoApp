import { API } from "./api";

export interface DairyRequest {
  name: string;
  address: string;
  AdminId: number;
}

export interface DairyResponse extends API {
  dairy: Dairy;
}

export interface DairiesResponse extends API {
  dairies: Dairy[];
}

export interface Dairy {
  id: number;
  name: string;
  address: string;
  AdminId: number;
}
