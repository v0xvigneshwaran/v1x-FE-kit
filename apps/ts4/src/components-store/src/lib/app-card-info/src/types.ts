import {
  PropGetter,
  ReactRef,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/theme'

import { tvProps, tvSlots, tva } from './variant'

interface Data {
  label: string
  value: string
}

interface Props extends tvProps {
  id?: string
  className?: string
  ref?: ReactRef<HTMLButtonElement | null>
  classNames?: SlotsToClasses<tvSlots>
  data: Data[]
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const { id, ref, className, classNames, data, ...otherProps } = props

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),

    // button props
    isIconOnly: true,
    'aria-label': 'app-card-info'
  })

  const getWrapperProps: PropGetter = () => ({
    className: slots.wrapper({ class: classNames?.wrapper })
  })

  const getLabelProps: PropGetter = () => ({
    className: slots.label({ class: classNames?.label })
  })

  const getValueProps: PropGetter = () => ({
    className: slots.value({ class: classNames?.value })
  })

  return {
    domRef,
    slots,
    classNames,
    getBaseProps,
    getWrapperProps,

    // otherProps
    data,
    getLabelProps,
    getValueProps
  }
}

export { useProps }
export type { Props }
