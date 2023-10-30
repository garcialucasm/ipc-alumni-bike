import { Booking, BookingStatus } from "../models/booking.model";
import IBookingRepository from "../repositories/booking.repository";

export default class MockBookingRepository implements IBookingRepository {
  private bookings: Map<number, Booking>;
  private nextId: number;

  constructor() {
    this.bookings = new Map<number, Booking>()
    this.nextId = 1
  }

  async save(booking: Booking): Promise<Booking> {
    booking.ID = this.nextId
    this.nextId += 1
    this.bookings.set(booking.ID, booking)
    return booking
  }

  async update(booking: Booking): Promise<Booking> {
    if (!booking.ID || !this.bookings.has(booking.ID)) {
      throw new Error('Booking not found')
    }
    this.bookings.set(booking.ID, booking)
    return booking;
  }

  async findById(bookingId: number): Promise<Booking> {
    const booking = this.bookings.get(bookingId);

    if (booking === undefined)
      throw new Error(`couldn't find booking id ${bookingId}`)

    return booking
  }

  async findByUser(userId: number): Promise<Booking[]> {
    const userBookings: Booking[] = []
    for (const booking of this.bookings.values()) {
      if (booking.User.ID === userId) {
        userBookings.push(booking)
      }
    }
    return userBookings;
  }

  async findAll(searchCriteria: {
    userId?: number,
    bikeId?: number,
    status?: BookingStatus
  }): Promise<Booking[]> {

    let result = Array.from(this.bookings.values())
      .filter(booking => searchCriteria.userId ? searchCriteria.userId == booking.User.ID : true)
      .filter(booking => searchCriteria.bikeId ? booking.Bike.map(bike => bike.ID).some(id => id == searchCriteria.bikeId) : true)
      .filter(booking => searchCriteria.status ? searchCriteria.status == booking.Status : true)

    return result
  }
}