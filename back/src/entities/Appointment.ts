import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @ManyToOne(() => User, (user) => user.appoint)
  user: User; //["id"]

  @Column()
  status: Status;
}

export enum Status {
  active = "active",
  cancelled = "cancelled",
}
