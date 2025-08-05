import { forwardRef } from '@vezham/react-utils'
// import { Resizable } from '@vezham/v-ions'

import './index.css'
import { Props, useProps } from './types'

const AppLayout = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, children, is_resizable, resizable } =
    useProps({
      ...props,
      ref
    })

  const template = children

  // if (is_resizable) {
  //   template = (
  //     // <Resizable direction="horizontal" {...resizable}>
  //       {template}
  //     // </Resizable>
  //   )
  // }

  return <Component {...getBaseProps()}>{template}</Component>
})

AppLayout.displayName = 'AppLayout'

export { AppLayout }
