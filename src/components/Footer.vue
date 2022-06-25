<template>
  <div>
    <div class="row">
      <div class="ml-3">
        <p class="font-weight-lighter">
          &copy; {{ copyYear }} by SpankinFresh Farmers Market. All rights reserved.
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      copyYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>

</style>
