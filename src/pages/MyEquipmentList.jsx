import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyEquipmentList = () => {
    const { user } = useContext(AuthContext);
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/my-equipment?email=${encodeURIComponent(user.email)}`)
                .then((res) => res.json())
                .then((data) => setEquipment(data))
                .catch((error) => console.error("Error fetching data:", error));
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
                fetch(`/my-equipment/${id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then(() => {
                        setEquipment(equipment.filter((item) => item.id !== id));
                        Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
                    })
                    .catch((error) => console.error("Error deleting item:", error));
            }
        });
    };

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item) => (
                <div key={item._id} className="card bg-base-100 shadow-xl p-4">
                    <figure>
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title">{item.itemName}</h3>
                        <p className="text-gray-600">{item.description}</p>
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
    );
};

export default MyEquipmentList;
