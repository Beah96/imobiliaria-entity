import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./adresses.entities";
import Category from "./categories.entities";
import Schedule from "./schedules.entities";

@Entity("realEstates")
class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "boolean",default: false})
    sold: boolean;

    @Column({ type: "decimal", default: 0, precision: 12, scale: 2 })
    value: number | string;

    @Column({type: "integer"})
    size: number;

    @CreateDateColumn({type: "date"})
    createdAt: Date;

    @UpdateDateColumn({type: "date"})
    updatedAt: Date;

    @OneToOne(()=> Address, (address)=> address.realEstate)
    @JoinColumn()
    address: Address;

    @ManyToOne(()=> Category, (category)=> category.realEstate)
    category: Category;

    @OneToMany(()=> Schedule, (schedule)=>schedule.realEstate)
    schedules: Schedule[];
}

export default RealEstate