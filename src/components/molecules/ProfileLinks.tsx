import { styled } from '@compiled/react';
import { ProfileLink } from '../atoms/ProfileLink'

export const ProfileLinks = () => {
  return (
    <Root>
      <ProfileLink ligatureName="twitter" />
      <ProfileLink ligatureName="github" />
      <ProfileLink ligatureName="mail" />
    </Root>
  )
}

const Root = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`
