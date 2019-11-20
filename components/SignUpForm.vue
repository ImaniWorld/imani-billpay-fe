<template>
  <section class="home-signup">
    <div class="container">
      <div class="row">
        <div class="col col-50">
          <h2 class="home-signup-title">
            {{ $t('signUpForm.imaniBillpay') }}<br/>{{ $t('signUpForm.forYour') }}<br/>{{ $t('signUpForm.business') }}
          </h2>
        </div>
        <div class="col col-50">
          <div class="box home-signup-form">
            <form @submit="learnMore()" class="form">
              <p class="form-intro">{{ $t('signUpForm.signUpToGetStarted') }}</p>
              <div class="form-group">
                <input v-model="signUp.contactName" :class="{ 'filled': signUp.contactName }" class="form-control">
                <div class="form-label">{{ $t('signUpForm.yourName') }}</div>
                <div v-if="$v.signUp.contactName.$error" class="form-error">
                  {{ $t('signUpForm.errors.nameRequired') }}
                </div>
              </div>
              <div class="form-group">
                <input v-model="signUp.contactEmail"
                       :class="{ 'filled': signUp.contactEmail }"
                       class="form-control"
                       type="email">
                <div class="form-label">{{ $t('signUpForm.emailAddress') }}</div>
                <div class="form-error" v-if="$v.signUp.contactEmail.$error">
                  <div v-if="!$v.signUp.contactEmail.required">{{ $t('signUpForm.errors.emailRequired') }}</div>
                  <div v-if="!$v.signUp.contactEmail.email">{{ $t('signUpForm.errors.emailIncorrect') }}</div>
                  <div v-if="!$v.signUp.contactEmail.maxLength">{{ $t('signUpForm.errors.emailTooLong') }}</div>
                </div>
              </div>
              <div class="form-group phone">
                <div class="form-label">{{ $t('signUpForm.phoneNumber') }}</div>
                <client-only>
                  <vue-tel-input v-model="signUp.contactPhone" @validate="validatePhone"></vue-tel-input>
                </client-only>
                <div class="form-error" v-if="$v.$dirty && ($v.signUp.contactPhone.$error || !isPhoneValid)">
                  <div v-if="!$v.signUp.contactPhone.required">{{ $t('signUpForm.errors.phoneRequired') }}</div>
                  <div v-if="!$v.signUp.contactPhone.maxLength">{{ $t('signUpForm.errors.phoneTooLong') }}</div>
                  <div v-if="!isPhoneValid">{{ $t('signUpForm.errors.phoneInvalid') }}</div>
                </div>
              </div>
              <div class="form-group select">
                <select v-model="signUp.businessType" name="" id="" class="form-control filled">
                  <option :value="businessTypes.propertyManagement">{{ $t('signUpForm.propertyManagement') }}</option>
                  <option :value="businessTypes.retail">{{ $t('signUpForm.retail') }}</option>
                  <option :value="businessTypes.digital">{{ $t('signUpForm.digital') }}</option>
                  <option :value="businessTypes.clientServices">{{ $t('signUpForm.clientServices') }}</option>
                  <option :value="businessTypes.other">{{ $t('signUpForm.other') }}</option>
                </select>
                <div class="form-label">{{ $t('signUpForm.businessType') }}</div>
                <div v-if="$v.signUp.businessType.$error" class="form-error">
                  {{ $t('signUpForm.errors.businessTypeRequired') }}
                </div>
              </div>
              <div class="form-group">
                <input v-model="signUp.numberOfUsers"
                       :class="{ 'filled': signUp.numberOfUsers }"
                       class="form-control"
                       type="number">
                <div class="form-label">{{ $t('signUpForm.numberOfActiveUsers') }}</div>
                <div class="form-error" v-if="$v.signUp.numberOfUsers.$error">
                  <div v-if="!$v.signUp.numberOfUsers.required">
                    {{ $t('signUpForm.errors.numberOfActiveUsersRequired') }}
                  </div>
                  <div v-if="!$v.signUp.numberOfUsers.integer">
                    {{ $t('signUpForm.errors.numberOfActiveUsersInteger') }}
                  </div>
                </div>
              </div>
              <div class="form-group">
                  <textarea v-model="signUp.contactQuestion"
                            :class="{ 'filled': signUp.contactQuestion }"
                            maxlength="300"
                            class="form-control">
                  </textarea>
                <div class="form-label-wrapper">
                  <span class="form-label">{{ $t('signUpForm.additionalDetails') }}</span>
                </div>
                <div v-if="$v.signUp.contactQuestion.$error" class="form-error">
                  {{ $t('signUpForm.errors.additionalDetailsTooLong') }}
                </div>
              </div>
              <div v-if="needToShowSuccessMessage || error" class="form-messages">
                <div v-if="needToShowSuccessMessage" class="form-message-successful">
                  {{ $t('signUpForm.thankYou') }}
                </div>
                <div v-if="error" class="form-message">{{ error }}</div>
              </div>
              <div class="form-buttons">
                <a @click="learnMore()"
                   :class="{ 'loading': $store.state.pendingRequestsCount }"
                   class="button button-block">
                  {{ $t('signUpForm.learnMore') }}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="home-signup-payments"></div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { email, required, integer, maxLength } from 'vuelidate/lib/validators';
  import { SignUpFormData } from '~/types';
  import { BusinessTypes } from '~/enums';
  import ClientOnly from 'vue-client-only'

  @Component({
    components: { ClientOnly },
    validations: {
      signUp: {
        contactName: { required },
        contactEmail: {
          required,
          email,
          maxLength: maxLength(50)
        },
        contactPhone: {
          required,
          maxLength: maxLength(50)
        },
        businessType: { required },
        numberOfUsers: { required, integer },
        contactQuestion: {
          maxLength: maxLength(300)
        }
      }
    }
  })
  export default class SignUpForm extends Vue {
    public signUp: SignUpFormData;
    public error: string = '';
    public needToShowSuccessMessage: boolean = false;
    public isPhoneValid: boolean = false;
    public businessTypes: typeof BusinessTypes;

    constructor() {
      super();

      this.businessTypes = BusinessTypes;
      this.signUp = {
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        businessType: BusinessTypes.propertyManagement,
        numberOfUsers: null,
        contactQuestion: ''
      };
    }

    public learnMore(): void {
      this.error = '';
      this.needToShowSuccessMessage = false;

      this.$v.$touch();

      if (this.$v.$error || !this.isPhoneValid) {
        return;
      }

      const phone = this.signUp.contactPhone.replace(/[ ()-]/g, '');

      const requestData = {
        ...this.signUp,
        contactPhone: phone
      };

      this.$axios
        .post('/billpay/inquiry/new', requestData)
        .then(() => this.needToShowSuccessMessage = true)
        .catch((exception) => {
          if (exception.response && exception.response.apiGatewayEventStatusE) {
            this.error = exception.response.apiGatewayEventStatusE;
          } else {
            this.error = 'Something went wrong';
          }
        });
    }

    public validatePhone({ number, isValid, country }): void {
      this.isPhoneValid = isValid;
    }
  }
</script>

<style scoped>

</style>
