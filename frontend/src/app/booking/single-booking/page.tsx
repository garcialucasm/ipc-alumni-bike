"use client"

import { SingleBookingSections } from "@/types/BookingType"
import { useSingleBookingContext } from "@/context/singleBooking"
import InputSingleBikeSize from "@/components/Booking/SingleBooking/InputSingleBikeSize"
import InputSingleUserData from "@/components/Booking/SingleBooking/InputSingleUserData"
import PreBookingConfirmation from "@/components/Booking/PreBookingConfirmation"
import BookingConfirmation from "@/components/Booking/BookingConfirmation"
import { useEffect } from "react"
import { BikeSize } from "@/types/BikeType"
import Stepper from "@/components/Stepper/Stepper"

export default function HomeSingleBooking() {
  const {
    bookingData,
    settingBikeSize,
    settingCurrentSection,
    settingServerResult,
    settingUserData,
  } = useSingleBookingContext()

  const currentSection = bookingData.currentSection

  useEffect(() => {
    settingCurrentSection(SingleBookingSections.selectBikeSize)
    settingBikeSize(BikeSize.STANDARD)
    settingUserData({ firstName: "", lastName: "", roomNumber: "" })
    settingServerResult(null)
    return
  }, [])

  return (
    <>
      <div className="container-page-webapp">
        <div className="container-subpage-webapp">
          <Stepper />
          {currentSection === SingleBookingSections.selectBikeSize && (
            <InputSingleBikeSize />
          )}

          {currentSection === SingleBookingSections.inputUserData && (
            <InputSingleUserData />
          )}

          {currentSection === SingleBookingSections.preBookingConfirmation && (
            <PreBookingConfirmation />
          )}

          {currentSection === SingleBookingSections.bookingConfirmation && (
            <BookingConfirmation />
          )}
        </div>
      </div>
    </>
  )
}
