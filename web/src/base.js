import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALsKak8juQ_sn0twcKt-W33lDV3ZHydWg",
  authDomain: "spvro-2d2ac.firebaseapp.com",
  databaseURL: "https://spvro-2d2ac-default-rtdb.firebaseio.com",
  storageBucket: "spvro-2d2ac.appspot.com",
});
const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//export default
export default base;
