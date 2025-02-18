import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const shift = useNavigate()

    const { handleRegister, handleUpdate, setUser } = useContext(AuthContext)

    const Register = (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire("Error", "Password must contain uppercase, lowercase letters, and be at least 6 characters long.", "error");
            return;
        }
        handleRegister(email, password)
            .then((result) => {
                const user = result.user;
                return handleUpdate(name, photoURL)
                    .then(() => {
                        setUser({
                            ...user,
                            displayName: name,
                            photoURL: photoURL
                        });
                    });
            })
            .then(() => {
                Swal.fire("Success", "Registration successful!", "success");
                shift('/')
            })
            .catch((error) => {
                Swal.fire("Error", error.message, "error");
            });
    };

    return (
        <div className="flex flex-col items-center p-6">
            <h2 className="text-2xl font-bold mb-5">Register</h2>
            <form onSubmit={Register} className="flex flex-col space-y-4 w-80">
                <input type="text" placeholder="Name" name='name' onChange={(e) => setName(e.target.value)} className="p-2 border rounded" required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" required />
                <input type="url" placeholder="Photo URL" name='photoURL' onChange={(e) => setPhotoURL(e.target.value)} className="p-2 border rounded" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded" required />
                <button type="submit" className="bg-[#84cc16] text-white py-2 rounded">Register</button>
            </form>
        </div>
    );
}



export default Register;