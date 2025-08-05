// import { PlusIcon } from '@radix-ui/react-icons'
import { FC, ReactNode } from 'react'

import { useCopyToClipboard } from '@vezham/hooks'
import {
  ArrowRightIcon,
  GoToHomeIcon,
  SettingsIcon,
  VezhamTamizhiIcon,
  WhatsNewIcon
} from '@vezham/icons'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User
} from '@vezham/react'
import { useButtonIcon } from '@vezham/v-atoms'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { DirConfig, ModeConfig } from '../../common/shared-config/src'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TruncatWalletAddress } from '../../utilities/shared-utils/src'

import { WorkspaceCard } from '../app-card'
import './index.css'

const PeopleProfile: FC<{ trigger: ReactNode }> = ({ trigger }) => {
  const { copyWithToast } = useCopyToClipboard()
  return (
    <Dropdown placement="bottom-end" backdrop="opaque">
      <DropdownTrigger>{trigger}</DropdownTrigger>
      <DropdownMenu
        aria-label="Profile Actions"
        variant="flat"
        disabledKeys={['profile']}>
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100">
            <User
              name="Arya Chan"
              description="@aryachan"
              classNames={{
                name: 'text-default-600',
                description: 'text-default-500'
              }}
              avatarProps={{
                radius: 'sm',
                size: 'sm',
                src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
              }}
            />
          </DropdownItem>
          <DropdownItem
            variant="light"
            color="info"
            className="text-tiny text-foreground-400"
            key="wallet_address"
            onClick={() =>
              copyWithToast(
                '0x3fa9704fd76d43d698f1f4e1cae9d36c102e070af5162c2920a798102b902992'
              )
            }>
            {TruncatWalletAddress(
              '0x3fa9704fd76d43d698f1f4e1cae9d36c102e070af5162c2920a798102b902992'
            )}
          </DropdownItem>
          <DropdownItem
            variant="light"
            color="info"
            className="text-tiny text-foreground-400"
            key="email"
            onClick={() => copyWithToast('aryachan@v.corp')}>
            aryachan@v.corp
          </DropdownItem>
          <DropdownItem key="my status">My Status</DropdownItem>
          <DropdownItem variant="light" color="info" key="my account">
            My Account
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Team Preferences" showDivider>
          <DropdownItem key="quick_search" shortcut="⌘K">
            Quick search
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem key="new_project" endContent={<PlusIcon />}>
            New Project
          </DropdownItem>
          <DropdownItem key="new_project" endContent={<ArrowRightIcon />}>
            New Project
          </DropdownItem>
          <DropdownItem key="dashboard">Dashboard</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            variant="solid"
            startContent={<GoToHomeIcon />}
            className="default-icon-hover">
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}

const SettingsCard: FC<{ trigger: ReactNode }> = ({ trigger }) => (
  <Popover backdrop="opaque" placement="bottom-end">
    <PopoverTrigger>{trigger}</PopoverTrigger>
    <PopoverContent className="p-1">
      <div className="flex flex-row">
        <ModeConfig />
        <DirConfig />
        {/* wjdlz/NOTE: config will be removed post review */}
      </div>
    </PopoverContent>
  </Popover>
)

export const AppSideBarFooter: FC = () => (
  <div className="vwrapper-app-sidebar-footer flex items-center gap-2">
    {/* wjdlz/NOTE: for testing will be removed post review */}

    <div className="vwrapper-footer-card">
      <VezhamTamizhiIcon hover_effect="glow" />

      <div className="flex">
        <WorkspaceCard
          trigger={useButtonIcon({
            icon: <WhatsNewIcon hover_effect="glow" />,
            button: {
              'aria-label': 'WhatsNew'
            }
          })}
        />

        <SettingsCard
          trigger={useButtonIcon({
            icon: <SettingsIcon hover_effect="glow" />,
            button: {
              'aria-label': 'Settings'
            }
          })}
        />
      </div>
    </div>

    {/*
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Avatar
        color="warning"
        radius="full"
        showFallback
        isBordered
        size="md"
        as="button"
        className="transition-transform"
        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
      />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <UserTwitterCard />
      </PopoverContent>
    </Popover>

     <PeopleConfig /> */}
    <PeopleProfile
      trigger={
        <Avatar
          color="warning"
          radius="full"
          showFallback
          isBordered
          size="md"
          as="button"
          className="transition-transform"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      }
    />
  </div>
)
