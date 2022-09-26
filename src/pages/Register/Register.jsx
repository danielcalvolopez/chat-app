import Card from "../../UI/Card";
import classes from "./Register.module.css";
import { HiOutlineUpload } from "react-icons/hi";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [attachment, setAttachment] = useState(false);
  const navigate = useNavigate();

  const handleOnClickFile = () => {
    setAttachment(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = await uploadBytesResumable(storageRef, file);

      setAttachment(false);

      getDownloadURL(uploadTask.ref).then(async (downloadURL) => {
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL,
        });

        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });

        await setDoc(doc(db, "userChats", res.user.uid), {});
        navigate("/");
      });
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <Card className={classes["form-container"]}>
      <div className={classes["form-wrapper"]}>
        <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="logo" />
        <form className={classes.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input
            type="password"
            placeholder="Your password"
            autoComplete="on"
          />
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={handleOnClickFile}
          />
          <label htmlFor="file">
            <HiOutlineUpload /> <span>Add avatar</span>
          </label>
          <div className={classes.attachment}>
            {attachment && <p>1 Attachment</p>}
          </div>
          <button>Sign up</button>
        </form>
        {err && <p className={classes.error}>Something went wrong!</p>}
        <p>Do you have an account? Login</p>
      </div>
    </Card>
  );
};

export default Register;
