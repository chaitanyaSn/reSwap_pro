// DisplayCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCard = ({ item }) => {
  return (
    <div className='flex flex-col w-full p-5 bg-white shadow-xl gap-5 border rounded-xl'>
      <div className='h-40 flex justify-center items-center overflow-hidden rounded-xl'>
        {/* Uncomment and use the img tag when the image_url is available */}
        {/* <img src={item?.image_url} alt="book item" className='block w-full h-full object-cover' /> */}
      </div>
      <div>
        <span className='text-sm text-cyan-700 font-medium'>{item?.bookname}</span>
        <h3 className='font-bold text-xl truncate text-black'>{item?.price}</h3>
        <Link
          to={`/detail/${item?._id}`}
          className='text-sm p-3 px-6 rounded uppercase font-medium inline-block bg-blue-400 shadow-md text-white'
        >
          Book detail
        </Link>
      </div>
    </div>
  );
};

export default DisplayCard;
