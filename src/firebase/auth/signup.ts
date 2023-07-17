import firebase_app from "../config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(firebase_app);

const provider = new GoogleAuthProvider();
export default async function googleSignIn() {
   let result = null;
   let error = null;
   try {
      result = await signInWithPopup(auth, provider);
      console.log(result);
   } catch (e) {
      error = e;
   }
   return { result, error };
}
