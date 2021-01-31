import { createWebHistory, createRouter } from "vue-router";
import LihatData from "@/views/Index.vue";
import TambahData from "@/views/Create.vue";
import EditData from "@/views/Edit.vue";

const routes = [
    {
        path: "/",
        name: "Index",
        component: LihatData
    },
    {
        path: "/Add",
        name: "Create",
        component: TambahData
    },
    {
        path: "/Change/:key",
        name: "Edit",
        component: EditData
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;