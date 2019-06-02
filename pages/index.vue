<template lang="pug">
atom-product(name="アインシュタインの電話番号" imageLink="https://github.com/ruedap/daplog" :image="img" time="2013.11.11" pubdate="2013-11-11")
</template>

<script>
import AtomProduct from '~/components/atoms/AtomProduct.vue'
import img from '~/assets/images/products/daplog.png'
export default {
  data() {
    return {
      img: img
    }
  },
  components: {
    AtomProduct
  }
}
</script>
