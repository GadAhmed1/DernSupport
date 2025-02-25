import React, { useState, useEffect } from "react";
import axios from "axios";

const Req = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/users", { withCredentials: true }) // Ensure cookies are sent
      .then((response) => {
        if (response.data.status === "success") {
          const filteredUsers = response.data.value.filter(
            (user) => user.requests && Object.keys(user.requests).length > 0
          );
          setUsers(filteredUsers);
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleAction = (email) => {
    axios
      .post(
        "http://localhost:5000/api/clearreq",
        {},
        {
          withCredentials: true, // Send cookies with the request
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setUsers(users.filter((user) => user.requests.email !== email)); // Remove user from UI
        }
      })
      .catch((error) => console.error("Error clearing request:", error));
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-lg font-semibold text-black">Requests</p>
          <p className="text-black">
            <span className="font-bold">Total: {filteredUsers.length}</span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Search by name..."
          className="w-5/12 p-2 border rounded-md text-black bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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
            {filteredUsers.map((user, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4 font-medium text-black">
                  {user.username}
                </td>
                <td className="px-6 py-4 text-black">{user.requests.email}</td>
                <td className="px-6 py-4 text-black">{user.requests.phone}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="px-3 py-1 bg-[#28a745] duration-100 text-white rounded-md hover:bg-green-600 mr-2"
                    onClick={() => handleAction(user.requests.email)}
                  >
                    Done
                  </button>
                  <button
                    className="px-3 py-1 bg-[#dc3545] duration-100 text-white rounded-md hover:bg-red-600 mr-2"
                    onClick={() => handleAction(user.requests.email)}
                  >
                    Reject
                  </button>
                  <button
                    className="px-3 py-1 bg-[#17a2b8] duration-100 text-white rounded-md hover:bg-[#337a85]"
                    onClick={() =>
                      setSelectedUser({
                        requests: user.requests,
                        userAgent: user.userAgent,
                      })
                    }
                  >
                    More Info
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
            <p>
              <strong>Email:</strong> {selectedUser.requests.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUser.requests.phone}
            </p>
            <p>
              <strong>Address:</strong> {selectedUser.requests.address}
            </p>
            <p>
              <strong>Message:</strong> {selectedUser.requests.message}
            </p>
            <hr className="my-4 border-gray-300" />
            <h3 className="text-lg font-bold mb-2">User Agent Info</h3>
            <p>
              <strong>IP:</strong> {selectedUser.userAgent.ip}
            </p>
            <p>
              <strong>Browser:</strong> {selectedUser.userAgent.searchengine}
            </p>
            <p>
              <strong>OS:</strong> {selectedUser.userAgent.os}
            </p>
            <p>
              <strong>Device:</strong>{" "}
              {selectedUser.userAgent.device !== "undefined"
                ? selectedUser.userAgent.device
                : "Unknown"}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Req;
