<template>
  <div class="top-product">
    <Content>
      <H1 class="h1">
        Pure arctic water in award
        <br />
        winning design
      </H1>

      <div class="product-cards">
        <product-card
          image="/images/products/top-product-1.png"
          content="Aluminium bottles 473ml"
        />
        <product-card image="/images/products/top-product-2.png" content="Glass bottles 888ml" />
      </div>

      <div class="desc">
        Lofoten Arctic Water is available in still and sparkling.
        <br />
        <br class="hidden::big" />
        We have chosen to use blue bottles for our fantastic STILL WATER and white bottles for our
        SPARKLING WATER.
        <br />
        Our STILL WATER is the cleanest and freshest water without any addition or filtration.
        <br />
        Lofoten Arctic Water SPARKLING WATER is carbonated to provide the perfect combination of
        gently sparkling bubbles and fresh mountain water.
      </div>

      <div class="line" />
    </Content>
  </div>

  <div class="product1">
    <h1-with-desc class="gray" header="Aluminium bottle">
      Lofoten Arctic Water’s award winning aluminum bottle is a practical and stylish aluminum
      bottle of 473 ml.
      <br />
      When designing our new bottle we wanted to give the customer an alternative to plastic.
      <br />
      Therefore, we chose to make an aluminum bottle with a screw cap.
    </h1-with-desc>

    <image-text1 src="/images/products/product1.jpg">
      By giving our bottle a screw off and on cap, you can easily take the bottle with you, refill
      it and use it several times.
      <br />
      <br />
      With our close connection to the sea and nature, we want to minimize emissions of
      microplastics into the sea. Aluminum has infinite life and maintains the same high quality
      every time it is recycled.
      <br />
      <br />
      Aluminum cools faster, is convenient to carry on and recycles forever. Our aluminum bottles
      are designed by Strømme Throndsen Design and manufactured by Ball Corporation. The world’s
      leading manufacturer of aluminum cans and bottles.
    </image-text1>

    <center-block class="circles hidden::small">
      <div class="circle-text">
        <div>
          chills
          <br />
          faster
        </div>
      </div>
      <div class="circle-text">
        <div>
          Great
          <br />
          on the go
        </div>
      </div>
      <div class="circle-text">
        <div>
          Recycles
          <br />
          forever
        </div>
      </div>
    </center-block>

    <six-images image-prefix="products/insta-" />

    <three-links />
  </div>

  <div class="product2">
    <h1-with-desc class="gray" header="Glass bottle">
      Our award-winning 888 ml glass bottle is a great bottle that fits perfectly on the dinner
      table,
      <br />
      in the meeting room or in social gatherings with friends and family.
    </h1-with-desc>

    <image-text1 src="/images/products/product2.jpg">
      The bottle is produced in flint glass which is characterized as heavy and durable glass with
      high gloss and clarity. We wanted the bottle to reflect the nature in Lofoten where the
      mountain rises from the crystal clear sea into the blue sky. The glass bottle has a large
      opening and is easy to pour from. Our glass bottle is designed by Strømme Throndsen Design.
    </image-text1>

    <three-links />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setTitle } from '@/common/helper'
import CenterBlock from '@/components/blocks/CenterBlock.vue'
import Content from '@/components/blocks/Content.vue'
import H1 from '@/components/blocks/H1.vue'
import H1WithDesc from '@/components/blocks/H1WithDesc.vue'
import ImageText1 from '@/components/blocks/ImageText1.vue'
import ProductCard from '@/components/blocks/ProductCard.vue'
import SixImages from '@/components/blocks/SixImages.vue'
import ThreeLinks from '@/components/blocks/ThreeLinks.vue'

export default defineComponent({
  name: 'Product',
  components: {
    CenterBlock,
    Content,
    H1,
    H1WithDesc,
    ImageText1,
    ProductCard,
    SixImages,
    ThreeLinks,
  },
  setup() {
    setTitle('Product')

    return {}
  },
})
</script>

<style lang="scss" scoped>
.top-product {
  padding: 30px 0px 10px;

  .h1 {
    margin-bottom: -30%;
  }

  .desc {
    padding: 0 30px;
    color: #333;
    font-size: 18px;
    line-height: 1.67;
    text-align: center;
  }

  .line {
    width: 80%;
    height: 4px;
    margin: 70px auto 0;
    background-color: #dfdfdf;
  }

  @include media-big {
    padding: 80px 0 10px;

    .h1 {
      margin-bottom: 80px;
    }

    .desc {
      font-size: 20px;
      line-height: 2.5;
    }
  }
}

.product-cards {
  display: flex;
  flex-wrap: wrap;

  & > div {
    width: 100%;
    margin-bottom: 40px;
  }

  @include media-big {
    margin-left: -50px;
    margin-right: -50px;

    & > div {
      width: 50%;
      margin-bottom: 0;
      padding: 0 50px;
    }
  }
}

.circles {
  display: flex;
  justify-content: center;

  .circle-text {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 230px;
    height: 230px;
    border: 8px solid #d1d6da;
    border-radius: 50%;
    color: #d1d6da;
    font-size: 30px;
    line-height: 1.2;
    text-align: center;

    &:not(:first-child) {
      margin-left: 100px;
    }

    &::before {
      content: '';
      position: absolute;
      left: 18px;
      right: 18px;
      top: 18px;
      bottom: 18px;
      border: 4px solid #d1d6da;
      border-radius: 50%;
    }
  }
}
</style>
