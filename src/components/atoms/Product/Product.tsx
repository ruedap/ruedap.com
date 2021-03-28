import { styled } from '@compiled/react';
import { fonts, fontWeights } from '../../../styles';

// TODO: fix this
import './assets/alfred2-font-awesome-workflow.png'
import './assets/daplog.png'
import './assets/hatenastar.png'
import './assets/inustagram.png'
import './assets/nekostagram.png'
import './assets/sassience.png'
import './assets/uhloop.png'

type Props = {
  className?: string,
  name: string,
  imageLink: string,
  image: string,
  time: string,
  pubdate: string,
  heading: string,
  headingLink: string,
  description: string,
}

const imagePath = (fileName: string) =>
  `./assets/${fileName}`

export const Product = (props: Props) => {
  return (
    <Root className={ props.className }>
      <Name>{props.name}</Name>
      <ImageLink href={props.imageLink}>
        <Image src={imagePath(props.image)} alt={props.name} />
      </ImageLink>
      <Body>
        <Time dateTime={props.pubdate}>{props.time}</Time>
        <Heading>
          <HeadingLink href={props.headingLink}>{props.heading}</HeadingLink>
        </Heading>
        <Desc dangerouslySetInnerHTML={ {__html: props.description} } />
        <More>
          <MoreLink href={props.headingLink}>続きを読む</MoreLink>
        </More>
      </Body>
    </Root>
  )
}

const Root = styled.article`
  max-width: 860px;
  padding: 32px;
  font-size: 16px;
  background-color: #f2f2f2;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.05), 0 0 0 10px #f7f7f7 inset;
`

const Name = styled.h1`
  display: none;
`

// TODO: mq
const _mq = `@media (min-width: 1000px)`

const ImageLink = styled.a`
  display: block;
  max-width: 1000px;
  margin-bottom: 32px;

  ${_mq} {
    margin-right: -12%;
    margin-left: -12%;
  }
`

const imageShadow = `
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2) inset;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    right: 10px;
    bottom: 0;
    left: 10px;
    content: '';
    border-radius: 100px 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }
`

const Image = styled.img`
  width: 100%;
  ${imageShadow}
`

const Body = styled.div`
  margin-bottom: 32px;
  text-align: center;
`

const Time = styled.time`
  display: block;
  margin-bottom: 20px;
  font-family: ${fonts.georgia};
  font-size: 20px;
`

const Heading = styled.h2`
  font-size: 23px;
  font-weight: ${fontWeights.normal};
`

// TODO mixins.linkEffect
const linkEffect = `
  transition: 0.2s linear;
  transition-property: color;
`

const HeadingLink = styled.a`
  ${linkEffect}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`

const Desc = styled.div`
  line-height: 1.8;
  text-align: left;
`

const More = styled.nav`
  margin-bottom: 20px;
  text-align: center;
`

const MoreLink = styled.a`
  ${linkEffect}
`
