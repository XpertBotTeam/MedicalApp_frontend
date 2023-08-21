import { createWebHistory, createRouter } from "vue-router";
import AppHome from "@/components/AppHome.vue";
import AppLogin from "@/components/AppLogin.vue";  

const routes =[
    {path: '/', name:'Home', component: AppHome},
    {path: '/Login', name:'Login', component: AppLogin},
]

const router = createRouter(
{
    history: createWebHistory(),
    routes
}
);
export default router;
