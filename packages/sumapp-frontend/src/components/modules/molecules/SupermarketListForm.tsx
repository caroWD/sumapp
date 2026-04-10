import { useState, type CSSProperties } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@shadcn/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@shadcn/select'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@shadcn/calendar'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@shadcn/input-group'
import { Popover, PopoverContent, PopoverTrigger } from '@shadcn/popover'

type SupermarketOption = {
  key: number
  label: string
  value: string
}

const supermarketOptions: SupermarketOption[] = [
  { key: 1, label: 'Exito', value: 'exito' },
  { key: 2, label: 'Carulla', value: 'carulla' },
  { key: 3, label: 'EURO', value: 'euro' },
  { key: 4, label: 'Supermú', value: 'supermu' },
  { key: 5, label: 'Boom', value: 'boom' },
] as const

const formatDate = (date: Date | undefined) => {
  if (!date) return ''

  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

const isValidDate = (date: Date | undefined) => {
  if (!date) return false

  return !isNaN(date.getTime())
}

const supermarketListFormSchema = z.object({
  supermarket: z.string().min(1, 'Please select your supermarket option.'),
  'purchase-date': z.iso.date(),
})

const SupermarketListForm = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [month, setMonth] = useState<Date | undefined>(date)
  const [value, setValue] = useState<string>(formatDate(date))

  const form = useForm<z.infer<typeof supermarketListFormSchema>>({
    resolver: zodResolver(supermarketListFormSchema),
    defaultValues: {
      supermarket: '',
      'purchase-date': value,
    },
  })

  const onSubmit = (data: z.infer<typeof supermarketListFormSchema>) => {
    toast('You submitted the following values:', {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as CSSProperties,
    })
  }
  return (
    <form id="form-supermarket-list" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="supermarket"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field orientation="vertical" data-invalid={fieldState.invalid}>
              <FieldContent>
                <FieldLabel htmlFor="form-supermarket-list-select-option">
                  Supermercado
                </FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldContent>
              <Select
                name={field.name}
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id="form-supermarket-list-select-option"
                  aria-invalid={fieldState.invalid}
                  className="min-w-full"
                >
                  <SelectValue placeholder="Seleccionar opción..." />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  <SelectGroup>
                    <SelectLabel>Supermercado</SelectLabel>
                    {supermarketOptions.map((supermarket) => (
                      <SelectItem
                        key={supermarket.key}
                        value={supermarket.value}
                      >
                        {supermarket.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          )}
        />
        <Controller
          name="purchase-date"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className="w-full" data-invalid={fieldState.invalid}>
              <FieldContent>
                <FieldLabel htmlFor="form-supermarket-list-purchase-date">
                  Fecha de compra
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    name={field.name}
                    id="form-supermarket-list-purchase-date"
                    value={value}
                    placeholder={value}
                    onChange={(e) => {
                      const date = new Date(e.target.value)
                      setValue(e.target.value)
                      if (isValidDate(date)) {
                        setDate(date)
                        setMonth(date)
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        setOpen(true)
                      }
                    }}
                  />
                  <InputGroupAddon align="inline-end">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <InputGroupButton
                          id="form-supermarket-list-date-picker"
                          variant="ghost"
                          size="icon-xs"
                          aria-label="Seleccionar fecha"
                        >
                          <CalendarIcon />
                          <span className="sr-only">Seleccionar fecha</span>
                        </InputGroupButton>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          month={month}
                          onMonthChange={setMonth}
                          onSelect={(date) => {
                            setDate(date)
                            setValue(formatDate(date))
                            setOpen(false)
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  )
}

export default SupermarketListForm
