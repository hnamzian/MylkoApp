import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class TokenStorage {
  constructor(public storage: Storage) {}
}
