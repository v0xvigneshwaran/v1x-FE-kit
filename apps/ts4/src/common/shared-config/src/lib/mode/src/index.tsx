import { DayIcon, NightIcon } from '@vezham/icons'
import { forwardRef } from '@vezham/react-utils'
import { useTheme } from '@vezham/theme'

import { Props } from './types'

const ModeConfig = forwardRef<'div', Props>(
  ({ id, className, ...props }, ref) => {
    const { mode, current_mode, toggleMode } = useTheme()

    const DayTemplate = (
      <DayIcon
        id={id}
        classNames={{ base: className }}
        ref={ref}
        hover_effect="glow"
        onClick={() => toggleMode?.(null)}
      />
    )
    const NightTemplate = (
      <NightIcon
        id={id}
        classNames={{ base: className }}
        ref={ref}
        hover_effect="glow"
        onClick={() => toggleMode?.(null)}
      />
    )

    return mode === 'system'
      ? current_mode === 'light'
        ? DayTemplate
        : NightTemplate
      : mode === 'light'
        ? DayTemplate
        : NightTemplate
  }
)

ModeConfig.displayName = 'ModeConfig'

export { ModeConfig }
