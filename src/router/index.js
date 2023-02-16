import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import METProjectView from "../views/METProjectView.vue";
import MathVisualizerProjectView from "../views/MathVisualizerProjectView.vue";
import DivyUpProjectView from "../views/DivyUpProjectView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/met",
    name: "met",
    component: METProjectView,
  },
  {
    path: "/math_visualizer",
    name: "mathVisualizer",
    component: MathVisualizerProjectView,
  },
  {
    path: "/divy_up",
    name: "divyUp",
    component: DivyUpProjectView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
