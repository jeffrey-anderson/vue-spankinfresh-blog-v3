<template>

  <div class="container">
    <div class="card">
      <Navbar/>
      <div class="row">
        <div class="col-md-8">
          <router-view/>
        </div>
        <div class="col-md-4">
          <Sidebar/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Footer,
    Sidebar,
    Navbar,
  },
};
</script>
