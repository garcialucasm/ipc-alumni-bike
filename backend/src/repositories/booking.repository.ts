import { Booking, BookingStatus } from "../models/booking.model";

interface IBookingRepository {
  save(booking: Booking) : Promise<Booking>;
  update(booking: Booking) : Promise<Booking>;
  findById(bookingId : number) : Promise<Booking>;
  findByUser(userId: number) : Promise<Booking[]>;
  findAll(searchCriteria: {userName?: number, bikeId?: number, status?: BookingStatus}) : Promise<Booking[]>
}