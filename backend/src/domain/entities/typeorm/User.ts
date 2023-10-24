import { Column, CreateDateColumn, PrimaryColumn, Entity } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id? : string;

  @Column()
  name : string;

  @Column()
  email : string;

  @Column()
  cpf : string;

  @CreateDateColumn()
  created_at : Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };