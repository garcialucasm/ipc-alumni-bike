export enum UserType {
  STUDENT = "STUDENT",
  PROFESSOR = "PROFESSOR",
  KEYKEEPER = "KEYKEEPER",
}

export enum UserStatus {
  BOOKED = "BOOKED",
  INUSE = "INUSE",
  FREE = "FREE",
}
interface UserData {
  firstName: string;
  lastName: string;
  roomNumber: string;
}

export type { UserData };
