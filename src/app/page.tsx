import React from 'react';

const mockData = {
  name: 'John Doe',
  logo: 'https://via.placeholder.com/150',
  phoneNumber: '+123 456 7890',
  email: 'johndoe@email.com',
  location: '123 Business St, City',
};

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {/* Blue section */}
      <div className="w-full bg-blue-600 text-white flex flex-col items-center pt-10 pb-6">
        {/* Logo */}
        <img src={mockData.logo} alt="Logo" className="w-24 h-24 rounded-full mb-4" />

        {/* Name */}
        <h1 className="text-2xl font-bold mb-2">{mockData.name}</h1>

        {/* Icons */}
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-md text-blue-600">
            📞
          </div>
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-md text-blue-600">
            ✉️
          </div>
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-md text-blue-600">
            📍
          </div>
        </div>
      </div>

      {/* White section */}
      <div className="w-full bg-white flex flex-col items-center py-8">
        {/* Add Contact Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-4">
          Add Contact
        </button>

        {/* Mobile Number */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full">
            📞
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-bold">{mockData.phoneNumber}</p>
            <p className="text-sm text-gray-500">Mobile Phone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
