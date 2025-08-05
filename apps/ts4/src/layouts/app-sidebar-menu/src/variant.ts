import { VariantProps, tv } from '@vezham/theme'

const tva = tv({
  slots: {
    base: 'vcontainer-sidebar-menu p-2',
    header: 'vwrapper-sidebar-menu-header z-10 p-1',
    footer: 'vwrapper-sidebar-menu-footer',
    menu_wrapper: 'vwrapper-menu flex items-center justify-center',
    menu: 'flex !cursor-pointer flex-col items-center justify-center',
    menu_label: 'vsidebar-text !text-center'
  },
  variants: {
    empty_menu: {
      true: {
        menu_wrapper: 'vwrapper-sidebar-empty-menu'
      }
    },
    is_active: {
      true: {
        menu: 'vwrapper-sidebar-menu-active',
        menu_label: 'text-primary'
      },
      false: {
        menu: 'vwrapper-sidebar-menu',
        menu_label: 'text-default-400'
      }
    }
  },
  defaultVariants: {
    empty_menu: false,
    is_active: false
  }
})

type tvProps = VariantProps<typeof tva>
type tvSlots = keyof ReturnType<typeof tva>

export type { tvProps, tvSlots, tva }
