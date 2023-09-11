<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ahorro y uso eficiente del agua

    p.mb-4(data-aos="flip-down") A partir del año de 1992 en el que se llevó a cabo la Conferencia Internacional sobre el Agua y el Medio Ambiente en Dublín, el tema del uso eficiente y ahorro del agua se ha convertido en una necesidad imperante que busca garantizar la sostenibilidad de este recurso a nivel mundial, contemplándose como un recurso altamente vulnerable y esencial para diferentes ámbitos, pero que puede acabarse en cualquier momento y que, por tanto, debe gestionarse participativamente, planificando y haciendo responsable de la toma de decisiones a los usuarios de todos los niveles, cuantificando y cualificando la demanda y analizando los diferentes patrones o hábitos de consumo para realizar acciones que permitan optimizar el uso del recurso hídrico, así como a reducir la contaminación y favorecer la sostenibilidad de los ecosistemas de la misma forma.

    p.mb-4(data-aos="flip-down") Por lo anterior, en el siguiente recurso se entregan elementos relevantes para el uso eficiente y ahorro del agua en las granjas avícolas:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Clave para la Eficiencia en Granjas Avícolas y la Legislación Colombiana")
        .col12.mb-4.mb-md-0
          p El manejo del agua es fundamental en la operación de las granjas o industrias avícolas, de esta dependen la salud general de las aves, los procesos de limpieza y desinfección, el control de la temperatura y el programa de bioseguridad; la mala calidad del agua crea problemas indirectos que afectan la productividad.
          p Es así como en Colombia en 1997 se expide la Ley 373, mediante la cual se establece el “Programa para el uso eficiente y ahorro del agua”, mediante un conjunto de proyectos y acciones dirigidas al uso eficiente del agua por parte de cualquier usuario.
          p Además, en el año 2010 se ordena la Política Nacional para la Gestión Integral del Recurso Hídrico, en la cual se establece el ahorro y uso eficiente del agua considerada como un recurso escaso.

      .row(titulo="Requisitos y Estrategias para Usuarios y Granjas Avícolas en Colombia")
        .col12.mb-4.mb-md-0
          p Cualquier persona natural o jurídica, como usuario y consumidor del recurso hídrico debe adoptar esta normatividad dentro de sus prácticas, formulando un programa de ahorro y uso eficiente del agua, el cual debe ser aprobado por la autoridad ambiental, es decir la Corporación Autónoma Regional (CAR) que expide una resolución con vigencia de 5 años, autorizando a ser uso del recurso hídrico bajo ciertos preceptos.
          p Las granjas avícolas comerciales deben implementar de forma integral la gestión del recurso hídrico, más aún que el agua es importante en la limpieza y desinfección de las instalaciones, y en todas las etapas del proceso productivo, incluso por encima de la ingesta de alimento, en la termorregulación y otros procesos fisiológicos, es por esto, que debe garantizarse un flujo continuo y regular dentro de la producción avícola. 

      .row(titulo="Estrategias para Uso Eficiente y Cuidado del Recurso")
        .col12.mb-4.mb-md-0
          p Se deben realizar actividades que favorezcan el uso eficiente y el ahorro del agua, la apropiada captación, uso de tanques de almacenamiento y acopio adecuado, uso de tuberías de material y calibres indicados, realización de tratamiento, desinfección y control de los parámetros microbiológicos, implementación de filtros, realización de limpieza y desinfección de los elementos y equipos, así como de los tanques.
          p Las aves deben de disponer en todo momento de agua limpia, cualquier restricción en la ingesta de agua o la contaminación de esta afectará el crecimiento y el rendimiento global de las aves, por esto se debe garantizar la implementación de controles de calidad del agua, asegurarse de revisar que la carga microbiana y el contenido mineral estén dentro de los niveles aceptables. Además, el agua es un recurso valioso que debe protegerse y darle un uso eficiente.

      



</template>

<script>
export default {
  name: 'Tema2',
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
