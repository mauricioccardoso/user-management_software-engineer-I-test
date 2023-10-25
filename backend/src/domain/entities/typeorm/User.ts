import { Column, CreateDateColumn, PrimaryColumn, Entity, OneToOne } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { IUser } from "@domain/entities/IUser";
import { Address } from "@domain/entities/typeorm/Address";

@Entity("users")
class User implements IUser {
  @PrimaryColumn()
  id? : string;

  @Column()
  name : string;

  @Column()
  email : string;

  @Column()
  cpf : string;

  @Column()
  birthdate : Date;

  @OneToOne(() => Address, (address) => address.User)
  address: Address

  @CreateDateColumn()
  created_at : Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
