<template>
  <section class="home-solutions">
    <div class="container">
      <h2 class="home-solutions-title">{{ $t('main.oneStopShopPayments') }}</h2>
    </div>
    <div class="home-solutions-realestate">
      <div class="container">
        <div class="row">
          <div class="col col-33">
            <p>{{ $t('main.paymentsOfAllKinds') }}</p>
          </div>
          <div class="col col-33">
            <p>{{ $t('main.thisBrokenUniverse') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home-solutions-retail">
      <div class="container">
        <div class="row">
          <div class="col col-33">
            <p>{{ $t('main.imaniBillpayTakes') }}</p>
            <p>{{ $t('main.imaniBillpayOffers') }}</p>
          </div>
          <div class="col col-33">
            <p>{{ $t('main.imaniBillpayIsPlatform') }}</p>
          </div>
          <div class="col col-33">
            <p>{{ $t('main.withThisApproach') }}</p>
          </div>
        </div>
        <div class="home-solutions-solutions">
          <div class="row">
            <div class="col col-50">
              <p>{{ $t('main.weOfferSolutions') }}</p>
            </div>
          </div>
          <ul>
            <li class="solution solution-realestate">{{ $t('main.realEstate') }}</li>
            <li class="solution solution-retail">{{ $t('main.retail') }}</li><br/>
            <li class="solution solution-digital">{{ $t('main.digital') }}</li>
            <li class="solution solution-travel">{{ $t('main.travelAndHospitality') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class HomeSolutions extends Vue {
  }
</script>

<style scoped>

</style>
