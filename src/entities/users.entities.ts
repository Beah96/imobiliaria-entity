import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./schedules.entities";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "varchar", length: 45})
    name: string;

    @Column({type: "varchar", length: 45, unique: true})
    email: string;

    @Column({default: false})
    admin: boolean;

    @Column({type: "varchar", length: 120})
    password: string;

    @CreateDateColumn({type: "date"})
    createdAt: Date;

    @UpdateDateColumn({type: "date"})
    updatedAt: Date;

    @DeleteDateColumn({type: "date"})
    deletedAt?: Date | null;

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedule: Schedule[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const hashRounds : number = getRounds(this.password)

        if(!hashRounds){
            this.password = hashSync(this.password, 10)
        }
    }


}

export default User