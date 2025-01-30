import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Homepage:[],selected:0,Aboutpage:[],Contactpage:[],texts:[],Blogpage:[],check:0,images:[],titles1:[],titles2:[],images1:[],images2:[],images3:[],header:[],date:[],descr:[],links:[{path:'/',text:'Portfolio'},{path:'/Blog',text:'Blog'},{path:'/about',text:'About'},{path:'/Contact',text:'Contact'}]
  },
  getters: {
 
  },
  mutations: {
    get(state){
      axios('/api/hello')
      .then(response => {
       state.Homepage=response.data.Homepage;
       state.Blogpage=response.data.BlogPage;
       state.Aboutpage=response.data.AboutPage;
       state.Contactpage=response.data.ContactPage;
       state.header=response.data.headers;
       state.date=response.data.dates;
       state.descr=response.data.descrs;
       state.titles1=response.data.firstimagestitle;
       state.titles2=response.data.secondimagestitle;
       for(let i=2;i<5;i++){
        state.texts.push(state.Aboutpage[i]);
       }
      })}
      ,  async fetchImages(state) {
        try {
          // Send a GET request to the '/images' endpoint to fetch the list of image URLs
          const response = await axios.get('/api/images');
          state.images = response.data; // Set the response data (array of image URLs)
        } catch (error) {
          console.error('Error fetching images:', error);
        }
        for(let i=2;i<=7;i++){
          state.images1.push(state.images[i]);
        }
        for(let i=8;i<=13;i++){
          state.images2.push(state.images[i]);
        }
        for(let i=14;i<=16;i++){
          state.images3.push(state.images[i]);
        }
        
    }

  },
  actions: {
  },
  modules: {
  }
})
