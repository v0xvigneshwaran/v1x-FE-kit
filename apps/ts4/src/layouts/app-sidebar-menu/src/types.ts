import { ReactNode } from 'react'

import {
  HTMLHeroUIProps,
  PropGetter,
  ReactRef,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'
import { MenuProps } from '@vezham/shared-types'
import { SlotsToClasses } from '@vezham/theme'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  header?: ReactNode
  footer?: ReactNode
  menu: MenuProps
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    header,
    footer,
    menu,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva({ empty_menu: menu.data.length === 0, ...variantProps })

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getHeaderProps: PropGetter = () => ({
    className: slots.header({ class: classNames?.header })
  })

  const getFooterProps: PropGetter = () => ({
    className: slots.footer({ class: classNames?.footer })
  })

  const getMenuWrapperProps: PropGetter = () => ({
    className: slots.menu_wrapper({ class: classNames?.menu_wrapper })
  })

  const getMenuProps = (is_active = false) => ({
    className: slots.menu({ class: classNames?.menu, is_active })
  })

  const getMenuLabelProps = (className = '', is_active = false) => ({
    className: slots.menu_label({
      class: cn(classNames?.menu_label, className),
      is_active
    })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,

    // otherProps
    header,
    footer,
    menu,
    getHeaderProps,
    getFooterProps,
    getMenuWrapperProps,
    getMenuProps,
    getMenuLabelProps
  }
}

export { useProps }
export type { Props }
