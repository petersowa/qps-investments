import React from 'react';
import Firebase from '../../config/firebase/firebase';
import portfolios from './portfolio';

const firebase = new Firebase().get();

const ContextState = React.createContext({ firebase });

export class Provider extends React.Component {
  state = {
    isAuth: false,
    isAuthLoaded: false,
    portfolios,
    toggleAuth: () => false,
  };

  static contextType = ContextState;

  componentDidMount = () => {
    const { firebase } = this.context;
    //console.log(this.context);

    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
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
    const { portfolios } = this.state;
    return (
      <ContextState.Provider value={{ firebase, portfolios, login, logout }}>
        {this.props.children}
      </ContextState.Provider>
    );
  }
}

export default ContextState;