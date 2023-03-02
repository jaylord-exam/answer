<template>
  <v-container fluid ma-0 pa-0 fill-width class="d-flex flex-row align-start">
    <customers-page></customers-page>
</v-container>
</template>
<script>
  import CustomersPage from '../framework/customers-page/index.vue';
  import CustomerRepository from '../modules/repository/customer_repository.js';

  export default {
    name: 'CustomersView',
    components: {
      CustomersPage
    },
    data() {
      return {
      }
    },
    computed: {
    },
    async created(){
      //fetch all customers
      this.$store.commit('setCustomers', await new CustomerRepository().getAll());
    },
    methods: {
    }
  }
  </script>
<style lang="scss" scoped>
  #tab-bar {
    float: left;
    width: 50px;
    height: 100%;
    background-color: white;
    border-right: 1px solid #0000001a;
  }

  #content-block {
    width: calc(100% - 50px);
    height: 100%;
    padding: 1rem !important;
  }

  .selected-tab {
    background-color: #6f1ab62e !important;
  }
</style>
