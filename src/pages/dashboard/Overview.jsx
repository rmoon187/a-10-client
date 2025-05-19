// src/pages/dashboard/Overview.jsx
import React, { useContext } from 'react';
import useApi from '../../hooks/useApi';
import { AuthContext } from '../../provider/AuthProvider';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const Overview = () => {
  const { user } = useContext(AuthContext);
  const { data: equipment, loading: equipmentLoading, error: equipmentError } = useApi('https://ass-10-server2.vercel.app/products');
  const { data: userEquipment, loading: userEquipmentLoading, error: userEquipmentError } = useApi(`https://ass-10-server2.vercel.app/my-equipment?email=${user?.email}`);

  if (equipmentLoading || userEquipmentLoading) return <LoadingSpinner />;
  if (equipmentError || userEquipmentError) return <ErrorMessage message={equipmentError || userEquipmentError} />;

  // Get recent 5 equipment items
  const recentEquipment = equipment ? [...equipment].slice(0, 5) : [];

  return (
    <div>
      <h1 className="text-3xl dark:text-gray-300 font-bold mb-6">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Total Equipment</h3>
          <p className="text-2xl font-bold">{equipment?.length || 0}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Your Equipment</h3>
          <p className="text-2xl font-bold">{userEquipment?.length || 0}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Recent Activity</h3>
          <p className="text-2xl font-bold">{recentEquipment.length}</p>
        </div>
      </div>

      {/* Recent Equipment Table */}
      <div className="bg-white dark:bg-gray-800 dark:text-gray-200 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Equipment</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead> 
              <tr className="border-b">
                <th className="text-left py-2 px-4">Name</th>
                <th className="text-left py-2 px-4">Category</th>
                <th className="text-left py-2 px-4">Price</th>
              </tr>
            </thead>
            <tbody>
              {recentEquipment.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-500">
                  <td className="py-2 px-4">{item.itemName}</td>
                  <td className="py-2 px-4">{item.categoryName}</td>
                  <td className="py-2 px-4">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;