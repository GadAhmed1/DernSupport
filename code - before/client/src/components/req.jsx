import React, { useState } from "react";

const Req = () => {
  const initialUsers = [
    { firstname: "John", email: "john@example.com", phone: "123-456-7890" },
    { firstname: "Emma", email: "emma@example.com", phone: "234-567-8901" },
    { firstname: "Liam", email: "liam@example.com", phone: "345-678-9012" },
    { firstname: "Olivia", email: "olivia@example.com", phone: "456-789-0123" },
    { firstname: "Noah", email: "noah@example.com", phone: "567-890-1234" },
    { firstname: "Ava", email: "ava@example.com", phone: "678-901-2345" },
    { firstname: "Sophia", email: "sophia@example.com", phone: "789-012-3456" },
    { firstname: "Mason", email: "mason@example.com", phone: "890-123-4567" },
    { firstname: "Isabella", email: "isabella@example.com", phone: "901-234-5678" },
    { firstname: "Ethan", email: "ethan@example.com", phone: "012-345-6789" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = initialUsers.filter(user =>
    user.firstname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 rounded-2xl p-4 shadow-md w-full">
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
              <th className="px-6 py-3">First Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone Number</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b hover:bg-gray-100"
              >
                <td className="px-6 py-4 font-medium text-black">
                  {user.firstname}
                </td>
                <td className="px-6 py-4 text-black">{user.email}</td>
                <td className="px-6 py-4 text-black">{user.phone}</td>
                <td className="px-6 py-4 text-center">
                  <button className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 mr-2">
                    Done
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 mr-2">
                    Reject
                  </button>
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => setSelectedUser(user)}
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
            <p><strong>Name:</strong> {selectedUser.firstname}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
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
