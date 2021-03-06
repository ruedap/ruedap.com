import React from 'react'
import { styled } from '@compiled/react';

interface Props {
  ligatureName: string
  href: string
}

export const ProfileLink: React.VFC<Props> = (props) => {
  return (
    <Root href={ props.href }>
      { props.ligatureName }
    </Root>
  )
}

// TODO mixins.linkEffect
const linkEffect = `
  transition: 0.2s linear;
  transition-property: color;
`

const _icon =`
  font-family: dapicons, sans-serif;
  speak: none;
  font-feature-settings: 'liga', 'dlig';
  text-rendering: optimizeLegibility;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
`

const Root = styled.a`
  ${linkEffect}
  ${_icon}
  color: #b6b6b6;
  padding: 16px;
  font-size: 26px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #434343;
  }
`
