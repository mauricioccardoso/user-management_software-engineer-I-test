import { Column, CreateDateColumn, PrimaryColumn, Entity, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { IAddress } from "@domain/entities/IAddress";
import { User } from "@domain/entities/typeorm/User";

@Entity("addresses")
class Address implements IAddress {
  @PrimaryColumn()
  id? : string;

  @Column()
  cep : string;

  @Column()
  number : number;

  @Column()
  street : string;

  @Column()
  neighborhood : string;

  @Column()
  city : string;

  @Column()
  state : string;

  @Column()
  user_id: string

  @OneToOne(() => User)
  @JoinColumn({name: "user_id"})
  User : User;

  @CreateDateColumn()
  created_at : Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Address };
