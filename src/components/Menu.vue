<template>
    <nav>
        <ul>       
            <li v-for="rota in rotas" :key="rota.id">
                <router-link :to="rota.path ? rota.path : '/'">
                    {{ rota.titulo }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

// const listaMenu = ['Medicamentos','Saúde e Bem-estar','Mamães e Bebês','Aparelhos e Testes','Diabetes','Perfumaria','Outlet']

export default {
  props: {
        rotas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>
