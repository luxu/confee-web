<template>
  <div id="app">

    <section v-if="!carregando">  
      <div v-if="adicionar">
        <input v-model="novaPessoa" placeholder="Adicionar nova pessoa..." />
        <button @click="criarPessoa(novaPessoa)">Criar</button>
      </div>
      <div v-else>
        <input v-model="novoNome"/>
        <button @click="atualizarPessoa()">Atualizar</button>
      </div>
    </section>  
    
    <!-- Barra de status, exibe carregando ou a mensagem retornada -->
    <strong v-if="carregando">Carregando...</strong>
    <strong v-else>{{ mensagem }}</strong>

    <!-- Lista de pessoas -->
    <ul v-for="(pessoa, key) in pessoas" :key="key">
      <li>
        {{ pessoa.name }}
      </li>
      <li>
        <button @click="atualizar(pessoa,key)">Atualizar</button>
        <button @click="deletarPessoa(key)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>

import PessoasEsqueleto from '../esqueletos/PessoasEsqueleto'

export default {
  name: 'app',
  data: () => ({
    servico: null,
    mensagem: '',
    pessoas: [],
    carregando: false,
    novaPessoa: null,
    novoNome: null,
    key: null,
    adicionar: true,
  }),
  // cria o serviço passando o esqueleto e o componente atual, após isso
  // chama o método para carregar a lista
  mounted() {
    this.servico = this.$serviceFactory(new PessoasEsqueleto, this)
    this.carregar()
  },
  methods: {
    // método assíncrono que carrega a lista, além de manipular 
    // a variável de estado 'carregando', lista de pessoas
    // aguarda o retorno da requisição no método 'lista'
    // do esqueleto definido
    async carregar() {
      this.carregando = true
      this.pessoas = await this.servico.call('lista')
      this.carregando = false
    },
    validationError(mensagem) {
      this.mensagem = mensagem
      this.carregando = false
    },
    criarPessoa() {  
      this.carregando = true
      // chama com o método POST (pos()) a rota 'raiz' passando o nome
      // this.service.call('create', { name: this.newPeople })
      this.servico.pos().execute('raiz', { name: this.novaPessoa })
    },
    atualizar(pessoa, key){
      this.novoNome = pessoa.name
      this.key = key
      this.adicionar = false
    },
    atualizarPessoa(){
      this.servico.append(`/${this.key}.json`).put().execute('pessoas', {name: this.novoNome})
      this.adicionar = true
    },
    deletarPessoa(key) {
        this.servico.append(`/${key}.json`).del().execute('pessoas')
    },
    serviceSuccess(data) {  
      this.mensagem = 'Lista foi atualizada!'
      this.carregando = false
      this.carregar()
    },
    serviceError(error) {  
      this.mensagem = 'Erro desconhecido'
      this.carregando = false
    },
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
