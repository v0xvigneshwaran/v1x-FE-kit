import { VariantProps, tv } from '@vezham/theme'

const tva = tv({
  slots: {
    base: 'vapp-layout bg-vcontainer-secondary text-foreground relative flex h-screen w-full overflow-hidden'
  },
  variants: {}
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export type { tvProps, tvSlots, tva }
