<template>
  <GestionUtilisateurs/>
  <!-- <Chart :chartLabel="chartData.chartLabel"
  :chartValues="chartData.chartValues"
  :chartTitle="chartData.chartTitle"/> -->
</template>

<script>

// import Chart from './components/Charts.vue';
import GestionUtilisateurs from './components/GestionUtilisateurs.vue';

export default {
components: {
  GestionUtilisateurs,
},
data() {
    return {
      chartData: {
        chartLabel: ['lun', 'mar', 'mer', 'jeu', 'ven'],
        chartValues: [25, 3, 4, 3.5, 2],
        chartTitle: "Dynamic Chart"
      }
    };
  },
};
</script>