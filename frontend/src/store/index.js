import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers: [],
    isFetching: false,
    isShowModal: false,
    editFirstname: null,
    newCustomerForm: {
      firstname: '',
      lastname: '',
      email_address: ''
    },
    viewCustomerForm: null
  },
  getters: {
  },
  mutations: {
    setCustomers(state, data){
      state.customers = data;
    },
    setModalVisibility(state, data){
      state.isShowModal = data;

      if(!data){
        state.newCustomerForm = {
          firstname: '',
          lastname: '',
          email_address: ''
        }

        state.viewCustomerForm = null;
      }
    },
    setNewCustomerField(state, data){
      Vue.set(
        state.newCustomerForm,
        data.key,
        data.value
      );
    },
    setViewCustomerField(state, data){
      Vue.set(
        state.viewCustomerForm,
        data.key,
        data.value
      );
    },
    setViewCustomerForm(state, data){
      state.viewCustomerForm = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
