<template>
  <div id="app">
    <div class="badge">
      <img src="@/assets/house_symbol.svg" alt="house" />
    </div>
    <div class="top">
      <div class="nav">
        <a href="https://www.instagram.com/vinita_potter/">
          <img src="@/assets/instagram.svg" alt class="icon" />
        </a>
        <a href="https://twitter.com/vinita__potter">
          <img src="@/assets/twitter.svg" alt class="icon" />
        </a>
        <a href="http:/abiteofsojourn.wordpress.com/">
          <img src="@/assets/wordpress.svg" alt class="icon" />
        </a>
        <a href="https://medium.com/@vinitapotter">
          <img src="@/assets/medium.svg" alt class="icon" />
        </a>
      </div>
      <p class="quote">
        It is our choices, Harry, that show what we truly are, far more than our
        abilities.
      </p>
      <p class="albus">-Albus Dumbledore</p>
    </div>
    <div class="bottom">
      <p class="name">Vinita Potter</p>
      <p class="title">
        And the day she finds the time to develope this website 🙂
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark_mode_on: true,
    };
  },
};
</script>

<style lang="scss" >
// @import url("https://fonts.googleapis.com/css2?family=Orelega+One&display=swap");
body {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: "arkhip";
  src: url("~@/assets/Arkhip_font.ttf"); /* IE9 Compat Modes */
}
#app {
  font-family: "arkhip", sans-serif;
  line-height: 24px;
  letter-spacing: 0.5px;
  background: white;
  max-height: 100vh;
}

.top {
  height: 40vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .nav {
    align-self: flex-end;
    z-index: 100;
    margin-bottom: 8rem;
    a {
      cursor: pointer;
      .icon {
        height: 1.5rem;
        padding: 0 1.5rem;
      }
    }
  }
}
.albus {
  align-self: flex-end;
  margin-right: 20rem;
}
.bottom {
  height: 60vh;
  background: #a46a1e;
  clip-path: polygon(0 0, 100% 40%, 100% 100%, 0% 100%);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .name {
    padding-top: 5rem;
    font-size: 2rem;
  }
}

.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
  img {
    height: 15rem;
  }
}

.dark-mode {
  filter: invert(100%) hue-rotate(180deg);
  img,
  a {
    filter: invert(100%) hue-rotate(180deg);
  }
}

@media only screen and (max-width: 600px) {
  #app {
    margin: 0;
  }
  .badge {
    img {
      height: 10rem;
    }
  }
  .top {
    .nav {
      margin-bottom: 2rem;
    }
  }
  .quote {
    padding: 1rem;
  }
  .albus {
    padding: 1rem;
    margin: 0;
  }
  .title {
    text-align: end;
    padding: 0 3rem;
  }
}

.is-pointer {
  cursor: pointer;
}
</style>