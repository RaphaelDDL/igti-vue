<template>
  <div>
    <div v-if="error" class="text-center m-5">
      Erro ao carregar
    </div>
    <div v-else-if="pending" class="text-center m-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="row">
      <div class="col">
        <h1 class="">
          {{ hero.name }}
        </h1>
        <p class="lead">
          {{ hero.description }}
        </p>
      </div>
      <div class="row">
        <div class="col">Classe: {{ hero.role }}</div>
        <div class="col">Elemento: {{ hero.attribute }}</div>
        <div class="col">
          Raridade: <span v-for="n in hero.rarity" :key="n">&star;</span>
        </div>
      </div>
      <img
        :src="hero.assets.image"
        class="card-img-top mx-auto"
        :alt="hero.name"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hero: {},
      error: false,
      pending: false
    };
  },
  async created() {
    this.error = false;
    this.pending = true;
    try {
      const response = await axios.get(
        `https://api.epicsevendb.com/hero/${this.$route.params.id}`
      );
      const { results = [] } = response?.data;
      this.hero = results?.[0] ?? {};
    } catch (error) {
      this.error = true;
    } finally {
      this.pending = false;
    }
  }
};
</script>
