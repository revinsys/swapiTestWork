<template>
  <b-container>
    <b-row class="mt-5">
      <b-col class="text-left" cols="12" md="6" v-for="(prop, index) of properties" :key="index">
        <div v-if="starship && starship[prop.name]">
          <h4>
            {{prop.name}}
            <span
              v-b-tooltip
              :title="prop.description"
              variant="primary"
              class="quest"
            >?</span>
          </h4>
          <p>{{starship[prop.name]}}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { starshipSchema } from 'Services/starships/starships.schema'
import { mapGetters, mapActions } from 'vuex'

export default {
  async mounted () {
    await this.getStarship(this.$route.params.id)
  },
  computed: {
    ...mapGetters('starships', ['starship']),
    properties () {
      return Object.keys(starshipSchema.properties).map(propName => ({
        name: propName,
        ...starshipSchema.properties[propName]
      }))
    }
  },
  methods: {
    ...mapActions('starships', ['getStarship'])
  }
}
</script>

<style>
.quest {
  padding: 3px 6px;
  width: 20px;
  height: 20px;
  background: grey;
  color: white;
  border-radius: 100%;
  font-size: 14px;
  position: relative;
  float: right;
}
</style>
