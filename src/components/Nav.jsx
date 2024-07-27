import React, { useState } from 'react';
import Modal from './Model';

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className='bg-blue-400 p-4 flex justify-between items-center'>
        <div>header</div>
        <div className='flex gap-4'>
          <button 
            className='px-4 bg-blue-800 rounded-xl text-white font-bold py-1' 
            onClick={toggleModal}
          >
            Sell
          </button>
          <div className='w-7 h-7 rounded-full bg-white'></div>
        </div>
      </header>
      <Modal show={showModal} onClose={toggleModal} />
    </>
  );
};

export default Nav;
