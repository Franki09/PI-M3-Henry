import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EntUser } from "./EntUser";
import { Status } from "../interfaces/IAppointment";

@Entity({
  name: "appointments",
})
export class EntAppointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date", nullable: false })
  date: Date;

  @Column({ type: "varchar", length: 5, nullable: false })
  time: string;

  @ManyToOne(() => EntUser, (user) => user.appointments, { nullable: false })
  @JoinColumn()
  user: EntUser; //["id"]

  @Column({ type: "varchar", length: 10, nullable: false, default: Status.active })
  status: Status;

  @CreateDateColumn()
  createAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}
