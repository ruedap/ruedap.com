import { styled } from '@compiled/react';
import AvatarPNG from './avatar.png'

interface Props {
  className?: string
}

export const Avatar = (props: Props) => {
  return (
    <Root className={ props.className }>
      <Image src={ AvatarPNG } />
    </Root>
  )
}

const Root = styled.header`
  --width: 120px;

  display: block;
  width: var(--width);
  height: var(--width);
  padding: 10px;
  background-color: #e4e4e4;
  border-radius: 999px;
`

const Image = styled.img`
  width: 100%;
  border-radius: 999px;
  opacity: 0.8;
`
