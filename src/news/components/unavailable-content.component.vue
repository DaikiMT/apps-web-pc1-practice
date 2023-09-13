<template>
  <div>
    <h4>{{ $t('unavailable-news')}}</h4>
    <div v-for="error in errors">
      <h6>{{ error }}</h6>
  </div>
</template>

<script>
export default {
  name: "unavailable-content",
  props: {
    errors: null,
  }
}
</script>

<style scoped>

</style>