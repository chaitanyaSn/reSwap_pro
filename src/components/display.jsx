// Display.js
import React, { useContext } from 'react';
import { BookContext } from '../context/context';
import DisplayCard from './DisplayCard';

const Display = () => {
  const { books } = useContext(BookContext);

  return (
    <div className='w-full flex-1 px-6 pt-4 bg-blue-100 overflow-auto rounded-md mx-2'>
      {books && books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((item) => (
            <DisplayCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No books available</div>
      )}
    </div>
  );
};

export default Display;
