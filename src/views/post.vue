<template>
  <div class="single_post">
    <img v-if="post.featured_image" :src="post.featured_image" alt class="featured_image" />
    <h1>{{post.title}}</h1>
    <div v-html="post.content"></div>
    <div>
      <a :href="post.short_URL">See it on the blog</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: null,
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      let { data } = await axios.get(
        `https://public-api.wordpress.com/rest/v1.1/sites/abiteofsojourn.wordpress.com/posts/${this.$route.params.id}?pretty=true&fields=ID,title,date,short_URL,excerpt,content,featured_image`
      );
      this.post = data;
    },
  },
};
</script>

<style lang="scss" >
.single_post {
  max-width: 60vw;
  font-weight: 200;
  color: rgba(41, 41, 41, 1);
  font-size: 17px;
  margin: 45rem auto 10rem auto;
  @media only screen and (max-width: 600px) {
    margin: 0;
    max-width: 100vw;
    overflow: hidden;
  }
  .featured_image {
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    max-height: 40rem;
    object-fit: cover;
    @media only screen and (max-width: 600px) {
      position: static;
    }
  }
  img {
    max-width: 80vw;
    max-height: 40rem;
    @media only screen and (max-width: 600px) {
      width: 100vw;
      height: auto;
    }
  }
}
</style>