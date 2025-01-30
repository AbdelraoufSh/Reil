<template>
<v-row class="d-flex justify-center">
    <v-col cols="11" md="12"  class="currentColor--text pt-8 pb-4">
        <p class="text-h4 text-xl-h2 mt-xl-16 mb-xl-8 text-lg-h3 font-weight-medium">{{$store.state.Contactpage[0]}}</p>
        <p class="text-body-2 text-lg-body-1 text-xl-h5  third--text">{{$store.state.Contactpage[1]}}</p>
    </v-col>
    <v-col cols="11" md="12" >
        <v-form ref="form" v-model="value">
            <v-row class="content-box secondary--text  my-md-6 d-flex flex-column ml-1 align-center align-sm-start ">
                <v-col cols="12" sm="8" md="5" class="d-flex flex-column pa-0">
                    <label class="text-body-1 text-xl-h5 mb-2" for="1">{{$store.state.Contactpage[2]}}</label>
                    <v-text-field :rules="[valid.require]" solo class="small pa-0 font--text rounded" :v-model="form.name"  id="1"></v-text-field>
                </v-col>
                <v-col cols="12" sm="8" md="5" class="d-flex flex-column pa-0 mt-6">
                    <label class="text-body-1 text-xl-h5 mb-2" for="2">{{$store.state.Contactpage[3]}}</label>
                    <v-text-field solo  :rules="[valid.require,valid.email]" class="small pa-0 font--text rounded" :v-model="form.email"  id="2"></v-text-field>
                </v-col>
                <v-col cols="12" xl="8" class="d-flex flex-column pa-0 mt-6">
                    <label class="text-body-1  text-xl-h5 mb-2" for="3">{{$store.state.Contactpage[4]}}</label>
                    <v-textarea :rules="[valid.require]" solo class="large pa-0 font--text rounded" :v-model="form.message" ></v-textarea>
                </v-col> 
                <v-col cols="12" sm="2" class="pa-0">
                    <v-btn class="mt-6  mb-6 mb-sm-0 rounded text-xl-h6" min-width="100%" @click="post" :disabled="!value">
                        {{ $store.state.Contactpage[5] }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-col>
</v-row>
</template>
<script>
export default{
    data(){
        return{
            value:true,
            valid:{
                require: value => !!value || 'Required.',
                email:value => /.+@.+/.test(value) || 'E-mail must be valid'
            },
            form:{
                name:'',
                email:'',
                message:''
            }
        }
    }  
    ,
    methods:{
        post(){
            this.$refs.form.validate();
            if(this.value){
                this.$refs.form.reset()
            }
        }
    }
}
</script>
<style>
</style>