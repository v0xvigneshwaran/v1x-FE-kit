// eslint-disable-next-line @nx/enforce-module-boundaries
import { useNavigate } from '@tanstack/react-router'
import { ReactNode } from 'react'

import { Vdevice } from '@vezham/hooks'
// import { AppIcon } from '@vezham/icons'
import { AppLayout } from '../../../layouts/app-layout/src'
import { AppMainContainer } from '../../../layouts/app-main-container/src'
import { AppSideBarMenu } from '../../../layouts/app-sidebar-menu/src'

import { useTheme } from '@vezham/theme'

import { AppSideBarFooter } from '../../../components/app-sidebar-footer'
import { AppSideBarMenuHeader } from '../../../components/app-sidebar-header-menu'
import { AppSideBarMobileHeader } from '../../../components/app-sidebar-header-menu-mobile'

const Page = () => {
  const navigate = useNavigate()
  const { device } = useTheme()

  let header: ReactNode = 'HEADER'

  if (
    device === Vdevice.MINI_MOBILE ||
    device === Vdevice.MOBILE_PORTRAIT ||
    device === Vdevice.MOBILE_LANDSCAPE ||
    device === Vdevice.TAB_PORTRAIT
  ) {
    header = <AppSideBarMobileHeader />
  } else if (
    device === Vdevice.TAB_LANDSCAPE ||
    device === Vdevice.LAPTOP ||
    device === Vdevice.DESKTOP
  ) {
    header = <AppSideBarMenuHeader />
  }

  const sidebar_data = {
    header,
    footer: <AppSideBarFooter />,
    menu: {
      selected: 'sidebar',
      data: [
        {
          id: 'sidebar',
          // icon: <AppIcon />,
          label: 'Sidebar',
          onClick: () => {
            navigate({ to: '/storybook/sidebar' })
          }
        },
        // {
        //   id: 'menu',
        //   icon: <AppIcon hover_effect="glow" />,
        //   label: 'Menu',
        //   onClick: ()=> {navigate({to:'/storybook/sidebar-menu'})}
        // },
        {
          id: 'panel',
          // icon: <AppIcon />,
          label: 'Panel',
          onClick: () => {
            navigate({ to: '/storybook/sidebar-panel' })
          }
        },
        {
          id: 'sheet',
          // icon: <AppIcon />,
          label: 'Sheet',
          onClick: () => {
            navigate({ to: '/storybook/sidebar-sheet' })
          }
        }
      ]
    }
  }

  return (
    <AppLayout is_resizable={false}>
      <AppSideBarMenu {...sidebar_data} />
      <AppMainContainer
        is_resizable={false}
        className="border-primary border"
      />
    </AppLayout>
  )
}

export default Page
