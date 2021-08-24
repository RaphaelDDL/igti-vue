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
    <div v-else class="row row-cols-2 row-cols-md-4 g-4">
      <div v-for="artifact in artifacts" :key="artifact._id" class="col">
        <ArtifactCard :artifact="artifact" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ArtifactCard from "@/components/artifact/Card";

export default {
  components: {
    ArtifactCard
  },
  data() {
    return {
      artifacts: [],
      error: false,
      pending: false
    };
  },
  async created() {
    this.error = false;
    this.pending = true;
    try {
      const response = await axios.get("https://api.epicsevendb.com/artifact");
      const { results = [] } = response?.data;
      this.artifacts = results ?? [];
    } catch (error) {
      this.error = true;
    } finally {
      this.pending = false;
    }
  }
};
</script>
