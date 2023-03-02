<template>
  <div id="app">
  <v-app dark>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
  </div>
</template>
<script>

export default {

  methods: {
  },
  name: 'App',
  data: () => ({
  }),
  created() {
  }
}
</script>
<style lang="scss">
  //global css
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,700;1,900&display=swap');


  .content-page {
    background-color: #fdfdfd;
  }

  /*
    color palette:
      https://colorhunt.co/palette/3d17666f1ab6ff0032cd0404
    colors:
      #3D1766
      #6F1AB6
      #FF0032
      #CD0404
  */
  $color-palette-1: #3D1766;
  $color-palette-2: #6F1AB6;
  $color-palette-3: #FF0032;
  $color-palette-4: #CD0404;

  .color-palette-1 {
    color: #3D1766 !important;
  }

  .color-palette-2 {
    color: #6F1AB6 !important;
  }

  .color-palette-3 {
    color: #FF0032 !important;
  }

  .color-palette-4 {
    color: #CD0404 !important;
  }

  .color-black {
    color: black !important;
  }

  #app {
    font-family: 'Poppins', sans-serif !important;
  }

  .width-100 {
    width: 100% !important;
  }

  .height-100 {
    height: 100% !important;
  }
  
  html, body {
    width: 100% !important;
  }

  .icon-bt-danger {
    color: $color-palette-3;
    cursor: pointer;
  }

  .icon-bt-primary {
    color: $color-palette-2;
    cursor: pointer;
  }
  .full-width {
    width: 100% !important;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
