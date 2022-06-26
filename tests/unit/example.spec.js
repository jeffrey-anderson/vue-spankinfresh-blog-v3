import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

describe('Footer.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = `© ${new Date().getFullYear()} by SpankinFresh Farmers Market. All rights reserved.`;
    const wrapper = shallowMount(Footer, {});
    expect(wrapper.text()).toMatch(msg);
  });
});
