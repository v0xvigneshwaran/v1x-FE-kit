import {
  HTMLHeroUIProps,
  PropGetter,
  ReactRef,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/theme'
// import { ResizableProps } from '@vezham/v-ions'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  is_resizable?: boolean
  // resizable?: ResizableProps // wjdlz/TODO: option to add config
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
    is_resizable = true,
    resizable,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,

    // otherProps
    is_resizable,
    resizable
  }
}

export { useProps }
export type { Props }
