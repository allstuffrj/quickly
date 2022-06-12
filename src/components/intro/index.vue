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
            The powerful React JS messaging framework that especially build for developers and
            designer to help build messaging and chat application fast and easily. It is a fully
            responsive template.
          </p>

          <div
            class="d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mt-4"
          >
            <router-link
              to="/Chats"
              @click.native="setThemeColor(ThemeColor.Light)"
              target="_blank"
              class="btn-primary btn"
            >
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
            @click.native="setThemeColor(ThemeColor.Light)"
            class="text-reset"
            target="_blank"
          >
            <div class="card">
              <img class="img-fluid rounded-top" alt="" :src="LightSkin" />
              <div class="card-body">
                <h6 class="m-0 text-center">Light Skin</h6>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 my-3">
          <router-link
            to="/Chats"
            @click.native="setThemeColor(ThemeColor.Dark)"
            class="text-reset"
            target="_blank"
          >
            <div class="card">
              <img class="img-fluid rounded-top" :src="DarkSkin" alt="" />
              <div class="card-body">
                <h6 class="m-0 text-center">Dark Skin</h6>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 my-3">
          <router-link
            to="/Chats"
            @click.native="setThemeColor(ThemeColor.Light, true)"
            class="text-reset"
            target="_blank"
          >
            <div class="card">
              <img class="img-fluid rounded-top" :src="RTLLIghtSkin" alt="" />
              <div class="card-body">
                <h6 class="m-0 text-center">RTL Light Skin</h6>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 my-3">
          <router-link
            to="/Chats"
            @click.native="setThemeColor(ThemeColor.Dark, true)"
            class="text-reset"
            target="_blank"
          >
            <div class="card">
              <img class="img-fluid rounded-top" :src="RTLDarkSkin" alt="" />
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
            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset"
            target="_blank"
          >
            <img
              :src="LigntSignIn"
              alt="light signin"
              class="img-fluid border-bottom rounded-top"
            />
            <div class="bg-light text-center py-2">Sign in</div>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 my-3">
          <router-link
            to="/sign-up"
            @click.native="setThemeColor(ThemeColor.Light)"
            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset"
            target="_blank"
          >
            <img
              :src="LightSignUp"
              alt="light signup"
              class="img-fluid border-bottom rounded-top"
            />
            <div class="bg-light text-center py-2">Sign up</div>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 my-3">
          <router-link
            to="/reset-password"
            @click.native="setThemeColor(ThemeColor.Light)"
            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset"
            target="_blank"
          >
            <img
              :src="LightResetPassword"
              alt="light reset password"
              class="img-fluid border-bottom rounded-top"
            />
            <div class="bg-light text-center  py-2">
              Reset password
            </div>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 my-3">
          <router-link
            to="/sign-in"
            @click.native="setThemeColor(ThemeColor.Dark)"
            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset"
            target="_blank"
          >
            <img :src="DarkSignIn" alt="dark signin" class="img-fluid border-bottom rounded-top" />
            <div class="bg-light text-center  py-2">Sign in</div>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 my-3">
          <router-link
            to="/sign-up"
            @click.native="setThemeColor(ThemeColor.Dark)"
            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset"
            target="_blank"
          >
            <img :src="DarkSignUp" alt="dark signup" class="img-fluid border-bottom rounded-top" />
            <div class="bg-light text-center py-2">Sign up</div>
          </router-link>
        </div>
        <div class="col-sm-6 col-md-4 my-3">
          <router-link
            to="/reset-password"
            @click.native="setThemeColor(ThemeColor.Dark)"
            class="border rounded d-block theme-shadow-sm overflow-hidden text-reset"
            target="_blank"
          >
            <img
              :src="DarkResetPassword"
              alt="dark reset password"
              class="img-fluid border-bottom rounded-top"
            />
            <div class="bg-light text-center py-2">
              Reset password
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white border-bottom theme-shadow py-5" id="features">
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
              <ResponsiveSvg></ResponsiveSvg>
              <h6 class="mt-3">Responsive & User-Friendly</h6>
              <p class="text-muted mb-0">
                Complete responsive & user-friendly to pleasing your user
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0">
              <PencilSvg></PencilSvg>
              <h6 class="mt-3">Easy Customizable</h6>
              <p class="text-muted mb-0">
                We offers highly scalable and endless customization
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0">
              <RefreshSvg></RefreshSvg>
              <h6 class="mt-3">Lifetime Updates</h6>
              <p class="text-muted mb-0">
                Every purchase entitled to free updates – for lifetime
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0">
              <QuestionSvg></QuestionSvg>
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
          <div class="accordion rounded theme-shadow-xs" id="accordionExample">
            <!-- Accordian card start -->
            <div class="card">
              <div
                class="card-header"
                id="headingOne"
                @click="handlingCollapse('collapseOne')"
                role="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <p class="font-weight-medium mb-0 py-1">
                  Do you Charge for each Upgrade?
                </p>
              </div>

              <div
                id="collapseOne"
                class="collapse"
                :class="[{ show: currentAccordion === 'collapseOne' }]"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Not at all. Once you purchase a license, you'll receive all future releases for
                  free.
                </div>
              </div>
            </div>
            <!-- Accordian card end -->

            <!-- Accordian card start -->
            <div class="card">
              <div
                class="card-header"
                id="headingTwo"
                @click="handlingCollapse('collapseTwo')"
                role="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h6 class="font-weight-medium mb-0 py-1">
                  Do I need to purchase a license for each product/website/webapp?
                </h6>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                :class="[{ show: currentAccordion === 'collapseTwo' }]"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, you need to have a separate license for each product/website/webapp. You
                  might need to purchase extended license for your web application.
                </div>
              </div>
            </div>
            <!-- Accordian card end -->

            <!-- Accordian card start -->
            <div class="card">
              <div
                class="card-header"
                id="headingThree"
                @click="handlingCollapse('collapseThree')"
                role="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h6 class="font-weight-medium mb-0 py-1">
                  Which license is applicable for SAAS application?
                </h6>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                :class="[{ show: currentAccordion === 'collapseThree' }]"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  If you are charging your customer for using your SAAS based application you must
                  buy an Extended License for each end product. If you aren't charging your customer
                  then purchase Regular License for each end product.
                </div>
              </div>
            </div>
            <!-- Accordian card end -->

            <!-- Accordian card start -->
            <div class="card">
              <div
                class="card-header"
                id="headingFour"
                @click="handlingCollapse('collapseFour')"
                role="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour">
                <h6 class="font-weight-medium mb-0 py-1">
                  What is regular license?
                </h6>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                :class="[{ show: currentAccordion === 'collapseFour' }]"
                aria-labelledby="headingFour"
                data-parent="#accordionExample">
                <div class="card-body">
                  <ul>
                    <li>
                      Regular license can be used for end products that do not charge users for
                      access or service (access is free and there will be no monthly subscription
                      fee).
                    </li>
                    <li>
                      Single regular license can be used for single end product and end product can
                      be used by you or your client. If you want to sell end product to multiple
                      clients then you will need to purchase separate license for each client. The
                      same rule applies if you want to use the same end product on multiple domains
                      (unique setup).
                    </li>
                    <li>
                      For more info on Themeforest licenses you can check
                      <a
                        href="http://themeforest.net/licenses/standard?license=regular"
                        target="_blank"
                        >http://themeforest.net/licenses/standard?license=regular</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Accordian card end -->

            <!-- Accordian card start -->
            <div class="card">
              <div
                class="card-header"
                id="headingFive"
                @click="handlingCollapse('collapseFive')"
                role="button"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <h6 class="font-weight-medium mb-0 py-1">
                  What is extended license?
                </h6>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                :class="[{ show: currentAccordion === 'collapseFive' }]"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <ul>
                    <li>
                      Extended license can be used for end products (web service or SAAS) that
                      charges users for access or service (e.g: monthly subscription fee).
                    </li>
                    <li>
                      Single extended license can be used for single end product and end product can
                      be used by you or your client. If you want to sell end product to multiple
                      clients then you will need to purchase separate extended license for each
                      client. The same rule applies if you want to use the same end product on
                      multiple domains (unique setup).
                    </li>
                    <li>
                      For more info on Theme forest licenses you can check
                      <a href="http://themeforest.net/licenses/terms/extended" target="_blank"
                        >http://themeforest.net/licenses/terms/extended</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Accordian card end -->

            <!-- Accordian card start -->
            <div class="card">
              <div
                class="card-header"
                id="headingSix"
                role="button"
                @click="handlingCollapse('collapseSix')"
                data-toggle="collapse"
                data-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <h6 class="font-weight-medium mb-0 py-1">
                  What happen if you misuse the licence?
                </h6>
              </div>
              <div
                id="collapseSix"
                class="collapse"
                :class="[{ show: currentAccordion === 'collapseSix' }]"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <ul>
                    <li>
                      If you had purchased 1 license that should be used for only 1 domain . It
                      should not be used for multiple domains , if you used it for multiple domains
                      that should be a illegal
                    </li>
                    <li>
                      It’s a major risk for you and your brand to use something that’s illegal and
                      has serious issues. Regular licence misuse can also result in data theft, data
                      loss or distribution of illegal material. You’ll be using a piece of code
                      without a correct license. All of these can lead to legal proceedings where
                      you’ve to pay a massive chunk of Money to Lawyers.
                    </li>
                    <li>
                      Therefore, it’s advisable not to make use of licence misuse. If you are
                      already misusing regular licence, which is illegal. In this case, my company
                      background verification team catch you, they will contact your web host
                      provider and get your account suspended. Also They will send legal notice to
                      you and your brand.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Accordian card end -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white border-bottom theme-shadow py-5" id="support">
    <div class="container">
      <div class="row row-eq-height justify-content-center">
        <div class="col-md-6">
          <div class="card mb-2">
            <div class="card-body text-center">
              <QuestionSvg class="mb-3"></QuestionSvg>
              <h4 class="display-6 mb-2">Need Support?</h4>
              <p class="text-muted">
                Email us on{" "}
                <a class="link" to="mailto:rahuljalavadiya@gmail.com">
                  rahuljalavadiya@gmail.com
                </a>
                . The support response time is 24-48 hours but normally we tend to settle the
                questions earlier than 24 hours.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-2">
            <div class="card-body text-center">
              <QuestionSvg class="mb-3"></QuestionSvg>
              <h4 class="display-6 mb-2">Pre-Purchase Questions</h4>
              <p class="text-muted">
                Feel free to ask any questions before making purchase to know more about the theme.
                We will clear all your questions. Email us on{" "}
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
          <LogoSvg width="80" height="80" class="d-inline-block mb-4"></LogoSvg>

          <h4 class="display-6 font-weight-semibold">
            Quicky - Complete Chat React JS Template
          </h4>

          <div
            class="d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mt-4"
          >
            <router-link to="/Documentation" class="btn btn-secondary mb-2 mx-2" target="_blank">
              Documentation
            </router-link>
            <router-link
              to="/Chats"
              @click.native="setThemeColor(ThemeColor.Light)"
              class="btn btn-primary mb-2 mx-2"
              target="_blank"
            >
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
import { ThemeColor } from '../../Config/Config';
import { ref, defineComponent } from 'vue';
import LightSkin from '../../assets/media/ui/light-skin.jpg';
import DarkSkin from '../../assets/media/ui/dark-skin.jpg';

