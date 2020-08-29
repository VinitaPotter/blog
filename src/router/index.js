import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/main.vue";
import Post from "@/views/post.vue";
import About from "@/views/about.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: ":id",
    name: "Post",
    component: Post,
  },
  {
    path: "about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
