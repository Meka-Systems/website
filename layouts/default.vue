<template>

  <div id='container'>
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-brand class='title' href="#"><h1 align='middle' class="title">
        MEKA
      </h1>
        <h1 align='middle' class="title2">
          SYSTEMS
        </h1></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" right>Available Services</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt class='pageContent'/>
  </div>
</template>

<style scoped>

  #container {
    /*max-width: 1000px;*/
    margin: auto;
  }

  @font-face {
    font-family: LOGO;
    src: url('/LOGO.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Do Hyeon";
    src: url('/DoHyeon.ttf');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: "Do Hyeon",serif;
    color: #5c5c5c;
  }

  .pageContent {
    max-width: 1000px;
    margin: auto;
  }

  .title {
    font-family: LOGO;
    font-size: 1rem;
    color: darkblue;
  }

  .title {
    font-family: LOGO;
    padding-top: 0.5rem;
    font-size: 1.6rem;
    line-height: 0.5rem;
    color: darkblue;
  }

  .title2 {
    /*border: 0.12rem solid black;*/
    /*opacity: 0.8;*/
    margin-bottom: 0;
    font-family: LOGO;
    font-size: 0.9rem;
    color: darkblue;
  }

</style>
