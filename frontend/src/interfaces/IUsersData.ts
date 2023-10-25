export interface IUsersData {
  id : string,
  name : string,
  email : string,
  cpf : string,
  birthdate : Date,
  Address: {
    id : string,
    cep : string,
    number: number,
    street: string,
    neighborhood: string,
    city: string,
    state: string,
  },
}