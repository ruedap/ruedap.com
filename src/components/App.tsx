import React from 'react';
import { Product } from './atoms/Product'
import { PageHeader } from './molecules/PageHeader'
import { PageLayout } from './templates/PageLayout'
import { Blog } from './molecules/Blog'
import SectionProductsSVG from './section-products.svg'
import json from '../assets/json/data.json'

export const App = () => {
  return (
    <PageLayout header={<PageHeader />} blog={<Blog />}>
      <div className="flex flex-col items-center">
        <SectionProductsSVG />
        {json.products.map(product => {
          return (
            <Product
              key={product.id}
              className="mt-[50px] mb-[200px]"
              name={product.name}
              imageLink={product.imageLink}
              image={product.image}
              time={product.time}
              pubdate={product.pubdate}
              heading={product.heading}
              headingLink={product.headingLink}
              description={product.description}
            />
          )
        })}
      </div>
    </PageLayout>
  );
}
