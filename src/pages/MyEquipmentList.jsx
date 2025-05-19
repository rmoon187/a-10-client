import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const MyEquipmentList = () => {
    const { user } = useContext(AuthContext);
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(true);

   useEffect(() => {
  if (user?.email) {
    setLoading(true);
    fetch(`https://ass-10-server2.vercel.app/my-equipment?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setEquipment(data.data);
        } else {
          setEquipment([]);
          console.error("Invalid response format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setEquipment([]);
      })
      .finally(() => setLoading(false));
  }
}, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ass-10-server2.vercel.app/products/${id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then(() => {
                        setEquipment(equipment.filter((item) => item._id !== id));
                        Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
                    })
                    .catch((error) => console.error("Error deleting item:", error));
            }
        });
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="p-6">
            {equipment.length === 0 ? (
                <div className="flex justify-center items-center h-72">
                    <p className="text-center text-gray-500 text-3xl">No equipment found for you!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {equipment.map((item) => (
                        <div key={item._id} className="card bg-base-100 dark:bg-gray-800 shadow-xl p-4">
                            <figure>
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title dark:text-white">{item.itemName}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                <p className="font-semibold">${item.price}</p>
                                <div className="mt-4 flex justify-between">
                                    <Link to={`/update/${item._id}`} className="btn btn-primary">Update</Link>
                                    <button className="btn btn-error" onClick={() => handleDelete(item._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyEquipmentList;
