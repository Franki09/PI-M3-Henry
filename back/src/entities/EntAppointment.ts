import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EntUser } from "./EntUser";

@Entity({
  name: "appointments",
})
export class EntAppointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date", nullable: false })
  date: Date;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  time: string;

  @ManyToOne(() => EntUser, (user) => user.appoint)
  user: EntUser; //["id"]

  @Column()
  status: Status;

  @CreateDateColumn()
  createAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}

export enum Status {
  active = "active",
  cancelled = "cancelled",
}
