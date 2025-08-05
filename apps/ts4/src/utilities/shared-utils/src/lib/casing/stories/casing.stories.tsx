import { Meta } from '@storybook/react'

import { A } from '@vezham/storybook'

export default {
  title: 'Shared Utils/Casing',
  tags: ['!autodocs'],
  component: A
} as Meta<typeof A>

export const Info = {
  args: {
    label: 'Casing'
  }
}
