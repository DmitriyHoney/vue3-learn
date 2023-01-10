<script>
import { inject } from 'vue';
export default {
  // inject: ['location', 'geolocation'],
  setup(props) {
    const userLocation = inject('location', 'По умолчанию значение');
    const userGeoLocation = inject('geolocation');
    const updateLocation = inject('updateLocation');
    console.log('props', props);
    return { userLocation, userGeoLocation, updateLocation };
  },
}
</script>

<template>
  <p>marker {{ userLocation }}</p>
  <p>geolocation {{ userGeoLocation }}</p>
  <button @click="updateLocation">update</button>
</template>
