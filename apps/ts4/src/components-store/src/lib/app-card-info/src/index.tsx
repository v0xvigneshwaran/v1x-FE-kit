import { InfoOutlineIcon } from '@vezham/icons'
import { Button, Tooltip } from '@vezham/react'
import { forwardRef } from '@vezham/react-utils'

import { Props, useProps } from './types'

const AppCardInfo = forwardRef<'div', Props>((props, ref) => {
  const { getBaseProps, getWrapperProps, getLabelProps, getValueProps, data } =
    useProps({
      ...props,
      ref
    })

  return (
    <Tooltip
      content={data?.map((data, i) => (
        <div {...getWrapperProps()} key={i}>
          <p {...getLabelProps()}>{data.label}</p>
          <code {...getValueProps()}>{data.value}</code>
        </div>
      ))}>
      <Button {...getBaseProps()} variant="light">
        <InfoOutlineIcon hover_effect="glow" />
      </Button>
    </Tooltip>
  )
})

AppCardInfo.displayName = 'AppCardInfo'

export { AppCardInfo }
