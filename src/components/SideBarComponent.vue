<script >



  // import SearchIcon from "../../assets/icons/search.svg";
  // import MailIcon from "../../assets/icons/mail.svg";
  // import BellIcon from "../../assets/icons/bell.svg";
  // import InboxIcon from "../../assets/icons/inbox.svg";
  // import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
  // import CreditCardIcon from "../../assets/icons/credit-card.svg";
  // import EyeIcon from "../../assets/icons/eye.svg";
  // import StatisticChart from "./charts/statistic.svg";
  // import RevenueIcon from "../../assets/icons/revenue.svg";
  // import ExpenseIcon from "../../assets/icons/expense.svg";
  // import SendIcon from "../../assets/icons/send.svg";
  // import ReceiveIcon from "../../assets/icons/receive.svg";
  // import CalendarIcon from "../../assets/icons/calendar.svg";
  // import PlusIcon from "../../assets/icons/plus.svg";
  // import InvestmentIcon from "../../assets/icons/investment.svg";
  // import FundIcon from "../../assets/icons/fund.svg";
  // import DotsCircleIcon from "../../assets/icons/dots-circle.svg";
  // import DoughnutChart from "./charts/doughnut.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone , faUser , faHome , faToolbox ,faGear, faUsers , faBurger,faDriversLicense , faArrowLeft} from "@fortawesome/free-solid-svg-icons";

import  CircularIconButton  from '@/components/icons/CircularIconButtonComponent.vue';
import { ref } from 'vue'

library.add(faPhone , faUser , faHome , faToolbox ,faGear,faUsers, faBurger,faDriversLicense, faArrowLeft);
export default {
  setup() {
        const showSidebar = ref(false);

        return {
            showSidebar,
        };
    },
  components:{
    CircularIconButton
  },
  data() {
    return {
       menu : [
    { name: "Home", icon: "home" , url:'/dashboard/overview'},
    { name: "Commandes", icon: "phone",  url:'/dashboard/commandes' },
    { name: "Nourritures", icon: "burger" , url:'/dashboard/nourritures' },
    { name: "Restaurants", icon: "toolbox" , url:'/dashboard/restaurants'},
    { name: "Utilisateurs", icon: "users" , url:'/dashboard/utilisateurs'},
    { name: "Livreurs", icon: "drivers-license" ,url:'/dashboard/livreurs' },
    { name: "Paramètres", icon: "gear" , url:'/dashboard/parametres' },
  ],
    }
  },

}

</script>

<template>
     <div class="flex bg-gray-700  w-full font-sans">
      <div>
        <nav class="shadow-md w-full bg-gray-900 max-md:p-10 md:invisible top-0 left-0 z-40 fixed ">
                <div class="flex items-center justify-between">
                    <button class="p-4 bg-gray-700 rounded-md flex items-center justify-between text-white font-bold gap-x-4" @click="showSidebar = !showSidebar">
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
    <aside  class="flex w-64 flex-col px-8 pt-10 pb-6 fixed top-0 left-0   py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 h-screen duration-200 ease-in-out transition-transform -translate-x-full md:translate-x-0" :class="{'fixed -translate-x-0 z-40 min-h-screen ':showSidebar}">
      <div href="" class=" text-white text-2xl font-bold flex justify-center gap-x-2 items-center">
        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
        <span>FastDelivery</span>
        <div class="md:invisible  right-0  " @click="showSidebar = !showSidebar">
                          <button class=" rounded-full bg-indigo-600 p-4 h-8 flex items-center justify-center w-8 shadow-md ">
                              <font-awesome-icon icon="arrow-left" class="text-white-400 w-4 h-4 hover:text-white" />
                          </button>
         </div>
      </div>
    <ul class="flex flex-1 flex-col gap-y-5 pt-14 ">
      <li v-for="item in menu" :key="item.name" class="text-xl p-4 hover:bg-gray-900 hover:p-4 hover:rounded-md  focus:bg-gray-900 focus:p-4 focus:rounded-md">
       <router-link :to="item.url"  class="text-gray-400 hover:font-medium hover:text-white focus:font-medium focus:text-white focus:outline-none">
        <font-awesome-icon :icon=" item.icon " />
        <span class="pl-4">{{ item.name }}</span>
       </router-link>
      </li>
    </ul>
    <div class="bg-gray-900 p-6 rounded-lg bg-[url(/img/line-pattern.svg)]">
      <div class="text-white">
        <span class="font-bold">Refer to a friend</span>
      </div>

      <div class="text-white">
        <span class="font-bold">The reward of the transfer</span>
      </div>

      <button class="rounded-md shadow-md mt-4 w-full py-2 bg-gray-700 text-sm font-normal text-gray-400 hover:text-white">
        Logout
      </button>
    </div>
    </aside>
   
    
   </div>
   <router-view></router-view>
</template>

