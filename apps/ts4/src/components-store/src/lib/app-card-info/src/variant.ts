import { VariantProps, tv } from '@vezham/theme'

const tva = tv({
  slots: {
    base: '',
    wrapper: 'flex w-full gap-2',
    label: 'text-default-500 text-small w-20 text-right rtl:text-left',
    value: 'text-default-600 text-small w-auto text-left rtl:text-right'
  },
  variants: {}
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
