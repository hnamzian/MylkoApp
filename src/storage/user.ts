import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class UserStorage {
  constructor(public storage: Storage) {}

  async setUser(user) {
    await this.storage.ready();
    const result = await this.storage.set("USER", user);
    return result;
  }
}
