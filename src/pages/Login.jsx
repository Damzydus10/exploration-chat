import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
const {currentuser, signinwithGoogle} = UserAuth();

const handleLogin = async () => {
  try {
    await  signinwithGoogle();
  }catch(error) {
    console.log (error)
  }
}

useEffect(() => {
  if(currentuser){
    navigate("/chat")
  }

}, [currentuser])

    return (
        <div>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Join the conversation, meet new people, and make connections in one shared room.
            </p>
            <button onClick={handleLogin} className="btn btn-primary">Login with Google</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login