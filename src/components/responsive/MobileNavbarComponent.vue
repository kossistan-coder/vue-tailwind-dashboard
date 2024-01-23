<template lang="">
    <div>
        <nav class="shadow-md w-full bg-gray-900 max-md:p-10 md:invisible top-0 left-0 z-40 fixed ">
                <div class="flex items-center justify-between">
                    <button class="p-4 bg-gray-700 rounded-md flex items-center justify-between text-white font-bold gap-x-4">
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
                        <span>Menu</span>
                    </button>

                    <div class="flex justify-between ">
                        <div class="flex items-center justify-between gap-x-4 mr-10">
                    <CircularIconButton 
                        icon="bell"
                        iconColor="text-white"
                        buttonColor="bg-gray-900"
                    />

                    <CircularIconButton 
                        icon="envelope"
                        iconColor="text-white"
                        buttonColor="bg-gray-900"
                    >
                        <div class="absolute  flex">
                            <span class="inline-flex h-3 w-3  rounded-full animate-ping bg-indigo-400  mb-4 ml-6 absolute"></span>
                            <span class="inline-flex h-3 w-3 rounded-full  bg-indigo-400 mb-4 ml-6"></span>
                        </div>
                    </CircularIconButton>

                </div>
                        <button class="rounded-full flex items-center justify-center bg-gray-700 p-4">
                            <img src="/img/avatar-1.jpeg" alt="" class="h-8 w-8 rounded-full object-cover mr-2">
                            <span class="text-gray-400 mr-2  hover:text-white">Alexander</span>
                            <font-awesome-icon icon="chevron-down" class="text-gray-400  hover:text-white" />
                        </button>
                    </div>
                </div>
    </nav>
    </div>
</template>

<script>

import  CircularIconButton  from '@/components/icons/CircularIconButtonComponent.vue';
import { ref } from 'vue'
export default {
    name : "MobileNavbar",
    setup() {
        const showSidebar = ref(false);

        return {
            showSidebar,
        };
    },
    components:{
   
        CircularIconButton,
    }
}
</script>