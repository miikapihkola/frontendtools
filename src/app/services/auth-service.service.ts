import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => { });
  }

  login(email: string, password: string): any {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
      this.userEmail.next(email);
      this.router.navigate(['admin']);
    })
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.userEmail.next("");
      this.router.navigate(['hello']);
    });
  }

  getLoggedInUser(): any {
    return this.afAuth.authState;
  }

  checkLoggedInUser(): any {
    return this.userEmail;
  }
}
