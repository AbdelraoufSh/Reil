<template>
  <v-row class="d-flex justify-center">
    <v-col cols="11" md="12"  class=" heading-block currentColor--text pt-8 pb-4">
      <p class="text-h4 text-xl-h2 mt-xl-16 mb-xl-8 text-lg-h3 font-weight-medium">{{$store.state.Aboutpage[0]}}</p>
      <p class="text-body-2 text-lg-body-1 text-xl-h5  third--text">{{$store.state.Aboutpage[1]}}</p>
    </v-col>
    <v-col cols="12" >
      <v-row class="pt-md-8 pt-4 pb-4 d-flex d-md-block justify-center">
        <v-col cols="11" md="9" class="mb-md-10 mb-4"><v-img class="rounded-lg" :src="$store.state.images[17]" alt=""></v-img></v-col>
        <v-col cols="11" md="9"  class=" pa-2 ml-2 " v-for="(text,index) in $store.state.texts" :key="index"><p class="text-subtitle-2 text-md-body-2 text-xl-h5 primary--text ma-0 text-center text-sm-start">{{text}}</p></v-col>
      </v-row>
    </v-col>
 
  </v-row>
</template>
<style>

</style>