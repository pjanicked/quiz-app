import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private firestore: AngularFirestore) { }

  getAllCsharp() {
    return this.firestore.collection("test").snapshotChanges();
  }

}
