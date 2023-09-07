type IAddress = {
    id: number,
    street: string,
    zipCode: string,
    number: number,
    city: string,
    state: string,
}

type IAddressCreate = {
    street: string,
    zipCode: string,
    number: number,
    city: string,
    state: string,
}

export{
    IAddress,
    IAddressCreate
}