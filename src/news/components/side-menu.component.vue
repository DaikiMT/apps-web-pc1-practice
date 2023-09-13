<template>
  <pv-sidebar v-bind:visble="visible">
    <div v-for="source in sources" class ="m-4">
      <div @click="onSourceSelected(source)" class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center margin-right-2">
        <pv-avatar :image="source.urlToLogo"
                   :arial-lable="source.name"
                   shape="circle"/>
        </span>
        <span class="flex align-items-center justify-content-center">
          {{ source.name }}
        </span>
      </div>
    </div>
  </pv-sidebar>
</template>

<script>
import {NewsApiService} from "../services/news-api.service.js";

export default {
  name: "side-menu",
  props: {
    visible: Boolean
  },
  data() {
    return {
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created() {
    this.newsApi.getSources()
        .then(response => {
          this.sources = response.data.sources;
          this.sources.forEach(source => {
            source.urlToLogo = this.newsApi.getUrlToLogo(source);
            console.log('data: ');
            console.log(response.data.sources);
          });
        })
        .catch(err => {
          this.errors.push(err);
        });
  },
  methods: {
    onSourceSelected(source) {
      this.$emit('source-selected', source);
    },
    isVisible() {
      return this.visible;
    },
  }
}
</script>
<style scoped>

</style>