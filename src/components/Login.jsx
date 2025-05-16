import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const shift = useNavigate()

    const { handleGoogleLogin, handleLogin, } = useContext(AuthContext)

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        handleLogin(email, password)
            .then((result) => {
                console.log(result.user)

                Swal.fire("Success", "Login successful!", "success");
                shift('/')
            })
            .catch((error) => {
                Swal.fire("Error", error.message, "error");
            });
    };

    const handleGoogleSignIn = () => {
        handleGoogleLogin()
            .then((result) => {

                console.log(result.user)
                Swal.fire("Success", "Login successful!", "success");
                shift("/");
            })
            .catch((error) => {
                Swal.fire("Error", error.message, "error");
            });
    };

    return (
        <div className="flex flex-col justify-end items-center p-6">
            <h2 className="text-2xl dark:text-white font-bold mb-5">Login</h2>
            <form onSubmit={handleLoginSubmit} className="flex flex-col space-y-4 w-80">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded" required />
                <button type="submit" className="bg-[#84cc16] text-white py-2 rounded">Login</button>
            </form>
            <button onClick={handleGoogleSignIn} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Login with Google</button>
        </div>
    );
}

export default Login;