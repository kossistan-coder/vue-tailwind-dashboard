import { createRouter, createWebHistory } from 'vue-router'
import OverView from '../views/dashboard/OverView.vue'
import OrdersView from '../views/dashboard/OrdersView.vue'
import FoodView from '../views/dashboard/FoodView.vue'
import RestaurantView from '../views/dashboard/RestaurantView.vue'
import UsersView from '../views/dashboard/UsersView.vue';
import LivreursView from '../views/dashboard/LivreursView.vue';
import SettingsView from '../views/dashboard/SettingsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard/overview',
      name: 'home',
      component: OverView
    },
    {
      path: '/dashboard/commandes',
      name: 'Orders',
      component: OrdersView
    },
    {
      path: '/dashboard/nourritures',
      name: 'FoodView',
      component: FoodView,
    },
    {
      path: '/dashboard/restaurants',
      name: 'RestaurantView',
      component: RestaurantView,
    },

    {
      path: '/dashboard/utilisateurs',
      name: 'UsersView',
      component: UsersView,
    },
    {
      path: '/dashboard/livreurs',
      name: 'LivreursView',
      component: LivreursView,
    },
    {
      path: '/dashboard/parametres',
      name: 'SettingsView',
      component: SettingsView,
    },
 
  ]
})

export default router
