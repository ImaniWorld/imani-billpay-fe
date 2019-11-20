<template>
  <div class="app">
    <home-header/>

    <main class="page home">
      <home-top/>

      <a name="about"></a>
      <home-about/>

      <a name="solutions"></a>
      <home-solutions/>

      <a name="signup"></a>
      <sign-up-form/>
    </main>

    <home-footer/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import SignUpForm from '~/components/SignUpForm.vue';
  import HomeHeader from '~/components/home/HomeHeader.vue';
  import HomeTop from '~/components/home/HomeTop.vue';
  import HomeAbout from '~/components/home/HomeAbout.vue';
  import HomeSolutions from '~/components/home/HomeSolutions.vue';
  import HomeFooter from '~/components/home/HomeFooter.vue';

  @Component({
    components: { HomeFooter, HomeSolutions, HomeAbout, HomeTop, HomeHeader, SignUpForm }
  })
  export default class extends Vue {
  }
</script>

<style lang="scss">
.home {overflow: hidden;
  @import '../assets/scss/vars';
  &-top {background: $primary url(/img/top.svg) 50% 100% no-repeat; position: relative; z-index: 2;
    background-size: cover; color: #fff; overflow: hidden;
    border-radius: 12px; box-shadow: 0 20px 80px rgba(0,0,0,0.1); margin: 40px;
    padding: 180px 0 180px; max-width: 1600px;
    @media (min-width: 1680px) {margin: 40px auto;}
    .container {position: relative; padding-bottom: 10px;}
    &-signup {position: absolute; left: 40px; top: 100%;
      @media (max-width: $mobile) {left: 20px; right: 20px;
        .button {width: 100%;}
      }
    }
    .row {margin-bottom: 3rem;}
    &-phone {width: 315px; height: 623px; background: url(/img/phone.png) 0 0 no-repeat;
      background-size: contain; position: absolute; top: 180px; right: -80px;
      @media (max-width: $mobile) {height: 360px; width: 200px; top: 250px;}
    }
    @media (max-width: $mobile) {margin: 15px; padding: 120px 0 120px;
      &-title {font-size: 3rem; line-height: 3.5rem;}
    }
  }
  &-about {padding: 380px 0 150px; position: relative; background: url(/img/about-bg.svg) 50% 0 no-repeat;
    @media (max-width: $mobile) {padding: 300px 0 80px; background-position: 100% 75%; background-size: contain;
      .container {padding: 0 40px;}
      &-image {width: 40%;}
    }
    &-title {position: relative;
      &::before {position: absolute; font-size: 9rem; color: $primary; content: "/"; left: -5rem; top: -0.5rem;
        @media (max-width: $mobile) {font-size: 4rem; left: -2rem; top: 0;}
      }
    }
    border-bottom: #000 1px solid;
    margin-top: -230px; font-size: $large;
    p {line-height: 180%;
      & + p {margin-top: 3rem;}
    }
    &-ui {font-size: 1rem;}
    &-phone {display: block; margin-left: -35px;
      @media (max-width: $mobile) {margin-top: 3rem; margin-left: 0;}
    }
  }
  &-solutions {padding: 150px 0 0;
    @media (max-width: $mobile) {padding-top: 80px;
      .container {padding: 0 40px;}
    }
    &-title {position: relative;
      &::before {position: absolute; font-size: 9rem; color: $primary; content: "/"; left: -5rem; top: -0.5rem;
        @media (max-width: $mobile) {font-size: 4rem; left: -2rem; top: 0;}
      }
    }
    &-realestate {padding: 80px 0 350px; background: url(/img/realestate.png) 0 100% no-repeat;
      background-size: contain;
      @media (max-width: $mobile) {padding: 40px 0 80px;}
    }
    &-retail {padding: 80px 0 150px; background: url(/img/retail.svg) 0 100% no-repeat;
      background-size: contain;
      @media (max-width: $mobile) {padding: 40px 0 80px;}
    }
    &-solutions {font-size: $large; margin-top: 3rem;
      ul {list-style-type: none; margin-left: -1rem; padding: 0; margin-top: 3rem;
       @media (max-width: $mobile) {margin-top: 1rem;}
      }
      .solution {display: inline-block; margin: 0 1rem 1rem 0; vertical-align: top; padding: 0.5rem 1rem;
        font-weight: bold; color: #fff; background: $primary; text-transform: uppercase; font-size: 2.5rem;
        letter-spacing: 0.05em;
        @media (max-width: $mobile) {font-size: 1.5rem;}
        &-realestate {background: #7316B0;}
        &-travel {background: #A81ED4;}
      }
    }
  }
  &-signup {
    background: $primary url(/img/signup.svg) 50% 0 no-repeat; background-size: cover;
    padding: 150px 0; color: #fff; margin-top: -2px;
    &-form {padding: 4.5rem; color: #000;
      @media (max-width: $mobile) {padding: 2rem;}
      .checkbox {text-align: center; margin: 3rem 0;}
    }
  }
}
</style>
