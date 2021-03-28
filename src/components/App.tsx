import React from 'react';
import { styled } from '@compiled/react';
import { Product } from './atoms/Product'
import { PageHeader } from './molecules/PageHeader'
import { PageLayout } from './templates/PageLayout'
import json from '../json/data.json'
import '../styles/basics.scss'

function App() {
  return (
    <PageLayout header={ <PageHeader /> }>
      <Products>
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

export default App;
