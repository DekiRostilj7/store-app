<template>
    <div>
        <h1>Customers</h1>
            <p v-for="(customer, index) in customers" :key="index" >
                {{ customer.fullName}} {{customer.email}} <button @click="handleRemove(customer)">Delete</button>
            </p>
        <div> 
            <form @submit.prevent="handleAddUser">
                <input v-model="newCustomer.fullName" type="text" name="first-name" placeholder="First name" /><br>
                <input v-model="newCustomer.email" type="email" name="email" placeholder="Email" /><br>
                <button>Add Customer</button>                
            </form>
        </div>
    </div>
</template>

<script>
import { customerService } from "../services/CustomerService"
export default {
    data(){
        return {
            newCustomer: {},
            customers: customerService.list()
        }
    },

    methods: {
        handleRemove(customer){
            customerService.remove(customer);
        },

        handleAddUser(){
            customerService.add(this.newCustomer)
        }
    }
}
</script>