export default {
  global: {
    componenteFormativo:
      'Recurso agua en granjas avícolas y mitigación de olores ofensivos',
    descripcionCurso:
      'El sector avícola colombiano ha venido trabajando desde hace más de 20 años para mejorar el plan de manejo ambiental y las producciones respecto a prácticas, instalaciones, protocolos, indumentaria y equipos para reducir y mitigar   su impacto. Es así como, desde las normativas y perspectivas se han implementado las siguientes políticas: bioseguridad, buenas prácticas y producciones limpias, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia del diagnóstico de los residuos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos generales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Tipos de residuos, clasificación y características de los residuos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Normativa asociada a los residuos sólidos peligrosos y no peligrosos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cómo empezar un diagnóstico de residuos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Realizar el diagnóstico',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Identificación de los recipientes, puntos de generación de residuos y Ecomapa',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Caracterización y cuantificación de los residuos avícolas',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Reconocimiento de la recolección de los residuos',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo:
              'Reconocimiento del sitio de almacenamiento temporal y/o final de los residuos',
            hash: 't_1_10',
          },
          {
            numero: '1.11',
            titulo:
              'Reconocimiento del manejo interno y externo de los residuos',
            hash: 't_1_11',
          },
          {
            numero: '1.12',
            titulo:
              'Reconocimiento de los registros de información requeridos en la gestión de residuos',
            hash: 't_1_12',
          },
          {
            numero: '1.13',
            titulo: 'Informe de diagnóstico de residuos',
            hash: 't_1_13',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ahorro y uso eficiente del agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Equipos y maquinaria para manejo de residuos (tipo y funciones)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Verificación de limpieza y desinfección (concepto y formatos)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Señalización y demarcación de áreas restringidas (concepto, importancia y normativa)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Identificación y evaluación de impactos ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Acciones preventivas y correctivas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Plan de mejoramiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Capacitación ambiental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_17_722203.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Manejo de residuos',
      referencia:
        'Fenavi. (2018). <em>Guía rápida. Alternativas para el manejo de residuos orgánicos de la producción avícola en granjas.</em> Fenavi.',
      tipo: 'Guía',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Residuos_Organicos_-Granjas.pdf',
    },
    {
      tema: 'Manejo de residuos',
      referencia:
        'Unisarc. (2020). <em>Gestión integral de residuos sólidos en avicultura.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Of2YKwJ8zVM',
    },
    {
      tema:
        'Caracterización y cuantificación de los residuos de los residuos avícolas',
      referencia:
        'Fenavi. (2018). <em>Guía rápida. Alternativas para el manejo de residuos sólidos ordinarios en granjas.</em> Fenavi.',
      tipo: 'Guía',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Manejo_Residuos_Solidos.pdf',
    },
    {
      tema: 'Ahorro y uso eficiente del agua',
      referencia:
        'Fenavi. (2018). <em>Guía rápida consideraciones técnicas para la gestión integral del recurso hídrico en granjas avícolas.</em> Fenavi.',
      tipo: 'Guía',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Gestion_integral_del_recurso_hidrico.pdf',
    },
    {
      tema: 'Verificación de limpieza y desinfección (concepto y formatos)',
      referencia:
        'Murcia, F. (s. f.). <em>Verificación microbiológica de programas de limpieza y desinfección.</em> Invima.',
      tipo: 'Documento',
      link:
        'https://www.invima.gov.co/documents/20143/354605/6.+VERIFICACI%C3%93N+MICROBIOLOGICA+DE+POES+Y+VIDA+UTIL.pdf/bc7e3388-1822-ea15-f945-1b83e48df626',
    },
    {
      tema: 'Verificación de limpieza y desinfección (concepto y formatos)',
      referencia:
        'Avicultores Colombia. (2016). <em>Sanitización de la cama en granjas avícolas.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/eCHU31e0DZs',
    },
    {
      tema:
        'Señalización y demarcación de áreas restringidas (concepto, importancia y normativa)',
      referencia:
        'Guía señalización y demarcación de áreas de trabajo Contenido. (s/f). Com.co. Recuperado el 4 de agosto de 2023.',
      tipo: 'Documento',
      link:
        'https://posipedia.com.co/wp-content/uploads/2018/09/guia-senalizacion-demarcacion-areas-trabajo.pdf',
    },
    {
      tema: 'Identificación y evaluación de impactos ambientales',
      referencia:
        'PB, Corantioquia, Área Metropolitana Valle de Aburrá. (2017). <em>Gestión ambiental de olores.</em> Metropol.',
      tipo: 'Cartilla',
      link:
        'https://www.metropol.gov.co/ambiental/calidad-del-aire/Biblioteca-aire/Olores/Cartilla-avicola.pdf',
    },
    {
      tema: 'Acciones preventivas y correctivas',
      referencia:
        'Atende Agro do Issga. (2015). <em>Prevención de riesgos laborales en granjas avícolas.</em> Libraría',
      tipo: 'Documento',
      link:
        'https://libraria.xunta.gal/sites/default/files/downloads/publicacion/2015_200-15_15-00655_-_prevencion_de_riesgos_laborales_en_granjas_avicolas._os_atende_do_issga._folleto.pdf',
    },
    {
      tema: 'Plan de mejoramiento',
      referencia:
        'Fogacoop. (2022). <em>Planes de mejoramiento.</em> Fogacoop.',
      tipo: 'Página web',
      link:
        'https://www.fogacoop.gov.co/nuestra-gestion/planes/planes-de-mejoramiento',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'elemento de las actividades, productos y servicios de una empresa que interactúan con el medio ambiente.',
    },
    {
      termino: 'Cama',
      significado:
        'material que se utiliza en el suelo para la crianza de pollos u otras aves, con capacidad de aislar, absorber humedad y proporcionar confort a los animales (Fenavi, Guía rápida. Alternativas para el manejo de residuos orgánicos de la producción avícola en granjas, 2018).',
    },
    {
      termino: 'Compostaje',
      significado:
        'técnica de estabilización y de tratamiento aerobio de los residuos orgánicos biodegradables, resultado de una actividad microbiológica compleja desarrollada en condiciones controladas.',
    },
    {
      termino: 'Contaminante',
      significado:
        'fenómenos físicos, o sustancias, o elementos en estado sólido, líquido o gaseoso, causantes de efectos adversos en el medio ambiente, los recursos naturales renovables y la salud humana que solos, o en combinación, o como productos de reacción, se emiten al aire como resultado de actividades humanas, de causas naturales, o de una combinación de estas.',
    },
    {
      termino: 'Desecho',
      significado:
        'cualquier materia líquida, sólida, gaseosa o radioactiva que es descargada, emitida, depositada, enterrada o diluida en volúmenes tales que puedan, tarde o temprano, producir alteraciones en el ambiente.',
    },
    {
      termino: 'Gallinaza',
      significado:
        'excreta de la gallina, la cual posee mayores macronutrientes como fósforo y nitrógeno en comparación con la pollinaza.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cuando una acción o actividad produce una alteración, favorable o desfavorable, en el medio o en alguno de los componentes del medio. Hay que hacer constar que el término "impacto" no implica negatividad, ya que estos pueden ser tanto positivos como negativos.',
    },
    {
      termino: 'Microorganismos',
      significado:
        'organismos que, por su tamaño reducido, son imperceptibles a la vista. También denominados “microbios”, estos organismos cuentan con una organización biológica muy básica: una proporción importante de ellos cuentan con apenas una única célula.',
    },
    {
      termino: 'Patógenos',
      significado:
        'agentes infecciosos que pueden provocar enfermedades a su huésped. Este término se emplea normalmente para describir microorganismos como los virus, bacterias y hongos, entre otros. Estos agentes pueden perturbar la fisiología normal de plantas, animales y humanos.',
    },
    {
      termino: 'Plan de Gestión Integral de Residuos Sólidos (PGIRS)',
      significado:
        'instrumento que contiene un conjunto ordenado de objetivos, metas, programas, proyectos, actividades y recursos definidos por uno o más entes para el manejo de los residuos, basado en la política de gestión integral de los mismos, el cual se ejecuta durante un período determinado, basándose en un diagnóstico inicial, en su proyección hacia el futuro y en un plan financiero viable.',
    },
    {
      termino: 'POES',
      significado:
        'procedimientos escritos que explican exactamente cuáles son los pasos para determinada tarea de limpieza y desinfección, su objetivo es estandarizar la tarea disminuyendo la posibilidad de error en la ejecución.',
    },
    {
      termino: 'Pollinaza',
      significado: 'excreta del pollo.',
    },
    {
      termino: 'Residuo',
      significado:
        'material o subproducto industrial considerado, por su cantidad, composición o particular naturaleza, para ser reintegrado a los ciclos, flujos y procesos de esta u otras cadenas productivas.',
    },
    {
      termino: 'Residuo orgánico',
      significado:
        'aquel que por su composición general y específica son derivados del carbono y tienen la propiedad biodegradable.',
    },
    {
      termino: 'Sanitización',
      significado:
        'aplicar calor o químicos necesarios para eliminar la mayoría de los gérmenes en una superficie hasta el punto de que no signifiquen un riesgo a la salud.',
    },
    {
      termino: 'Sistema de Gestión Ambiental (SGA)',
      significado:
        'parte del sistema de gestión de una organización, empleada para desarrollar e implementar su política ambiental y gestionar sus aspectos ambientales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Atende Agro do Issga. (2015). <em>Prevención de riesgos laborales en granjas avícolas.</em> Libraría. ',
      link:
        'https://libraria.xunta.gal/sites/default/files/downloads/publicacion/2015_200-15_15-00655_-_prevencion_de_riesgos_laborales_en_granjas_avicolas._os_atende_do_issga._folleto.pdf',
    },
    {
      referencia:
        'Conesa Fernandez - Vitora, V., Conesa Ripoll, V., Conesa Ripoll, L. A., & Estevan Bolea, M. T. (2010). Guía metodológica para la evaluación del impacto ambiental (4a. ed.). Madrid: Mundi-Prensa. ',
    },
    {
      referencia:
        'Fenavi. (2018). Guía rápida. Alternativas para el manejo de residuos orgánicos de la producción avícola en granjas. Fenavi. ',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Residuos_Organicos_-Granjas.pdf',
    },
    {
      referencia:
        'Función Pública. (s/f). Decreto 351 de 2014. Recuperado el 8 de octubre de 2023, de ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56755',
    },
    {
      referencia:
        'Fogacoop. (2022). <em>Planes de mejoramiento.</em> Fogacoop. ',
      link:
        'https://www.fogacoop.gov.co/nuestra-gestion/planes/planes-de-mejoramiento',
    },
    {
      referencia:
        'Jaramillo, K., Jurado, A., y Loaiza, K. (2017). <em>Plan de mejoramiento para la avícola “Pollos del campo” ubicada en el km 2 vía Cavasa, Vereda El Silencio, Candelaria, Valle.</em> Fundación Universitaria Católica Lumen Gentium. ',
      link:
        'https://www.academia.edu/44848557/plan_de_mejoramiento_para_la_av%c3%8dcola_pollos_del_campo_ubicada_en_el_km_2via_cavasa_vereda_el_silencio_candelaria',
    },
    {
      referencia:
        'Murcia, F. (s. f). <em>Verificación microbiológica de programas de limpieza y desinfección.</em> Invima. ',
      link:
        'https://www.invima.gov.co/documents/20143/354605/6.+VERIFICACI%C3%93N+MICROBIOLOGICA+DE+POES+Y+VIDA+UTIL.pdf/bc7e3388-1822-ea15-f945-1b83e48df626',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2002). Decreto 1713 de 2002. Recuperado el 8 de octubre de 2023, de ',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/gestion-de-recursos-fisicos/decretos/decreto-1713-de-2002.aspx',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente. (2002). Resolución 01164 de 2002. Recuperado de ',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/gestion-de-recursos-fisicos/resoluciones/resolucion-1164-de-2002.aspx',
    },
    {
      referencia:
        'Ponce, V. M. (2021). <em>El sistema de evaluación ambiental de Battelle para la planificación de los recursos hídricos.</em> Ponce',
      link: 'http://ponce.sdsu.edu/el_sea_de_battelle.html',
    },
    {
      referencia:
        'Posipedia. (2018). <em>Guía señalización y demarcación de áreas de trabajo.</em> Positiva. ',
      link:
        'https://posipedia.com.co/wp-content/uploads/2018/09/guia-senalizacion-demarcacion-areas-trabajo.pdf',
    },
    {
      referencia:
        'Reinoso, L. F. (2014). <em>Criterios para la elaboración de estudios de impacto ambiental.</em> Secretaría de Ambiente y Desarrollo Sustentable de Argentina. ',
      link:
        'http://estadisticas.ambiente.gob.ar/archivos/web/Indicadores/file/multisitio/publicaciones/Criterios%20para%20la%20Elaboraci%C3%B3n%20de%20Estudios%20de%20Impacto%20Ambiental.pdf',
    },
    {
      referencia:
        'UPB, Corantioquia, Área Metropolitana Valle de Aburrá. (2017). <em>Gestión ambiental de olores.</em> Metropol. ',
      link:
        'https://www.metropol.gov.co/ambiental/calidad-del-aire/Biblioteca-aire/Olores/Cartilla-avicola.pdf',
    },
    {
      referencia:
        'Universidad Pontificia Bolivariana y Área Metropolitana Valle de Aburrá. (2011). Guía para la gestión de recursos peligrosos. Área Metropolitana. Recuperado de ',
      link:
        'https://www.metropol.gov.co/ambiental/residuos-solidos/GestionRespel/GUIA_RESPEL.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lady Johanna Cruz Sarmiento',
          cargo: 'Experta Temática',
          centro: 'Regional Tolima - Centro Agropecuario la granja',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñadora Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
