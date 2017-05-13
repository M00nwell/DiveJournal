import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {
  journals: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  currentUser: firebase.User;

  constructor(private db: AngularFireDatabase,
              public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;  
    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
        this.currentUser = firebase.auth().currentUser;
      } else {
        this.currentUser = null;
      }
    });
  }

  getJournals() {
    this.journals = this.db.list('/journals');
    return this.journals;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFB() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
