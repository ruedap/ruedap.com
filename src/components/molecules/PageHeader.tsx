import { styled } from '@compiled/react';

export const PageHeader = () => {
  return (
    <Root>
      <div>logo</div>
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
