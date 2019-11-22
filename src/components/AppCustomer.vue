<template>
    <div>
        <h1>Customers</h1>
            <p v-for="(customer, index) in customers" :key="index" >
                {{ customer.fullName}} {{customer.email}} <button @click="handleRemove(customer)">Delete</button>
            </p>
    </div>
</template>

<script>
import { customerService } from "../services/CustomerService"
export default {
    data(){
        return {
            customers: customerService.list()
        }
    },

    methods: {
        handleRemove(customer){
            customerService.remove(customer);
        }
    }
}
</script>