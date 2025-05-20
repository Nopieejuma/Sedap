import { useState, useEffect } from "react";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im"; 
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 

export default function UsersTable() {
  const [users, setUsers] = useState([]); // Untuk menyimpan data users
  const [loading, setLoading] = useState(false); // Untuk status loading
  const [error, setError] = useState(""); // Untuk menampilkan error
  const [currentPage, setCurrentPage] = useState(1); // Halaman aktif
  const [usersPerPage] = useState(15); // Jumlah data per halaman (batasan)

  useEffect(() => {
    setLoading(true); // Mengatur status loading menjadi true ketika komponen dimuat
    axios
      .get("https://dummyjson.com/users") // Mendapatkan data dari API
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data.users); // Menyimpan data users ke dalam state
        }
      })
      .catch((err) => {
        setError("An error occurred while fetching data"); // Menangani error
      })
      .finally(() => {
        setLoading(false); // Mengubah status loading menjadi false setelah selesai
      });
  }, []); // Efek hanya dijalankan sekali setelah komponen dimuat

  // Menghitung indeks data yang akan ditampilkan berdasarkan halaman aktif
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Menghitung jumlah halaman yang tersedia
  const totalPages = Math.ceil(users.length / usersPerPage);

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Loading users...
    </div>
  ) : null;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Users List
      </h2>
      
      {errorInfo}
      {loadingInfo}

      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center px-4 py-2 text-gray-500">
                No users found.
              </td>
            </tr>
          ) : (
            currentUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-800">{user.id}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.email}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 mx-1 bg-gray-300 hover:bg-gray-400 text-sm text-gray-700 rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 mx-1 bg-gray-300 hover:bg-gray-400 text-sm text-gray-700 rounded"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
