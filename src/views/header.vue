<template>
    <header class="py-11 ">
        <v-row class="d-flex justify-center align-center">
            <v-col cols="9" sm="10" md="11"  class="d-flex pa-0 px-md-4">
              <v-row class="d-flex align-center justify-space-between h">
                    <v-col cols="2">
                        <svg fill="none" height="7vh" viewBox="0 0 40 40" width="7vh" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.0608 35.9556C36.884 32.3041 40 26.5159 40 20C40 13.8167 37.194 8.28885 32.786 4.6202C33.8193 6.49511 34.336 8.57807 34.336 10.8691C34.336 13.6739 33.5312 16.2312 31.9215 18.541C30.3521 20.8096 27.9175 22.3564 24.6177 23.1813L32.0608 35.9556Z" fill="currentColor"></path>
                            <path d="M5 6.77089C1.88818 10.2966 0 14.9278 0 20C0 25.0722 1.88818 29.7035 5 33.2291V6.77089Z" fill="currentColor"></path>
                            <path d="M11.8813 38.2835C14.3623 39.3869 17.1096 40 20 40C22.0013 40 23.9339 39.7061 25.757 39.159L17.1328 23.8H11.8813V38.2835Z" fill="currentColor">
                            </path><path d="M19.4869 18.1698H11.8813V3.75397H19.4869C22.1026 3.75397 24.0543 4.3933 25.3421 5.67195C26.6298 6.90937 27.2736 8.64174 27.2736 10.8691C27.2736 13.0964 26.6097 14.87 25.2817 16.1899C23.994 17.5098 22.0624 18.1698 19.4869 18.1698Z" fill="currentColor"></path>
                          </svg>
                    </v-col>
                    <v-col cols="4" sm="2" md="5" class="d-flex pt-4">
                        <v-row class="d-flex justify-space-between">
                          <v-col cols="10" class="d-none d-md-flex justify-space-between d v">
                            <p  @click="selected='1'" :style="{position:'relative'}" :class="{active:selected==='1'}">
                              <router-link  class="text-body-2 text-xl-h6 text-decoration-none font-weight-medium fourth--text"  to="/">Portfolio</router-link>
                            </p>
                            <p @click="selected='2'" :style="{position:'relative'}" :class="{active:selected==='2'}">
                              <router-link   class="text-body-2 text-xl-h6 text-decoration-none font-weight-medium fourth--text" to="/Blog">Blog</router-link>
                            </p>
                            <p @click="selected='3'" :style="{position:'relative'}" :class="{active:selected==='3'}">
                              <router-link  class="text-body-2 text-xl-h6 text-decoration-none font-weight-medium fourth--text" to="/about">About</router-link>
                            </p>
                            <p @click="selected='4'" :style="{position:'relative'}" :class="{active:selected==='4'}">
                              <router-link  class="text-body-2 text-xl-h6 text-decoration-none font-weight-medium fourth--text" to="/Contact">Contact</router-link>
                            </p>
                          </v-col>
                          <v-col cols="5" md="1" class="pa-0 pt-2" >
                           <div class="d-flex justfiy-center align-center">
                            <label
                              for="themeToggle"
                              class="themeToggle st-sunMoonThemeToggleBtn "
                              type="checkbox"
                            >
                              <input v-model="$vuetify.theme.dark" type="checkbox" id="themeToggle" class="themeToggleInput" />
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="none"
                              >
                                <mask id="moon-mask">
                                  <rect x="0" y="0" width="20" height="20" fill="white"></rect>
                                  <circle cx="11" cy="3" r="8" fill="black"></circle>
                                </mask>
                                <circle
                                  class="sunMoon"
                                  cx="10"
                                  cy="10"
                                  r="8"
                                  mask="url(#moon-mask)"
                                ></circle>
                                <g>
                                  <circle class="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
                                  <circle class="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
                                  <circle class="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
                                  <circle class="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
                                  <circle class="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
                                  <circle class="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
                                </g>
                              </svg>
                            </label>
                           </div>
                          </v-col>
                          <v-col cols="4" class="d-flex flex-row-reverse d-md-none">
                            <template>
                              <div class="text-center">
                                <v-menu offset-y 
                                 
                                transition="slide-y-transition"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    
                                      <div class="d-flex flex-column"
                                      v-bind="attrs"
                                      v-on="on">
                                        <div class="fourth   rounded-lg px-3 pb-1"></div>
                                        <div class="fourth mt-1 rounded-lg px-3 pb-1"></div>
                                        <div class="fourth mt-1 rounded-lg px-3 pb-1"></div>

                                      </div>
                                  </template>
                                  <v-list class="d">
                                    <v-list-item>
                                      <p  @click="selected='1'" :style="{position:'relative'}" :class="{active2:selected==='1'}">
                                        <router-link  class="text-body-2 text-decoration-none font-weight-medium fourth--text"  to="/">Portfolio</router-link>
                                      </p>
                                    </v-list-item>
                                    <v-list-item>
                                      <p @click="selected='2'" :style="{position:'relative'}"  :class="{active2:selected==='2'}">
                                        <router-link   class="text-body-2 text-decoration-none font-weight-medium fourth--text" to="/Blog">Blog</router-link>
                                      </p>

                                    </v-list-item>
                                    <v-list-item>
                                      <p @click="selected='3'" :style="{position:'relative'}" :class="{active2:selected==='3'}">
                                        <router-link  class="text-body-2 text-decoration-none font-weight-medium fourth--text" to="/about">About</router-link>
                                      </p>
                                    </v-list-item>
                                    <v-list-item>
                                      <p @click="selected='4'" :style="{position:'relative'}"  :class="{active2:selected==='4'}">
                                        <router-link  class="text-body-2 text-decoration-none font-weight-medium fourth--text" to="/Contact">Contact</router-link>
                                      </p>
                                    </v-list-item>
                                  </v-list>
                                </v-menu>
                              </div>
                            </template>
                          </v-col>
                        </v-row>
                    </v-col>
              </v-row>
            </v-col>

        </v-row>
    </header>
