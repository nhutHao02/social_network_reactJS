import React, { useState } from "react";

export default function NotificationRow({ props }) {
  const [notif, setNotifi] = useState(props);

  return (
    <div className="flex mt-2 mx-2 border-b-[1px] border-gray-300">
      <div className="align-text-top font-extrabold text-blue-700 mr-0  pr-0 text-[20px]"><ion-icon name="information"></ion-icon></div>
      <div className="ml-2"> 
            <div className="flex space-x-2">
              <img
                className="object-cover rounded-full h-10 w-10 items-center"
                src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724630400&semt=ais_hybrid"
              />
            </div>
        <p className="text-black font-semibold">Name</p>
        <p className="line-clamp-2">Ìnor</p>
      </div>
    </div>
  );
}
