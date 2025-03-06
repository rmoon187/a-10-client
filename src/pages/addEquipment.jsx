import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const AddEquipment = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;

        const data = {
            image: form.image.value,
            itemName: form.itemName.value,
            categoryName: form.categoryName.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            rating: parseFloat(form.rating.value),
            customization: form.customization.value,
            processingTime: form.processingTime.value,
            stockStatus: parseInt(form.stockStatus.value),
            userEmail: user?.email,
            userName: user?.displayName,
        };

        try {
            const response = await fetch("https://ass-10-server2.vercel.app/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire("Success!", "Equipment added successfully!", "success");
                form.reset();
                navigate("/my-equipment");
            } else {
                Swal.fire("Error!", "Failed to add equipment.", "error");
            }
        } catch (error) {
            Swal.fire("Error!", "Something went wrong.", "error");
        }
    };


    return (
        <div className="max-w-4xl mx-auto my-10 p-8 bg-gradient-to-r from-[#4E342E] to-[#3E2723] rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#D7A86E]">Add New Equipment</h2>
            <form onSubmit={onSubmit} className="space-y-6">
                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full p-3 bg-[#6D4C41] text-white rounded-lg shadow-sm placeholder-[#D7A86E]" required />
                <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full p-3 bg-[#6D4C41] text-white rounded-lg shadow-sm placeholder-[#D7A86E]" required />
                <input type="text" name="categoryName" placeholder="Category Name" className="input input-bordered w-full p-3 bg-[#6D4C41] text-white rounded-lg shadow-sm placeholder-[#D7A86E]" required />
                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full p-3 bg-[#6D4C41] text-white rounded-lg shadow-sm placeholder-[#D7A86E]" required></textarea>
                <input type="number" name="price" step={0.01} placeholder="Price" className="input input-bordered w-full p-3 bg-[#6D4C41] text-white rounded-lg shadow-sm placeholder-[#D7A86E]" required />
                <input type="number" step={0.1} min={1} max={5} name="rating" placeholder="Rating (1-5)" className="input input-bordered w-full p-3 bg-[#6D4C41] text-white rounded-lg shadow-sm placeholder-[#D7A86E]" required />
                <input type="text" name="customization" placeholder="Customization Options" className="input input-bordered w-full p-3 bg-[#6D4C41] text-white rounded-lg shadow-sm placeholder-[#D7A86E]" />
                <input type="text" name="processingTime" placeholder="Processing Time" className="input input-bordered w-full p-3 bg-[#6D4C41] text-white rounded-lg shadow-sm placeholder-[#D7A86E]" required />
                <input type="number" name="stockStatus" placeholder="Stock Quantity" className="input input-bordered w-full p-3 bg-[#6D4C41] text-white rounded-lg shadow-sm placeholder-[#D7A86E]" required />
                <input type="email" value={user?.email} readOnly className="input input-bordered w-full p-3 bg-[#5D4037] text-[#D7A86E] rounded-lg shadow-sm" />
                <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full p-3 bg-[#5D4037] text-[#D7A86E] rounded-lg shadow-sm" />
                <button type="submit" className="btn w-full p-3 bg-[#8D6E63] text-white rounded-lg shadow-lg hover:bg-[#A1887F] transition duration-300">
                    Add Equipment
                </button>
            </form>
        </div>


    );
};

export default AddEquipment;
