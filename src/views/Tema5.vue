<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Señalización y demarcación de áreas restringidas (concepto, importancia y normativa)

    p.mb-4(data-aos="flip-down") Las señales son un conjunto de estímulos que condicionan la acción de la persona que la recibe, cuyo objetivo es llamar la atención rápida, hacia los objetos o situaciones que puedan afectar la integridad física de las personas y demás elementos de trabajo, los colores de las señalizaciones permiten asociarlo con el significado y la prioridad en la acción a realizar por seguridad.

    p.mb-4(data-aos="flip-down") En la siguiente tabla se relaciona el color, significado y aplicación:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 4.] #[i Significado de los colores de seguridad] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptada de Posipedia (2018).
            thead
              tr.text-center
                th.bg-c-a-b(rowspan="2") Significado
                th(style="background-color:red") Rojo
                th(style="background-color:yellow") Amarillo
                th(style="background-color:green") Verde
                th(style="background-color:blue") Azul
              tr
                td.p-2
                  p -	Prohibición.
                  p -	Parada.
                td.p-2
                  p -	Precaución.
                  p -	Zona de peligro.
                td.p-2
                  p -	Situación de seguridad.
                  p -	Primeros auxilios.
                td.p-2
                  p -	Obligación.
                  p -	Información.
              tr
                th.bg-c-a-b.text-center Aplicación
                td.p-2
                  p -	Señal de prohibición.
                  p -	Área restringida.
                  p -	Señal de parada.
                  p -	Parada de emergencia.
                td.p-2
                  p -	Electricidad, radiación.
                  p -	Guardas de maquinaria.
                  p -	Demarcación de áreas de trabajo o almacenamiento.
                  p -	Desniveles bordes peligrosos o de poca altura.
                td.p-2
                  p -	Señalización de pasillos.
                  p -	Señalización de emergencia (rutas, escaleras, salidas, lavaojos, duchas, etc.).
                td.p-2
                  p -	Uso de elementos de protección personal obligatorios.

    p.mb-4(data-aos="flip-down") En la siguiente figura se relacionan ejemplos de estas señales, con las características y significado.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Figura 8.] #[i Clasificación de la señalización] 
        figure 
          img(src='@/assets/curso/temas/tema5/tema5-f14.png', alt='En la figura 8 se muestra una serie de paneles con diferentes señales de seguridad y advertencia. Cada señal tiene un significado específico y se caracteriza por su diseño distintivo.')  
          figcaption Nota. Tomado de Atende Agro do Issga. (2015). 

    p.mb-5(data-aos="flip-down") La demarcación es la delimitación de lugares donde se labora, y se usa para indicar a las personas cuáles son las zonas de trabajo o restringidas, con estas se marca la diferencia entre áreas, como por ejemplo rutas de circulación, almacenamiento, áreas de trabajo, áreas restringidas para cierto personal, áreas peligrosas, etc.

    .bloque-texto-g.bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-1.png')})`}"
      ) 
      .bloque-texto-g__texto.p-5
        p.mb-0 Con una planificación cuidadosa de la ubicación de los diferentes espacios, se puede mejorar la eficacia y eficiencia en las operaciones industriales, se debe tener en cuenta la naturaleza de los procesos, los materiales, el equipo de manipulación y las condiciones de trabajo, estos son los principales factores que determinan las dimensiones, formas y tipo de estructuras que se pueden usar en el espacio laboral. 

    p.mb-4(data-aos="flip-down") La señalización y la demarcación son importantes para separar y delimitar los espacios de trabajo y más cuando en estos se manejan altos riesgos para los operarios, como ocurre cuando se manipulan corrientes eléctricas, objetos cortopunzantes, residuos peligrosos, áreas de poca visibilidad o ventilación, pisos resbalosos, entre otros. 

    p.mb-4(data-aos="flip-down") Sin embargo, que los operarios que están involucrados en las diversas labores desarrolladas en la industria estén capacitados en los procesos, conozcan los riesgos y porten la indumentaria adecuada para cada uno de ellos es de gran valor para lograr una producción más eficiente y evitar accidentes laborales.




</template>

<script>
export default {
  name: 'Tema5',
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
