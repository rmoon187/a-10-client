import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const AllSportsEquipment = () => {
    const [equipment, setEquipment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://ass-10-server2.vercel.app/products")
            .then(res => res.json())
            .then(data => setEquipment(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const handleSortDescending = () => {
        const sortedEquipment = [...equipment].sort((a, b) => b.price - a.price);
        setEquipment(sortedEquipment);
    };

    if (equipment.length === 0) {
        return <LoadingSpinner />;
    }

    return (
        <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 py-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
                🏆 All Sports Equipment
            </h2>

            <div className="flex justify-end mb-3 md:mb-4">
                <button
                    onClick={handleSortDescending}
                    className="bg-blue-500 text-white text-sm md:text-base px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-blue-600 transition duration-300 shadow-md"
                >
                    Sort by Price (High to Low)
                </button>
            </div>

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm md:text-base">
                            <th className="py-2 md:py-3 px-2 md:px-4">Name</th>
                            <th className="py-2 md:py-3 px-2 md:px-4">Category</th>
                            <th className="py-2 md:py-3 px-2 md:px-4">Price</th>
                            <th className="py-2 md:py-3 px-2 md:px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipment.map((item, index) => (
                            <tr
                                key={item._id}
                                className={`text-center text-xs md:text-sm ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                                    } hover:bg-gray-300 transition`}
                            >
                                <td className="py-2 md:py-3 px-2 md:px-4 font-medium text-gray-800">
                                    {item.itemName}
                                </td>
                                <td className="py-2 md:py-3 px-2 md:px-4 text-gray-700">
                                    {item.categoryName}
                                </td>
                                <td className="py-2 md:py-3 px-2 md:px-4 font-semibold text-green-600">
                                    ${item.price}
                                </td>
                                <td className="py-2 md:py-3 px-2 md:px-4">
                                    <button
                                        onClick={() => navigate(`/details/${item._id}`)}
                                        className="bg-blue-600 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
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
