import { createApp } from 'vue'
import App from './App.vue'


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: "micro-app1", // app name registered
    entry: "//localhost:3011",
    container: "#micro-app1",
    activeRule: "/micro-app1",
    props: {
      niceBody: "malena",
      age: 32
    }
  },
  // {
  //   name: "micro-app2",
  //   entry: "//localhost:3012",
  //   container: "#micro-app2",
  //   activeRule: "/micro-app2",
  //   props: {
  //     niceBody: "malena",
  //     age: 32
  //   }
  // },
  {
    name: "micro-vue3-app3",
    entry: "//localhost:3014",
    container: "#micro-vue3-app3",
    activeRule: "/micro-vue3-app3",
    props: {
      niceBody: "malena",
      age: 32
    }
  }
]);

start();

createApp(App).mount('#app')