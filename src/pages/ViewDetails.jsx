import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";

const ViewDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://ass-10-server2.vercel.app/products/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data))
            .catch((err) => console.error("Error fetching item details:", err));
    }, [id]);

    if (!item) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 sm:mb-10">
                Product Details
            </h1>
            {/* DaisyUI Card */}
            <div className="card w-9/12 mx-auto bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-700">
                <img
                    src={item.image}
                    alt={item.itemName}
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-t-2xl"
                />
                <div className="card-body p-4 sm:p-6 space-y-4">
                    <h2 className="card-title text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                        {item.itemName}
                    </h2>
                    {/* Category Badge */}
                    <span className="badge badge-primary text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 border-blue-600">
                        {item.categoryName}
                    </span>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed border-l-4 border-blue-600 pl-3 sm:pl-4">
                        {item.description}
                    </p>

                    <div className="flex justify-between items-center py-3 border-t border-gray-700">
                        <span className="text-xl sm:text-2xl font-bold text-green-400">
                            ${item.price}
                        </span>
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <div className="flex items-center text-yellow-400">
                                {[...Array(5)].map((_, i) => {
                                    const ratingValue = item.rating || 0;
                                    if (i + 1 <= Math.floor(ratingValue)) {
                                        return (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill="currentColor"
                                                className="text-yellow-500"
                                            />
                                        );
                                    } else if (i < ratingValue) {
                                        return (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill="currentColor"
                                                className="opacity-50"
                                            />
                                        );
                                    } else {
                                        return (
                                            <Star
                                                key={i}
                                                size={16}
                                                className="text-gray-500"
                                            />
                                        );
                                    }
                                })}
                            </div>
                            <p className="font-semibold text-green-500 text-right text-sm sm:text-base">
                                {item.rating}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 text-gray-300 text-sm sm:text-base">
                        <p>
                            <span className="font-bold text-blue-400">Customization:</span>{" "}
                            {item.customization}
                        </p>
                        <p>
                            <span className="font-bold text-blue-400">Processing Time:</span>{" "}
                            {item.processingTime} days
                        </p>
                        <p
                            className={`font-semibold ${item.stockStatus > 0 ? "text-green-400" : "text-red-400"
                                }`}
                        >
                            In Stock: {item.stockStatus}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;