import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useApi from '../../hooks/useApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { data: userEquipment, loading, error } = useApi(
    user?.email ? `https://ass-10-server2.vercel.app/my-equipment?email=${user.email}` : null
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl dark:text-gray-300 font-bold mb-6">User Profile</h1>
      <div className="bg-white dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg shadow">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="bg-gray-200 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <span className="text-gray-500 text-lg">No image</span>
                </div>
              )}
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Change Photo
            </button>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 text-sm">Name</label>
                <p className="font-medium text-lg">{user?.displayName || "Not provided"}</p>
              </div>
              <div>
                <label className="block text-gray-600 text-sm">Email</label>
                <p className="font-medium text-lg">{user?.email || "Not provided"}</p>
              </div>
              <div>
                <label className="block text-gray-600 text-sm">Equipment Count</label>
                <p className="font-medium text-lg">{userEquipment?.length || 0}</p>
              </div>
              <div>
                <label className="block text-gray-600 text-sm">Member Since</label>
                <p className="font-medium text-lg">
                  {user?.metadata?.creationTime || "Unknown"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;