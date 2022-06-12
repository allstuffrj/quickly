<template>
  <div class="main-layout card-bg-1">
    <div class="container d-flex flex-column">
      <div class="row no-gutters text-center align-items-center justify-content-center min-vh-100">
        <div class="col-12 col-md-6 col-lg-5 col-xl-4">
          <h1 class="font-weight-bold">Password Reset</h1>
          <p class="text-dark mb-3">Enter your email address to reset password.</p>
          <form class="mb-3">
            <my-input
              name="email"
              label="Email"
              :value="forgemail"
              @update="update"
              type="email"
              inpclass="form-control form-control-md"
              placeholder="Enter your email"
              labelcalss="sr-only"
            />
            <!-- Submit -->
            <button
              class="btn btn-lg btn-block btn-primary  text-uppercase font-weight-semibold"
              @click="doResetPwd"
              type="submit"
            >
              Send Reset Link
            </button>
          </form>
          <p>
            Already have an account?
            <router-link to="/sign-in" title="Sign In" class="font-size-sm">
              Sign in </router-link
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onUnmounted } from 'vue';
import { inputValue } from '../../Config/Config';
import MyInput from '../Base/MyInput.vue';
export default defineComponent({
  name: 'ResetPassword',
  components: {
    MyInput
  },

  setup: () => {
    const forgemail = ref('');
    onMounted(() => {
      document.body.classList.add('authentication-page');
    });
    onUnmounted(() => {
      document.body.classList.remove('authentication-page');
    });
    function update (payload: inputValue): void {
      forgemail.value = payload.value;
    }
    function doResetPwd () {
      console.log('Do reset password code here');
      console.log(forgemail.value);
    }
    return { forgemail, update, doResetPwd };
  }
});
</script>

<style scoped></style>
