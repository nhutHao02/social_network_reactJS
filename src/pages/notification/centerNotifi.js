import React from "react";
import { useState } from "react";
import NotificationRow from "./components/NotificationRow";

export default function CenterNotifi() {
  const [selected, setSelected] = useState("All");
  const [notifs, setNotifis] = useState(['item1', 'item2', 'item3'])

  return (
    <div className="min-w-[50%] h-full ml-[calc(20%+100px)] mr-0">
      <p className="font-bold text-black text-[22px] mt-3 pl-5">
        Notifications
      </p>
      <div className="flex justify-center space-x-40 px-7 py-3 border-b-[1px] border-gray-300">
        <div
          onClick={() => setSelected("All")}
          className={`cursor-pointer ${
            selected === "All" ? "border-b-2 border-blue-700" : ""
          }`}
        >
          <p className="text-black font-bold">All</p>
        </div>
        <div
          onClick={() => setSelected("Verified")}
          className={`cursor-pointer ${
            selected === "Verified" ? "border-b-2 border-blue-700" : ""
          }`}
        >
          <p className="text-black font-bold">Verified</p>
        </div>
        <div
          onClick={() => setSelected("Mentions")}
          className={`cursor-pointer ${
            selected === "Mentions" ? "border-b-2 border-blue-700" : ""
          }`}
        >
          <p className="text-black font-bold">Mentions</p>
        </div>
      </div>

      {notifs && notifs.length > 0 ? (
        notifs.map((notif, index) => (
          <NotificationRow
            key={index}
            props={{
                notif: notif,
            }}
          />
        ))
      ) : (
        <div className="justify-center text-center pt-3">
        <p className="font-bold text-[30px] text-black">
          Nothing to see here yet
        </p>
      </div>
      )}
    </div>
  );
}
