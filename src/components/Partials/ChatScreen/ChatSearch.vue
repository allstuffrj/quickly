<template>
    <!-- Search Start -->
    <div class="collapse border-bottom px-3" id="searchCollapse">
        <div class="container-xl py-2 px-0 px-md-3">
            <div class="input-group bg-light ">
                <input type="text" class="form-control form-control-md border-right-0 transparent-bg pr-0" placeholder="Search">
                <div class="input-group-append">
                                    <span class="input-group-text transparent-bg border-left-0">
                                        <!-- Default :: Inline SVG -->
                                        <svg class="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                        </svg>

                                        <!-- Alternate :: External File link -->
                                        <!-- <img class="injectable hw-20" src="./../assets/media/heroicons/outline/search.svg" alt="Search icon"> -->
                                    </span>
                </div>
            </div>
        </div>

    </div>
    <!-- Search End -->
</template>

<script lang="ts">

    import { ref, defineComponent,computed } from 'vue'

    export default defineComponent({
        name: 'ChatSearch',
        props: {

        },
        components : {

        },
        setup: () => {

            return {

            }
        },
        methods : {

        }
    })
</script>
