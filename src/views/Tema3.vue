<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Equipos y maquinaria para manejo de residuos (tipo y funciones)

    p.mb-4(data-aos="flip-down") Es importante reconocer los equipos de manipulación de desechos, especialmente los que más se usan en las granjas avícolas y que se describen e ilustran a continuación:

    .tarjeta.color-primario.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Roto acelerador
            p Es un equipo que permite controlar las variables del proceso de compostaje, brindando seguridad sanitaria y ambiental, así como un compost final de muy buena calidad para utilizar en agronomía.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-1.png', alt='')  
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Volteador de camas
            p Los removedores están preparados para remover, secar y oxigenar la cama de las aves.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-2.png', alt='') 
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Bandas transportadoras de gallinaza
            p Tienen como función transportar la gallinaza hacia una volqueta lejos de los galpones, en el mercado se encuentran diversas opciones, en donde varían los materiales, los cuales pueden ser polipropileno, tela encauchada, combinación de #[em nylon] y perlón, #[em terylene], acero, etc.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-3.png', alt='') 
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Volqueta
            p Son utilizadas para el acopio y transporte de la gallinaza de las aves que será usada en el proceso de compostaje.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-4.png', alt='') 
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 #[em Bobcat]
            p Es un minicargador que facilita el acopio y transporte de residuos sólidos de forma rápida y eficiente.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-5.png', alt='') 
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Puntos ecológicos
            p Son los lugares en donde se encuentran dispuestas las canecas de los diferentes residuos sólidos con su respectiva nomenclatura para residuos de plástico aprovechables - azul, residuos no aprovechables orgánicos - verde y residuos reciclables tipo papel y similares - gris; los residuos peligrosos se almacenan en canecas rojas que están dispuestos en los lugares generadores y son almacenados en lugares especiales.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-6.png', alt='') 
        
        


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
