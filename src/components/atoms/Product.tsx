import { styled } from '@compiled/react';
import { mq, fonts, fontWeights } from '../../styles';

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
  `/images/products/${fileName}`

export const Product = (props: Props) => {
  return (
    <Root>
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

  ${mq.up.lg} {
    .imageLink {
      margin-right: -12%;
      margin-left: -12%;
    }
  }
`

const Name = styled.h1`
  display: none;
`

const ImageLink = styled.a`
  display: block;
  max-width: 1000px;
  margin-bottom: 32px;
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

const HeadingLink = styled.a`
  /* @include a-color-link-effect; */
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
  /* @include a-color-link-effect; */
`
