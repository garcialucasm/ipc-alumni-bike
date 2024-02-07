import React, { useEffect, useState } from "react"

import { SingleBookingSections } from "@/types/BookingType"
import { useSingleBookingContext } from "@/context/singleBooking"

function Stepper() {
  const { bookingData } = useSingleBookingContext()

  const [rerender, setRerender] = useState(false)

  const currentSection = bookingData.currentSection

  useEffect(() => {
    // Update rerender whenever currentSection changes
    setRerender((prev) => !prev)
  }, [currentSection])

  return (
    <>
      <ol className="flex w-11/12 items-center py-5">
        <li
          className={`flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-['']
          ${
            currentSection === SingleBookingSections.bookingConfirmation ||
            currentSection === SingleBookingSections.inputUserData ||
            currentSection === SingleBookingSections.preBookingConfirmation
              ? "stepper-is-done-bar"
              : "stepper-is-waiting-bar"
          }`}
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 ${
              currentSection === SingleBookingSections.bookingConfirmation ||
              currentSection === SingleBookingSections.inputUserData ||
              currentSection === SingleBookingSections.preBookingConfirmation ||
              currentSection === SingleBookingSections.selectBikeSize
                ? "stepper-is-done-icon"
                : "stepper-is-waiting-icon"
            }`}
          >
            <svg
              className="h-6 w-6 md:h-7 md:w-7 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 -960 960 960"
            >
              <path
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M200-160q-85 0-142.5-57.5T0-360q0-85 58.5-142.5T200-560q77 0 129.5 46T396-400h26l-72-200h-70v-80h200v80h-44l14 40h192l-58-160H480v-80h104q26 0 46.5 14t29.5 38l68 186h32q83 0 141.5 58.5T960-362q0 84-58 143t-142 59q-72 0-126.5-45T564-320H396q-14 69-68 114.5T200-160Zm0-80q41 0 70.5-22.5T312-320H200v-80h112q-12-36-41.5-58T200-480q-51 0-85.5 34.5T80-360q0 50 34.5 85t85.5 35Zm308-160h56q5-23 13.5-43t22.5-37H478l30 80Zm252 160q51 0 85.5-35t34.5-85q0-51-34.5-85.5T760-480h-4l40 106-76 28-38-106q-20 17-31 40t-11 52q0 50 34.5 85t85.5 35ZM196-360Zm564 0Z"
              />
            </svg>
          </span>
        </li>
        <li
          className={`flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-[''] ${
            currentSection === SingleBookingSections.bookingConfirmation ||
            currentSection === SingleBookingSections.preBookingConfirmation
              ? "stepper-is-done-bar"
              : "stepper-is-waiting-bar"
          }`}
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 ${
              currentSection === SingleBookingSections.bookingConfirmation ||
              currentSection === SingleBookingSections.preBookingConfirmation
                ? "stepper-is-done-icon"
                : "stepper-is-waiting-icon"
            }`}
          >
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 16"
            >
              <path
                className="fill-current"
                d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
              />
            </svg>
          </span>
        </li>
        <li className="flex w-auto items-center">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 ${
              currentSection === SingleBookingSections.bookingConfirmation
                ? "stepper-is-done-icon"
                : "stepper-is-waiting-icon"
            }`}
          >
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 20"
            >
              <path
                className="fill-current"
                d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
              />
            </svg>
          </span>
        </li>
      </ol>
    </>
  )
}

export default Stepper
