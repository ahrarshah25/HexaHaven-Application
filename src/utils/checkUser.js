import { auth, onAuthStateChanged } from "../Config/firebase";

const checkUser = () => {
  return new Promise((res, rej) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          res(user);
        } else {
          res(false);
        }
      },
      rej,
    );
  });
};

export default checkUser;
