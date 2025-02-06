import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const notifications = [
    { id: 1, name: "Satrya", message: "Lorem Ipsum has been the industry's", time: "07.00", date: "Januari 25, 2025" },
    { id: 2, name: "Satrya", message: "Lorem Ipsum has been the industry's", time: "07.00", date: "Januari 25, 2025" },
    { id: 3, name: "Satrya", message: "Lorem Ipsum has been the industry's", time: "07.00", date: "Januari 25, 2025" },
    { id: 4, name: "Satrya", message: "Lorem Ipsum has been the industry's", time: "07.00", date: "Januari 25, 2025" },
  ];


  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center py-10">
      <div className="bg-gray-200 px-8 py-3 rounded-lg shadow-md mb-5 text-xl font-semibold">
        All Notifications
      </div>
      <div className="w-full max-w-2xl flex">
        <div className="w-4/5">
          {notifications.map((notif) => (
            <div key={notif.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
              <div className="bg-gray-400 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold">
                🧑
              </div>
              <div className="ml-4 flex-1">
                <p className="font-bold">{notif.name} <span className="font-normal">{notif.message}</span></p>
                <p className="text-gray-500 text-sm">{notif.time}</p>
              </div>
              <span className="text-gray-600 font-semibold whitespace-nowrap">{notif.date}</span>
            </div>
          ))}
        </div>
        <div className="w-1/5 flex flex-col items-center">
          <div className="border-r-4 border-blue-400 h-full relative">
            {notifications.map((notif, index) => (
              <div key={index} className="absolute right-[-10px] w-4 h-4 bg-white border-2 border-blue-400 rounded-full" style={{ top: `${index * 85}px` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Notification;
