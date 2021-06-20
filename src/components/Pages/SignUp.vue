<template>
    <div class="main-layout card-bg-1">
        <div class="container d-flex flex-column">
            <div class="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                <div class="col-12 col-md-6 col-lg-5 col-xl-4">
                    <h1 class="font-weight-bold">Sign up</h1>
                    <p class="text-dark mb-3">We are Different, We Make You Different.</p>
                    <form class="mb-3">

                        <my-input
                                name="name"
                                label="Name"
                                :value="signupform.name"
                                @update="update"
                                type="text"
                                inpclass="form-control form-control-md"
                                placeholder="Enter your name"
                                labelcalss="sr-only"
                        />
                        <my-input
                                name="email"
                                label="Email"
                                :value="signupform.email"
                                @update="update"
                                type="email"
                                inpclass="form-control form-control-md"
                                placeholder="Enter your email"
                                labelcalss="sr-only"
                        />
                        <my-input
                                name="password"
                                label="Password"
                                :value="signupform.password"
                                @update="update"
                                type="password"
                                inpclass="form-control form-control-md"
                                placeholder="Enter your password"
                                labelcalss="sr-only"
                        />
                        <button class="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                                @click="doSignUp"
                                type="submit">Sign up</button>
                    </form>

                    <p>Already have an account? <router-link
                            to="/sign-in"
                            title="Sign In"
                            class="font-size-sm">
                        Sign in
                    </router-link>.</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import {defineComponent, onMounted, onUnmounted, reactive} from 'vue'
    import MyInput from "../Base/MyInput.vue";
    export default defineComponent({
        name: "SignUp",
        components : {
            MyInput
        },
        setup:() => {
            const signupform = reactive({
                name : '',
                email : '',
                password : ''
            });
            onMounted(()=>{
                document.body.classList.add('authentication-page')
            })
            onUnmounted(()=>{
                document.body.classList.remove('authentication-page')
            })
            function doSignUp()
            {
                console.log("do signup code will goes here")
                console.log(signupform)
            }
            function update(payload: Object) :void {
                signupform[payload.name] = payload.value
            }
            return {doSignUp,update,signupform}
        }
    })
</script>

<style scoped>

</style>
