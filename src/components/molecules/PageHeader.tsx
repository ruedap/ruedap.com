import { styled } from '@compiled/react';
import { Logo } from '../atoms/Logo'
import { Avatar } from '../atoms/Avatar'

export const PageHeader = () => {
  return (
    <Root>
      <Logo />
      <Avatar />
      <div>profile-links</div>
    </Root>
  )
}

const Root = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
