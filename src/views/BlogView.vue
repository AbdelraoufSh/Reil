<template>
    <v-row class="d-flex justify-center">
        <v-col cols="11" md="12" class="heading-block currentColor--text pt-8 pb-8">
            <p class="text-h4 text-xl-h2 mt-xl-16 mb-xl-8 text-lg-h3 font-weight-medium">{{$store.state.Blogpage[0]}}</p>
            <p class="text-body-2 text-lg-body-1 text-xl-h5  third--text">{{$store.state.Blogpage[1]}}</p>
        </v-col>
        <v-col cols="12">
            <v-row class="blog mb-8 d-flex justify-center " v-for="(image,index) in $store.state.images3" :key="index">
                <v-col cols="11" md="4" >
                    <v-img class="rounded-lg" :src="image" alt=""></v-img>
                </v-col>
                <v-col cols="11" md="8">
                    <p class="text-h6 text-md-h5 text-xl-h3 font-weight-bold text-center text-sm-start">{{$store.state.header[index]}}</p>
                    <p class="text-caption text-md-subtitle-2 text-xl-h5 text-center text-sm-start mt-xl-5 font-italic third--text mb-2">{{$store.state.date[index]}}</p>
                    <p class="text-body-2 text-md-body-1 text-xl-h4 mt-xl-6 text-center text-sm-start primary--text mt-2">{{$store.state.descr[index] }}</p>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<script>


</script>
<style>

</style>