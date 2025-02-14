import "./assets/main.css";
import "primeicons/primeicons.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from "./router";
import { VueQueryPlugin } from "@tanstack/vue-query";

import { createApp } from "vue";
import App from "./App.vue";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(router);
app.use(Toast);

app.mount("#app");
