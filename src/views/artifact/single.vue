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
    <div v-else class="row" itemscope itemtype="https://schema.org/Product">
    <meta
      itemprop="image"
      :content="`https://igti-nuxt.herokuapp.com/artifact/${artifact._id}`"
    >
    <meta
      itemprop="productID"
      :content="artifact._id"
    >
      <div class="col">
        <h1 itemprop="name">
          {{ artifact.name }}
        </h1>
        <p class="lead" itemprop="description">
          {{ artifact.description }}
        </p>
      </div>
      <div class="row">
        <div class="col">
          Classe: <span itemprop="category">{{ artifact.role || 'ALL' }}</span>
        </div>
        <div class="col" itemprop="material">
          Raridade: <span v-for="n in artifact.rarity" :key="n">&star;</span>
        </div>
      </div>
      <img
        v-if="imageUrl"
        :src="imageUrl"
        class="card-img-top mx-auto"
        :alt="artifact.name"
        loading="lazy"
        itemprop="image"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      artifact: {},
      error: false,
      pending: true
    };
  },
  async mounted() {
    this.error = false;
    this.pending = true;
    try {
      const response = await axios.get(
        `https://api.epicsevendb.com/artifact/${this.$route.params.id}`
      );
      const { results = [] } = response?.data;
      this.artifact = results?.[0] ?? {};
    } catch (error) {
      this.error = true;
    } finally {
      this.pending = false;
    }
  },
  computed: {
    imageUrl() {
      return this.artifact?.assets?.image;
    }
  }
};
</script>
