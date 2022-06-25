<template>

  <div>
    <h2 class="card-header">
      {{ article.title }}
    </h2>
    <div class="ml-4">
      <p><span>{{ fancyDatePosted }}</span> &mdash;
        <span class="lead"><a class="text-dark">{{ article.category }}</a></span>
      </p>
      <div class="row">
        <div class="col-sm" v-html="content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fancyDate } from '@/shared/filters';

const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});

export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
      default: () => {
      },
    },
  },
  computed: {
    content() {
      return md.render(this.article.content);
    },
    fancyDatePosted() {
      return fancyDate(this.article.datePosted);
    },
  },
};
</script>

<style scoped>

</style>
