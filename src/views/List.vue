<template>
  <b-container class="mt-5 mb-5">
    <b-row>
      <b-col>
        <b-input-group>
          <b-form-input
            @keydown.enter="search"
            v-model="searchInput"
            placeholder="Search text"
            type="text"
          ></b-form-input>

          <b-input-group-append>
            <b-button @click.enter="search" variant="outline-secondary">Search</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="12" v-for="(starship, index) of starships" :key="index">
        <b-card class="text-left" :title="starship.name" :sub-title="starship.model">
          <router-link :to="'/starship/' + starship.id" class="card-link">Open starship information</router-link>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="12">
        <a
          v-if="paginations.previous"
          href="#"
          class="mr-2"
          @click.prevent="changePage(paginations.previous)"
        >Prev</a>
        <a v-if="paginations.next" href="#" @click.prevent="changePage(paginations.next)">Next</a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import store from 'App/store'

const loadStarshipData = (to, from, next) => {
  const { page, search } = to.query
  if (page) {
    store.commit('starships/setPage', page)
  }
  if (search && search !== '') {
    store.commit('starships/setSearchText', search)
  }
  store.dispatch('starships/getStarships')
  next()
}

export default {
  computed: {
    ...mapGetters('starships', ['starships', 'searchText', 'paginations']),
    searchInput: {
      get () {
        return this.searchText
      },
      set (value) {
        return this.setSearchText(value)
      }
    }
  },
  methods: {
    ...mapActions('starships', ['getStarships']),
    ...mapMutations('starships', ['setPage', 'setSearchText']),
    search () {
      this.setPage(1)
      this.$router.push({
        path: '/',
        query: {
          search: this.searchText
        }
      })
    },
    changePage (page) {
      const query = {
        page
      }
      if (this.searchText !== null) {
        query.search = this.searchText
      }
      this.$router.push({ path: '/', query })
    }
  },
  beforeRouteEnter: loadStarshipData,
  beforeRouteUpdate: loadStarshipData
}
</script>
