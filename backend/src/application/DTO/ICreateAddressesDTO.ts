interface ICreateAddressesDTO {
  id? : string
  cep : string,
  number : string,
  street : string,
  neighborhood : string,
  city : string,
  state : string,
  user_id: string
}

export { ICreateAddressesDTO };
