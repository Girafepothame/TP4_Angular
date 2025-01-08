import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TestServiceService {
  varTest = "Salut service Marche!!"
  objectifs: String[] = ["Activite Test1", "Activite Test2"];

  constructor() { }
  getInfo(): string {
    return this.varTest;
  }
  removeItem(index: number) {
    this.objectifs.splice(index, 1)
  }
}
