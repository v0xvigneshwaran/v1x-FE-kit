import { ArrowDirXIcon } from '@vezham/icons'
import { forwardRef } from '@vezham/react-utils'
import { useTheme } from '@vezham/theme'

import { Props } from './types'

const DirConfig = forwardRef<'div', Props>(
  ({ id, className, ...props }, ref) => {
    const { toggleDir } = useTheme()

    return (
      <ArrowDirXIcon
        id={id}
        classNames={{ base: className }}
        ref={ref}
        hover_effect="glow"
        onClick={() => toggleDir?.(null)}
      />
    )
  }
)

DirConfig.displayName = 'DirConfig'

export { DirConfig }
