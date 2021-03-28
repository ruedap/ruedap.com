import React from 'react';
import { styled } from '@compiled/react';
import { Product } from './atoms/Product'
import { PageHeader } from './molecules/PageHeader'
import { PageLayout } from './templates/PageLayout'
import { Blog } from './molecules/Blog'
import SectionProductsSVG from './section-products.svg'
import json from '../assets/json/data.json'

export const App = () => {
  return (
    <PageLayout header={ <PageHeader /> } blog={ <Blog /> }>
      <Products>
        <SectionProductsSVG />
        { json.products.map(product => {
          return (
            <ProductStyled
              key={product.id}
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
  );
}

const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProductStyled = styled(Product)`
  margin-top: 50px;
  margin-bottom: 200px;
`
