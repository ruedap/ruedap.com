import React from 'react'
import { styled } from '@compiled/react';

interface Props {
  header: React.ReactNode,
}

export const PageLayout: React.FC<Props> = (props) => {
  return (
    <Root>
      <Inner>
        <Header>{props.header}</Header>
        <div>{props.children}</div>
        <Header>{props.header}</Header>
      </Inner>
    </Root>
  )
}

const Root = styled.div`
  max-height: 100vh;
  background-image: url('/images/bg-pattern.png');
  background-repeat: repeat;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/images/bg-lines.png');
  background-repeat: repeat-y;
  background-position: center top;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 6rem 0;
`
