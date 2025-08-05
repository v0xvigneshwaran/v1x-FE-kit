// eslint-disable-next-line @nx/enforce-module-boundaries
import { useNavigate } from '@tanstack/react-router'

// import { AppIcon } from '@vezham/icons'
import { AppLayout } from '../../../layouts/app-layout/src'
import { AppMainContainer } from '../../../layouts/app-main-container/src'
import { AppSideBar } from '../../../layouts/app-sidebar/src'
// import { ResizablePanel } from '@vezham/v-ions'

import { AppSideBarFooter } from '../../../components/app-sidebar-footer'
import { AppSideBarHeader } from '../../../components/app-sidebar-header'

const Page = () => {
  const navigate = useNavigate()

  const sidebar_data = {
    header: <AppSideBarHeader />,
    footer: <AppSideBarFooter />,
    content: (
      <>
        <div
          className="bg-primary text-primary-foreground rounded-lg p-4"
          onClick={() => {
            navigate({ to: '/storybook/sidebar-menu' })
          }}>
          {/* <AppIcon hover_effect="glow" color="primary" foreground={true} /> */}
          Menu
        </div>
        <div
          className="bg-primary text-primary-foreground rounded-lg p-4"
          onClick={() => {
            navigate({ to: '/storybook/sidebar-panel' })
          }}>
          {/* <AppIcon hover_effect="glow" color="primary" foreground={true} /> */}
          Panel
        </div>
        <div
          className="bg-primary text-primary-foreground rounded-lg p-4"
          onClick={() => {
            navigate({ to: '/storybook/sidebar-sheet' })
          }}>
          {/* <AppIcon hover_effect="glow" color="primary" foreground={true} /> */}
          Sheet
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          01
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          02
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          03
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          04
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          05
        </div>
        <div className="bg-primary text-primary-foreground rounded-lg p-4">
          06
        </div>
        <div className="bg-primary text-primary-foreground col-span-2 rounded-lg p-4 shadow-lg">
          07
        </div>
        <div className="bg-warning text-warning-foreground rounded-lg p-4">
          08
        </div>
        <div className="bg-warning text-warning-foreground rounded-lg p-4">
          09
        </div>
        <div className="bg-warning text-warning-foreground rounded-lg p-4">
          10
        </div>
      </>
    )
  }

  return (
    <AppLayout
      resizable={{ direction: 'horizontal', autoSaveId: 'AppLayout-demo-v1' }}>
      {/* <ResizablePanel className="resize-panel" variant="sidebar" order={1}> */}
      <AppSideBar {...sidebar_data} />
      {/* </ResizablePanel> */}
      {/* <ResizableHandle withHandle /> */}
      {/* <ResizablePanel variant="container" order={2}> */}
      <AppMainContainer className="border-primary border" />
      {/* </ResizablePanel> */}
    </AppLayout>
  )
}

export default Page
