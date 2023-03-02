
<template>
<div class="full-width">
    <div v-if="customers.length == 0" class="w-100 h-100 d-flex justify-center align-center">
      <lottie-animation :loop="true" :animationData="require('@/assets/anim/empty.json')"/>
    </div>
    <div v-else>
      <v-simple-table class="full-width">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  Firstname
                </th>
                <th class="text-center">
                  Lastname
                </th>
                <th class="text-center">
                  Email Address
                </th>
                <th class="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <customer-item v-for="item in customers" :key="item.id" :customer="item"></customer-item>
            </tbody>
          </template>
      </v-simple-table>
    </div>
    <customer-modal></customer-modal>
    <v-btn color="primary" fab dark absolute bottom right class="mb-10" @click="showModal(true)">
        <svg-icon type="mdi" :path="icons.mdiPlus"></svg-icon>
    </v-btn>
</div>
</template>
    
<script>
    import { mdiDelete, mdiEye, mdiPlus } from '@mdi/js';
    import SvgIcon from '@jamescoyle/vue-icon'
    import CustomerRepository from '../../modules/repository/customer_repository.js';
    import CustomerItem from './customer-item.vue';
    import CustomerModal from './customer-modal.vue';
    import LottieAnimation from 'lottie-web-vue';

    export default {
        name: 'customers-page',
        components: {
            SvgIcon,
            CustomerItem,
            CustomerModal,
            LottieAnimation
        },
    data () {
      return {
        icons: {
            mdiDelete,
            mdiEye,
            mdiPlus
        },
      }
    },
    computed: {
        customers(){
          return this.$store.state.customers;
        }
    },
    methods: {
        showModal(){
          this.$store.commit('setModalVisibility', true);
        },
        async deleteCustomer(id){
          await new CustomerRepository().getAll();
        },
        updateCustomer(id){
            console.log(id);
        },
    },
}
</script>
<style lang="scss" scoped>
</style>