</template>
<script>
import switches from '@/components/switch.vue'
export default {
  comments:{switches},
data:()=>({
  selected:''
}),
methods:{
},
created(){
  this.selected=this.$route.meta.index;
},
mounted(){

  }
}
</script>
<style>

.d .active::before{
  content: '';
  width: 7px;
  height: 7px;
  display: block;
  position: absolute;
  top: 37%;
  border-radius: 50%;
  left: -12px;
}
.d .active2::before{
  content:'';
  width: 100%;
  height: 3px;
  display: block;
  position: absolute;
  top: 110%;
  border-radius: 10px;
}
/*theme switch css*/
/* From Uiverse.io by Type-Delta */ 
/* a clone from joshwcomeau.com 
 * but this version runs on pure CSS
 */

 .themeToggle {
    color: currentColor;
    width: 3em;
  }
  
  .st-sunMoonThemeToggleBtn {
    position: relative;
    cursor: pointer;
  }
  
  .st-sunMoonThemeToggleBtn .themeToggleInput {
    opacity: 0;
    width: 100%;
    aspect-ratio: 1;
  }
  
  .st-sunMoonThemeToggleBtn svg {
    position: absolute;
    left: 0;
    width: 28px;
    height: 28px;
    transition: transform 0.4s ease;
    transform: rotate(40deg);
  }
  
  .st-sunMoonThemeToggleBtn svg .sunMoon {
    transform-origin: center center;
    transition: inherit;
    transform: scale(1);
  }
  
  .st-sunMoonThemeToggleBtn svg .sunRay {
    transform-origin: center center;
    transform: scale(0);
  }
  
  .st-sunMoonThemeToggleBtn svg mask > circle {
    transition: transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575);
    transform: translate(0px, 0px);
  }
  
  .st-sunMoonThemeToggleBtn svg .sunRay2 {
    animation-delay: 0.05s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay3 {
    animation-delay: 0.1s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay4 {
    animation-delay: 0.17s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay5 {
    animation-delay: 0.25s !important;
  }
  .st-sunMoonThemeToggleBtn svg .sunRay5 {
    animation-delay: 0.29s !important;
  }
  
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg {
    transform: rotate(90deg);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg mask > circle {
    transform: translate(16px, -3px);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunMoon {
    transform: scale(0.55);
  }
  .st-sunMoonThemeToggleBtn .themeToggleInput:checked + svg .sunRay {
    animation: showRay1832 0.4s ease 0s 1 forwards;
  }

  
  @keyframes showRay1832 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  
</style>