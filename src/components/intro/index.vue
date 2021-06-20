<template>
    <section class="bg-light theme-shadow card-bg-1 py-5">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-xxl-7 col-xl-8 col-lg-9 col-md-10">
                    <div class="badge badge-secondary">v1.0</div>

                    <h1 class="display-4 font-weight-semibold text-primary">
                        Quicky Messanger
                    </h1>

                    <p>
                        The powerful React JS messaging framework that especially
                        build for developers and designer to help build messaging and
                        chat application fast and easily. It is a fully responsive
                        template.
                    </p>

                    <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mt-4">

                        <router-link
                                to="/Chats"
                                @click.native="setThemeColor(ThemeColor.Light)" target="_blank">
                            View demo
                        </router-link>

                        <a
                                href="https://themeforest.net/item/quicky-react-chat-template/30002388"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-md btn-danger mx-2"
                        >
                            Purchase now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-white border-bottom theme-shadow py-5">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-8">
                    <h2 class="font-weight-semibold pb-4">Demos</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 my-3">

                    <router-link
                            to="/Chats"
                            @click.native="setThemeColor(ThemeColor.Light)" class="text-reset" target="_blank">
                        <div class="card">
                            <img
                                    class="img-fluid rounded-top"
                                    alt=""
                                    :src=LightSkin
                            >
                            <div class="card-body">
                                <h6 class="m-0 text-center">Light Skin</h6>
                            </div>
                        </div>
                    </router-link>


                </div>
                <div class="col-sm-6 col-md-4 my-3">

                    <router-link
                            to="/Chats"
                            @click.native="setThemeColor(ThemeColor.Dark)" class="text-reset" target="_blank">
                        <div class="card">
                            <img
                                    class="img-fluid rounded-top"
                                    :src=DarkSkin
                                    alt=""
                            >
                            <div class="card-body">
                                <h6 class="m-0 text-center">Dark Skin</h6>
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="col-sm-6 col-md-4 my-3">

                    <router-link
                            to="/Chats"
                            @click.native="setThemeColor(ThemeColor.Light, true)" class="text-reset" target="_blank">
                        <div class="card">
                            <img
                                    class="img-fluid rounded-top"
                                    :src=RTLLIghtSkin
                                    alt=""
                            >
                            <div class="card-body">
                                <h6 class="m-0 text-center">RTL Light Skin</h6>
                            </div>
                        </div>
                    </router-link>


                </div>
                <div class="col-sm-6 col-md-4 my-3">
                    <router-link
                            to="/Chats"
                            @click.native="setThemeColor(ThemeColor.Dark, true)" class="text-reset" target="_blank">
                        <div class="card">
                            <img
                                    class="img-fluid rounded-top"
                                    :src=RTLDarkSkin
                                    alt=""
                            >
                            <div class="card-body">
                                <h6 class="m-0 text-center">RTL Dark Skin</h6>
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="col-sm-6 col-md-4 my-3">
                    <router-link
                            to="/sign-in"
                            @click.native="setThemeColor(ThemeColor.Light)"
                            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset" target="_blank">
                        <img
                                :src=LigntSignIn
                                alt="light signin"
                                class="img-fluid border-bottom rounded-top"
                        >
                        <div class="bg-light text-center py-2">Sign in</div>
                    </router-link>

                </div>
                <div class="col-sm-6 col-md-4 my-3">
                    <router-link
                            to="/sign-up"
                            @click.native="setThemeColor(ThemeColor.Light)"
                            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset" target="_blank">
                        <img
                                :src=LightSignUp
                                alt="light signup"
                                class="img-fluid border-bottom rounded-top"
                        >
                        <div class="bg-light text-center py-2">Sign up</div>
                    </router-link>

                </div>
                <div class="col-sm-6 col-md-4 my-3">
                    <router-link
                            to="/reset-password"
                            @click.native="setThemeColor(ThemeColor.Light)"
                            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset" target="_blank">
                        <img
                                :src=LightResetPassword
                                alt="light reset password"
                                class="img-fluid border-bottom rounded-top"
                        >
                        <div class="bg-light text-center  py-2">
                            Reset password
                        </div>
                    </router-link>


                </div>
                <div class="col-sm-6 col-md-4 my-3">
                    <router-link
                            to="/sign-in"
                            @click.native="setThemeColor(ThemeColor.Dark)"
                            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset" target="_blank">
                        <img
                                :src=DarkSignIn
                                alt="dark signin"
                                class="img-fluid border-bottom rounded-top"
                        >
                        <div class="bg-light text-center  py-2">Sign in</div>
                    </router-link>

                </div>
                <div class="col-sm-6 col-md-4 my-3">
                    <router-link
                            to="/sign-up"
                            @click.native="setThemeColor(ThemeColor.Dark)"
                            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset" target="_blank">
                        <img
                                :src=DarkSignUp
                                alt="dark signup"
                                class="img-fluid border-bottom rounded-top"
                        >
                        <div class="bg-light text-center py-2">Sign up</div>
                    </router-link>

                </div>
                <div class="col-sm-6 col-md-4 my-3">
                    <router-link
                            to="/reset-password"
                            @click.native="setThemeColor(ThemeColor.Dark)"
                            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset" target="_blank">
                        <img
                                :src=DarkResetPassword
                                alt="dark reset password"
                                class="img-fluid border-bottom rounded-top"
                        >
                        <div class="bg-light text-center py-2">
                            Reset password
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </section>

    <section
            class="bg-white border-bottom theme-shadow py-5"
            id="features">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-xxl-7 col-xl-8 col-lg-9 col-md-10 pb-4">
                    <h2 class="display-5 font-weight-semibold">
                        Features Overview
                    </h2>
                </div>
                <div class="row row-eq-height">
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0">
                            <img :src=ResponsiveSvg alt="">
                            <h6 class="mt-3">Responsive & User-Friendly</h6>
                            <p class="text-muted mb-0">
                                Complete responsive & user-friendly to pleasing your user
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0">
                            <img :src=PencilSvg alt="">
                            <h6 class="mt-3">Easy Customizable</h6>
                            <p class="text-muted mb-0">
                                We offers highly scalable and endless customization
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0">
                            <img :src=RefreshSvg alt="">
                            <h6 class="mt-3">Lifetime Updates</h6>
                            <p class="text-muted mb-0">
                                Every purchase entitled to free updates – for lifetime
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0">
                            <img :src=QuestionSvg alt="">
                            <h6 class="mt-3">Premium Support</h6>
                            <p class="text-muted mb-0">
                                We offer six months of free support to every customer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-white border-bottom theme-shadow py-5" id="faq">
        <div class="container">
            <div class="row justify-content-center text-center mb-4">
                <div class="col-xxl-7 col-xl-8 col-lg-9 col-md-10">
                    <h2 class="display-5 font-weight-semibold">
                        Frequently Asked Questions
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">


                </div>
            </div>
        </div>
    </section>
    <section class="bg-white border-bottom theme-shadow py-5" id="support" >
        <div class="container">
            <div class="row row-eq-height justify-content-center">
                <div class="col-md-6">
                    <div class="card mb-2">
                        <div class="card-body text-center">
                            <img class="mb-3" :src=QuestionSvg alt="">
                            <h4 class="display-6 mb-2">Need Support?</h4>
                            <p class="text-muted">
                                Email us on{" "}
                                <a class="link" to="mailto:rahuljalavadiya@gmail.com">
                                    rahuljalavadiya@gmail.com
                                </a>
                                . The support response time is 24-48 hours but normally we
                                tend to settle the questions earlier than 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card mb-2">
                        <div class="card-body text-center">
                            <img class="mb-3" :src=QuestionSvg alt="">
                            <h4 class="display-6 mb-2">Pre-Purchase Questions</h4>
                            <p class="text-muted">
                                Feel free to ask any questions before making purchase to
                                know more about the theme. We will clear all your
                                questions. Email us on{" "}
                                <a class="link" to="mailto:rahuljalavadiya@gmail.com">
                                    rahuljalavadiya@gmail.com
                                </a>
                                .{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-white">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 text-center">
                    <img :src=LogoSvg
                            width="80"
                            height="80"
                            class="d-inline-block mb-4"
                    />

                    <h4 class="display-6 font-weight-semibold">
                        Quicky - Complete Chat React JS Template
                    </h4>

                    <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mt-4">
                        <router-link
                                to="/Documentation"
                                class="btn btn-secondary mb-2 mx-2" target="_blank">
                            Documentation
                        </router-link>
                        <router-link
                                to="/Chats"
                                @click.native="setThemeColor(ThemeColor.Light)"
                                class="btn btn-primary mb-2 mx-2" target="_blank">
                            View demo
                        </router-link>

                        <a
                                href="https://themeforest.net/item/quicky-react-chat-template/30002388"
                                target="_blank"
                                class="btn btn-danger mx-2"
                                rel="noopener noreferrer"
                        >
                            Purchase now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script lang="ts">
    import { ThemeColor } from '../../Config/Config'
    import { ref, defineComponent } from 'vue'
    import LightSkin from "../../assets/media/ui/light-skin.jpg";
    import DarkSkin from "../../assets/media/ui/dark-skin.jpg";

    import LigntSignIn from "../../assets/media/ui/ls-signin.jpg";
    import DarkSignIn from "../../assets/media/ui/ds-signin.jpg";
    import LightSignUp from "../../assets/media/ui/ls-signup.jpg";
    import DarkSignUp from "../../assets/media/ui/ds-signup.jpg";
    import LightResetPassword from "../../assets/media/ui/ls-reset-password.jpg";
    import DarkResetPassword from "../../assets/media/ui/ds-reset-password.jpg";
    import RTLLIghtSkin from "../../assets/media/ui/rtl-default.jpg";
    import RTLDarkSkin from "../../assets/media/ui/rtl-dark.jpg";

    import RefreshSvg from "../../assets/media/icons/refresh.svg";
    import QuestionSvg from "../../assets/media/icons/question.svg";
    import PencilSvg from "../../assets/media/icons/pencil.svg";
    import ResponsiveSvg from "../../assets/media/icons/responsive.svg";
    import LogoSvg from "../../assets/media/logo.svg";


    export default defineComponent({
        name: 'Intro',
        props: {

        },
        emits:['update-theme-mode'],
        setup: (props, { emit }) => {

            const count = ref(0)
            return {
                count,ThemeColor,emit,LightSkin,DarkSkin,LigntSignIn,DarkSignIn,LightSignUp,DarkSignUp,LightResetPassword,DarkResetPassword,RTLLIghtSkin,RTLDarkSkin,RefreshSvg,QuestionSvg,PencilSvg,ResponsiveSvg,LogoSvg}
        },
        methods : {
            setThemeColor(mode: ThemeColor, isRTL : Boolean = false) : void {
                console.log("Selected mode",mode)
                this.$emit("update-theme-mode", {mode:mode,isRTL:isRTL});
            }
        }
    })
</script>
