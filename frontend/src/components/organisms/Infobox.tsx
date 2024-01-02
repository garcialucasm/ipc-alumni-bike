import React from "react";
import { Booking } from "@/types/BookingType";

function Infobox(props: { bookingData: Booking }) {
  const { firstName, lastName, roomNumber } = props.bookingData.bookingUserData;
  const bikeSize = props.bookingData.bookingBikeSize;
  const fullName = firstName + " " + lastName;
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex border w-full items-center rounded-xl p-3 sm:mb-3 shadow-md">
        <div className="flex">
          <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-50 p-2"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M480-492.309q-57.749 0-98.874-41.124-41.125-41.125-41.125-98.874 0-57.75 41.125-98.874 41.125-41.125 98.874-41.125 57.749 0 98.874 41.125 41.125 41.124 41.125 98.874 0 57.749-41.125 98.874-41.125 41.124-98.874 41.124ZM180.001-187.694v-88.922q0-29.384 15.962-54.422 15.961-25.038 42.653-38.5 59.308-29.077 119.654-43.615T480-427.691q61.384 0 121.73 14.538 60.346 14.538 119.654 43.615 26.692 13.462 42.653 38.5 15.962 25.038 15.962 54.422v88.922H180.001ZM240-247.693h480v-28.923q0-12.154-7.039-22.5-7.038-10.346-19.115-16.885-51.692-25.461-105.418-38.577Q534.702-367.693 480-367.693t-108.428 13.115q-53.726 13.116-105.418 38.577-12.077 6.539-19.115 16.885Q240-288.77 240-276.616v28.923Zm240-304.614q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 384.614Z" />
            </svg>
          </div>
          <div className="flex flex-col text-left justify-start">
            <span className="px-3 font-extrabold text-blue-800 capitalize leading-4">
              {fullName}
            </span>
            <span className="px-3 text-xs font-semibold leading-loose">
              <span>Room: </span>
              <span className="text-blue-800">{roomNumber}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex border w-full items-center rounded-xl p-3 sm:mb-3 shadow-md">
        <div className="flex">
          <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-slate-400">
            <svg
              className="text-slate-50 p-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M194-160q-81 0-137.5-57T0-355q0-81 57.038-137.5Q114.075-549 195-549q71 0 124.5 45.5T384-388h51l-82-232h-73v-60h188v60h-52l26 71h222l-71-191H488v-60h99q24 0 40.5 11t24.5 33l76 207h38q80.51 0 137.255 56.234Q960-436.532 960-356.746 960-276 903.74-218 847.48-160 766-160q-71.602 0-125.801-48T574-328H384q-11 72-64.5 120T194-160Zm0-60q48 0 83.5-31t47.5-77H206v-60h119q-12-45-48-73t-82-28q-56 0-95.5 39T60-355q0 56.25 39 95.625T194-220Zm305-168h76q4-23 15.5-51t31.5-50H463l36 101Zm267 168q56 0 95-39.375T900-355q0-56-39-95t-95-39h-16l39 113-56 19-43-112q-29 17-43.5 48T632-355q0 56.25 39 95.625T766-220ZM193-355Zm573 0Z" />
            </svg>
          </div>
          <div className="flex flex-col text-left justify-start">
            <span className="px-3 font-extrabold text-blue-800 capitalize leading-4">
              {bikeSize}
            </span>
            <span className="px-3 text-xs">
              <span className="font-semibold  leading-loose">Bike selected</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infobox;
