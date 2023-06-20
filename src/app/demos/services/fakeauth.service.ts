import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  // private _isConnected! : boolean

  get isConnected() : boolean {
    return localStorage.getItem("status") == "true" ? true : false
  }

  set isConnected(value : boolean) {
    localStorage.setItem("status", value.toString())
  }
  login() {
    this.isConnected = true
    localStorage.setItem("status", this.isConnected.toString())
  }

  logout() {

    localStorage.removeItem("status") //retire 1 élément en fonction de sa clé
    localStorage.clear() //vide le localStorage de mon domaine
  }

  constructor() { }
}
