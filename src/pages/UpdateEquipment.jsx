import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const UpdateEquipment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        image: "",
        itemName: "",
        categoryName: "",
        description: "",
        price: "",
        rating: "",
        customization: "",
        processingTime: "",
        stockStatus: "",
        userEmail: user?.email || "",
        userName: user?.displayName || "",
    });

    useEffect(() => {
        fetch(`https://ass-10-server2.vercel.app/products/${id}`)
            .then((res) => res.json())
            .then((data) => setFormData((prev) => ({ ...prev, ...data })))
            .catch((error) => console.error("Error fetching equipment:", error));
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        fetch(`https://ass-10-server2.vercel.app/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(res =>
                res.json()
            )
            .then((data) => {

                Swal.fire("Updated!", "Equipment details updated successfully.", "success");
                navigate("/my-equipment");

            })

            .catch((error) => console.error("Error updating equipment:", error));

    };

    return (
        <div className="p-8 my-10 max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-xl border border-gray-700 text-white">
            <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-200">Update Equipment</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-indigo-500" required />
                <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} placeholder="Item Name" className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-indigo-500" required />
                <input type="text" name="categoryName" value={formData.categoryName} onChange={handleChange} placeholder="Category" className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-indigo-500" required />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="textarea textarea-bordered w-full bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-indigo-500" required />
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-indigo-500" required />
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-indigo-500" required />
                <input type="text" name="customization" value={formData.customization} onChange={handleChange} placeholder="Customization" className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-indigo-500" required />
                <input type="text" name="processingTime" value={formData.processingTime} onChange={handleChange} placeholder="Processing Time" className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-indigo-500" required />
                <input type="text" name="stockStatus" value={formData.stockStatus} onChange={handleChange} placeholder="Stock Status" className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-indigo-500" required />
                <input type="email" name="userEmail" value={formData.userEmail} readOnly className="input input-bordered w-full bg-gray-800 text-gray-400 border-gray-700" />
                <input type="text" name="userName" value={formData.userName} readOnly className="input input-bordered w-full bg-gray-800 text-gray-400 border-gray-700" />
                <button type="submit" className="btn w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg">Update Equipment</button>
            </form>
        </div>
    );
};

export default UpdateEquipment;
