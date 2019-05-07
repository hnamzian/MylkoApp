import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class TokenStorage {
  constructor(public storage: Storage) {}

  async setSMSToken(token) {
    await this.storage.ready();
    const result = await this.storage.set("SMSToken", token)
    return result
  }
}
