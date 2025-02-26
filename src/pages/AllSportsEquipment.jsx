import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllSportsEquipment = () => {
    const [equipment, setEquipment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data from the backend or Firebase
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setEquipment(data))
            .catch(error => console.error("Error fetching products:", error));

    }, []);



    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                🏆 All Sports Equipment
            </h2>

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipment.map((item, index) => (
                            <tr
                                key={item._id}
                                className={`text-center ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                                    } hover:bg-gray-300 transition`}
                            >
                                <td className="py-3 px-4 font-medium text-gray-800">
                                    {item.itemName}
                                </td>
                                <td className="py-3 px-4 text-gray-700">{item.categoryName}</td>
                                <td className="py-3 px-4 font-semibold text-green-600">
                                    ${item.price}
                                </td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => navigate(`/details/${item._id}`)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSportsEquipment;
