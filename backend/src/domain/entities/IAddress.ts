interface IAddress {
  id? : string,
  cep : string,
  number: string,
  street: string,
  neighborhood: string,
  city: string,
  state: string,
  user_id: string,
  created_at : Date,
}

export { IAddress };