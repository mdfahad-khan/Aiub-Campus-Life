import React from "react";
import Book1 from "../assets/Liabary-Image/richdad.jpg";
import Book2 from "../assets/Liabary-Image/think.jpg";
import Book3 from "../assets/Liabary-Image/atomic.jpg";
import Book4 from "../assets/Liabary-Image/pride.jpg";
import Book5 from "../assets/Liabary-Image/great.jpg";
import Book6 from "../assets/Liabary-Image/toKill.jpg";
import Book7 from "../assets/Liabary-Image/1984.png";
import Book8 from "../assets/Liabary-Image/catcher.jpg";

const Task = () => {
  return (
    <div className="h-full w-full">
      <div className="mt-5 flex">
        <div className=" h-full">
          <div>
            <img src={Book3} alt="book3" className="w-48 h-40" />
          </div>
          <div className="flex">
            <div>
              <img src={Book1} alt="book1" className="w-24 h-24" />
            </div>
            <div>
              <img src={Book2} alt="book2" className="w-24 h-24" />
            </div>
          </div>
        </div>
        <div className=" h-full">
          <div>
            <img src={Book3} alt="book3" className="w-48 h-40" />
          </div>
          <div className="flex">
            <div>
              <img src={Book1} alt="book1" className="w-24 h-24" />
            </div>
            <div>
              <img src={Book2} alt="book2" className="w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
