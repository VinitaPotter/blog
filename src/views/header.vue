<template>
  <div class="header">
    <div v-if="post" class="post">
      <img :src="post.featured_image" alt class="featured_image" />
      <a class="title" :href="post.short_URL" target="_blank" v-html="post.title" tag="h2"></a>
      <p class="excerpt" v-html="post.excerpt"></p>
      <p
        class="date"
      >Posted {{new Date(post.date).toLocaleString('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</p>
    </div>

    <div
      id="retainable-rss-embed"
      data-maxcols="1"
      data-rss="https://medium.com/feed/@vinitapotter"
      data-layout="grid"
      data-poststyle="inline"
      data-readmore="Read the rest"
      data-buttonclass="btn btn-primary"
      data-offset="100"
    ></div>
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
    this.getRecentPost();
  },
  methods: {
    async getRecentPost() {
      let { data } = await axios.get(
        "https://public-api.wordpress.com/rest/v1.1/sites/abiteofsojourn.wordpress.com/posts/?number=1&pretty=true&fields=id,title,date,short_URL,excerpt,featured_image"
      );
      this.post = data.posts[0];
    },
  },
};
</script>

<style lang="scss" >
.post {
  margin-right: 10%;
  @media only screen and (max-width: 600px) {
    margin-right: 0;
  }
  .featured_image {
    width: 40vw;
    height: 24rem;
    display: block;
    object-fit: cover;
    margin-bottom: 1rem;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .excerpt {
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  .date {
    color: rgba(0, 0, 0, 0.54);
    font-style: italic;
    font-size: 0.8rem;
  }
}
.header {
  display: flex;
  justify-content: space-around;
}

#retainable-rss-embed {
  width: 40vw;
}
@media only screen and (max-width: 600px) {
  #rtb {
    display: none;
  }
}
</style>