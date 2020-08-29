<template>
  <div class="body">
    <div class="recent">
      <div v-for="post in posts" :key="post.ID" class="posts">
        <div v-if="post" class="post">
          <router-link
            class="title is-pointer"
            v-html="post.title"
            :to="{name: 'Post', params: {id: post.ID}}"
            tag="h2"
          ></router-link>
          <p class="excerpt" v-html="post.excerpt"></p>
          <p
            class="date"
          >Posted {{new Date(post.date).toLocaleString('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</p>
        </div>
        <img v-if="post.featured_image" :src="post.featured_image" alt class="thumbnail" />
      </div>
    </div>
    <div class="reviews">
      <div>
        <goodread />
      </div>
      <!-- <div>Imdb reviews</div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Goodread from "./goodreads";
export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Goodread,
  },
  created() {
    this.getPosts();
  },
  watch: {
    $route: function () {
      this.getPosts();
    },
  },
  methods: {
    async getPosts() {
      let { data } = await axios.get(
        `https://public-api.wordpress.com/rest/v1.1/sites/abiteofsojourn.wordpress.com/posts/?number=100&pretty=true&fields=post_ID,ID,title,date,short_URL,excerpt,featured_image&offset=1${
          this.$route.query && this.$route.query.filter
            ? "&category=" + this.$route.query.filter
            : null
        }`
      );
      this.posts = data.posts;
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  display: flex;

  .recent {
    margin-right: 10%;
    width: 70%;
  }
}

.posts {
  display: flex;
  align-items: center;
  .post {
    margin: 1rem 0;
  }
}

.thumbnail {
  width: 8rem;
  height: 8rem;
  object-fit: cover;
}
</style>