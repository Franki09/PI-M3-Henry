// import { IUser } from "./IUser";

export interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: Status;
}

// IUser["id"];

export enum Status {
  active = "active",
  cancelled = "cancelled",
}
