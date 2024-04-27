import React, { useState } from 'react';
import { BookmarkPlus, BookmarkCheck } from 'lucide-react';

const BookmarkButton = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleBookmark = () => {
    setIsActive(!isActive);
  };
  return (
    <button onClick={toggleBookmark} className="focus:outline-none">
      {isActive ? (
        <BookmarkCheck className='text-[#5459E8]' />
      ) : (
        <BookmarkPlus className='text-black/50' />
      )}
    </button>
  );
};

export default BookmarkButton;
