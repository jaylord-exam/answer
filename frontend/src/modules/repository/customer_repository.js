import axios from "axios";

export default class CustomerRepository {

    async getAll(){
        const response = await axios.get(`${process.env.VUE_APP_API_URL}customer`).then(function (res) {
            return res.data;
        }).catch(function (error) {
            return [];
        });

        return response;
    }

    async delete(id){
        let result = false;
        let data = [];

        await axios.delete(`${process.env.VUE_APP_API_URL}customer/${id}`).then(function (res) {
            result = true;
            data = res.data;
        }).catch(function (error) {
            data = error;
        });

        return {
            result,
            data
        };
    }

    async store(customer){
        let success = false;
        let data = [];

        await axios.post(process.env.VUE_APP_API_URL+'customer', customer)
        .then(function (res) {
            success = true;
            data = res.data;
        }).catch(function (error) {
            data = error;
        });

        return {
            success,
            data
        };
    }

    async view(id){
        return await axios.get(`${process.env.VUE_APP_API_URL}customer/${id}`).then(function (res) {
            return res.data;
        }).catch(function (error) {
            return [];
        });
    }

    async update(customer){
        let success = false;
        let data = [];

        await axios.patch(`${process.env.VUE_APP_API_URL}customer/${customer.id}`, customer)
        .then(function (res) {
            success = true;
            data = res.data;
        }).catch(function (error) {
            data = error;
        });

        return {
            success,
            data
        };
    }
}