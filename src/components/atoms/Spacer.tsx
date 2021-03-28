import React from 'react'
import { styled } from '@compiled/react';

interface Props {
  width?: number
  height?: number
}

export const Spacer: React.FC<Props> = (props) => {
  return (
    <Root { ...props }>
      { props.children }
    </Root>
  )
}

const Root = styled.span<Props>`
  display: block;
  width: ${props => props.width ? props.width : 1}px;
  height: ${props => props.height ? props.height : 1}px;
`
