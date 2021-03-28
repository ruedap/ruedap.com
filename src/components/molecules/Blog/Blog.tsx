import SectionBlogSVG from './section-blog.svg'
import LogoBlogSVG from './logo-blog.svg'
import { styled } from '@compiled/react'
import { Spacer } from '../../atoms/Spacer'

export const Blog = () => {
  return (
    <Root>
      <SectionBlogSVG />
      <Spacer height={ 20 } />
      <LogoBlogLink href="https://blog.ruedap.com">
        <LogoBlogSVG />
      </LogoBlogLink>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 200px;
`

// TODO mixins.linkEffect
const linkEffect = `
  transition: 0.2s linear;
  transition-property: opacity;
`

const LogoBlogLink = styled.a`
  opacity: 0.75;
  ${linkEffect}

  &:hover {
    opacity: 0.95;
  }
`
