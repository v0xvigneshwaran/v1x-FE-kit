// import { AvatarV1 } from '@vezham/avatar-v1'
import { useBoolean } from '@vezham/hooks'
import { Avatar, Button } from '@vezham/react'
import { forwardRef } from '@vezham/react-utils'

import { Props } from './types'

const PeopleConfig = forwardRef<'div', Props>(
  ({ id, className, ...props }, ref) => {
    const { value } = useBoolean(true)

    return value ? (
      // <Avatar variant={'people'} label={'Vezham'} size="xs" />
      <Avatar
        id={id}
        className={className}
        ref={ref}
        color="warning"
        radius="full"
        showFallback
        isBordered
        size="sm"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      />
    ) : (
      /* <AvatarV1
          variant={'people'}
          status="online"
          status_type="dot"
          label={'test'}
          url={'https://i.pravatar.cc/150?u=a04258114e29026708c'}
        /> */
      <Button
        id={id}
        className={className}
        ref={ref}
        variant="solid"
        color="info"
        size="sm"
        radius="full">
        Login
      </Button>
    )
  }
)

PeopleConfig.displayName = 'PeopleConfig'

export { PeopleConfig }
