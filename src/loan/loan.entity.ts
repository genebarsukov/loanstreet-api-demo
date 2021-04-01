import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("Loan")
export class Loan {

    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ nullable: true })
    amount?: number;

    @Column({ nullable: true })
    interestRate?: number;

    @Column({ nullable: true })
    lengthMonths?: number;

    @Column({ nullable: true })
    monthlyPayment?: number;

}