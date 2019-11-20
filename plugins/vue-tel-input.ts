import Vue from 'vue'
import VueTelInput from 'vue-tel-input'

Vue.use(VueTelInput, {
    inputClasses: 'form-control',
    validCharactersOnly: true,
    inputOptions: {
      showDialCode: true
    }
  }
);
