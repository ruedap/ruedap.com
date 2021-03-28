import { styled } from '@compiled/react';
import { ProfileLink } from '../atoms/ProfileLink'

export const ProfileLinks = () => {
  return (
    <Root>
      <ProfileLink ligatureName="twitter" href="https://twitter.com/ruedap" />
      <ProfileLink ligatureName="github" href="https://github.com/ruedap" />
      <ProfileLink ligatureName="mail" href="mailto:ruedap@ruedap.com" />
    </Root>
  )
}

const Root = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`