import LigntSignIn from '../../assets/media/ui/ls-signin.jpg';
import DarkSignIn from '../../assets/media/ui/ds-signin.jpg';
import LightSignUp from '../../assets/media/ui/ls-signup.jpg';
import DarkSignUp from '../../assets/media/ui/ds-signup.jpg';
import LightResetPassword from '../../assets/media/ui/ls-reset-password.jpg';
import DarkResetPassword from '../../assets/media/ui/ds-reset-password.jpg';
import RTLLIghtSkin from '../../assets/media/ui/rtl-default.jpg';
import RTLDarkSkin from '../../assets/media/ui/rtl-dark.jpg';

import RefreshSvg from '../../assets/media/icons/refresh.svg';
import QuestionSvg from '../../assets/media/icons/question.svg';
import PencilSvg from '../../assets/media/icons/pencil.svg';
import ResponsiveSvg from '../../assets/media/icons/responsive.svg';
import LogoSvg from '../../assets/media/logo.svg';

export default defineComponent({
  name: 'Intro',
  props: {},
  components: {
    RefreshSvg,
    QuestionSvg,
    PencilSvg,
    ResponsiveSvg,
    LogoSvg
  },
  emits: ['update-theme-mode'],
  setup: (props, { emit }) => {
    const count = ref(0);
    const currentAccordion = ref('collapseOne');
    function handlingCollapse (accordion: string): void {
      currentAccordion.value = accordion;
    }
    return {
      count,
      ThemeColor,
      emit,
      LightSkin,
      DarkSkin,
      LigntSignIn,
      DarkSignIn,
      LightSignUp,
      DarkSignUp,
      LightResetPassword,
      DarkResetPassword,
      RTLLIghtSkin,
      RTLDarkSkin,
      handlingCollapse,
      currentAccordion
    };
  },
  methods: {
    setThemeColor (mode: ThemeColor, isRTL: boolean = false): void {
      this.$emit('update-theme-mode', { mode: mode, isRTL: isRTL });
    }
  }
});
</script>
