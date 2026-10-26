
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create the Authentication account
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      // Step 2: Get the newly registered user
      const user = userCredential.user; //{uid, name, email,token, refreshToken}

      // Step 3: Store user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: user.email
      });

      console.log("Signup successful!");
      console.log("User UID:", user.uid);

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Create Account</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength={6}
        required
      />

      <br /><br />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default RegisterPage;
