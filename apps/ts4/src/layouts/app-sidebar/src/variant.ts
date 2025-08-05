import { VariantProps, tv } from '@vezham/theme'

const tva = tv({
  slots: {
    base: 'vcontainer-sidebar',
    header: 'vwrapper-sidebar-header z-10',
    footer: 'vwrapper-sidebar-footer',
    content: 'vwrapper-sidebar'
  },
  variants: {}
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export { tva }
export type { tvProps, tvSlots }
