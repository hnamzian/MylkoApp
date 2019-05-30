import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Dairy } from "../models/dairy";

@Injectable()
export class DairyStorage {
  constructor(public storage: Storage) {}

  async setDairy(dairy: Dairy) {
    await this.storage.ready();
    const result = await this.storage.set("Dairy", dairy);
    return result;
  }
}
