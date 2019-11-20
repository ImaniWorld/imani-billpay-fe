<template>
  <section class="home-about">
    <div class="container">
      <h2 class="home-about-title">{{ $t('main.about') }}</h2>
      <div class="row">
        <div class="col col-33">
          <p>{{ $t('main.imaniBillpayIsAPayment') }}</p>
          <p>{{ $t('main.weProvide') }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col col-33">
          <img src="/img/about.svg" class="home-about-image">
        </div>
        <div class="col col-33">
          <span class="home-about-phone icon icon-phone icon-mask"></span>
          <p class="home-about-ui">{{ $t('main.imaniBillpayProvides') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class HomeAbout extends Vue {
  }
</script>

<style scoped>

</style>
