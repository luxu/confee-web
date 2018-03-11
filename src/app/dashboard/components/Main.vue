<template>
      <header class="page-header row">
        <h2>Olá! {{ $route.params.name }}</h2>
        <!-- <pre></pre> -->
      </header>
</template>

<script>

// import http from '../../../http'

export default {
  mounted() {
  	// http.get('http://pokeapi.co/api/v2/pokemon/1/')
  	// .then(response => response.data)
  	// .then(data => {
  	// 	console.log(data)
  	// })
  }
}
</script>
