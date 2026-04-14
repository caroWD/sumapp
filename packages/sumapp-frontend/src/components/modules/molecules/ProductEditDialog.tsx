import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { Button } from '@shadcn/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@shadcn/dialog'
import useCurrentList from '@/components/hooks/useCurrentList'
import Product from '@/lib/models/Product'
import ProductForm from './ProductForm'

const formSchema = z.object({
  name: z.string().min(1).max(30),
  brand: z.string().min(1).max(30),
  price: z.coerce.number<number>().positive().min(100),
  amount: z.coerce.number<number>().int().positive().min(1),
})

interface ProductEditDialogProps {
  product: Product
}

const ProductEditDialog = ({ product }: ProductEditDialogProps) => {
  const { currentList, setCurrentList } = useCurrentList()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product.name,
      brand: product.brand,
      price: product.price,
      amount: product.amount,
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (
      data.name !== product.name ||
      data.brand !== product.brand ||
      data.price !== product.price ||
      data.amount !== product.amount
    ) {
      const productEdited: Product = new Product(
        product.id,
        data.name,
        data.brand,
        data.price,
        data.amount
      )

      const index: number = currentList.findIndex((p) => p.id === product.id)

      const newCurrentList = [...currentList]

      newCurrentList[index] = productEdited

      setCurrentList(newCurrentList)

      toast('Producto actualizado:', {
        description: 'Se actualizo el producto correctamente.',
        position: 'top-center',
      })
    } else {
      toast('No se actualizo el producto:', {
        description: 'La nueva información ingresada es exactamente igual.',
        position: 'top-center',
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full h-auto justify-start px-2 py-1.5 cursor-pointer"
        >
          Editar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Actualizar producto</DialogTitle>
          <DialogDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>
        <ProductForm
          formId="form-edit-product"
          fieldNames={[
            { key: 1, name: 'name' },
            { key: 2, name: 'brand' },
            { key: 3, name: 'price' },
            { key: 4, name: 'amount' },
          ]}
          useForm={form}
          action={onSubmit}
        />
        <DialogFooter className="*:cursor-pointer">
          <DialogClose asChild>
            <Button variant="destructive">Cancelar</Button>
          </DialogClose>
          <Button variant="outline" onClick={() => form.reset()}>
            Restablecer
          </Button>
          <DialogClose asChild>
            <Button type="submit" form="form-edit-product">
              Actualizar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProductEditDialog
