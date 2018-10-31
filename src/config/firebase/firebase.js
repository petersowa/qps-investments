import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//import 'firebase/firestore/dist/index.cjs';

/* 
Firebase config is available at https://console.firebase.google.com/project/ps-store-dev/settings/general/
*/

import { config } from '../../private/config/firebase-config';

const settingsFireStore = {
  timestampsInSnapshots: true,
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      firebase.firestore().settings(settingsFireStore);
    }
    this.firebase = firebase;
  }

  get() {
    return this.firebase;
  }
}

export default Firebase;
