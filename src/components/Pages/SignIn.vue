<template>
    <div class="main-layout card-bg-1">
        <div class="container d-flex flex-column">
            <div class="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                <div class="col-12 col-md-6 col-lg-5 col-xl-4">
                    <h1 class="font-weight-bold">Sign in</h1>
                    <p class="text-dark mb-3">We are Different, We Make You Different.</p>
                    <form class="mb-3">
                        <my-input
                                name="email"
                                label="Email"
                                :value="loginform.email"
                                @update="update"
                                type="email"
                                inpclass="form-control form-control-md"
                                placeholder="Enter your email"
                                labelcalss="sr-only"
                        />
                        <my-input
                                name="password"
                                label="Password"
                                :value="loginform.password"
                                @update="update"
                                type="password"
                                inpclass="form-control form-control-md"
                                placeholder="Enter your password"
                                labelcalss="sr-only"
                        />
                        <div class="form-group d-flex justify-content-between">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" :checked="rememberMe"
                                       id="checkbox-remember" value="1"
                                       v-model="rememberMe">
                                <label class="custom-control-label text-muted font-size-sm" for="checkbox-remember">Remember me</label>
                            </div>

                            <router-link
                                    to="/reset-password"
                                    title="Reset password"
                                    class="font-size-sm">
                                Reset password
                            </router-link>
                        </div>
                        <button class="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                                @click="doLogin"
                                type="submit">Sign in</button>
                    </form>

                    <p>Don't have an account? <router-link
                            to="/sign-up"
                            title="Sign Up"
                            class="font-size-sm">
                        Sign up
                    </router-link>.</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import {defineComponent, onMounted, onUnmounted, reactive, ref} from 'vue'
    import MyInput from "../Base/MyInput.vue";

    export default defineComponent({
        name: "SignIn",
        components : {
            MyInput
        },

        setup: () => {
            const rememberMe = ref(false);
            const loginform = reactive({
                email : '',
                password : ''
            });
            onMounted(()=>{

                document.body.classList.add('authentication-page')
            })
            onUnmounted(()=>{
                document.body.classList.remove('authentication-page')
            })
            function doLogin()
            {
                console.log("do login code will goes here")
                console.log(loginform)
            }
            function update(payload: Object) :void {
                loginform[payload.name] = payload.value
            }
            return {rememberMe,loginform,doLogin,update}
        }
    })
</script>

<style scoped>

</style>
