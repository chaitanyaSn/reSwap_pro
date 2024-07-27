import React, { useContext } from 'react'
import { BookContext } from '../context/context'
const Display = () => {

  const{books}=useContext(BookContext)
  return (
    <div className='w-full flex-1 px-6 pt-4 bg-blue-100 overflow-auto rounded-md mx-2'>
      <div className='flex flex-col items-center justify-center '>

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
       
      </div>
    </div>
  )
}

export default Display
