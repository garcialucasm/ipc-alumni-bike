import { BikeSize } from "./BikeType";
import { UserData } from "./UserType";

export enum BookingStatus {
  BOOKED = "BOOKED",
  DELIVERED = "DELIVERED",
  RETURNED = "RETURNED",
  CANCELED = "CANCELED",
}

export enum BookingType {
  SINGLE = "SINGLE",
  GROUP = "GROUP",
  CLASSROOM = "CLASSROOM",
}

interface Booking {
  bookingBikeSize: BikeSize;
  bookingUserData: UserData;
  bookingStatus?: BookingStatus;
}

export type { Booking };
