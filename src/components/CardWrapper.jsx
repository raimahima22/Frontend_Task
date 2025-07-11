// src/components/CardWrapper.jsx
import React, { useRef } from "react";

const CardWrapper = ({ id, isActive, onClick, children }) => {
  const cardRef = useRef();

  return (
    <div
      className="card-wrapper"
      data-id={id}
      ref={cardRef}
      onClick={() => onClick(id, cardRef)}
    >
      {React.cloneElement(children, { isActive })}
    </div>
  );
};

export default CardWrapper;
