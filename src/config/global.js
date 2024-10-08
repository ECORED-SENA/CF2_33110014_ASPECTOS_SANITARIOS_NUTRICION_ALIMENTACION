export default {
  global: {
    componenteFormativo: 'Alimentación en las diferentes etapas de la vida',
    descripcionCurso:
      'Este componente formativo  aborda la alimentación en gestación, embarazo, infancia y adolescencia. Describe los requerimientos nutricionales para el desarrollo y funcionamiento del organismo, y analiza la anorexia nerviosa, común en mujeres adultas. Incluye recomendaciones dietéticas, cambios fisiológicos y metabólicos, y la importancia de una dieta equilibrada en cada etapa para prevenir enfermedades y promover hábitos saludables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
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
        titulo: 'Alimentación en las diferentes etapas de la vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gestación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Bases fisiológicas de la gestación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Lactancia',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Infancia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Adolescencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cambios psicológicos en la adolescencia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Necesidades de energía y nutrientes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Anorexia nerviosa',
            hash: 't_3_3',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33110014_CF02_DU.pdf',
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
      tema: 'Alimentación en las diferentes etapas de la vida',
      referencia:
        'Farmacia Carol  (2020).  La alimentación en las diferentes etapas de la vida. [Archivo de video] YouTube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=thwycvqviPg&ab_channel=FarmaciaCarol ',
    },
    {
      tema: 'Gestación',
      referencia:
        'Rodríguez Gómez, M. (2022, julio 30).<i> Embarazo, lactancia y alimentación complementaria</i> [Video podcast]. En N. Coll (Anfitriona), El Podcast de Soycomomo. YouTube Music. ',
      tipo: 'Pódcast',
      link: 'https://music.youtube.com/watch?v=gtlffaZI7CM ',
    },
    {
      tema: 'Lactancia',
      referencia:
        'Clínica Alemana (2019).  Lactancia materna | Clínica Alemana [Archivo de video] YouTube.  ',
      tipo: 'Video',
      link: 'https://youtu.be/jYqE-n9wsa0?feature=shared',
    },
    {
      tema: 'Infancia',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2023).  Vitaminas y minerales  [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/HKZ3jKd5wGk?feature=shared',
    },
    {
      tema: 'Anorexia nerviosa',
      referencia:
        'AutoSaludables (2018). ANOREXIA - ¿Qué es? Causas, síntomas y tratamiento [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ybHfgSlziNc&ab_channel=AutoSaludables',
    },
  ],
  glosario: [
    {
      termino: 'Ácido fólico',
      significado:
        'vitamina B necesaria para la prevención de malformaciones fetales y el desarrollo celular adecuado.',
    },
    {
      termino: 'Anorexia nerviosa',
      significado:
        'trastorno alimentario caracterizado por un deseo irrefrenable de estar delgado, llevando a prácticas restrictivas y conductas purgativas.',
    },
    {
      termino: 'Carbohidratos',
      significado:
        'fuente principal de energía del cuerpo, disponible en formas simples (azúcares) y complejas (almidones).',
    },
    {
      termino: 'Catabólica',
      significado:
        'etapa del embarazo donde ocurren procesos de síntesis y degradación para distribuir reservas al feto.',
    },
    {
      termino: 'DHA (ácido docosahexaenoico)',
      significado:
        'tipo de omega 3 importante para el desarrollo del cerebro y la retina en el feto y los recién nacidos.',
    },
    {
      termino: 'Gonadotropina coriónica',
      significado:
        'hormona que aumenta la progesterona para hacer más resistente el útero durante el embarazo.',
    },
    {
      termino: 'Hidratos de carbono complejos',
      significado:
        'carbohidratos que se descomponen más lentamente, proporcionando energía sostenida.',
    },
    {
      termino: 'Macronutrientes',
      significado:
        'nutrientes necesarios en grandes cantidades como carbohidratos, proteínas y lípidos.',
    },
    {
      termino: 'Omega 3 y 9',
      significado:
        'ácidos grasos esenciales que contribuyen al desarrollo cerebral y la salud cardiovascular.',
    },
    {
      termino: 'Somatotropina coriónica humana',
      significado:
        'hormona que convierte la grasa en ácidos grasos libres y facilita la disponibilidad de glucosa para el feto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Benyon, S. & Roach, J. (2007). Metabolismo y nutrición. Barcelona: Elsevier.',
    },
    {
      referencia:
        'FAO. (2013). Capítulo 7 - Los lípidos en las primeras etapas del desarrollo. Consultado 03 de septiembre de 2013 en, ',
      link: 'http://www.fao.org/docrep/v4700s/v4700s0b.htm',
    },
    {
      referencia:
        'Izquierdo, M. (2011). Nutrición aplicada. Barcelona, España: Universidad de Barcelona.',
    },
    {
      referencia:
        'Müller, M. (2008). Nutrición y salud pública. Zaragoza, España: Acribia.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'José Eduardo Solano Rivero',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Germán Acosta Ramos',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
