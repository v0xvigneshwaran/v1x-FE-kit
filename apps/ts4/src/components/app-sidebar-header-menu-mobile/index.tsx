import { MenuHambugerIcon } from '@vezham/icons'
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow
} from '@vezham/react'
import { useTheme } from '@vezham/theme'

import './index.css'

export const AppSideBarMobileHeader = () => {
  const { toggleSidebar } = useTheme()

  return (
    <Popover placement="top" backdrop="blur">
      <PopoverTrigger>
        <Button variant="light" size="xs">
          <MenuHambugerIcon
            hover_effect="glow"
            radius="full"
            onClick={() => toggleSidebar?.(null)}
            size="md"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="vwrapper-menu-popover">
        <>
          <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
            01
          </div>
          <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
            02
          </div>
          <ScrollShadow className="flex w-full flex-col gap-2">
            <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
              03
            </div>
            <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
              04
            </div>
            <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
              05
            </div>
            <div className="bg-primary text-primary-foreground w-full rounded-lg p-4">
              06
            </div>
            <div className="bg-primary text-primary-foreground col-span-2 w-full rounded-lg p-4 shadow-lg">
              07
            </div>
            <div className="bg-warning text-warning-foreground w-full rounded-lg p-4">
              08
            </div>
            <div className="bg-warning text-warning-foreground w-full rounded-lg p-4">
              09
            </div>
            <div className="bg-warning text-warning-foreground w-full rounded-lg p-4">
              10
            </div>
            <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
              11
            </div>
            <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
              12
            </div>
            <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
              13
            </div>
            <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
              14
            </div>
          </ScrollShadow>
          <div className="bg-primary text-primary-foreground w-full rounded-lg p-4 shadow-lg">
            15
          </div>
        </>
      </PopoverContent>
    </Popover>
  )
}
