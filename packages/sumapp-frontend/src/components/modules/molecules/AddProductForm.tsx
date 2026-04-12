'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid'
import Product from '@/lib/models/Product'

import { Button } from '@shadcn/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@shadcn/field'
import { Input } from '@shadcn/input'
import useCurrentList from '@/components/hooks/useCurrentList'

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
      price: undefined,
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
      <form id="form-add-product" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-add-product-name">Nombre</FieldLabel>
                <Input
                  {...field}
                  id="form-add-product-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Nombre del producto"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="brand"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-add-product-name">Marca</FieldLabel>
                <Input
                  {...field}
                  id="form-add-product-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Marca del producto"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="price"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-add-product-price">
                  Valor unitario
                </FieldLabel>
                <Input
                  {...field}
                  id="form-add-product-price"
                  aria-invalid={fieldState.invalid}
                  placeholder="Precio del producto (ej. 12000.15)"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="amount"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-add-product-amount">
                  Cantidad
                </FieldLabel>
                <Input
                  {...field}
                  id="form-add-product-amount"
                  aria-invalid={fieldState.invalid}
                  placeholder="Número de productos (ej. 2)"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </form>
      <Field orientation="horizontal" className="justify-end">
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
