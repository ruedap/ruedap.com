import { styled } from '@compiled/react';
import { Logo } from '../atoms/Logo'
import { Avatar } from '../atoms/Avatar'
import { ProfileLinks } from '../molecules/ProfileLinks'
import { Spacer } from '../atoms/Spacer'

export const PageHeader = () => {
  return (
    <Root>
      <Logo />
      <AvatarStyled />
      <Spacer height={ 24 } />
      <ProfileLinks />
    </Root>
  )
}

const Root = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AvatarStyled = styled(Avatar)`
  margin-top: 4rem;
`
