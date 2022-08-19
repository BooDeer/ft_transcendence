import { Column, Entity, JoinColumn,  OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";


@Entity()
export class friend
{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    user_id: number

    @OneToOne(() => Users)
    @JoinColumn()
    friend_id: Users

}