<template>
 <v-app class="main font--text" :style="{transition:'0.2s'}">
     <heade />
   <v-main >
      <v-row class="d-flex justify-center z">
        <v-col cols="11">
          <router-view>
          </router-view>
        </v-col>
      </v-row>
   </v-main>
    <foote />
 </v-app>
</template>

<script>
import heade from '@/views/header.vue'
import foote from '@/views/footer.vue'
export default {
  components:{heade,foote},
  name: 'App',

  data: () => ({
    //
  }),
mounted(){

},
created(){
  this.$store.commit('get');
  this.$store.commit('fetchImages');
}
};
</script>
<style>
.theme--dark .d .active2::before{
  background: #ddd;
}
.theme--light .d .active2::before{
  background: #000;
}
.theme--dark .active::before{
  background: #eed;
}
.theme--light .active::before{
  background: #000;
}
</style>