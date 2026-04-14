import { Field, FieldError, FieldGroup, FieldLabel } from '@shadcn/field'
import { Input } from '@shadcn/input'
import { Controller, type UseFormReturn } from 'react-hook-form'

type Fields = {
  name: string
  brand: string
  price: number
  amount: number
}

type Name = 'name' | 'brand' | 'price' | 'amount'

type FieldName = {
  key: number
  name: Name
}

interface ProductFormProps {
  formId: string
  fieldNames: FieldName[]
  useForm: UseFormReturn<Fields>
  action: (data: Fields) => void
}

const ProductForm = ({
  formId,
  fieldNames,
  useForm,
  action,
}: ProductFormProps) => {
  return (
    <form
      id={formId}
      onSubmit={useForm.handleSubmit(action)}
      className="flex flex-col gap-4"
    >
      {fieldNames.map((fieldName) => (
        <FieldGroup key={fieldName.key}>
          <Controller
            name={fieldName.name}
            control={useForm.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`form-edit-product-${fieldName.name}`}>
                  {fieldName.name === 'name'
                    ? 'Nombre'
                    : fieldName.name === 'brand'
                      ? 'Marca'
                      : fieldName.name === 'price'
                        ? 'Valor unitario'
                        : 'Cantidad'}
                </FieldLabel>
                <Input
                  {...field}
                  id="form-edit-product-name"
                  aria-invalid={fieldState.invalid}
                  placeholder={
                    fieldName.name === 'name'
                      ? 'Nombre del producto'
                      : fieldName.name === 'brand'
                        ? 'Marca del producto'
                        : fieldName.name === 'price'
                          ? 'Valor unitario del producto'
                          : 'Cantidad de unidades compradas'
                  }
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      ))}
    </form>
  )
}

export default ProductForm
