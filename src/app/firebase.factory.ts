import { NgZone } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

export function AngularFirestoreProject1(platformId: Object, zone: NgZone) {
  return new AngularFirestore(
    environment.firebaseConfig1,
    'firebase-project1',
    false,
    null,
    platformId,
    zone,
    null,
    null,
    null,
  );
}

export function AngularFirestoreProject2(platformId: Object, zone: NgZone) {
  return new AngularFirestore(
    environment.firebaseConfig2,
    'firebase-project2',
    false,
    null,
    platformId,
    zone,
    null,
    null,
    null,
  );
}
