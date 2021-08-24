<template>
  <header class="p-3 bg-success text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white fw-bold text-decoration-none me-auto">
          (VUE) x NUXT
        </router-link>

        <ul class="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
          <li v-for="link in links" :key="link.name">
            <router-link :to="link.to" class="nav-link px-2 text-white">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { name: 'Home', to: '/' },
        { name: 'Herois (created)', to: '/hero' },
        { name: 'Artefatos (mounted)', to: '/artifact' }
      ]
    }
  }
}
</script>
