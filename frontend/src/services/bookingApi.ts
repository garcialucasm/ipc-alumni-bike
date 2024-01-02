import { Booking, BookingStatus } from "@/types/BookingType";
import { api } from "./api";
import { number } from "prop-types";

//Url to Show all active bookings
const activeBookingsUrl = "/booking/all";
//Url to Show all bookings
const allBookingsUrl = "/booking/all?show_inactive=true";
//Url to Show number of bikes in each status 
const bikeStatusCounterUrl = "/booking/";
//Url to Create Single booking
const createSingleBookingUrl = "/booking/create/single";
//Url to Cancel a booking
const cancelBookingUrl = "/booking/all";
//Url to Approve a booking
const approveBookingUrl = "/booking/approve/";
//Url to Return a booking
const returnBookingUrl = "/booking/return/";


// Show all active bookings
export const bookingFetchApi = async () => {
  try {
    const response = await fetch(`${api.baseUrl + activeBookingsUrl}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Data not found');
      } else if (response.status === 500) {
        throw new Error('Server error');
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    }

    console.log(`Status: ${response.status}`)

    const data = await response.json();
    const activeBookings = data.bookings;

    // Loop through each booking and log relevant information
    activeBookings.forEach((booking: any) => {
      // console.dir(booking, { depth: null });
      // console.log(JSON.stringify(booking, null, 2));
    });

    return { activeBookings, error: null };
  } catch (error: any) {
    return { activeBookings: null, error: `Error fetching data: ${error.message}` };
  }
};

// Bike Status Counter
export const bikeStatusCounterFetchApi = async () => {
  let bikeCountFree: number = 0;
  let bikeCountBooked: number = 0;
  let bikeCountInUse: number = 0;
  let bikeCountDisabled: number = 0;
  try {
    const response = await fetch(`${api.baseUrl + bikeStatusCounterUrl}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Data not found');
      } else if (response.status === 500) {
        throw new Error('Server error');
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    }

    console.log(`Status: ${response.status}`)

    return {
      bikeCountFree,
      bikeCountBooked,
      bikeCountInUse,
      bikeCountDisabled,
      error: null
    };
  } catch (error: any) {
    return {
      bikeCountFree: number,
      bikeCountBooked: number,
      bikeCountInUse: number,
      bikeCountDisabled: number,
      error: `Error fetching data: ${error.message}`
    };
  }
}

//Create Single Booking
export const createSingleBookingFetchApi = async (bookingData: Booking) => {
  try {
    const response = await fetch(api.baseUrl + createSingleBookingUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: bookingData.bookingUserData.firstName + " " + bookingData.bookingUserData.lastName,
        room: bookingData.bookingUserData.roomNumber,
        bikeSize: bookingData.bookingBikeSize,
      }),
    });
    console.log("User: " + bookingData.bookingUserData.firstName + " " + bookingData.bookingUserData.lastName)
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Data not found');
      } else if (response.status === 500) {
        throw new Error('Server error');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    }

    const data = await response.json();
    return { booking: data.booking, error: null }; // Assuming the server returns the booking information
  } catch (error: any) {
    console.error('Error creating single booking:', error.message);
    return {
      data: null, error: `Error fetching data: ${error.message}`
    }
  }
}

// Approve a booking
export const approveBookingFetchApi = async (bookingId: number) => {
  try {
    console.log(bookingId)
    const response = await fetch(api.baseUrl + approveBookingUrl + bookingId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Data not found');
      } else if (response.status === 500) {
        throw new Error('Server error');
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    }
    console.log(`Status: ${response.status}`)
    console.log(`Booking ID ${bookingId} approved`);
    const approvedBooking = true

    return { approvedBooking, error: null };
  } catch (error: any) {
    return { approvedBooking: null, error: `Error fetching data: ${error.message}` };
  }
};

// Return a booking
export const returnBookingFetchApi = async (bookingId: number) => {
  try {
    const response = await fetch(api.baseUrl + returnBookingUrl + bookingId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Data not found');
      } else if (response.status === 500) {
        throw new Error('Server error');
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    }

    console.log(`Status: ${response.status}`)
    console.log(`Booking ID ${bookingId} returned`);
    const returnedBooking = true

    return { returnedBooking, error: null };
  } catch (error: any) {
    return { returnedBooking: null, error: `Error fetching data: ${error.message}` };
  }
};
