// eslint-disable-next-line @nx/enforce-module-boundaries
import { useNavigate } from '@tanstack/react-router'

import { useShortcut } from '@vezham/hooks'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  GoToHomeIcon
} from '@vezham/icons'
import { Avatar } from '@vezham/react'
import { useTheme } from '@vezham/theme'

import { AppCard } from '../app-card'

export const AppSideBarHeader = () => {
  const navigate = useNavigate()
  const { sidebar, toggleSidebar } = useTheme()

  const gotoHome = () => {
    navigate({ to: '/storybook/home' })
  }

  useShortcut({
    // meta: true,
    ctrl: true,
    key: '[',
    handler: () => {
      toggleSidebar?.(null)
    }
  })
  useShortcut({
    ctrl: true,
    key: 'q',
    handler: () => {
      gotoHome()
    }
  })

  return sidebar === 'hide' ? (
    <div className="flex flex-row items-center gap-1">
      <GoToHomeIcon
        hover_effect="glow"
        radius="full"
        onClick={() => {
          navigate({ to: '/storybook/home' })
        }}
        size="sm"
      />
      <ArrowRightIcon
        hover_effect="solid"
        className="absolute -right-5"
        onClick={() => toggleSidebar?.(null)}
      />
    </div>
  ) : (
    <div className="flex w-full flex-row items-center justify-between gap-1">
      <div className="flex w-full flex-row items-center gap-1">
        <GoToHomeIcon
          hover_effect="glow"
          radius="full"
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
      <ArrowLeftIcon
        hover_effect="solid"
        className="absolute -right-5"
        onClick={() => toggleSidebar?.(null)}
      />
    </div>
  )
}
