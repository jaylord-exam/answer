
<template>
    <v-dialog v-model="isShowModal" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card tile>
          <v-toolbar flat dark color="primary">
            <v-btn icon dark @click="isShowModal = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>{{ viewCustomerData? 'View Customer':'New Customer' }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="d-flex flex-column p-10 mt-4">
                <input class="form-field" type="text" v-model="firstname" placeholder="Enter Firstname*">
                <input class="form-field" type="text" v-model="lastname" placeholder="Enter Lastname*">
                <input class="form-field" type="email" v-model="email_address" placeholder="Enter Email*">
            </div>
            <v-btn :loading="isLoading" :disabled="isLoading" color="primary" @click="save()" class="full-width">
                <svg-icon type="mdi" :path="icons.mdiCheck"></svg-icon>
                Save
            </v-btn>
          </v-card-text>
          <div style="flex: 1 1 auto;"></div>
        </v-card>
        <v-snackbar v-model="showMessage" color="blue-grey" class="text-center">
        {{ message }}
        </v-snackbar>
    </v-dialog>
</template>
<script>
import CustomerRepository from '../../modules/repository/customer_repository.js';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCheck } from '@mdi/js';
import validateEmail from '../../modules/validate_email.js';

export default {
    name: 'customer-modal',
    components: {
        SvgIcon
    },
    data () {
        return {
            icons: {
                mdiCheck
            },
            isLoading: false,
            showMessage: false,
            message: '',
            isNewCustomer: true
        }
    },
    computed: {
        isShowModal: {
            get() {
                return this.$store.state.isShowModal;
            },
            set(new_val) {
                this.$store.commit('setModalVisibility', new_val);
            }
        },
        viewCustomerData(){
            return this.$store.state.viewCustomerForm;
        },
        firstname: {
            get() {
                if(this.viewCustomerData){
                    return this.$store.state.viewCustomerForm.firstname;
                }else{
                    return this.$store.state.newCustomerForm.firstname;
                }
            },
            set(new_val) {
                this.$store.commit(this.viewCustomerData? 'setViewCustomerField':'setNewCustomerField', {
                    key: 'firstname',
                    value: new_val
                });
            }
        },
        lastname: {
            get() {
                if(this.viewCustomerData){
                    return this.$store.state.viewCustomerForm.lastname;
                }else{
                    return this.$store.state.newCustomerForm.lastname;
                }
            },
            set(new_val) {
                this.$store.commit(this.viewCustomerData? 'setViewCustomerField':'setNewCustomerField', {
                    key: 'lastname',
                    value: new_val
                });
            }
        },
        email_address: {
            get() {
                if(this.viewCustomerData){
                    return this.$store.state.viewCustomerForm.email_address;
                }else{
                    return this.$store.state.newCustomerForm.email_address;
                }
            },
            set(new_val) {
                this.$store.commit(this.viewCustomerData? 'setViewCustomerField':'setNewCustomerField', {
                    key: 'email_address',
                    value: new_val
                });
            }
        },
    },
    methods: {
        async save(){
            this.isLoading = true;

            //very simple validation
            if(this.firstname == '' && this.lastname == '' && this.email_address == ''){
                this.showMessage = true;
                this.message = 'Required fields must no be empty (*)'
                this.isLoading = false;
                return;
            }

            if(!validateEmail(this.email_address)){
                this.showMessage = true;
                this.message = 'Must be a valid email address'
                this.isLoading = false;
                return;
            }
            //----------------------

            if(this.viewCustomerData){
                await this.updateCustomer();
            }else{
                await this.newCustomer();
            }

            this.isLoading = false;
        },
        async newCustomer(){
            const result = await new CustomerRepository().store(this.$store.state.newCustomerForm);

            //hide modal if success
            if(result.success){
                this.isShowModal = false;
                this.$store.commit('setCustomers', result.data);
            }else{
                this.showMessage = true;
                this.message = 'Encounter an error while saving'
            }

        },
        async updateCustomer(){
            const result = await new CustomerRepository().update(this.$store.state.viewCustomerForm);

            //hide modal if success
            if(result.success){
                this.isShowModal = false;
                this.$store.commit('setCustomers', result.data);
            }else{
                this.showMessage = true;
                this.message = 'Encounter an error while updating'
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #d9d9d9;
        border-radius: 10px;
    }
</style>