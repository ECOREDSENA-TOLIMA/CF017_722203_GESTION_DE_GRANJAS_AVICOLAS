<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Plan de mejoramiento

    p.mb-4(data-aos="fade-down") Es un conjunto de acciones sistemáticas que propende por el mejoramiento permanente de la gestión y los procesos de una empresa, el cual se constituye a partir de las fortalezas y debilidades encontradas, en los procesos de evaluación realizados por los diferentes entes de control (Fogacoop, 2022), en pocas palabras el plan de mejoramiento es la fijación de objetivos claros y los procesos diseñados para cumplir sus metas de acuerdo con las responsabilidades de cada parte del proceso. 
    p.mb-4(data-aos="fade-down") El plan de mejoramiento debe estar liderado desde la cabeza de la organización, ya que son los encargados del desarrollo sostenible de la empresa, buscando alternativas de mejora y de producción más limpia que aumenten la competitividad y por ende la calidad de su producción.
    p.mb-5(data-aos="fade-down") A continuación, se describen las acciones a implementar en un plan de mejoramiento:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Figura 17.] #[i Mapa conceptual plan de mejoramiento] 
        figure 
          img(src='@/assets/curso/temas/tema9/tema9-f17.svg', alt='En la figura 17 se muestra el diagrama de flujo del plan de mejoramiento.')  

    p.mb-4(data-aos="fade-down") Como primera medida se deben planificar las acciones a ejecutar dentro del plan de mejoramiento, ya que, partiendo de una buena planificación, se garantiza el éxito del plan, y es allí donde se establece la hoja de ruta para la ejecución de cada programa. 

    p.mb-4(data-aos="fade-down") Esta actividad se divide en la organización de la empresa con la elaboración de un plan estratégico y el plan operativo donde se constituye la política interna y los procedimientos a ejecutar en cada proceso de producción.

    p.mb-4(data-aos="fade-down") El éxito de una empresa se define en su engranaje y que todas las fichas que hacen parte de ella cumplan a cabalidad con su labor, por lo que la organización de los cargos y roles definirán las líneas de autoridad dentro de la empresa, así como sus deberes y responsabilidades para identificar, en caso de una falla, la ficha que frena la mejora continua y realizar los ajustes que haya a lugar. 

    p.mb-4(data-aos="fade-down") La dirección será la encargada de garantizar la comunicación asertiva entre sus colaboradores para fomentar el trabajo en equipo y lograr que la empresa sea una familia, donde el trabajador se sienta a gusto haciendo lo que hace.

    .mb-4(data-aos="fade-down") Por último, el control interno de todo lo planificado y llevado a cabo, permitirá evaluar si, efectivamente, las acciones implementadas conducen a una mejora en cada etapa de los procesos de producción y, así mismo, identificar si algún proceso está fallando para implementar los correctivos correspondientes. 




</template>

<script>
export default {
  name: 'Tema9',
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
