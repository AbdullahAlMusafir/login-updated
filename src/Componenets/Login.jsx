
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.init';
import { useState } from 'react';

const Login = () => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        // console.log('Google is coming');
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('Error', error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log('Error:', error.message);
            })
    }

    return (
        <div className="text-center">
            {
                user ? <button onClick={handleSignOut} className='mt-3 mb-4'>Logout</button>
                    :
                    <button className='btn' onClick={handleGoogleLogin}>Login</button>
            }
            {user && <div>
                <h1>Name: {user?.displayName}</h1>
                <h1>Email: {user?.email}</h1>

            </div>}
        </div>
    );
};

export default Login;