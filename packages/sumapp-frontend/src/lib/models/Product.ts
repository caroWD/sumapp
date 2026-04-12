class Product {
  id: string
  name: string
  brand: string
  price: number
  amount: number
  subtotal: number

  constructor(
    id: string,
    name: string,
    brand: string,
    price: number,
    amount: number
  ) {
    this.id = this.ensureIdValid(id)
    this.name = name
    this.brand = brand
    this.price = price
    this.amount = amount
    this.subtotal = price * amount
  }

  private ensureIdValid(id: string): string {
    if (id.length !== 36)
      throw new Error(
        '¡Id invalido! El Id debe ser un UUID (Identificador Unico Universal).'
      )

    return id
  }
}

export default Product
