import React from "react";
import Button from "../atoms/Button";
import { UserData } from "@/types/UserType";
import { SingleBookingSection } from "@/types/NavigationSections";

function InputStudentData(props: {
  onNavigation: (navigationButton: {
    buttonName: SingleBookingSection;
  }) => void;
  sendUserDataState: UserData;
  sendSetUserDataState: (
    userDataState: (prevValues: UserData) => {
      firstName: string;
      lastName: string;
      roomNumber: string;
    }
  ) => void;
}) {
  // Get user's data entry (first name, last name, room number) when input is changed
  function handleUserDataChange(event: {
    target: { value: any; name: string };
  }) {
    const { value, name } = event.target;
    props.sendSetUserDataState((prevValues: UserData) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(event.target);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const { name } = event.currentTarget;
    const buttonClicked: SingleBookingSection = name as SingleBookingSection;
    props.onNavigation({ buttonName: buttonClicked });
  }

  return (
    <>
      <div className="w-11/12 flex flex-col text-start">
        <div className="instruction-label">Please, enter user data:</div>
        <div>
          <div className="flex gap-2">
            <div className="input-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                placeholder="First name"
                name="firstName"
                onChange={handleUserDataChange}
                type="text"
                value={props.sendUserDataState.firstName}
                className="pl-2 outline-none border-none w-full"
              />
            </div>
            <div className="input-text">
              <input
                name="lastName"
                onChange={handleUserDataChange}
                type="text"
                value={props.sendUserDataState.lastName}
                placeholder="Last name"
                className="pl-2 outline-none border-none w-full"
              />
            </div>
          </div>
          <div className="input-text">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm320-320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440Z" />
            </svg>
            <input
              name="roomNumber"
              onChange={handleUserDataChange}
              type="text"
              placeholder="Room Number"
              value={props.sendUserDataState.roomNumber}
              className="pl-2 outline-none border-none w-full"
            />
          </div>
        </div>
        <div>
          <Button
            onClick={handleClick}
            name={SingleBookingSection.preBookingConfirmation}
            className="btn-primary"
          >
            Next
          </Button>
        </div>
        <div>
          <Button
            onClick={handleClick}
            name={SingleBookingSection.selectBikeSize}
            className="btn-return"
          >
            Return
          </Button>
        </div>
      </div>
    </>
  );
}

export default InputStudentData;
