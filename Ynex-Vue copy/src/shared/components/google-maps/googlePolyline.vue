<script lang="ts">
import { GoogleMap, Polyline } from "vue3-google-map";
import { reactive } from "vue";
export default {
  components: {
    GoogleMap,
    Polyline,
  },
  setup() {
    const center = { lat: 0, lng: -180 };
    const flightPlanCoordinates = [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ];
    const flightPath = {
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    };

    return { center, flightPath };
  },
}
</script>

<template>
  <GoogleMap api-key="AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA" :center="center" style="width: 100%; height: 300px"
    :zoom="3">
    <Polyline :options="flightPath" />
  </GoogleMap>
</template>

<style scoped></style>
