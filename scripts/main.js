import {VBody} from "../components/body.js";
const app = Vue.createApp({
				components:{VBody},
				data (){
								return {
												loading: true
								}
				},
				mounted (){
								setTimeout(()=>{
												this.loading = false;
				}, 2500);

				}
});
app.mount("#app");


