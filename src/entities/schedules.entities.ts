import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate.entities";
import User from "./users.entities";

@Entity("schedules")
class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "date"})
    date: Date;

    @Column({type: "time"})
    hour: Date;

    @ManyToOne(() => RealEstate, (realEstate)=> realEstate.schedules)
    realEstate: RealEstate;

    @ManyToOne(() => User, (user)=> user.schedule)
    user: User;
}

export default Schedule