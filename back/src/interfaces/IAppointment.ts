import { IUser } from "./IUser";

export interface IAppointments {
  id: number;
  date: Date;
  time: number;
  userId: IUser["id"];
  status: "active" | "cancelled";
}
