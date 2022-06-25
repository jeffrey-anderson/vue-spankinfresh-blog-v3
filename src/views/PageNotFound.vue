<template>
  <div class="ml-3">
    <H2>PAGE NOT FOUND</H2>
    <p>Sorry that page can't be found. Choose from a category above or a recent article on the
      right.</p>
    <p>
      <img :src="notFoundImage"
           alt="Page Not Found photo credit Oladimeji Ajegbile from Pexels">
    </p>
    <p>
      <a href="https://www.pexels.com/photo/man-lying-on-plants-2915216/">Photo</a> by Marlon
      Schmeiski from Pexels
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  data() {
    return {
      notFoundImage: '/assets/man-lying-on-plants-2915216.jpg',
    };
  },

};
</script>

<style scoped>

img {
  max-width: 100%;
}

</style>
