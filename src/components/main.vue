<template>
  <div>
    <!-- <div class="navbar">
      <router-link :to="{ name: 'Home' }" tag="p" class="logo"
        >VinitaPotter</router-link
      >

      <div class="navbar-icons">
        <router-link :to="{ name: 'About' }" tag="a">
          <img src="../assets/woman.svg" alt class="icon" />
        </router-link>
        <a href="https://www.instagram.com/vinita_potter/">
          <img src="../assets/instagram.svg" alt class="icon" />
        </a>
        <a href="https://twitter.com/vinita__potter">
          <img src="../assets/twitter.svg" alt class="icon" />
        </a>
        <a href="http:/abiteofsojourn.wordpress.com/">
          <img src="../assets/wordpress.svg" alt class="icon" />
        </a>
        <a href="https://medium.com/@vinitapotter">
          <img src="../assets/medium.svg" alt class="icon" />
        </a>
      </div>
    </div>

    <app-header v-if="!$route.query || !$route.query.filter" />
    <div class="divider"></div>
    <app-body></app-body>
    <app-footer></app-footer> -->
  </div>
</template>

<script>
// import Header from "../views/header";
// import Body from "../views/body";
// import Footer from "../views/footer";

export default {
  data() {
    return {
      data: null,
    };
  },

  // components: {
  //   "app-header": Header,
  //   "app-body": Body,
  //   "app-footer": Footer,
  // },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");

.logo {
  font-family: "Yeseva One", cursive;
  font-size: 2rem;
  background: linear-gradient(
    90deg,
    rgba(238, 174, 207, 1) 36%,
    rgba(150, 148, 233, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar {
  display: flex;
  justify-content: space-between;

  p {
    cursor: pointer;
  }
  div {
    display: flex;
    p {
      margin: 0 1rem;
      cursor: pointer;
    }
  }
  &-icons {
    @media only screen and (max-width: 600px) {
      position: fixed;
      bottom: 0;
      background: white;
      width: 100%;
      right: 0;
      padding: 1rem;
      border-top: 1px solid #9694e9;
      justify-content: space-between;
    }
  }
}
.navigation {
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 20rem;
  @media only screen and (max-width: 600px) {
    margin: 0;
  }
  p {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 9px;
    &:hover {
      box-shadow: 1px 1px 5px 1px #eeaecf, -1px -1px 5px 1px #9694e9;
    }
    &.selected {
      font-weight: 900;
      box-shadow: 1px 1px 5px 1px #eeaecf, -1px -1px 5px 1px #9694e9;
    }
  }
}

.divider {
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  max-width: 1032px;
  margin: 3rem auto;
}
.icon {
  height: 2rem;
  margin-left: 2rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    background: linear-gradient(
      90deg,
      rgba(238, 174, 207, 1) 36%,
      rgba(150, 148, 233, 1) 100%
    );
    animation-fill-mode: pink;
    // padding: 6px;
    border-radius: 5px;
  }
  @media only screen and (max-width: 600px) {
    margin: auto;
  }
}
</style>
