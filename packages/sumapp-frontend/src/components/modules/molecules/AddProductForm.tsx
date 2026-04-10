'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@shadcn/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@shadcn/field'
import { Input } from '@shadcn/input'

const productSchema = z.object({
  name: z.string().min(5).max(50),
  brand: z.string().min(3).max(50),
  price: z.coerce.number<number>().positive().min(100),
  amount: z.coerce.number<number>().int().positive(),
})

const AddProductForm = () => {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      brand: '',
      price: undefined,
      amount: 1,
    },
  })

  const onSubmit = (data: z.infer<typeof productSchema>) => {
    toast('Producto agregado correctamente', {
      description: `Se agrego el producto ${data.name} ${data.brand} con un valor unitario de $${data.price} (total: $${data.price * data.amount})`,
      position: 'top-center',
    })
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
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Borrar
        </Button>
        <Button type="submit" form="form-add-product">
          Enviar
        </Button>
      </Field>
    </div>
  )
}

export default AddProductForm
