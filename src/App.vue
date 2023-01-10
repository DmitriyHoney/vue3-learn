<script>
import { provide, ref, reactive, readonly } from 'vue';
import useUserRepositories from './composables/useUserRepositories';
import MapMarker from './components/MapMarker.vue';
export default {
  setup(props, ctx) {
    const location = ref('Северный полюс');
    const geolocation = reactive({
      longitude: 90,
      latitude: 135
    });
    const updateLocation = () => location.value = 'Южный полюс';
    provide('location', readonly(location));
    provide('geolocation', readonly(geolocation));
    provide('updateLocation', updateLocation);
    return { ...useUserRepositories(), location };
  },
  components: { MapMarker },
  // provide: {
  //   location: 'Северный полюс',
  //   geolocation: {
  //     longitude: 90,
  //     latitude: 135
  //   }
  // }
}
</script>

<template>
  <h1>App</h1>
  <p>repositries {{ repositries }}</p>
  <p>sum {{ sumRepo }}</p>
  <button @click="addRepo">Add</button>
  <map-marker />
</template>

<style scoped>
</style>
