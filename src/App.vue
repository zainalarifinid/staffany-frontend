<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Shift Management</h1>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            <!-- empty -->
          </v-col>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
