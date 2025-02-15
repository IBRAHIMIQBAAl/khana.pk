import React from 'react';
import { useAuth } from '../Auth/auth-context';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-pink-500">Profile</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Personal Information</h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Name:</span> {user?.name || "Not provided"}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {user?.email || "Not provided"}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Account Settings</h2>
            <div className="space-y-4">
              <button className="w-full sm:w-auto bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                Change Password
              </button>
              <button className="w-full ml-2 sm:w-auto bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;