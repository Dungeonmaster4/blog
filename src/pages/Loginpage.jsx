import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase-config";

function Loginpage({ setIsAuth}) {
    let navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true)
            setIsAuth(true)
            navigate('/')
        })
    }

    return ( 
    <div className="loginPage">
        <p>Sign in with Google to continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In</button>
    </div>
     ); 
}

export default Loginpage;