import { LangI18nIcon } from '@vezham/icons'
import { forwardRef } from '@vezham/react-utils'
import { useTheme } from '@vezham/theme'

import { Props } from './types'

const LangConfig = forwardRef<'div', Props>(
  ({ id, className, data, value, ...props }, ref) => {
    const { setLang } = useTheme()

    return data.length > 1 ? (
      <LangI18nIcon
        id={id}
        classNames={{ base: className }}
        ref={ref}
        hover_effect="glow"
        onClick={() =>
          setLang?.(data[(Math.random() * data.length) | 0] || value)
        }
      />
    ) : null
  }
)

LangConfig.displayName = 'LangConfig'

export { LangConfig }
