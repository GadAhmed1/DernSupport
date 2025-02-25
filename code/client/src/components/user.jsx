import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/users", { withCredentials: true })
      .then((response) => {
        if (response.data.status === "success") {
          setUsers(response.data.value);
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/removeuser/${id}`, { withCredentials: true })
      .then((response) => {
        console.log(response)
        if (response.data.status === "success") {
          setUsers(users.filter((user) => user._id !== id));
          setConfirmDelete(null);
        }
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md w-full">
      <p className="text-lg font-semibold text-black">Users</p>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-black bg-white rounded-2xl shadow-md">
          <thead className="text-xs uppercase bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone Number</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4 font-medium text-black">{user.username}</td>
                <td className="px-6 py-4 text-black">{user.email}</td>
                <td className="px-6 py-4 text-black">{user.phone}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="px-3 py-1 bg-[#17a2b8] duration-100 text-white rounded-md hover:bg-[#337a85] mr-2"
                    onClick={() => setSelectedUser(user)}
                  >
                    More Info
                  </button>
                  <button
                    className="px-3 py-1 bg-[#dc3545] duration-100 text-white rounded-md hover:bg-red-600"
                    onClick={() => setConfirmDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">User Info</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Address:</strong> {selectedUser.address}</p>
            <p><strong>Message:</strong> {selectedUser.message}</p>
            <hr className="my-4 border-gray-300" />
            <h3 className="text-lg font-bold mb-2">User Agent Info</h3>
            <p><strong>IP:</strong> {selectedUser.userAgent?.ip}</p>
            <p><strong>Browser:</strong> {selectedUser.userAgent?.searchengine}</p>
            <p><strong>OS:</strong> {selectedUser.userAgent?.os}</p>
            <p><strong>Device:</strong> {selectedUser.userAgent?.device || "Unknown"}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <p>Do you really want to delete this user?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => handleDelete(confirmDelete)}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                onClick={() => setConfirmDelete(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
