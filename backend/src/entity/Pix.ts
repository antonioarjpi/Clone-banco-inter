import {
    Entity,
    PrimaryGeneratedColumn, 
    JoinColumn, 
    OneToOne, 
    Column,
    CreateDateColumn,
    ManyToOne,
    UpdateDateColumn
} from 'typeorm';

import {User} from './User';

@Entity()
export class Pix {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string

    @Column()
    value: number

    @CreateDateColumn()
    createdAT: Date

    @UpdateDateColumn()
    updateAT: Date

    @ManyToOne(() => User, user => user.id, {nullable: true})
    @JoinColumn()
    requestingUser: User;

    @ManyToOne(() => User, user => user.id, {nullable: true})
    @JoinColumn()
    payingUser: User;

}