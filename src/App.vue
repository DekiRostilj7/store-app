<template>
  <div>
    <h1>Welcome to the quick e-market!</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/customers">Customers</router-link>
        </li>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
      </ul>
    </nav>  
    <router-view /> 
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link-active {
  color: red;
}
</style>
