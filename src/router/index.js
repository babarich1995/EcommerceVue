import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import view_product from "../views/Product.vue"
import Cart from "../views/Cart.vue"


const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/view_product/:id",
    name: "view_product",
    component: view_product,
  },
 
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
 
 
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
