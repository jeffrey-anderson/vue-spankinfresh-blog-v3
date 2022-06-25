import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.config.globalProperties.$filters = {
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

app.use(store);
app.use(router);
app.mount('#app');
