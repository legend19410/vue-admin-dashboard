import { createRouter, createWebHistory } from "vue-router";
import MainDashboard from "../shared/layouts/maindashboard.vue";
import Errorpagesinfo from "../shared/layouts/errorpagesinfo.vue";

const routes = [
  {
    path: '/',
    component: MainDashboard,
    children:
      [
        {
          path: '',
          redirect: 'dashboard/crm',
        },
        //Dashboard
        {
          path: `dashboard`,
          name: 'Dashboard',
          children: [
            {
              path: 'crm',
              name: "CRM",
              component: () => import("../components/dashboard/crm.vue"),
            },
          ],
        },
      ],
  },

  // earrorpage
  {
    path: `/error`,
    component: Errorpagesinfo,
    children: [
      {
        path: "error404",
        component: () => import("../components/error/error404.vue"),
      },
    ]
  }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

