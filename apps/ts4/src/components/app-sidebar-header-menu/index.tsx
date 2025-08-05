// eslint-disable-next-line @nx/enforce-module-boundaries
import { useNavigate } from '@tanstack/react-router'

import { useShortcut } from '@vezham/hooks'
import { CalendarIcon, GoToHomeIcon } from '@vezham/icons'
import { Avatar } from '@vezham/react'

import { AppCard } from '../app-card'

export const AppSideBarMenuHeader = () => {
  const navigate = useNavigate()

  const gotoHome = () => {
    navigate({ to: '/storybook/home' })
  }
  useShortcut({
    ctrl: true,
    key: 'q',
    handler: () => {
      gotoHome()
    }
  })

  return (
    <div className="flex flex-row items-center gap-2">
      <GoToHomeIcon
        hover_effect="glow"
        onClick={() => {
          navigate({ to: '/storybook/home' })
        }}
        size="sm"
      />
      <AppCard
        trigger={
          <Avatar
            showFallback
            as="button"
            className="transition-transform"
            icon={<CalendarIcon />}
          />
        }
      />
    </div>
  )
}
