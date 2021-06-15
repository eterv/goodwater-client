<template>
  <div class="container">
    <top-image alt="Recycles forever" src="/images/sustainability/top-image.jpg">
      Recycles <br class="hidden::big" />
      forever
    </top-image>

    <h1-with-desc header="Sustainability" narrow>
      Environment and sustainability are an important part of our philosophy at Lofoten Arctic
      Water. And we are constantly working to get better and help in the fight against pollution.
    </h1-with-desc>

    <Content class="paragraph">
      <h2>Why Lofoten Arctic Water chose aluminum?</h2>

      <div class="desc">
        <div class="left">
          Lofoten Arctic water has a goal of reducing microplastics in the sea. And the way we want
          to contribute is to stop using plastic, and instead use materials that can be recycled
          several times. That is why we have chosen to produce our new bottles in aluminium.
          <br />
          <br />
          Aluminium has an infinite life, enabling true circularity. It keeps its quality every time
          and really can be recycled forever. In fact, out of all the aluminium cans sold in Norway
          every year more than 95% of it is recycled, which puts Norway as one of the best in the
          world. In Europe, for example, 95% of all aluminium is now recycled from cars, over 90%
          from buildings that are demolished and on average around 70% of all aluminium boxes.
          Worldwide, it is estimated that 75% of all aluminium that has ever been produced is still
          in use, and a large part of it has been recycled many times already.
          <br />
          <br />
          When we started looking at manufactures for our aluminium bottle our choice was easy. We
          partnered with Ball Corporation due to their expertise and technical know-how. They are
          pioneers in packaging, continually innovating to make the most sustainable beverage
          packaging possible.
        </div>
        <div class="right">
          We wanted to look at the possibilities to produce a bottle not only a can, and our choice
          was quite clear. Alumi-Tek® bottles from Ball do not compromise either end of the
          packaging spectrum. In addition to being infinitely recyclable and re-sealable, our
          aluminum bottles are light-proof and air tight ensuring that the purity and high quality
          of Lofoten Arctic Water is maintained. Aluminium is quick to chill and stays cold for
          longer, providing the premium experience that our customers expect and enjoy.
          <br />
          <br />
          There is no direct contact between the aluminium and our water inside due to the can
          liner. A can liner is a coating that is applied to the inside of all beverage cans during
          the manufacturing process. The primary purpose of a liner is to prevent interactions
          between the product and aluminium that could result in corrosion or sensory changes. When
          aluminium is recycled it is burned at 700 degrees Celsius. The lining and all inks and
          finishes used in the aluminium bottle (and can) manufacturing process, do not affect the
          recyclability of the containers, and are simply converted into energy when the used
          beverage package is being recycled.
        </div>
      </div>

      <div class="icons">
        <img alt="icons" src="/images/sustainability/icons1.png" height="133" />
      </div>
    </Content>

    <Content class="paragraph">
      <h2>Packaging</h2>
      <div class="h3">
        To contribute to a more circular economy, we have reviewed all our steps in the production.
      </div>

      <div class="desc">
        <div class="left">
          Our boxes are manufactured by Smurfit Kappa. The boxes are 100% recyclable and are
          produced from a renewable resource. By following Smurfit Kappa’s Chain of Custody, we know
          that 100% of the paper produced and obtained for use in Smurfit Kappa’s packaging
          solutions has Chain of Custody certification from FSC®, PEFC ™ or SFI ™
          <br />
          <br />
          To ensure that the boxes are not damaged during transport. We use plastic film to secure
          the pallets. To contribute to the environment for our use of this plastic, we are a member
          of Grønt Punkt Norway. Where we as a member take our statutory responsibility for the
          correct recycling of our packaging.
        </div>
        <div class="right">
          Our boxes will be recycled as cardboard, the plastic film as plastic and our bottles will
          be recycled as metal. The bottles also conform to the Nordics’ highly efficient deposit
          return schemes, including reverse vending machines, where consumers can ensure empties
          make it back into the system to be recycled. To reinforce the recyclability of the
          package, each aluminum bottles carries the ‘Metal Recycles Forever’ mark – which, in a
          recent YouGov survey, has been shown to be more easily understood and trusted by consumers
          than other green messaging.
        </div>
      </div>
    </Content>

    <six-images image-prefix="products/insta-" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { setTitle } from '@/common/helper'
import Content from '@/components/blocks/Content.vue'
import H1WithDesc from '@/components/blocks/H1WithDesc.vue'
import SixImages from '@/components/blocks/SixImages.vue'
import TopImage from '@/components/blocks/TopImage.vue'

export default defineComponent({
  name: 'Sustainability',
  components: {
    Content,
    H1WithDesc,
    SixImages,
    TopImage,
  },
  setup() {
    setTitle('Sustainability')
  },
})
</script>

<style lang="scss" scoped>
.paragraph {
  margin-bottom: 30px;
  padding: 10px 30px 0;

  .h3 {
    margin: 15px 0 30px;
    color: #333;
    font-size: 20px;
    line-height: 1.67;
  }

  .desc {
    margin-top: 20px;
    color: #707070;
    font-size: 18px;
    line-height: 1.67;
  }

  @include media-big {
    margin-bottom: 50px;
    padding: 0 15px;

    .desc {
      display: flex;

      & > div {
        flex: 1;
      }
      .right {
        margin-left: 45px;
      }
    }
  }
}

h2 {
  margin-bottom: 10px;
  color: #707070;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;

  @include media-big {
    font-size: 22px;
    font-weight: bold;
  }
}

.icons {
  margin-top: 30px;
  text-align: center;

  img {
    height: 95px;
  }

  @include media-big {
    img {
      height: 133px;
    }
  }
}
</style>
