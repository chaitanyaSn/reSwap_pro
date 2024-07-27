import React, { useState } from "react";
import axios from 'axios';
import Display from "./display";


const Sidebar = () => {
  const [queryData, setQueryData] = useState({
    department: "",
    year: "",
    semester: ""
  });

  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryData({ ...queryData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/find', queryData)
      .then(response => {
        if (Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          alert('Error: Unexpected response format');
        }
      })
      .catch(error => alert('Error: ' + error));
  };

  console.log(books);

  return (
    <div className="w-[25%] h-full p-4 bg-blue-100 shadow-lg">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h1 className="text-xl font-semibold mb-4 text-gray-700">
          Choose here..
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-600 mb-2">Department</label>
          <select
            name="department"
            value={queryData.department} onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
          >
            <option value="">Select Department</option>
            <option value="cs">Computer Science</option>
            <option value="ee">Electrical Engineering</option>
            <option value="me">Mechanical Engineering</option>
          </select>
          <label className="block text-gray-600 mb-2">Year</label>
          <select
            name="year"
            value={queryData.year} onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          <label className="block text-gray-600 mb-2">Semester</label>
          <select
            name="semester"
            value={queryData.semester} onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
          >
            <option value="">Select Semester</option>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
          </select>
          <button type="submit" className="bg-blue-300 rounded-md p-2">Find Books</button>
        </form>
      </div>
      {/* <div className="mt-4">
        {books.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Books List</h2>
            <ul>
              {books.map((book, index) => (
                <li key={index} className="mb-1">
                  {book.bookname}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div> */}
    {/* <Display books={books}/> */}
    </div>
  );
};

export default Sidebar;
