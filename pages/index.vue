<template>
  <div>
    <!-- <div :class="$style.container">
      <section-blog-svg />
    </div> -->
    <div :class="$style.container">
      <section-products-svg />
      <atom-product
        v-for="item in json.products"
        :key="item.id"
        :class="$style.product"
        :name="item.name"
        :image-link="item.imageLink"
        :image="item.image"
        :time="item.time"
        :pubdate="item.pubdate"
        :heading="item.heading"
        :heading-link="item.headingLink"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script>
import AtomProduct from '~/components/atoms/AtomProduct.vue'
// import SectionBlogSvg from '~/assets/images/section-blog.svg'
import SectionProductsSvg from '~/assets/images/section-products.svg'
import json from '~/assets/data.json'
export default {
  components: {
    AtomProduct,
    // SectionBlogSvg,
    SectionProductsSvg
  },
  data() {
    return {
      json: json
    }
  }
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
}

.product {
  margin-bottom: 200px;

  &:first-of-type {
    margin-top: 50px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
