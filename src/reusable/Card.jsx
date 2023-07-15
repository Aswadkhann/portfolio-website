import React from 'react';

const Card = (item) => {
  const handleClick = () => {
    window.location.href = item.website;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={handleClick}>
      <img src={item.image} alt="Project" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className=" text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
