import React from 'react';
import { styled } from '@compiled/react';
// import { Product } from '../../src_/components/atoms/Product'
// import { PageHeader } from '../../src_/components/molecules/PageHeader'
// import { PageLayout } from '../../src_/components/templates/PageLayout'
import { Blog } from './molecules/Blog'
// import SectionProductsSVG from './section-products.svg'
// import json from '../../src_/json/data.json'
// import '../styles/basics.scss'

export const App = () => {
  // return (
  //   <PageLayout header={ <PageHeader /> } blog={ <Blog /> }>
  //     <Products>
  //       <SectionProductsSVG />
  //       { json.products.map(product => {
  //         return (
  //           <ProductStyled
  //             key={product.id}
  //             name={ product.name }
  //             imageLink={ product.imageLink}
  //             image={product.image}
  //             time={product.time}
  //             pubdate={product.pubdate}
  //             heading={product.heading}
  //             headingLink={product.headingLink}
  //             description={product.description}
  //           />
  //         )
  //       }) }
  //     </Products>
  //   </PageLayout>
  // );

  return (
    <div>
      <Blog />
    </div>
  )
}

// const Products = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const ProductStyled = styled(Product)`
//   margin-top: 50px;
//   margin-bottom: 200px;
// `
