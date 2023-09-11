<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Verificación de limpieza y desinfección (concepto y formatos)

    p.mb-4(data-aos="flip-down") Para realizar esta labor se debe que tener en cuenta los Procedimientos Operativos Estandarizados de Saneamiento (conocidos como POES), que son procedimientos escritos, que explican exactamente cuáles son los pasos para determinada tarea de limpieza y desinfección, su objetivo es estandarizar la tarea disminuyendo la posibilidad de error en la ejecución. 

    p.mb-4(data-aos="flip-down") La verificación se realiza mediante la recolección de evidencias objetivas, que dan cuenta de que se han cumplido los requisitos especificados de limpieza y desinfección. Esta verificación se hace mediante la toma de muestras en distintas fases del proceso y el análisis microbiológico. En la siguiente tabla, se presenta un ejemplo de formato para realizar la verificación.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Modelo formato sencillo verificación de POES] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptada de Murcia (s. f.).
            thead
              tr.cabecera-a.text-center
                th  
                th(colspan="5") Preoperativo
              tr.text-center
                th.cabecera-b Superficies (POES críticos)
                th.cabecera-b Muestras día
                th.cabecera-b Semana
                th.cabecera-b Antes
                th.cabecera-b Después de limpieza
                th.cabecera-b Después de desinfección
            tbody
              tr
                th.cabecera-b Pisos
                td.text-center 3
                td.text-center 5
                td.text-center 
                td.text-center 
                td.text-center 
              tr
                th.cabecera-b Cortina
                td.text-center 3
                td.text-center 5
                td.text-center 
                td.text-center 
                td.text-center 
              tr
                th.cabecera-b Comedero
                td.text-center 3
                td.text-center 5
                td.text-center 
                td.text-center 
                td.text-center 
              tr
                th.cabecera-b Bebedero
                td.text-center 3
                td.text-center 5
                td.text-center 
                td.text-center 
                td.text-center 
              tr
                th.cabecera-b ...
                td.text-center 3
                td.text-center 5
                td.text-center 
                td.text-center 
                td.text-center 
              tr
                th.cabecera-b ...
                td.text-center 3
                td.text-center 5
                td.text-center 
                td.text-center 
                td.text-center 
              tr
                th.cabecera-b ...
                td.text-center 3
                td.text-center 5
                td.text-center 
                td.text-center 
                td.text-center 


    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-7.png')})`}"
      ) 
      .bloque-texto-g__texto.p-5
        p.mb-0 Para evaluar si son efectivos los planes de limpieza y desinfección, se puede usar la inspección visual y física de las instalaciones para asegurarse que se encuentre visualmente limpia, en caso de presentarse suciedad física posterior al proceso de lavado, se considera que el área debe ser reprocesada. 

    p.mb-4(data-aos="flip-down") En estos procesos, se tienen en cuenta los puntos específicos de acuerdo con el cumplimiento, con el fin de evaluar, paso a paso, un sistema de monitoreo microbiológico de superficies demuestra la disminución de cargas microbiológicas, expresadas en número de UFC/unidad de superficie. 

    p.mb-4(data-aos="flip-down") En las siguientes tablas se presentan ejemplos de monitoreo microbiológico en dos casetas, usando diferente detergente. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Ejemplo de resultados de monitoreo microbiológico, caseta 3, proceso de lavado (detergente pecuario)] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th ID
                th Sitio
                th Bacterias Aerobias
                th Pseudomonas
                th Hongos
                th Levaduras
                th Unidad
            tbody
              tr
                th.text-center 6
                td.text-center Piso
                td.text-center.bg-c-a-b 2000
                td.text-center.bg-c-a-c <10
                td.text-center.bg-c-a-c <10
                td.text-center.bg-c-a-c 30
                td.text-center UFC/plg#[sup 2]
              tr
                th.text-center 7
                td.text-center Pared
                td.text-center.bg-c-a-b 5400
                td.text-center.bg-c-a-c <10
                td.text-center.bg-c-a-c <10
                td.text-center.bg-c-a-c <10
                td.text-center UFC/plg#[sup 2]
              tr
                th.text-center 8
                td.text-center Cortina
                td.text-center.bg-c-a-b 3600
                td.text-center.bg-c-a-c <10
                td.text-center.cabecera-b 310
                td.text-center.bg-c-a-c <11
                td.text-center UFC/plg#[sup 2]
              tr
                th.text-center 9
                td.text-center Comedero
                td.text-center.bg-c-a-b 1300
                td.text-center.bg-c-a-c <10
                td.text-center.bg-c-a-c <10
                td.text-center.bg-c-a-c <12
                td.text-center UFC/plg#[sup 2]
              tr
                th.text-center 10
                td.text-center Bebedero
                td.text-center.bg-c-a-c 10
                td.text-center.bg-c-a-c <10
                td.text-center.bg-c-a-c 10
                td.text-center.bg-c-a-c <13
                td.text-center UFC/plg#[sup 2]


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Ejemplo de resultados de monitoreo microbiológico, caseta 7, proceso de lavado (detergente en polvo)] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th ID
                th Sitio
                th Bacterias Aerobias
                th Pseudomonas
                th Hongos
                th Levaduras
                th Unidad
            tbody
              tr
                th.text-center 12
                td.text-center Piso
                td.text-center.bg-c-a-b 27,000,000
                td.text-center.bg-c-a-c 30
                td.text-center.bg-c-a-c <10
                td.text-center.cabecera-b 8200
                td.text-center UFC/plg#[sup 2]
              tr
                th.text-center 13
                td.text-center Pared
                td.text-center.bg-c-a-b 160,000,000
                td.text-center.bg-c-a-c <10
                td.text-center.bg-c-a-c 90
                td.text-center.cabecera-b 620
                td.text-center UFC/plg#[sup 2]
              tr
                th.text-center 14
                td.text-center Comedero
                td.text-center.bg-c-s 2,2
                td.text-center.bg-c-a-c <11
                td.text-center.cabecera-b 270
                td.text-center.bg-c-a-c <10
                td.text-center UFC/plg#[sup 2]
              tr
                th.text-center 15
                td.text-center Bebedero
                td.text-center.bg-c-a-b 370,000,000
                td.text-center.bg-c-a-c <12
                td.text-center.cabecera-b 130
                td.text-center.cabecera-b 150
                td.text-center UFC/plg#[sup 2]
              tr
                th.text-center 16
                td.text-center Mini tolva
                td.text-center.bg-c-a-b 32
                td.text-center.bg-c-a-c <10
                td.text-center.cabecera-b 190
                td.text-center.cabecera-b 230
                td.text-center UFC/plg#[sup 2]

    p.mb-4(data-aos="flip-down") Esta evaluación permite que se realicen los ajustes en las dosificaciones, tiempos de contacto, presión de enjuague, etc., en caso de requerirse. 


</template>

<script>
export default {
  name: 'Tema4',
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
