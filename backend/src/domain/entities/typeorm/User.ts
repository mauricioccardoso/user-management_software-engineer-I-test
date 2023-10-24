import { Column, CreateDateColumn, PrimaryColumn, Entity } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { IUser } from "@domain/entities/IUser";

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

  @CreateDateColumn()
  created_at : Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
