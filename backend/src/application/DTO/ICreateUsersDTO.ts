interface ICreateUserDTO {
  id? : string;
  name : string;
  email : string;
  cpf : string;
  birthdate: Date;
}

export { ICreateUserDTO };
