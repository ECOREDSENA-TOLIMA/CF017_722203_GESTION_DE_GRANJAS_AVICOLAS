<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4(data-aos="fade-down")
      .col-12
        p En este componente se abordarán los conceptos para el uso eficiente del agua y la reducción de olores relacionados con la producción avícola, con el fin de aplicar las buenas prácticas de la industria. Como punto de partida, se invita a ver el siguiente video introductorio:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FcEkv6RGjg4" title="Recurso agua en granjas avícolas y mitigación de olores ofensivos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Recurso agua en granjas avícolas y mitigación de olores ofensivos




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
