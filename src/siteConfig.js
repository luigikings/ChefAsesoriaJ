// =============================================================
// siteConfig.js
// -------------------------------------------------------------
// Edita este archivo para cambiar TODO el contenido de la web:
// marca, datos de contacto, textos de cada página, servicios,
// catálogo de la tienda, formularios y colores. No necesitas
// tocar los componentes ni las páginas para actualizar el copy.
// =============================================================

// Secciones que se pueden ocultar sin borrar su página ni su contenido.
// La tienda está oculta hasta que haya productos a la venta:
// cambia `shop` a `true` para que vuelva a aparecer en toda la web.
const features = {
  shop: false,
}

const onlyIf = (enabled, items) => (enabled ? items : [])

export const siteConfig = {
  features,

  brand: {
    nombre: 'GATROBATOS',
    claim: 'Hostelería. Gestión. Profesionales. Gastronomía.',
    descripcion:
      'Un espacio creado desde la experiencia real en hostelería para conectar profesionales, proporcionar herramientas de gestión, mejorar los negocios y desarrollar proyectos gastronómicos.',
  },

  contacto: {
    email: '[EMAIL]',
    telefono: '[TELÉFONO]',
    telefonoVisible: '[+34 000 000 000]',
    whatsappNumero: '34600000000', // Solo dígitos, con código de país, sin '+' ni espacios
    whatsappMensajePredefinido: 'Hola, quiero más información sobre Gatrobatos.',
    ciudad: '[CIUDAD]',
    zonaDeTrabajo: '[CIUDAD] y alrededores (proyectos también a distancia y en otras ciudades)',
  },

  redes: {
    instagram: 'https://instagram.com/[USUARIO]',
    linkedin: 'https://linkedin.com/company/[USUARIO]',
  },

  nav: [
    { label: 'Inicio', to: '/' },
    { label: 'Somos Hostelería', to: '/somos-hosteleria' },
    ...onlyIf(features.shop, [{ label: 'Shop', to: '/shop' }]),
    { label: 'I+Chef Consulting', to: '/consultoria' },
    { label: 'Chef Privado', to: '/chef-privado' },
    { label: 'Nosotros', to: '/nosotros' },
  ],

  // -----------------------------------------------------------
  // SEO por página. Cada página aplica esto con el hook usePageMeta.
  // -----------------------------------------------------------
  meta: {
    home: {
      title: 'Gatrobatos · Hostelería, gestión, profesionales y gastronomía',
      description: features.shop
        ? 'Gatrobatos agrupa una red profesional, una tienda de herramientas de gestión, consultoría gastronómica y servicios de chef privado. Un solo proyecto nacido desde la experiencia real en hostelería.'
        : 'Gatrobatos agrupa una red profesional, consultoría gastronómica y servicios de chef privado. Un solo proyecto nacido desde la experiencia real en hostelería.',
    },
    somosHosteleria: {
      title: 'Somos Hostelería · Red profesional de Gatrobatos',
      description:
        'Únete a Somos Hostelería, la comunidad de profesionales de la restauración y la gastronomía: empleo, networking, formación, herramientas y colaboraciones.',
    },
    shop: {
      title: 'Gatrobatos Shop · Herramientas para profesionales de hostelería',
      description:
        'Escandallos, fichas técnicas, control de food cost, checklists APPCC y packs profesionales creados desde la experiencia real en cocina.',
    },
    consulting: {
      title: 'I+Chef Consulting · Consultoría gastronómica, gestión y RR. HH.',
      description:
        'Consultoría operativa, food cost y rentabilidad, diseño de carta, aperturas, formación y selección de profesionales HORECA para restaurantes, hoteles y grupos de restauración.',
    },
    chefPrivado: {
      title: 'Chef Privado · Experiencias y servicios gastronómicos a medida',
      description:
        'Chef privado, eventos, acompañamiento de marca, experiencias gastronómicas, servicios para empresas y estancias con chef incluido.',
    },
    nosotros: {
      title: 'Nosotros · Sobre Gatrobatos',
      description:
        'Gatrobatos nace de años de experiencia dentro de cocinas, restaurantes, hoteles, consultoría y gestión gastronómica.',
    },
    contacto: {
      title: 'Contacto · Gatrobatos',
      description: 'Escríbenos para resolver dudas sobre cualquiera de los proyectos de Gatrobatos.',
    },
  },

  // -----------------------------------------------------------
  // HOME
  // -----------------------------------------------------------
  home: {
    hero: {
      kicker: 'Gatrobatos',
      titulo: 'Hostelería. Gestión. Profesionales. Gastronomía.',
      subtitulo:
        'Un espacio creado desde la experiencia real en hostelería para conectar profesionales, proporcionar herramientas de gestión, mejorar los negocios y desarrollar proyectos gastronómicos.',
      accesos: [
        { label: 'Únete a Somos Hostelería', to: '/somos-hosteleria' },
        ...onlyIf(features.shop, [{ label: 'Descubre nuestras herramientas', to: '/shop' }]),
        { label: 'Mejora la gestión de tu negocio', to: '/consultoria' },
      ],
    },
    pilares: [
      {
        icono: 'Users',
        titulo: 'Somos Hostelería',
        subtitulo: 'Red profesional',
        texto:
          'Comunidad de profesionales de la restauración y la gastronomía: empleo, networking, formación y colaboraciones.',
        to: '/somos-hosteleria',
        cta: 'Conocer la comunidad',
      },
      ...onlyIf(features.shop, [
        {
          icono: 'ShoppingBag',
          titulo: 'Gatrobatos Shop',
          subtitulo: 'Tienda de herramientas',
          texto:
            'Documentos y herramientas profesionales listas para usar: escandallos, fichas técnicas, control de costes y packs completos.',
          to: '/shop',
          cta: 'Ver la tienda',
        },
      ]),
      {
        icono: 'ChefHat',
        titulo: 'I+Chef Consulting',
        subtitulo: 'Consultoría, gestión y RR. HH.',
        texto:
          'Consultoría operativa, food cost, diseño de carta, aperturas, formación y selección de profesionales HORECA.',
        to: '/consultoria',
        cta: 'Ver servicios de consultoría',
      },
      {
        icono: 'Sparkles',
        titulo: 'Chef Privado',
        subtitulo: 'Servicios gastronómicos y experiencias',
        texto: 'Comidas privadas, eventos, colaboraciones con marcas, experiencias gastronómicas y estancias.',
        to: '/chef-privado',
        cta: 'Descubrir experiencias',
      },
    ],
    aboutTeaser: {
      kicker: 'Sobre Gatrobatos',
      titulo: 'Conocemos la hostelería porque hemos trabajado dentro de ella',
      texto:
        'Gatrobatos nace de años de experiencia dentro de cocinas, restaurantes, hoteles, consultoría, gestión gastronómica y desarrollo de proyectos vinculados con la hostelería. El objetivo es reunir bajo una misma plataforma profesionales, herramientas, conocimiento y servicios destinados a mejorar el sector.',
      cta: 'Conoce el proyecto',
      to: '/nosotros',
    },
    faq: {
      titulo: 'Preguntas frecuentes',
      lista: [
        {
          pregunta: '¿Gatrobatos es una sola empresa o varios proyectos distintos?',
          respuesta: features.shop
            ? 'Gatrobatos es la marca que agrupa cuatro proyectos relacionados con la hostelería: Somos Hostelería (comunidad), Gatrobatos Shop (herramientas), I+Chef Consulting (consultoría y RR. HH.) y Chef Privado (servicios gastronómicos). Cada área tiene su propio enfoque, pero comparten la misma experiencia detrás.'
            : 'Gatrobatos es la marca que agrupa varios proyectos relacionados con la hostelería: Somos Hostelería (comunidad), I+Chef Consulting (consultoría y RR. HH.) y Chef Privado (servicios gastronómicos). Cada área tiene su propio enfoque, pero comparten la misma experiencia detrás.',
        },
        {
          pregunta: '¿Tiene coste unirme a Somos Hostelería?',
          respuesta: 'No. Unirse a la red profesional Somos Hostelería es gratuito y voluntario.',
        },
        ...onlyIf(features.shop, [
          {
            pregunta: '¿Cómo compro los documentos de Gatrobatos Shop?',
            respuesta:
              'De momento la tienda funciona bajo pedido: eliges el pack o la herramienta que te interesa y nos contactas para gestionar la compra. Próximamente habilitaremos compra online directa.',
          },
        ]),
        {
          pregunta: '¿Puedo contratar solo una parte de la consultoría (por ejemplo, food cost)?',
          respuesta:
            'Sí. Los servicios de I+Chef Consulting pueden contratarse de forma puntual (una auditoría, el diseño de una carta) o como acompañamiento continuo, según lo que necesite tu negocio.',
        },
        {
          pregunta: '¿El servicio de RR. HH. HORECA es un portal de empleo?',
          respuesta:
            'No funcionamos como un portal de empleo generalista. Antes de buscar candidatos, analizamos el puesto, la cocina y la operación real del negocio para presentar solo perfiles que encajen de verdad.',
        },
        {
          pregunta: '¿Chef Privado solo trabaja en un tipo de evento?',
          respuesta:
            'No. Chef Privado cubre desde una cena familiar hasta una activación de marca en una feria, pasando por estancias de varios días o experiencias gastronómicas para empresas.',
        },
      ],
    },
  },

  // -----------------------------------------------------------
  // SOMOS HOSTELERÍA
  // -----------------------------------------------------------
  somosHosteleria: {
    hero: {
      kicker: 'Somos Hostelería · Red profesional',
      titulo: 'Una red creada por profesionales del sector para profesionales del sector',
      texto:
        'Somos Hostelería nace para crear una comunidad formada por profesionales vinculados a la restauración y la gastronomía. La comunidad permite compartir conocimiento, contactos, oportunidades laborales, formación, herramientas, proyectos y colaboraciones.',
      nota:
        'Actualmente la red tiene presencia principalmente a través de WhatsApp y progresivamente se incorporarán nuevos servicios dentro de Gatrobatos.',
      cta: 'Quiero unirme a Somos Hostelería',
    },
    perfiles: {
      titulo: '¿Quién forma parte de la comunidad?',
      lista: [
        { icono: 'ChefHat', label: 'Chefs' },
        { icono: 'ChefHat', label: 'Jefes de cocina' },
        { icono: 'Utensils', label: 'Cocineros' },
        { icono: 'LineChart', label: 'Directores de F&B' },
        { icono: 'Users', label: 'Responsables de sala' },
        { icono: 'Wine', label: 'Sumilleres' },
        { icono: 'Cake', label: 'Pasteleros' },
        { icono: 'Briefcase', label: 'Directivos' },
        { icono: 'Building2', label: 'Empresarios' },
        { icono: 'ClipboardCheck', label: 'Consultores' },
        { icono: 'Truck', label: 'Proveedores' },
        { icono: 'Search', label: 'Profesionales en búsqueda activa de empleo' },
        { icono: 'UserRound', label: 'Otros perfiles relacionados con el sector' },
      ],
    },
    beneficios: {
      titulo: 'Qué puedes encontrar en la comunidad',
      lista: [
        'Conocimiento compartido entre profesionales del sector.',
        'Contactos y networking dentro de la hostelería.',
        'Oportunidades laborales.',
        'Formación.',
        'Herramientas profesionales.',
        'Proyectos y colaboraciones.',
      ],
    },
    form: {
      titulo: 'Formulario de inscripción',
      subtitulo: 'Cuéntanos quién eres y qué buscas. La participación es voluntaria y gratuita.',
      tiposSituacion: ['Trabajando', 'Buscando empleo', 'Autónomo', 'Empresario', 'Estudiante', 'Disponible para nuevos proyectos', 'Otros'],
      areasInteres: [
        'Empleo',
        'Networking',
        'Gestión',
        'Formación',
        'Proveedores',
        'Compras',
        'Consultoría',
        'Herramientas profesionales',
        'Emprendimiento',
        'Eventos',
        'Colaboraciones',
        'Otros',
      ],
      notaPrivacidad:
        'Al enviar este formulario aceptas nuestra política de privacidad y el tratamiento de tus datos para fines de la comunidad Somos Hostelería.',
    },
  },

  // -----------------------------------------------------------
  // GATROBATOS SHOP
  // -----------------------------------------------------------
  shop: {
    hero: {
      kicker: 'Gatrobatos Shop',
      titulo: 'Herramientas creadas para profesionales de hostelería',
      texto:
        'Tienda especializada en documentos, plantillas y sistemas de gestión creados desde la experiencia profesional. No son simples archivos de Excel o PDF: son herramientas profesionales listas para utilizar.',
    },
    categorias: [
      {
        icono: 'ChefHat',
        titulo: 'Gestión de cocina',
        items: ['Escandallos', 'Fichas técnicas', 'Recetarios', 'Producción', 'Inventarios', 'Pedidos', 'Mermas', 'Stocks'],
      },
      {
        icono: 'Calculator',
        titulo: 'Food Cost y rentabilidad',
        items: ['Food cost', 'Ingeniería de menú', 'Márgenes', 'Precios de compra', 'Proveedores', 'Rentabilidad por plato'],
      },
      {
        icono: 'ClipboardList',
        titulo: 'Operaciones',
        items: ['Checklists', 'Partes diarios', 'Incidencias', 'Manuales operativos', 'Mantenimiento', 'Protocolos'],
      },
      {
        icono: 'Users',
        titulo: 'Gestión de equipos',
        items: ['Plantillas', 'Turnos', 'Funciones', 'Evaluación', 'Planificación', 'Organigramas'],
      },
      {
        icono: 'ShieldCheck',
        titulo: 'APPCC y seguridad alimentaria',
        items: ['Registros', 'Controles', 'Checklists', 'Documentación'],
      },
    ],
    packs: {
      titulo: 'Packs profesionales',
      subtitulo: 'Las herramientas de cada área agrupadas en un único pack listo para tu cocina.',
      lista: [
        { icono: 'ChefHat', titulo: 'Pack Jefe de Cocina', texto: 'Todo lo necesario para dirigir la cocina del día a día con criterio y orden.' },
        { icono: 'Calculator', titulo: 'Pack Food Cost', texto: 'Escandallos, márgenes y control de costes listos para aplicar en tu carta.' },
        { icono: 'ClipboardList', titulo: 'Pack Gestión de Cocina', texto: 'Producción, inventarios, pedidos y mermas bajo control.' },
        { icono: 'DoorOpen', titulo: 'Pack Apertura', texto: 'Documentación y herramientas para abrir un local desde cero.' },
        { icono: 'LineChart', titulo: 'Pack F&B Manager', texto: 'Herramientas de gestión pensadas para dirección de F&B.' },
        { icono: 'Truck', titulo: 'Pack Compras y Proveedores', texto: 'Control de proveedores, precios de compra y pedidos.' },
        { icono: 'Factory', titulo: 'Pack Producción', texto: 'Planificación y control de producción para cocinas de volumen.' },
      ],
    },
    cta: {
      titulo: '¿No encuentras lo que necesitas?',
      texto: 'Cuéntanos qué herramienta necesita tu cocina y te decimos si ya la tenemos o podemos crearla.',
    },
  },

  // -----------------------------------------------------------
  // I+CHEF CONSULTING
  // -----------------------------------------------------------
  consulting: {
    hero: {
      kicker: 'I+Chef Consulting',
      titulo: 'Consultoría especializada en hostelería',
      texto:
        'Convertimos experiencia, datos, procesos y personas en negocios mejor organizados, gestionados y rentables.',
    },
    quienes: {
      titulo: 'Prestamos servicio a',
      lista: [
        { icono: 'Store', label: 'Restaurantes' },
        { icono: 'Hotel', label: 'Hoteles' },
        { icono: 'Building2', label: 'Grupos de restauración' },
        { icono: 'Truck', label: 'Caterings' },
        { icono: 'Package', label: 'Empresas de alimentación' },
        { icono: 'Boxes', label: 'Proveedores' },
        { icono: 'Rocket', label: 'Emprendedores' },
        { icono: 'Sparkles', label: 'Proyectos gastronómicos' },
      ],
    },
    nav: [
      { label: 'Consultoría operativa', href: '#operativa' },
      { label: 'Food cost y rentabilidad', href: '#food-cost' },
      { label: 'Oferta gastronómica', href: '#oferta' },
      { label: 'Aperturas', href: '#aperturas' },
      { label: 'Formación', href: '#formacion' },
      { label: 'RR. HH. HORECA', href: '#rrhh' },
    ],
    operativa: {
      id: 'operativa',
      icono: 'ClipboardCheck',
      titulo: 'Consultoría operativa',
      items: [
        'Análisis del funcionamiento del establecimiento',
        'Organización de cocina',
        'Procesos',
        'Producción',
        'Compras',
        'Stocks',
        'Inventarios',
        'Mermas',
        'Organización de equipos',
        'Optimización de procedimientos',
        'Implantación de herramientas de control',
      ],
    },
    foodCost: {
      id: 'food-cost',
      icono: 'Calculator',
      titulo: 'Food Cost y rentabilidad',
      items: [
        'Escandallos',
        'Coste teórico y real',
        'Análisis de proveedores',
        'Control de precios',
        'Ingeniería de menú',
        'Márgenes',
        'Optimización de compras',
        'Rentabilidad por plato',
        'Análisis de carta',
      ],
    },
    oferta: {
      id: 'oferta',
      icono: 'BookOpenCheck',
      titulo: 'Creación y optimización de oferta gastronómica',
      items: [
        'Diseño de cartas',
        'Creación de conceptos',
        'Desarrollo de recetas',
        'Estandarización',
        'Fichas técnicas',
        'Presentación',
        'Montaje',
        'Actualización de oferta gastronómica',
      ],
    },
    aperturas: {
      id: 'aperturas',
      icono: 'DoorOpen',
      titulo: 'Aperturas y reorganización',
      items: [
        'Diseño operativo',
        'Organización de espacios',
        'Procesos',
        'Documentación',
        'Herramientas de gestión',
        'Estructura de cocina',
        'Definición de puestos',
        'Formación de equipos',
        'Implantación',
        'Seguimiento',
      ],
    },
    formacion: {
      id: 'formacion',
      icono: 'GraduationCap',
      titulo: 'Formación',
      items: [
        'Formación de equipos',
        'Gestión para jefes de cocina',
        'Food cost',
        'Compras',
        'Organización',
        'Producción',
        'Gestión de equipos',
        'Rentabilidad',
        'Herramientas profesionales',
        'Procedimientos',
      ],
    },
    rrhh: {
      id: 'rrhh',
      hero: {
        kicker: 'RR. HH. HORECA',
        titulo: 'Encontramos profesionales que entienden tu negocio',
        texto:
          'I+Chef Consulting incorpora un servicio especializado de búsqueda y selección de profesionales para empresas de hostelería. El objetivo es ayudar a restaurantes, hoteles, grupos de restauración y otras empresas del sector a localizar perfiles adecuados para las necesidades reales de cada negocio.',
        diferencia:
          'No funcionamos como un portal de empleo generalista. La diferencia está en conocer previamente el puesto, la cocina, la operación y las necesidades reales del establecimiento.',
      },
      perfiles: {
        titulo: 'Perfiles profesionales',
        grupos: [
          {
            titulo: 'Cocina',
            lista: ['Chef ejecutivo', 'Executive Chef', 'Jefe de cocina', 'Segundo jefe de cocina', 'Sous Chef', 'Cocinero', 'Jefe de partida', 'Pastelero', 'Ayudante de cocina'],
          },
          {
            titulo: 'F&B y gestión',
            lista: ['Director de F&B', 'F&B Manager', 'Director de restauración', 'Operations Manager', 'Area Manager', 'Responsable de compras', 'Controller F&B', 'Responsable de producción'],
          },
          {
            titulo: 'Sala',
            lista: ['Director de restaurante', 'Maître', 'Segundo maître', 'Jefe de sala', 'Sumiller', 'Camarero', 'Bartender', 'Otros perfiles especializados'],
          },
        ],
      },
      proceso: {
        titulo: 'Cómo funcionará el servicio',
        pasos: [
          {
            numero: '01',
            titulo: 'Análisis de necesidades',
            texto:
              'Antes de iniciar la búsqueda analizamos junto al cliente: tipo de establecimiento, concepto gastronómico, volumen de negocio, organización, equipo existente, funciones del puesto, experiencia necesaria, horario, responsabilidades, condiciones laborales, banda salarial e incorporación prevista.',
          },
          {
            numero: '02',
            titulo: 'Definición del perfil',
            texto:
              'Creamos conjuntamente el perfil profesional que realmente necesita el establecimiento, evitando el error habitual de buscar un puesto por su nombre sin definir qué necesita hacer esa persona.',
          },
          {
            numero: '03',
            titulo: 'Búsqueda de candidatos',
            texto:
              'Localizamos perfiles a través de la red profesional Somos Hostelería, la base profesional de Gatrobatos, networking, redes profesionales, búsqueda directa, portales profesionales y otras fuentes especializadas.',
          },
          {
            numero: '04',
            titulo: 'Preselección',
            texto:
              'Antes de presentar candidatos valoramos experiencia, trayectoria, conocimientos, funciones desarrolladas, disponibilidad, expectativas profesionales y salariales, y adecuación al puesto.',
          },
          {
            numero: '05',
            titulo: 'Entrevista profesional',
            texto:
              'Cuando el puesto lo requiere, realizamos una entrevista especializada antes de presentar el candidato, valorando el perfil desde el conocimiento real de la operación hostelera.',
          },
          {
            numero: '06',
            titulo: 'Presentación de candidatos',
            texto:
              'La empresa recibe únicamente los perfiles que han superado la fase inicial de selección, reduciendo tiempo y entrevistas innecesarias.',
          },
          {
            numero: '07',
            titulo: 'Coordinación del proceso',
            texto: 'Nos encargamos del contacto con candidatos, la coordinación de entrevistas, el seguimiento y la comunicación entre las partes.',
          },
          {
            numero: '08',
            titulo: 'Incorporación y seguimiento',
            texto: 'Cuando el servicio contratado lo incluye, realizamos seguimiento de la incorporación para comprobar la adaptación inicial.',
          },
        ],
      },
      relacionComunidad:
        'La red Somos Hostelería tiene una relación estratégica con esta línea de negocio: los profesionales que lo deseen pueden indicar en su perfil "Disponible para nuevas oportunidades profesionales". La finalidad no es crear una bolsa de trabajo, sino una red profesional permanente del sector.',
      empresas: {
        titulo: '¿Buscas profesionales para tu negocio?',
        texto: 'Podemos ayudarte a definir el perfil, localizar candidatos y realizar una primera selección profesional.',
        cta: 'Busco profesionales',
        tiposEstablecimiento: ['Restaurante', 'Hotel', 'Grupo de restauración', 'Catering', 'Empresa de alimentación', 'Otro'],
      },
      profesionales: {
        titulo: '¿Quieres recibir oportunidades profesionales?',
        texto: 'Los miembros de Somos Hostelería pueden indicar si desean participar en procesos de selección.',
        cta: 'Quiero formar parte de la red profesional',
      },
    },
  },

  // -----------------------------------------------------------
  // CHEF PRIVADO
  // -----------------------------------------------------------
  chefPrivado: {
    hero: {
      kicker: 'Chef Privado',
      titulo: 'Experiencias gastronómicas y servicios culinarios personalizados',
      texto: 'Una propuesta profesional diseñada para particulares, empresas y marcas.',
    },
    areas: [
      {
        id: 'personalizado',
        icono: 'UtensilsCrossed',
        titulo: 'Chef Privado Personalizado',
        items: [
          'Comidas y cenas privadas',
          'Celebraciones',
          'Menús degustación',
          'Experiencias gastronómicas',
          'Servicio recurrente',
          'Servicio familiar',
          'Profesionales y deportistas',
          'Menús personalizados',
          'Residencias, villas y alojamientos privados',
          'Servicios de uno o varios días',
        ],
      },
      {
        id: 'eventos',
        icono: 'PartyPopper',
        titulo: 'Eventos Privados',
        items: [
          'Celebraciones',
          'Cumpleaños',
          'Aniversarios',
          'Eventos familiares',
          'Cócteles',
          'Cenas especiales',
          'Presentaciones',
          'Eventos corporativos',
          'Fincas, domicilios y espacios privados',
        ],
        extra: {
          titulo: 'Colaboradores disponibles',
          items: ['Sala', 'Sumillería', 'Coctelería', 'Vajilla', 'Cristalería', 'Decoración', 'Montaje', 'Espacios', 'Producción'],
        },
      },
      {
        id: 'marcas',
        icono: 'Award',
        titulo: 'Marcas',
        subareas: [
          {
            titulo: 'Acompañamiento de marca',
            items: ['Chef embajador', 'Presentaciones de producto', 'Lanzamientos', 'Showcookings', 'Ferias', 'Congresos', 'Eventos corporativos', 'Activaciones', 'Demostraciones', 'Experiencias de producto', 'Presentaciones comerciales'],
          },
          {
            titulo: 'Desarrollo para marcas',
            items: ['Desarrollo de recetas', 'Aplicaciones gastronómicas', 'Test de producto', 'Recetarios', 'Contenido gastronómico', 'Formación comercial', 'Demostraciones', 'Producciones audiovisuales', 'Fotografía y vídeo mediante colaboradores'],
          },
        ],
      },
      {
        id: 'experiencias',
        icono: 'Flame',
        titulo: 'Experiencias Gastronómicas',
        items: ['Showcookings', 'Talleres', 'Masterclass', 'BBQ', 'Cocina al fuego', 'Cocina internacional', 'Experiencias temáticas', 'Catas', 'Maridajes', "Chef's table", 'Cocina interactiva'],
      },
      {
        id: 'empresas',
        icono: 'Building2',
        titulo: 'Empresas',
        items: ['Team building', 'Retos por equipos', 'Talleres', 'Showcooking corporativo', 'Eventos para clientes', 'Incentivos', 'Eventos internos', 'Experiencias directivas', 'Presentaciones'],
      },
      {
        id: 'estancias',
        icono: 'Home',
        titulo: 'Estancias',
        texto: 'Servicio de chef para varios días en villas, residencias, fincas, alojamientos premium, segundas residencias y vacaciones.',
        items: ['Desayuno', 'Comida', 'Cena', 'Snacks', 'Compras', 'Despensa', 'Planificación', 'Eventos durante la estancia'],
      },
    ],
    proyectosEspeciales: {
      icono: 'Star',
      titulo: 'Proyectos especiales',
      items: ['Producciones', 'Rodajes', 'Sesiones fotográficas', 'Pop-ups', 'Eventos especiales', 'Colaboraciones', 'Proyectos internacionales', 'Presentaciones', 'Desarrollo gastronómico', 'Otros proyectos vinculados con gastronomía'],
    },
  },

  // -----------------------------------------------------------
  // NOSOTROS
  // -----------------------------------------------------------
  nosotros: {
    hero: {
      kicker: 'Sobre Gatrobatos',
      titulo: 'Conocemos la hostelería porque hemos trabajado dentro de ella',
      texto:
        'Gatrobatos nace de años de experiencia dentro de cocinas, restaurantes, hoteles, consultoría, gestión gastronómica y desarrollo de proyectos vinculados con la hostelería.',
    },
    mision: {
      titulo: 'Qué queremos conseguir',
      texto:
        'El objetivo es reunir bajo una misma plataforma profesionales, herramientas, conocimiento y servicios destinados a mejorar el sector. Gatrobatos será la marca principal desde la que se agrupan diferentes proyectos, servicios y herramientas relacionados con la hostelería y la gastronomía profesional.',
    },
    vision: {
      titulo: 'Hacia dónde vamos',
      texto:
        'La primera fase de Gatrobatos es comunidad + herramientas + consultoría + RR. HH. + servicios gastronómicos. La intención es evolucionar progresivamente hacia una plataforma profesional especializada en hostelería, utilizando la comunidad y las necesidades reales de profesionales y empresas para decidir qué nuevas soluciones desarrollar.',
    },
    roadmap: {
      titulo: 'Próximos pasos',
      subtitulo: 'La arquitectura de Gatrobatos está pensada para poder incorporar, más adelante:',
      lista: [
        'Área privada y registro profesional',
        'Perfil profesional y base de candidatos',
        'Ofertas de empleo',
        'Suscripciones, cursos y formación',
        'Biblioteca de recursos',
        'Software de gestión y aplicación propia',
        'Directorio profesional y marketplace de proveedores',
        'Gestión de eventos',
        'Herramientas online y dashboards',
        'Comunidad ampliada',
      ],
    },
    fundador: {
      titulo: 'Quién está detrás',
      parrafos: [
        'Gatrobatos está impulsado por [NOMBRE DEL CHEF], cocinero de formación y consultor de cocina con [AÑOS DE EXPERIENCIA] años de experiencia en cocinas profesionales.',
        'Después de pasar por distintas cocinas, restaurantes y proyectos de consultoría, decidió reunir en un solo lugar todo lo que un profesional u hostelero necesita: comunidad, herramientas, consultoría y servicios gastronómicos.',
      ],
      firma: '[NOMBRE DEL CHEF]',
      cargo: 'Fundador de Gatrobatos',
    },
    testimonios: {
      titulo: 'Lo que dicen quienes ya han trabajado con nosotros',
      lista: [
        {
          texto:
            '"[TESTIMONIO PLACEHOLDER] Desde que trabajamos juntos, por fin entiendo los números de mi cocina y he dejado de tener sustos a fin de mes."',
          nombre: '[NOMBRE CLIENTE]',
          cargo: 'Propietario/a, [NOMBRE RESTAURANTE], [CIUDAD]',
        },
        {
          texto:
            '"[TESTIMONIO PLACEHOLDER] Encontramos al jefe de cocina que necesitábamos en unas semanas, con un perfil que de verdad encajaba con nuestra operación."',
          nombre: '[NOMBRE CLIENTE]',
          cargo: 'Director/a de F&B, [NOMBRE EMPRESA]',
        },
        {
          texto:
            '"[TESTIMONIO PLACEHOLDER] El chef privado hizo que la cena de la marca fuera memorable, muy profesional de principio a fin."',
          nombre: '[NOMBRE CLIENTE]',
          cargo: 'Responsable de marca, [NOMBRE EMPRESA]',
        },
      ],
    },
  },

  // -----------------------------------------------------------
  // CONTACTO
  // -----------------------------------------------------------
  contactoPage: {
    hero: {
      kicker: 'Contacto',
      titulo: 'Hablemos de tu proyecto',
      texto: 'Cuéntanos qué necesitas y te respondemos personalmente para ver cómo Gatrobatos puede ayudarte.',
    },
    tiposConsulta: [
      'Somos Hostelería',
      ...onlyIf(features.shop, ['Gatrobatos Shop']),
      'I+Chef Consulting',
      'RR. HH. HORECA',
      'Chef Privado',
      'Otro',
    ],
  },

  footer: {
    descripcion: features.shop
      ? 'Gatrobatos agrupa una red profesional, una tienda de herramientas de gestión, consultoría gastronómica y servicios de chef privado, todo nacido desde la experiencia real en hostelería.'
      : 'Gatrobatos agrupa una red profesional, consultoría gastronómica y servicios de chef privado, todo nacido desde la experiencia real en hostelería.',
    columnas: [
      {
        titulo: 'Proyectos',
        enlaces: [
          { label: 'Somos Hostelería', to: '/somos-hosteleria' },
          ...onlyIf(features.shop, [{ label: 'Gatrobatos Shop', to: '/shop' }]),
          { label: 'I+Chef Consulting', to: '/consultoria' },
          { label: 'Chef Privado', to: '/chef-privado' },
        ],
      },
      {
        titulo: 'Gatrobatos',
        enlaces: [
          { label: 'Nosotros', to: '/nosotros' },
          { label: 'Contacto', to: '/contacto' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Gatrobatos. Todos los derechos reservados.`,
  },
}

export default siteConfig
