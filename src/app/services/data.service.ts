import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private firestore: AngularFirestore) { }

  getCsharpData() {
    return this.firestore.collection("test").snapshotChanges();
  }

  getDotnetcoreData() {
    return this.firestore.collection("dotnetcore").snapshotChanges();
  }

  getAngularData() {
    return this.firestore.collection("angular").snapshotChanges();
  }
}
