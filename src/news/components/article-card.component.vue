<template>
    <pv-card class="m-2">
      <template #header>
        <img :src="article.urlToImage"
             :alt="article.title">
      </template>
      <template #title>
        <p>{{ article.title }}</p>
      </template>
      <template #content>
        <p class="flex align-content-start flex-wrap">
          <span class="flex align-items-center justify-content-center margin-right-2">
            <pv-avatar :image="article.source.urlToLogo"
                       :arial-lable="article.source.name"
                       shape="circle"/>
          </span>
          <span class="flex align-items-center justify-content-center">
            {{ article.source.name }}
          </span>
        </p>
        <p class="flex align-content-start flex-wrap mt-4">
          {{ article.description }}
        </p>
      </template>
      <template #footer>

      </template>
    </pv-card>
</template>

<script>
import {Article} from "../model/article.entity.js";

export default {
  name: "article-card",
  props: {
    article: Article,
  }
}
</script>

<style scoped>

</style>