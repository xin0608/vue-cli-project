import { defineStore } from "pinia";
import { login } from "@/api/user";

// 在组件中调用
// import { useUserStore } from "@/store/user";

// const userStore = useUserStore();
// const handleLogin = () => {
//     userStore.login("admin", "password");
// };


export const useUserStore = defineStore('user', {
    state: () => ({
        userInfo: null,
        isLoggedIn: false
    }),
    actions: {
        async login(username, password) {
            const res = await login({ username, password })
            this.userInfo = res.data
            this.isLoggedIn = true
        }
    }
})