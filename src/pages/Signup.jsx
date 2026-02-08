import React, { useState, useEffect } from "react";
import Form from "../Components/Auth/Form";
import Swal from "sweetalert2";
import showLoading from "../Alert/loading";
import emailHandler from "../helpers/emailHandler";
import passwordHandler from "../helpers/passwordHandler";
import checkUser from "../utils/checkUser";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  serverTimestamp,
  setDoc,
  updateProfile,
} from "../Config/firebase";

const Signup = () => {
  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await checkUser();
      if (user) return (window.location.href = "/dashboard");
    };
    getCurrentUser();
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
  });

  const signupUser = async (e) => {
    e.preventDefault();

    const { firstName, lastName, userEmail, userPassword, confirmPassword } =
      formData;

    if (!firstName || !userEmail || !userPassword || !confirmPassword) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Empty Input.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({
        userEmail: "",
        userPassword: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
      });
      return;
    }

    if (!emailHandler(userEmail)) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title:
          "Pleasde Enter Correct Email WIth Correct Syntax.\nFor Example: scampulse.io@gmail.com",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({
        userEmail: "",
        userPassword: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
      });
      return;
    }

    if (!passwordHandler(userPassword)) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Please Enter Password That Contain 8 Characters.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      setFormData({
        userEmail: "",
        userPassword: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
      });
      return;
    }

    if (userPassword !== confirmPassword) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Please Enter Same Password In Confirm Password Section.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      return;
    }

    try {
      showLoading();

      const res = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      );

      await setDoc(doc(db, "users", res.user.uid), {
        email: userEmail,
        fullName: firstName + " " + lastName,
        role: "user",
        isVerified: false,
        isTwoFactorEnabled: false,
        createdAt: serverTimestamp(),
      });

      await updateProfile(res.user, {
        displayName: firstName + " " + lastName,
      });

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: `Signup Successfully!`,
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
      <title>Signup - HexaHaven</title>

      <Form
        title="Create Account"
        subtitle="Start protecting yourself with HexaHaven"
        buttonText="Sign Up"
        showForgot={false}
        bottomText="Already have an account?"
        bottomLinkText="Login"
        bottomHref="/login"
        func={signupUser}
        inputs={[
          {
            label: "First Name",
            type: "text",
            placeholder: "Hexa",
            value: formData.firstName,
            func: (e) => {
              setFormData({ ...formData, firstName: e.target.value });
            },
          },
          {
            label: "Last Name",
            type: "text",
            placeholder: "Haven",
            value: formData.lastName,
            func: (e) => {
              setFormData({ ...formData, lastName: e.target.value });
            },
          },
          {
            label: "Email",
            type: "email",
            placeholder: "you@hexahaven.app",
            value: formData.userEmail,
            func: (e) => {
              setFormData({ ...formData, userEmail: e.target.value });
            },
          },
          {
            label: "Password",
            type: "password",
            placeholder: "••••••••",
            value: formData.userPassword,
            func: (e) => {
              setFormData({ ...formData, userPassword: e.target.value });
            },
          },
          {
            label: "Confirm Password",
            type: "password",
            placeholder: "••••••••",
            value: formData.confirmPassword,
            func: (e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
            },
          },
        ]}
      />
    </div>
  );
};

export default Signup;
