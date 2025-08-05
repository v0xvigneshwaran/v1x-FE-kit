import { FC, ReactNode } from 'react'

import { useBoolean } from '@vezham/hooks'
import { AppIcon, CalendarIcon, WhatsNewIcon } from '@vezham/icons'
import {
  Avatar,
  AvatarGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tab,
  Tabs
} from '@vezham/react'
import { ButtonIcon } from '@vezham/v-atoms'
import { AppCardInfo } from '../../components-store/src/lib/app-card-info/src'

export const WorkspaceCard: FC<{ trigger: ReactNode }> = ({ trigger }) => {
  const info_data = [
    { label: 'Version', value: '1.0 (beta)' },
    { label: 'Data Center', value: 'US' }
  ]

  const tabs_data = [
    {
      id: 'my-pinned',
      label: 'My Pins 🎉',
      content: (
        <div className="flex w-[250px] flex-row flex-wrap gap-3">
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
        </div>
      )
    },
    {
      id: 'my-apps',
      label: 'My Apps',
      content: (
        <div className="flex flex-row gap-3">
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
        </div>
      )
    },
    {
      id: 'dev',
      label: 'Dev',
      content: (
        <div className="flex max-w-[250px] flex-row flex-wrap gap-3">
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
        </div>
      )
    },
    {
      id: 'finance',
      label: 'Finance',
      content: (
        <div className="flex max-w-[250px] flex-row flex-wrap gap-3">
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
        </div>
      )
    },
    {
      id: 'hr',
      label: 'HR',
      content: (
        <div className="flex max-w-[250px] flex-row flex-wrap gap-3">
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
        </div>
      )
    },
    {
      id: 'onboarding',
      label: 'On Boarding',
      content: (
        <div className="flex max-w-[250px] flex-row flex-wrap gap-3">
          <Avatar icon={<AppIcon hover_effect="glow" />} radius="md" />
        </div>
      )
    }
  ]

  return (
    <Popover backdrop="opaque" placement="bottom-end">
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>
        <Card
          shadow="none"
          className="w-[300px] max-w-[300px] border-none bg-transparent">
          <CardHeader className="justify-between">
            <div className="flex gap-3">
              <Avatar icon={<WhatsNewIcon />} radius="sm" />
              <div className="flex flex-col items-start justify-center">
                <h4 className="text-small text-default-600 leading-none font-semibold">
                  V Corp HQ Space
                </h4>
                <h5 className="text-small text-default-500 tracking-tight">
                  @vcorp-hq
                </h5>
              </div>
            </div>
            <AppCardInfo data={info_data} />
          </CardHeader>
          <CardBody className="px-3 py-0">
            <div className="flex w-full flex-col">
              <Tabs
                aria-label="Dynamic tabs"
                items={tabs_data}
                variant="underlined"
                disableAnimation={true}>
                {item => (
                  <Tab key={item.id} title={item.label}>
                    <Card>
                      <CardBody>{item.content}</CardBody>
                    </Card>
                  </Tab>
                )}
              </Tabs>
            </div>
          </CardBody>
          <CardFooter className="flex-col gap-3">
            <AvatarGroup color="default" isBordered size="sm">
              <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026705d" />
              <Avatar color="primary" icon={<WhatsNewIcon />} />
              <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026707d" />
              <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
              <Avatar src="https://i.pravatar.cc/300?u=a042581f4f29026709d" />
              <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026710d" />
              <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026711d" />
              <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026712d" />
              <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026713d" />
            </AvatarGroup>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  )
}

export const AppCard: FC<{ trigger: ReactNode }> = ({ trigger }) => {
  const { value: pinned, toggle } = useBoolean(false)

  const info_data = [
    { label: 'Version', value: '1.0 (beta)' },
    { label: 'API version', value: '14-02-2024' }
    //   {
    //     label: 'Version',
    //     value: `${app_version}.0 ${beta ? '(beta)' : ''}`
    //   },
    //   { label: 'API version', value: api_version }
  ]

  return (
    <Popover backdrop="opaque" placement="bottom-end">
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>
        <Card
          shadow="none"
          className="w-[300px] max-w-[300px] border-none bg-transparent">
          <CardHeader className="justify-between">
            <div className="flex gap-3">
              <Avatar icon={<CalendarIcon />} radius="sm" />
              <div className="flex flex-col items-start justify-center">
                <h4 className="text-small text-default-600 leading-none font-semibold">
                  Demo App
                </h4>
                <h5 className="text-small text-default-500 tracking-tight">
                  @demo-vcorp-app
                </h5>
              </div>
            </div>

            <ButtonIcon
              icon={
                <WhatsNewIcon
                  hover_effect="glow"
                  color={pinned ? 'danger' : 'default'}
                />
              }
              button={{
                'aria-label': 'WhatsNew',
                onPress: toggle
              }}
            />
            <AppCardInfo data={info_data} />
          </CardHeader>
          <CardBody className="px-3 py-0">
            <p className="text-small text-default-500 pl-px">
              This is a Demo App
              <span aria-label="confetti" role="img">
                🎉
              </span>
            </p>
          </CardBody>
          <CardFooter className="flex-col gap-3">
            <div className="flex flex-row gap-3">
              <AppIcon hover_effect="glow" />
              <AppIcon hover_effect="glow" />
              <AppIcon hover_effect="glow" />
              <AppIcon hover_effect="glow" />
            </div>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
