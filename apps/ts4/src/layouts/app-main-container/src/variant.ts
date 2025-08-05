import { VariantProps, tv } from '@vezham/theme'

const tva = tv({
  slots: {
    base: 'vcontainer-main flex w-full flex-col gap-2',
    global: 'rounded-lg'
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export type { tvProps, tvSlots, tva }
