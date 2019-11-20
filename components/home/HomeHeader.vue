<template>
  <header class="header" v-bind:class="{ 'header-scrolled' : headerScrolled }">
    <div class="container container-large">
      <a href="#" class="header-logo"></a>
      <input type="checkbox" class="header-checkbox" id="header-checkbox">
      <label for="header-checkbox" class="header-toggle">
        <span class="icon icon-menu"></span>
      </label>
      <label for="header-checkbox" class="header-overlay"></label>
      <nav class="header-menu">
        <a href="#about" class="header-link">{{ $t('main.about') }}</a>
        <a href="#solutions" class="header-link">{{ $t('main.solutions') }}</a>
        <a href="#signup" class="header-link button button-outline">{{ $t('main.learnMore') }}</a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import windowScrollPosition from '../../plugins/scrollposition.js';

  @Component({
    mixins: [windowScrollPosition('headerScrolled')]
  })
  export default class HomeHeader extends Vue {
  }
</script>

<style scoped>

</style>
