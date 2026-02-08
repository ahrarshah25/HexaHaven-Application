import React, { createContext } from "react";
import {
  auth,
  provider,
  doc,
  signInWithPopup,
  db,
  getDoc,
  setDoc,
  serverTimestamp,
} from "../Config/firebase";

import Swal from "sweetalert2";
import showLoading from "../Alert/loading";

export const ContinueWithGoogle = createContext();

const GoogleLogin = ({ children }) => {
  const userGoogleLogin = async () => {
    try {
        showLoading();
      const res = await signInWithPopup(auth, provider);
      const userRef = doc(db, "users", res.user.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          email: res.user.email,
          fullName: res.user.displayName || "",
          role: "user",
          isVerified: false,
          isTwoFactorEnabled: false,
          createdAt: serverTimestamp(),
        });
      }

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Account Created Successfully.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      }).then(() => {
        window.location.href = "/dashboard";
      });
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
    }
  };

  return (
    <div>
      <ContinueWithGoogle.Provider value={userGoogleLogin}>
        {children}
      </ContinueWithGoogle.Provider>
    </div>
  );
};

export default GoogleLogin;
