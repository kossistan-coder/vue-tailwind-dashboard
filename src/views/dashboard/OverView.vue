<template>

 <div class="overflow-hidden">
 <SideBarComponent></SideBarComponent>
    <main class="flex min-h-screen flex-1 flex-col bg-gray-700 p-8 md:ml-60 ">
        <div>
        
        <nav class="flex items-center justify-between gap-x-6 sm:max-md:invisible max-sm:invisible max-md:mt-10 ">
            <div class="flex w-3/5 items-center justify-between md:max-xl:w-1/3">
                <h1 class="text-[30px] font-bold text-white">Overview</h1>
                

               <div class=" md:max-2xl:invisible">
                    <SearchInputComponent
                        icon="search"
                        inputColor="bg-gray-900"
                        buttonColor="bg-gray-900"
                    />
               </div>

               
            </div>

            <div>
                <div class="flex w-2/5 items-center justify-between gap-x-4 md:max-xl:invisible">
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

                    <CircularIconButton 
                        icon="toolbox"
                        iconColor="text-white"
                        buttonColor="bg-gray-900"
                    />
                </div>

               
            </div>
            <div>
                    <button class="rounded-full flex items-center justify-center bg-gray-900 p-4">
                        <img src="/img/avatar-1.jpeg" alt="" class="h-8 w-8 rounded-full object-cover mr-2 md:max-xl:w-12">
                        <span class="text-gray-400 mr-2  hover:text-white">Alexander</span>
                        <font-awesome-icon icon="chevron-down" class="text-gray-400  hover:text-white" />
                    </button>
            </div>
           
        </nav>

        <div class="md:flex md:gap-x-6 md:py-8 md:flex-row flex flex-col md:max-xl:flex-col">
            <div class="flex md:w-3/5 w-full flex-col gap-y-8 md:max-xl:w-full">
                <div class="flex items-center justify-between  bg-gray-900 rounded-md p-7 text-gray-400 bg-[url(/img/line-pattern.svg)] font-bold">
                    <div class="flex gap-x-2">
                        <CircularIconButton 
                        icon="credit-card"
                        iconColor="text-indigo-400"
                        buttonColor="bg-gray-700"
                    />
                        <div>
                            <div>CARD NUMBER</div>
                            <div class="font-bold text-white">5540 2280 8675 8474</div>
                        </div>
                        
                    </div>
                    <div class="h-full w-px bg-gray-400"></div>

                    <div>
                        <div>EXPIRE DATE</div>
                        <div class="font-bold text-white">08/25</div>
                    </div>
                    <div class="h-full w-px bg-gray-400"></div>

                    <div>
                        <div>CVC</div>
                        <div class="font-bold text-white">*****</div>
                    </div>
                    <div class="h-full w-px bg-gray-400"></div>

                    <div>
                        <div>STATUS</div>
                        <div class="font-bold text-white">ACTIVE</div>
                    </div>
                
                </div>

                <div class="rounded-xl bg-gray-900  w-full p-4">
                    <div class="flex justify-between items-center justify-items-center">
                        <div>
                            <span class="text-white font-bold text-xl">Statistics des prix</span>
                                
                        </div>
                        <div>
                            <button class="rounded-lg flex items-center justify-center bg-gray-700 p-3">
                                <span class="text-gray-400 mr-2  hover:text-white">Jan-Aug</span>
                                <font-awesome-icon icon="chevron-down" class="text-gray-400  hover:text-white" />
                            </button>
                        </div>
                    </div>
                    <div>
                      <div class="md:flex md:justify-between items-center max-md:flex-col flex-row ">
                        <div class="md:w-3/5 md:h-60 max-md:mb-5">
                                <Bar
                                        id="my-chart-id"
                                        :options="chartOptions"
                                        :data="chartData"
                                    />
                        </div> 
                        <div>
                            <div class="flex flex-col gap-y-4">
                                <div class="p-4 rounded-lg bg-[#a78bfa] flex justify-between gap-x-2">
                                    <div>
                                        <CircularIconButton 
                                        icon="toolbox"
                                        iconColor="text-white"
                                        buttonColor="bg-gray-900"
                                    />
                                    </div>
                                    <div>
                                        <div class="flex flex-col">
                                            <span class="text-gray-400">Revenue</span>
                                            <span>450$</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 rounded-lg bg-[#14b8a6] flex justify-between">
                                    <div>
                                        <CircularIconButton 
                                        icon="balance-scale"
                                        iconColor="text-white"
                                        buttonColor="bg-gray-900"
                                        />
                                    </div>
                                    <div>
                                        <div class="flex flex-col">
                                            <span class="text-gray-400">Account</span>
                                            <span>2140$</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                      </div>
                    </div>
                </div>

                <div class="rounded-lg bg-gray-900 p-4 ">
                    <div class="flex justify-between items-center justify-items-center mb-4">
                        <div>
                            <span class="text-white font-bold text-xl">Recent transactions</span>
                                
                        </div>
                        <div>
                            <button class="rounded-lg flex items-center justify-center bg-gray-700 p-2">
                                <span class="text-gray-400  hover:text-white">View All</span>
                            </button>
                        </div>
                    </div>

                    <div>



                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                
                                <tbody>
                                    <tr >
                                       
                                        <td class="flex gap-x-2 items-center mb-4">
                                                <CircularIconButton 
                                                    icon="calendar"
                                                    iconColor="text-white"
                                                    buttonColor="bg-[#6366f1]"
                                                    />
                                                <span class="text-white font-bold">Receive fund</span>
                                        </td>
                                       
                                        <td >
                                            <span class="text-gray-400">$115,09</span>
                                        </td>
                                        <td>
                                            <span class="text-gray-400">$35</span>
                                        </td>
                                    </tr>
                                  
                                 
                                <td class="flex gap-x-2 items-center">
                                        <CircularIconButton 
                                            icon="exchange"
                                            iconColor="text-white"
                                            buttonColor="bg-gray-400"
                                            />
                                        <span class="text-white font-bold">Jul 07 23</span>
                                </td>
                            
                                <td  class="ml-[1.5rem]">
                                    <span class="text-gray-400 text-center">$115,09</span>
                                </td>
                                <td class="ml-[0.5rem]">
                                    <span class="text-gray-400">$35</span>
                                </td>
                                </tbody>
                            </table>
                        </div>

                                           
                  
                    </div>
                </div>
                <div class="bg-gray-900 rounded-lg p-4 ">
                    <div class="flex justify-between items-center justify-items-center">
                        <div>
                            <span class="text-white font-bold text-xl">Invoices</span>
                                
                        </div>
                        <div>
                            <button class="rounded-lg flex items-center justify-center gap-x-2 bg-gray-700 p-2">
                                <font-awesome-icon icon="add" class="text-gray-400  hover:text-white" />
                                <span class="text-gray-400  hover:text-white">Nouveau Livreurs</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        

<div class="relative overflow-x-auto mt-5 rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    <StatusLabelComponent
                        labelColor="bg-[#022c22]"
                        borderColor="border-[#134e4a]"
                        bubbleColor="bg-[#2dd4bf]"
                        text="Success"
                        textColor="text-[#2dd4bf]"

                    />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    <StatusLabelComponent
                        labelColor="bg-[#2e1065]"
                        borderColor="border-[#8b5cf6]"
                        bubbleColor="bg-[#8b5cf6]"
                        text="Pending"
                        textColor="text-[#8b5cf6]"

                    />
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    <StatusLabelComponent
                        labelColor="bg-[#022c22]"
                        borderColor="border-[#134e4a]"
                        bubbleColor="bg-[#2dd4bf]"
                        text="Success"
                        textColor="text-[#2dd4bf]"

                    />
                </td>
            </tr>
        </tbody>
    </table>
</div>

                    </div>
                </div>
            </div>
            <div class="flex md:w-2/5 w-full mt-5 md:mt-0 flex-col gap-y-8 md:max-xl:w-full ">
                <div>
                    <div class="bg-gray-900 rounded-lg p-4 ">
                        <div class="p-4">
                            <span class="font-bold text-white text-lg">Statistiques du mois</span>
                        </div>
                        <ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                            <li class="w-full">
                                <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4  active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Meilleurs Livreurs</a>
                            </li>
                            <li class="w-full">
                                <a href="#" class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Top Produits</a>
                            </li>
                           
                        </ul>

                        <div class="flex justify-between border-b-2 border-gray-400 items-center mt-4 p-4">
                            <div class="flex justify-center items-center  ">
                                <div>
                                    <img src="/img/avatar-2.jpeg" alt="" class="h-12 w-12 rounded-full object-cover mr-2">
                                </div>
                                <div class="flex flex-col gap-y-2">
                                    <span class="text-white font-bold text-lg ">iPhone 14 Pro</span>
                                    <div>
                                        <span class="text-[#16a34a] pr-2">
                                            <font-awesome-icon icon="arrow-up" class="text-[#16a34a]  hover:text-white" />
                                        12.4%
                                        </span>
                                        <span class="text-gray-400">vs last month</span>
                                    </div>
                                </div>
                            </div>
                            <div class="font-bold text-lg text-white">
                                $55756,467
                            </div>
                        </div>

                        <div class="flex justify-between border-b-2 border-gray-400 items-center mt-4 p-4">
                            <div class="flex justify-center items-center  ">
                                <div>
                                    <img src="/img/avatar-3.jpeg" alt="" class="h-12 w-12 rounded-full object-cover mr-2">
                                </div>
                                <div class="flex flex-col gap-y-2">
                                    <span class="text-white font-bold text-lg ">iPhone 14 Pro</span>
                                    <div>
                                        <span class="text-[#16a34a] pr-2">
                                            <font-awesome-icon icon="arrow-up" class="text-[#16a34a]  hover:text-white" />
                                        12.4%
                                        </span>
                                        <span class="text-gray-400">vs last month</span>
                                    </div>
                                </div>
                            </div>
                            <div class="font-bold text-lg text-white">
                                $103,509
                            </div>
                        </div>

                        <div class="flex justify-between border-b-2 border-gray-400 items-center mt-4 p-4">
                            <div class="flex justify-center items-center  ">
                                <div>
                                    <img src="/img/avatar-1.jpeg" alt="" class="h-12 w-12 rounded-full object-cover mr-2">
                                </div>
                                <div class="flex flex-col gap-y-2">
                                    <span class="text-white font-bold text-lg ">iPhone 14 Pro</span>
                                    <div>
                                        <span class="text-[#16a34a] pr-2">
                                            <font-awesome-icon icon="arrow-up" class="text-[#16a34a]  hover:text-white" />
                                        2.4%
                                        </span>
                                        <span class="text-gray-400">vs last month</span>
                                    </div>
                                </div>
                            </div>
                            <div class="font-bold text-lg text-white">
                                $1056,467
                            </div>
                        </div>

                        <div class="flex justify-between border-b-2 border-gray-400 items-center mt-4 p-4">
                            <div class="flex justify-center items-center  ">
                                <div>
                                    <img src="/img/avatar-3.jpeg" alt="" class="h-12 w-12 rounded-full object-cover mr-2">
                                </div>
                                <div class="flex flex-col gap-y-2">
                                    <span class="text-white font-bold text-lg ">iPhone 14 Pro</span>
                                    <div>
                                        <span class="text-red-400 pr-2">
                                            <font-awesome-icon icon="arrow-down" class="text-red-400 hover:text-white" />
                                        12.4%
                                        </span>
                                        <span class="text-gray-400">vs last month</span>
                                    </div>
                                </div>
                            </div>
                            <div class="font-bold text-lg text-white">
                                $55756,467
                            </div>
                        </div>
                       <div class="flex justify-between p-4 items-center">
                            <div>
                                <div class="flex items-center justify-center  p-4">
                                    <span class="text-gray-400 mr-2  hover:text-white">Last 7 days</span>
                                    <font-awesome-icon icon="chevron-down" class="text-gray-400  hover:text-white" />
                                </div>
                            </div>
                            <div>
                                <span class="text-indigo-400 p-4 text-lg hover:bg-gray-700 hover:p-4 hover:rounded-md">FULL REPORT</span>
                            </div>
                       </div>

                        
                    </div>

                   
                </div>

                <div class="rounded-lg bg-gray-900 p-4 flex justify-between items-center gap-x-4 max-sm:flex-col max-sm:items-start max-sm:gap-y-5">
                        <div>
                            <div class="flex flex-col gap-y-2 ">
                                    <span class="text-white font-bold text-lg ">iPhone 14 Pro</span>
                                    <span class="text-6xl text-white font-bold">2,340</span>
                                    <div>
                                        <span class="text-red-400 pr-2">
                                            <font-awesome-icon icon="arrow-down" class="text-red-400 hover:text-white" />
                                        12.4%
                                        </span>
                                        <span class="text-gray-400">vs last month</span>
                                    </div>
                                </div>
                        </div>
                        <div>
                            <div class="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-indigo-400 h-2.5 rounded-full" style="width: 45%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-lg bg-gray-900 p-4 flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-y-5">
                        <div>
                            <div class="flex flex-col gap-y-2">
                                    <span class="text-white font-bold text-lg ">iPhone 14 Pro</span>
                                    <span class="text-6xl text-white font-bold">5,00</span>
                                    <div>
                                        <span class="text-[#16a34a] pr-2">
                                            <font-awesome-icon icon="arrow-up" class="text-[#16a34a] hover:text-white" />
                                        47
                                        </span>
                                        <span class="text-gray-400">vs last month</span>
                                    </div>
                                </div>
                        </div>
                        <div>
                            <div class="w-96 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#16a34a] h-2.5 rounded-full" style="width: 45%"></div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
        <div  class="bg-gray-900 rounded-lg p-4 max-md:mt-10">
            <span class="text-white font-bold text-lg ">
                Dernieres Commandes
            </span>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
    <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $179
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    iPad
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple iMac 27"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC Desktop
                </td>
                <td class="px-6 py-4">
                    $3999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
    </div>
    </main>
 </div>
  
</template>

<script>
import SearchInputComponent from '@/components/SearchInputComponent.vue';
import  CircularIconButton  from '@/components/icons/CircularIconButtonComponent.vue';
import StatusLabelComponent from '@/components/StatusLabelComponent.vue';
import SideBarComponent from '@/components/SideBarComponent.vue';


import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch , faBell , faEnvelope , faToolbox ,faChevronDown , faCreditCard , faBalanceScale , faExchange, faCalendar,faAdd ,faArrowUp , faArrowDown, faGear,} from "@fortawesome/free-solid-svg-icons";


library.add(faSearch ,faBell,faEnvelope , faToolbox , faChevronDown, faCreditCard, faBalanceScale , faExchange,faCalendar,faAdd,faArrowUp,faArrowDown,faGear,);
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: "OverviewRouter",
    components:{
        SearchInputComponent,
        CircularIconButton,
        StatusLabelComponent,
        SideBarComponent,
        Bar,
    },
    data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ,'April' ,'Mai' ],
        datasets: [ 
            
            { 
                backgroundColor: '#a78bfa',
                data: [40, 20, 12 ,10,18]
             } 
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }

}
</script>