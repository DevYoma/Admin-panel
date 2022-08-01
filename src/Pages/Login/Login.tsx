import React, { useContext, useState } from 'react'
import './Login.scss';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // making an instanceof the useNavigate from react router dom
  const navigate = useNavigate();

  // using the useContext hook
  const {login, currentUser} = useContext(AuthContext)

  // console.log(currentUser) 
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        login();
        // console.log(currentUser);
        navigate("/")
        //learn how to send email to newly registered user
        // ...
      })
      .catch((error) => {
        setError(true)
      });

  }

  return (
    <section id="login">
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          name="email" 
          required 
          onChange={e => setEmail(e.target.value)}
          />
        <input 
          type="password" 
          placeholder="password" 
          name="password" 
          required 
          onChange={e => setPassword(e.target.value)}
        />

        <button type='submit'>Submit</button>

        {error && <span>Wrong email or password!</span>}
      </form>
    </section>
  )
}

export default Login