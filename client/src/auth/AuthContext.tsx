import React, { useContext, useState, useEffect } from "react"
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail as updateEmailFirebase,
  updatePassword as updatePasswordFirebase,
  sendEmailVerification,
  //applyActionCode
} from "firebase/auth";
import axios from "axios";

interface AuthContextProps {
    currentUser: any;
    login: (email: string, password: string) => Promise<any>;
    signup: (email: string, 
             password: string,
             firstName: string,
             lastName: string,
             companyName: string,
             jobTitle: string) => Promise<any>;
    logout: () => Promise<any>;
    resetPassword: (email: string) => Promise<any>;
    updateEmail: (email: string) => Promise<any>;
    updatePassword: (password: string) => Promise<any>;
  }

const AuthContext = React.createContext<AuthContextProps | null>(null);

export function useAuth() : AuthContextProps{
  return useContext(AuthContext) as AuthContextProps; 
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<any>();
    const [loading, setLoading] = useState(true);

  function signup(email :string, 
                  password :string, 
                  firstName :string, 
                  lastName :string,
                  companyName:string,
                  jobTitle :string,) {
                    console.log("signup", email, password, firstName, lastName, companyName, jobTitle);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // function signup(email: string, password: string) {
  //   return createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       if (user) {
  //         if (user.emailVerified) {
  //           console.log("Email already verified. Proceed with sign-up.");
  //           return userCredential;
  //         } else {
  //           console.log("Email not verified. Sending verification email...");
  //           return sendEmailVerification(user)
  //             .then(() => {
  //               console.log("Verification email sent");
  //               throw new Error("Email not verified. Verification email sent.");
  //             })
  //             .catch((error) => {
  //               console.error("Error sending verification email", error);
  //               throw error;
  //             });
  //         }
  //       } else {
  //         throw new Error("User not found");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Signup error", error);
  //       throw error;
  //     });
  // } 
  

  // export const registerUser = async (
  //   displayName: string,
  //   email: string, 
  //   password: string
  // ) => {
  //   if (!email && !password) return;  

  //   const userCredential = await createUserWithEmailAndPassword(
  //     auth, email, password
  //   );
    
  //   if (userCredential && auth.currentUser) {
      
  //     try {
  //       sendEmailVerification(auth.currentUser)
  //       updateProfile(auth.currentUser, {
  //         displayName: displayName,
  //         photoURL: "https://robohash.org/2?set=set2"
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   return userCredential
  // }

  // export const confirmUserEmail = async (oobCode:string) => {
  //   if (!oobCode) return;

  //   try {
  //     await applyActionCode(auth, oobCode)
  //     .then(() => alert('Your email has been verified!'))
  //   } catch (error:any) {
  //     alert(error.code)
  //   }
    
  //   return;
  // }
  function login(email :string, password :string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email: string) {
    return updateEmailFirebase(auth.currentUser!, email);
  }

  function updatePassword(password :string) {
    return updatePasswordFirebase(auth.currentUser!, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      //console.log("user:", user);
      if (user) {
        
        const userEmail = user.email;
        console.log("mail", user.email);
        user
          .getIdToken(true)
          .then(function (idToken) {
            axios.post('http://localhost:5000/api/user/check', {userEmail, idToken})
          })
          .catch((error) => {
            console.error(error);
          });
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}