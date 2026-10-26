
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Login using Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Step 2: Get the logged-in user's details
      const user = userCredential.user;

      console.log("Login successful!");
      console.log("UID:", user.uid);
      console.log("Email:", user.email);

    } catch (error) {
      console.log(error.message);
    }
  };

  const handleForgotPassword = async () => {
  if (!email) {
    alert("Please enter your email first");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent! Please check your inbox.");
  } catch (error) {
    alert(error.message);
  }
};


  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

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
        required
      />
      <button type="button" onClick={handleForgotPassword}>
  Forgot Password?
</button>

      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
