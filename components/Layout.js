import Navigation from "@/components/Navigation";
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react";
import Link from "next/link";
import { auth } from "@/pages/api/auth/[...firebase]";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc'; 

export default function Layout({children}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');  
  const { data: session } = useSession()
  const emailRegex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z0-9\S]{8,}$/;

  if(!session) {
    const handleSubmit =(e)=>{
      e.preventDefault();
      if(email=="" && password==""){
          setErrorMessage("Email and password empty");
      }else if(!emailRegex.test(email)){
          setErrorMessage('Enter valid email' );
      } /*else if(!passRegex.test(password)){
          setErrorMessage('Enter valid password' );
      }*/
      else{
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential)=>{
              console.log("success");
              navigate('/homepage');
          })
          .catch((error)=>{
              setErrorMessage('An error occurred: check your credentials' );
          });
      }
  }

  const handleSignUp=()=>{
      navigate('/signup');
  }
    return (
      <div className={'bg-indigo-900 w-screen h-screen flex items-center'}>
      <div className="text-center w-full">
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Hair Genius</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          {errorMessage && (
            <p className="text-red-700">
                {errorMessage}
            </p>
        )}
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
          <div className="mt-2">
            <button onClick={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-900 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-gray-600">
              Sign In
            </button>
          </div>
        </form>

        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white text-black">OR</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <FcGoogle onClick={()=>signIn('google')}/>
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
            <FcGoogle/>
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
            <FcGoogle/>
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
          {/*<button onClick={()=>signIn('google')} className='bg-black p-2 px-4 rounded-lg'>Login With Google</button>*/}
      </div>
    </div>
    );
  }

    return (
      <div className={'bg-indigo-900 min-h-screen flex'}>
        <Navigation/>
        <div className='bg-white flex-grow text-black mt-2 mr-2 mb-2 rounded-lg p-4'>
            {children}
        </div>
      </div>
    );
}
