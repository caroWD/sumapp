'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid'
import Product from '@/lib/models/Product'

import { Button } from '@shadcn/button'
import { Field } from '@shadcn/field'
import useCurrentList from '@/components/hooks/useCurrentList'
import ProductForm from './ProductForm'

const productSchema = z.object({
  name: z.string().min(3).max(50),
  brand: z.string().min(3).max(50),
  price: z.coerce.number<number>().positive().min(100),
  amount: z.coerce.number<number>().int().positive(),
})

const AddProductForm = () => {
  const { currentList, setCurrentList } = useCurrentList()

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      brand: '',
      price: 0,
      amount: 1,
    },
  })

  const onSubmit = async (
    product: z.infer<typeof productSchema>
  ): Promise<void> => {
    try {
      const newProduct = new Product(
        uuidv4(),
        product.name,
        product.brand,
        product.price,
        product.amount
      )

      const newCurrentList = [...currentList, newProduct]

      setCurrentList(newCurrentList)

      toast('Producto agregado correctamente', {
        description: 'Se agrego el producto correctamente en la base de datos.',
        position: 'top-center',
      })

      form.reset()
    } catch (error) {
      if (error instanceof Error) {
        toast('Error', {
          description: error.message,
          position: 'top-center',
        })

        return
      }

      toast('Error', {
        description:
          'Ocurrio un error desconocido al intentar agregar el producto.',
        position: 'top-center',
      })
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold">Agregar producto</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <ProductForm
        formId="form-add-product"
        fieldNames={[
          { key: 1, name: 'name' },
          { key: 2, name: 'brand' },
          { key: 3, name: 'price' },
          { key: 4, name: 'amount' },
        ]}
        useForm={form}
        action={onSubmit}
      />
      <Field orientation="horizontal" className="justify-end *:cursor-pointer">
        <Button
          type="button"
          variant="outline"
          className="cursor-pointer"
          onClick={() => form.reset()}
        >
          Borrar
        </Button>
        <Button
          type="submit"
          className="cursor-pointer"
          form="form-add-product"
        >
          Enviar
        </Button>
      </Field>
    </div>
  )
}

export default AddProductForm
