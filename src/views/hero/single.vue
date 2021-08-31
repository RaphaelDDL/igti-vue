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
        <div v-else class="row" itemscope itemtype="https://schema.org/Person">
            <meta itemprop="image" :content="`https://igti-nuxt.herokuapp.com/hero/${hero._id}`" />
            <div class="col">
                <h1 itemprop="name">
                    {{ hero.name }}
                </h1>
                <p class="lead" itemprop="description">
                    {{ hero.description }}
                </p>
            </div>
            <div class="row">
                <div class="col" itemprop="honorificSuffix">Classe: {{ hero.role }}</div>
                <div class="col" itemprop="affiliation">Elemento: {{ hero.attribute }}</div>
                <div class="col" itemprop="honorificPrefix">
                    Raridade: <span v-for="n in hero.rarity" :key="n">&star;</span>
                </div>
            </div>
            <img
                v-if="imageUrl"
                :src="imageUrl"
                class="card-img-top mx-auto"
                :alt="hero.name"
                loading="lazy"
                itemprop="image"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            hero: {},
            error: false,
            pending: true,
        };
    },
    async created() {
        this.error = false;
        this.pending = true;
        try {
            const response = await axios.get(`https://api.epicsevendb.com/hero/${this.$route.params.id}`);
            const { results = [] } = response?.data;
            this.hero = results?.[0] ?? {};
        } catch (error) {
            this.error = true;
        } finally {
            this.pending = false;
        }
    },
    computed: {
        imageUrl() {
            return this.hero?.assets?.image;
        },
    },
};
</script>
