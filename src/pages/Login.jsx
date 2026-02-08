import React, { useState, useEffect } from "react";
import {
  auth,
  db,
  doc,
  getDoc,
  signInWithEmailAndPassword,
} from "../Config/firebase";
import Form from "../Components/Auth/Form";
import Swal from "sweetalert2";
import showLoading from "../Alert/loading";
import checkUser from "../utils/checkUser"
import emailHandler from "../helpers/emailHandler";
import passwordHandler from "../helpers/passwordHandler";

const Login = () => {

  useEffect(() => {
      const getCurrentUser = async () => {
        const user = await checkUser();
        if(user) return window.location.href = "/dashboard"
      }
      getCurrentUser();
    })

  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();

    const { userEmail, userPassword } = formData;

    if (!userEmail || !userPassword) {
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
      setFormData({ userEmail: "", userPassword: "" });
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
      setFormData({ userEmail: "", userPassword: "" });
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
      setFormData({ userEmail: "", userPassword: "" });
      return;
    }

    try {
      showLoading();

      const res = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword,
      );

      const snap = await getDoc(doc(db, "users", res.user.uid));

      if (!snap.exists()) {
        return;
      }

      const data = snap.data();

      if (data.role === "admin") {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Welcome Admin",
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        }).then(() => {
          window.location.href = "/admin";
        });
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Welcome, " + data.fullName,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        }).then(() => {
          window.location.href = "/dashboard";
        });
      }
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
    }
  };


  return (
    <div>
      <title>Login - HexaHaven</title>

      <Form
        title="Welcome Back"
        subtitle="Login to your HexaHaven account"
        buttonText="Login"
        showForgot={true}
        bottomText="Don’t have an account?"
        bottomLinkText="Sign up"
        bottomHref="/signup"
        func={loginUser}
        inputs={[
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
        ]}
      />
    </div>
  );
};

export default Login;
