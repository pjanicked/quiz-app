import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private firestore: AngularFirestore) { }

  getCsharpData() {
    return this.firestore.collection("csharp", ref => ref.orderBy('rank')).snapshotChanges();
  }

  getDotnetcoreData() {
    return this.firestore.collection("dotnetcore", ref => ref.orderBy('rank')).snapshotChanges();
  }

  getAngularData() {
    return this.firestore.collection("angular", ref => ref.orderBy('rank')).snapshotChanges();
  }
}
