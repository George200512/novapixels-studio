import {Body} from "../components/body.js";
const app = Vue.createApp({
				components:{Body}
});
app.mount("#app");

setTimeout(()=>{
								document.getElementById("app").innerHTML = "<Body>"
				}, 3000);
