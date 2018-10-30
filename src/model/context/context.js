import React from 'react';
import Firebase from '../config/firebase/firebase';

const firebase = new Firebase().get();

const ContextState = React.createContext({
  firebase,
  login: () => {},
});

export class Provider extends React.Component {
  state = {
    isAuth: false,
    authUser: '',
    test: 'hello',
    toggleAuth: () => false,
  };

  static contextType = ContextState;

  componentDidMount = () => {
    const { firebase } = this.context;
    //console.log(this.context);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, isAuthLoaded: true });
        const db = firebase.firestore();
        const uid = firebase.auth().currentUser.uid;
        db.collection(`todos/users/${uid}`)
          .get()
          .then(
            querySnapshot => {
              querySnapshot.forEach(doc => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
              });
            },
            err => console.log(err)
          );
      } else {
        this.setState({ user: null, isAuthLoaded: true });
      }
    });
  };

  login = (email, password) => {
    this.context.firebase.auth().signInWithEmailAndPassword(email, password);
  };

  logout = () => {
    this.context.firebase.auth().signOut();
  };

  render() {
    const { login, logout } = this;
    return (
      <ContextState.Provider value={{ firebase, login, logout }}>
        {this.props.children}
      </ContextState.Provider>
    );
  }
}

export default ContextState;
