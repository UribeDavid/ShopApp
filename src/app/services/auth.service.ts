import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebase: AngularFireAuth) { }

  signIn({email, password}): Promise<any> {
    return this.firebase.signInWithEmailAndPassword(email, password);
  }

  signUp({email, password}): Promise<any> {
    return this.firebase.createUserWithEmailAndPassword(email, password);
  }

  logOut(): Promise<any> {
    return this.firebase.signOut();
  }

}
