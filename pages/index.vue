<template>
  <div>
    <atom-product
      v-for="item in json.products"
      :key="item.id"
      :name="item.name"
      :imageLink="item.imageLink"
      :image="item.image"
      :time="item.time"
      :pubdate="item.pubdate"
      :heading="item.heading"
      :headingLink="item.headingLink"
      :description="item.description"
    />
  </div>
</template>

<script>
import AtomProduct from '~/components/atoms/AtomProduct.vue'
import json from '~/assets/data.json'
export default {
  data() {
    return {
      json: json
    }
  },
  components: {
    AtomProduct
  }
}
</script>
