
<template>
    <tr class="text-center">
        <td>{{ customer.firstname }}</td>
        <td>{{ customer.lastname }}</td>
        <td>{{ customer.email_address }}</td>
        <td>
            <div class="d-flex justify-center align-center">
                <div class="mr-4">
                    <!-- block for delete button and loader -->
                    <v-progress-circular v-if="isDeleteLoading" indeterminate color="red"></v-progress-circular>
                    <i v-else class="red--text cursor-pointer" @click="deleteCustomer(customer.id)">
                        <svg-icon type="mdi" :path="icons.mdiDelete"></svg-icon>
                    </i>
                </div>
                <i class="primary--text cursor-pointer" @click="viewCustomer(customer.id)">
                    <svg-icon type="mdi" :path="icons.mdiEye"></svg-icon>
                </i>
            </div>
        </td>
    </tr>
</template>
<script>
    import { mdiDelete, mdiEye, mdiPlus } from '@mdi/js';
    import SvgIcon from '@jamescoyle/vue-icon'
    import CustomerRepository from '../../modules/repository/customer_repository.js';

    export default {
        name: 'customer-item',
        props: ['customer'],
        components: {
            SvgIcon
        },
    data () {
        return {
            icons: {
                mdiDelete,
                mdiEye,
                mdiPlus
            },
            isDeleteLoading: false
        }
    },
    computed: {
        customers(){
            return this.$store.state.customers;
        },
    },
    methods: {
        async deleteCustomer(id){
            this.isDeleteLoading = true;
            const response = await new CustomerRepository().delete(id);
            this.$store.commit('setCustomers', response.data);
            this.isDeleteLoading = false;
        },
        async viewCustomer(id){
            const response = await new CustomerRepository().view(id);
            this.$store.commit('setModalVisibility', true);
            this.$store.commit('setViewCustomerForm', response);
        },
    },
}
</script>
<style lang="scss" scoped>
</style>