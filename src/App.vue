<template>
  <div class="w-full">
    <div>
      <pv-menubar class="sticky bg-primary">
        <template #start>
          <pv-button lable="CatchUp" icon="pi pi-bars" @click ="toggleSidebar"></pv-button>
          <side-menu v-model:visible="sidebarVisible" v-on:source-selected="setSource"></side-menu>
        </template>
      </pv-menubar>
    </div>
  </div>
</template>
<script>
  import {NewsApiService} from "./news/services/news-api.service.js";
  import SideMenu from "./news/components/side-menu.component.vue";

  export default {
    name: 'App',
    components: {SideMenu},
    data() {
      return {
        sidebarVisible: false,
        articles: [],
        errors: [],
        newsApi: new NewsApiService(),
      }
    },
    created() {
      this.getArticlesForSource('bbc-news');
    },
    methods: {
      // Fetch articles for selected source
      getArticlesForSource(sourceId) {
        this.newsApi.getArticlesForSource(sourceId)
            .then(response => {
              this.articles = response.data.articles;
              console.log(response.data.articles);
            })
            .catch(err => {
              this.errors.push(err);
            });
      },
      // Fetch articles for selected source with logo url
      getArticlesForSourceWithLogo(source) {
        this.newsApi.getArticlesForSource(source.id)
            .then(response => {
              this.articles = response.data.articles;
              this.articles.forEach(article => {
                article.source.urlToLogo = source.urlToLogo;
              });
              console.log(response.data.articles)
            })
            .catch(err => {
              this.errors.push(err);
            });
      },
      // Toggle sidebar
      toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
      },
      // On Source Selected
      setSource(source) {
        this.getArticlesForSourceWithLogo(source);
        this.toggleSidebar();
      }
    }
  }
</script>
