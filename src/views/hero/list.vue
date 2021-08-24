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
    <div class="row row-cols-2 row-cols-md-4 g-4">
      <div v-for="hero in heroes" :key="hero._id" class="col">
        <HeroCard :hero="hero" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeroCard from "@/components/hero/Card";

export default {
  components: {
    HeroCard
  },
  data() {
    return {
      heroes: [],
      error: false,
      pending: false
    };
  },
  async created() {
    this.error = false;
    this.pending = true;
    try {
      const response = await axios.get("https://api.epicsevendb.com/hero");
      const { results = [] } = response?.data;
      this.heroes = results ?? [];
    } catch (error) {
      this.error = true;
    } finally {
      this.pending = false;
    }
  }
};
</script>
