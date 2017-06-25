import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  countries: FirebaseListObservable<any[]>;
  journals: FirebaseListObservable<any[]>;
  journal: FirebaseObjectObservable<any>;
  user: Observable<firebase.User>;
  currentUser: firebase.User;

  constructor(private db: AngularFireDatabase,
              public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;  
    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
        this.currentUser = firebase.auth().currentUser;
        console.log(this.currentUser);
      } else {
        this.currentUser = null;
      }
    });

    this.countries = this.db.list('/countries');
  }

  getJournals() : Observable<any[]> {
    this.journals = this.db.list('/users/' + this.currentUser.uid + '/journals', {
                                query: {orderByChild: 'diveNo'}});
    let result = this.journals.map( (arr) => { return arr.reverse(); } );
    return result;
  }

  getJournal(id:string) : FirebaseObjectObservable<any[]> {
    this.journal = this.db.object('/users/' + this.currentUser.uid + '/journals/' + id);
    return this.journal
  }

  addJournal(journal:any) {
    this.journals.push(journal);
  }

  deleteJournal(id:string) {
    this.journals.remove(id);
  }

  editJournal(id:string, journal:any){
    this.journals.update(id, journal);
  }


  //-----------Authentication functions--------------------

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFB() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  //---------------------------------------------------------
}
