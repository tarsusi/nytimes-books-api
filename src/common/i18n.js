import VueI18n from 'vue-i18n';
import Vue from 'vue';
import en from '@/common/languages/en';

const messages = {
  en,
};

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

export default i18n;
