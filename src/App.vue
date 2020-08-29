<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
#app {
  font-family: "Quicksand", sans-serif;
  margin: 1rem 6rem;
  line-height: 24px;
  letter-spacing: 0.5px;
}
@media only screen and (max-width: 600px) {
  #app {
    margin: 0;
  }
}

.is-pointer {
  cursor: pointer;
}
</style>