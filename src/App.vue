<template>
  <div id="app">
      <Layout>
           <router-view />
      </Layout>

  </div>
</template>
<script lang="ts">
    import Layout from '@/layouts/index.vue';
    import { Component, Vue } from 'vue-property-decorator';
    import { NavBar } from 'vant';
    @Component({
        components: {
            Layout
        }
    })
    export default class App extends Vue {
    }
</script>
