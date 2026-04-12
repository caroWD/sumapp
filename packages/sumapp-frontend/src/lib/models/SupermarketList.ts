import type Product from './Product'

class SupermarketList {
  id: string
  supermarket: string
  purchasedAt: Date
  products: Product[]

  constructor(
    id: string,
    supermarket: string,
    purchasedAt: Date,
    products: Product[]
  ) {
    this.id = this.ensureIdValid(id)
    this.supermarket = supermarket
    this.purchasedAt = this.ensurePurchasedAtValid(purchasedAt)
    this.products = products
  }

  private ensureIdValid(id: string): string {
    if (id.length !== 36)
      throw new Error(
        '¡Id invalido! El Id debe ser un UUID (Identificador Unico Universal).'
      )

    return id
  }

  private ensurePurchasedAtValid(purchasedAt: Date): Date {
    if (purchasedAt > new Date())
      throw new Error(
        '¡Fecha de compra invalida! La fecha de la compra no debe estar definica en el futuro.'
      )

    return purchasedAt
  }
}

export default SupermarketList
