<template>
  <div>
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
</template>

<script>
import AtomProduct from '~/components/atoms/AtomProduct.vue'
import json from '~/assets/data.json'
export default {
  components: {
    AtomProduct
  },
  data() {
    return {
      json: json
    }
  }
}
</script>

<style lang="scss" module>
.product {
  margin-bottom: 200px;

  &:first-of-type {
    margin-top: 200px;
  }
}
</style>
