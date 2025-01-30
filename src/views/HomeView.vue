<template>
  <v-row class="d-flex flex-column px-2 currentColor--text align-center">
    <v-col cols="12" md="12"  class="d-flex flex-column align-center align-sm-start heading-block currentColor--text pt-8 pb-4">
        <p class="text-h5 text-sm-h4  text-xl-h2 mt-xl-16 mb-xl-8 text-lg-h3 font-weight-medium">{{$store.state.Homepage[0]}}</p>
        <p class="text-body-2 text-center text-md-start text-lg-body-1 text-xl-h5  third--text">{{$store.state.Homepage[1]}}</p>
    </v-col>
    <v-col lg="12"  class="first-block mt-8 mb-10">
      <p class="text-h5 text-md-h4 text-xl-h3  mb-xl-12 font-weight-medium mb-8 text-center text-sm-start " :style="{position:'relative'}">{{ $store.state.Homepage[2] }} </p>
      <v-row>
        <v-col :style="{position:'relative'}"  class="pa-2" xs='12'  sm="6" md="4" v-for="(image,index) in $store.state.images1" :key="index">
              <div :style="{position:'absolute',zIndex:3}"  class="transparen rounded pa-4"><p class="body-1">{{$store.state.titles1[index]}}</p></div>
              <v-img class="rounded"  :src="image"></v-img>
          
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="12"  class="second-block mt-8">
      <p class="text-h5 text-md-h4 text-xl-h3 mb-xl-12 font-weight-medium mb-8 text-center text-sm-start" :style="{position:'relative'}">{{ $store.state.Homepage[3] }} </p>
      <v-row>
        <v-col  :style="{position:'relative'}" class="pa-2"  xs="12" sm='6' md="4" v-for="(image,index) in $store.state.images2" :key="index">
              <div :style="{position:'absolute',zIndex:3}" class="transparen rounded pa-4"><p class="body-1">{{$store.state.titles2[index]}}</p></div>
              <v-img class="rounded" :src="image"></v-img>
          
        </v-col>
      </v-row>
    </v-col>
    
  </v-row>
</template>

<script>

  export default {
    name: 'Home',
    methods:{
  
    },
    components: {
   
    },
  }
</script>
<style scoped>
.transparen{
  width:calc( 100% - 15px);
  height:calc(100% - 15px);
  color: rgba(0,0,0,0);
  background-color: rgba(0,0,0,0);
  transition: 0.3s;

}
.theme--dark .transparen{
  background-color: rgba(0,0,0,0.2);
}
.transparen:hover{
  background-color: rgba(0,0,0,0.6);
  color:white;
}
</style>
