<template>
  <div>

    <div class="px-2">

      <div class="row ">
        <div class="col">
          <h2>Books</h2>
          <p>All our favorite SpankinFresh recipe ideas in one book! Order yours today.</p>
          <div class="text-center">
            <a href="https://leanpub.com/springwebessentials">
              <img :src="bookCover" class="img-fluid" alt="Spring Web Essentials book cover" />
            </a>
          </div>
          <a href="https://leanpub.com/springwebessentials"
             class="mt-2 mb-2 btn btn-primary btn-lg btn-block" role="button" aria-pressed="true">
            Buy now from Leanpub</a>
        </div>
      </div>

      <TableOfContents/>

    </div>

  </div>

</template>

<script>
import TableOfContents from './TableOfContents.vue';

export default {
  name: 'Sidebar',
  components: { TableOfContents },
  data() {
    return {
      bookCover: '/assets/BookCover.jpg',
    };
  },
};
</script>

<style scoped>

</style>
