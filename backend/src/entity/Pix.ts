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

import {Users} from './Users';

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

    @ManyToOne(() => Users, user => user.id, {nullable: true})
    @JoinColumn()
    requestingUser: Users;

    @ManyToOne(() => Users, user => user.id, {nullable: true})
    @JoinColumn()
    payingUser: Users;

}