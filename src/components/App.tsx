import React from 'react';
import { styled } from '@compiled/react';
import { Product } from './atoms/Product'
import { PageHeader } from './molecules/PageHeader'
import { PageLayout } from './templates/PageLayout'
import json from '../json/data.json'
import { colors } from '../styles';
import { lighten } from 'polished'

function App() {
  return (
    <GlobalStyles>
      <PageLayout header={ <PageHeader /> }>
        <Products>
          { json.products.map(product => {
            return (
              <Product
                key={product.id}
                className="c-Products-product"
                name={ product.name }
                imageLink={ product.imageLink}
                image={product.image}
                time={product.time}
                pubdate={product.pubdate}
                heading={product.heading}
                headingLink={product.headingLink}
                description={product.description}
              />
            )
          }) }
        </Products>
      </PageLayout>
    </GlobalStyles>
  );
}

// TODO mixins.linkEffect
const linkEffect = `
  transition: 0.2s linear;
  transition-property: color;
`

// TODO: createGlobalStyle
const GlobalStyles = styled.div`
  color: ${colors.text};
  background-color: #ececec;

  a {
    color: ${colors.text};
    text-decoration: underline;
    text-underline-position: under;
    ${linkEffect}

    &:hover {
      color: ${lighten(0.3, colors.text)};
    }
  }
`

const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;

  .c-Products {
    &-product {
      margin-bottom: 200px;

      &:first-of-type {
        margin-top: 50px;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`

export default App;
