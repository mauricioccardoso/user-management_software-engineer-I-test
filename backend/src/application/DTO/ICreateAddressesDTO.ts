interface ICreateAddressesDTO {
  id? : string
  cep : string,
  number : number,
  street : string,
  neighborhood : string,
  city : string,
  state : string,
  user_id: string
}

export { ICreateAddressesDTO };
