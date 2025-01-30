import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
              primary:'#234345',
              secondary:'#333333',
              third:'#333',
              fourth:'#000',
              main:'#eee',
              font:'#110018'
            }
            ,
            dark:{
               primary:'#999999',
               secondary:'#fff',
               third:'#999',
               fourth:'#ddd',
               main:'#110018',
               font:'#eee'
            }
    }
}
}
);
