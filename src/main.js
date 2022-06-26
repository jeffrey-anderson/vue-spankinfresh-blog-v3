import { createApp } from 'vue';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaVue from '@okta/okta-vue';
import { OAUTH_ISSUER, CLIENT_ID } from '@/shared';
import App from './App.vue';
import router from './router';
import store from './store';

const vm = createApp(App);

vm.config.globalProperties.$filters = {
  prettyDate(value) {
    if (!value) {
      return '';
    }
    try {
      const d = new Date(value.toString());
      if (value.length > 10) {
        return `${d.toDateString()} ${d.toLocaleTimeString()}`;
      }
      return d.toDateString();
    } catch (error) {
      return value;
    }
  },
};

const oktaAuth = new OktaAuth({
  issuer: `${OAUTH_ISSUER}`,
  clientId: `${CLIENT_ID}`,
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid', 'profile', 'email'],
});

vm.use(OktaVue, { oktaAuth });
vm.use(store);
vm.use(router);
vm.mount('#app');
