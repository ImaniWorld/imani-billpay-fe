<template>
  <section class="home-top">
    <div class="container">
      <h1 class="home-top-title">{{ $t('main.neverMiss') }}<br/>{{ $t('main.aPayment') }}</h1>
      <div class="row">
        <div class="col col-25 col-mobile-66">
          <p>{{ $t('main.theWordImani') }}</p>
          <p>{{ $t('main.theVeryFoundation') }}</p>
        </div>
        <div class="col col-25 col-mobile-66">
          <p>{{ $t('main.peopleEngage') }}</p>
        </div>
      </div>
      <div class="home-top-signup">
        <a href="#signup" class="button button-white">{{ $t('main.learnMore') }}</a>
      </div>
    </div>
    <div class="home-top-phone"></div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class HomeTop extends Vue {
  }
</script>

<style scoped>

</style>
