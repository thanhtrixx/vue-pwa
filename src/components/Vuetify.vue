<template>

  <v-app>
    <v-navigation-drawer></v-navigation-drawer>
    <v-toolbar></v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer></v-footer>
  </v-app>

</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
