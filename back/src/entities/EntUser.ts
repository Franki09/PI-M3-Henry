import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EntCredential } from "./EntCredential";
import { EntAppointment } from "./EntAppointment";

@Entity({
  name: "users",
})
export class EntUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 100, nullable: false, unique: true })
  email: string;

  @Column({ type: "date", nullable: false })
  birthdate: Date;

  @Column({ type: "integer", nullable: false, unique: true })
  nDni: number;

  @OneToOne(() => EntCredential)
  @JoinColumn()
  credentials: EntCredential; //["id"]

  @OneToMany(() => EntAppointment, (appoint) => appoint.user)
  appoint: EntAppointment[];

  @CreateDateColumn()
  createAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}
