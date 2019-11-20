<template>
  <footer class="footer">
    <div class="container">
      <span class="footer-logo">{{ $t('main.imaniBillpay') }}</span>
      <div class="footer-links">
        <a href="/terms" class="footer-link">{{ $t('main.termsOfService') }}</a>
      </div>
      <div class="footer-copy">{{ $t('main.footerCopyright') }}</div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class HomeFooter extends Vue {
  }
</script>

<style scoped>

</style>
