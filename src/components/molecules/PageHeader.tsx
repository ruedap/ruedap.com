import { styled } from '@compiled/react';
import { Logo } from '../atoms/Logo'

export const PageHeader = () => {
  return (
    <Root>
      <Logo />
      <div>avatar</div>
      <div>profile-links</div>
    </Root>
  )
}

const Root = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
