import { ShoppingBasket } from 'lucide-react'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@shadcn/empty'

const ProductListEmpty = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ShoppingBasket />
        </EmptyMedia>
        <EmptyTitle>Aún no hay productos</EmptyTitle>
        <EmptyDescription>
          Aún no has agregado ningún producto. Empieza agregando tu primer
          producto.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export default ProductListEmpty
