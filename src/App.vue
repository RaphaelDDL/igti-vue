<template>
  <div id="app">
    <Header />
    <main class="container py-5">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        Header,
        Footer
    }
}
</script>
