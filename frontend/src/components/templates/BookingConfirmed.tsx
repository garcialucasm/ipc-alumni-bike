import React, { useState } from "react";
import Link from "next/link";
import { Booking } from "@/types/BookingType";
import Button from "../atoms/Button";
import { IconSvgProcessConfirmed } from "../atoms/IconsSvg";
import Infobox from "../organisms/Infobox";
import NextSteps from "../molecules/NextSteps";

function BookingConfimed(props: {
  onNavigation: (navigationButton: any) => void;
  bookingData: Booking;
}) {
  const bookingData = props.bookingData;
  const [showNextSteps, setShowNextSteps] = useState(false);
  return (
    <div className="flex flex-col items-center w-11/12 text-slate-700">
      <div className="w-full pb-3">
        <div className="flex items-center justify-center py-3">
          <div className="font-bold px-2">Booking Confirmed</div>{" "}
          <IconSvgProcessConfirmed
            fillColor="text-green-500"
            height={"h-4"}
            width={"w-4"}
          />
        </div>
        <Infobox bookingData={bookingData} />
      </div>
      <div className="w-full">
        <Button onClick={() => setShowNextSteps(!showNextSteps)}>
          <div
            className={`${
              showNextSteps
                ? "my-2 py-2 px-4 w-full bg-gradient-to-tr from-blue-800 via-blue-800 to-blue-700 text-white font-semibold rounded-3xl shadow-md transition duration-700"
                : "btn-primary"
            }`}
          >
            <span>{showNextSteps ? "Next Steps" : "See Next Steps"}</span>
            <div className={` ${showNextSteps ? "block" : "hidden"}`}>
              <NextSteps />
            </div>
          </div>
        </Button>
        <a href="/" target="_blank">
          <div className="btn-primary mb-3">
            <span>See the Rules</span>
          </div>
        </a>
        <Link href="/home-app">
          <div className="btn-return">Go to Main Page</div>
        </Link>
      </div>
    </div>
  );
}

export default BookingConfimed;
