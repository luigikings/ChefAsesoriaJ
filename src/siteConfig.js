// =============================================================
// siteConfig.js
// -------------------------------------------------------------
// Edita este archivo para cambiar TODO el contenido de la web:
// nombre del chef, ciudad, datos de contacto, textos, servicios,
// FAQ y colores. No necesitas tocar los componentes.
// =============================================================

export const siteConfig = {
  chef: {
    nombre: '[NOMBRE DEL CHEF]',
    apellido: '[APELLIDO]',
    tituloProfesional: 'Chef consultor de cocina',
    ciudad: '[CIUDAD]',
    pais: 'España',
  },

  contacto: {
    email: '[EMAIL]',
    telefono: '[TELÉFONO]',
    telefonoVisible: '[+34 000 000 000]',
    whatsappNumero: '34600000000', // Solo dígitos, con código de país, sin '+' ni espacios
    whatsappMensajePredefinido:
      'Hola, me interesa una consultoría para mi restaurante.',
    ciudad: '[CIUDAD]',
    zonaDeTrabajo: '[CIUDAD] y alrededores (también proyectos a distancia)',
  },

  redes: {
    instagram: 'https://instagram.com/[USUARIO]',
    linkedin: 'https://linkedin.com/in/[USUARIO]',
  },

  meta: {
    title: '[NOMBRE DEL CHEF] · Consultoría gastronómica para restaurantes',
    description:
      'Ayudo a dueños de restaurantes a ordenar su cocina por dentro: costes, carta, equipo y procesos. Consultoría gastronómica en [CIUDAD].',
  },

  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Método', href: '#metodo' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    kicker: 'Consultoría gastronómica para restaurantes',
    titulo: 'Una cocina rentable, ordenada y que funciona sin que estés encima',
    subtitulo:
      'Entro en tu cocina como jefe de cocina consultor: reviso costes, carta, procesos y equipo, y dejo un plan claro para que tu restaurante gane dinero y deje de depender del caos del día a día.',
    ctaPrimario: 'Solicitar consulta',
    ctaSecundario: 'Escribir por WhatsApp',
    datosConfianza: [
      { valor: '[X]', label: 'años de experiencia en cocinas profesionales' },
      { valor: '[X]+', label: 'restaurantes asesorados' },
      { valor: '[X]%', label: 'mejora media en margen de carta' },
    ],
  },

  problemas: {
    titulo: 'Si tu restaurante se parece a esto, hablamos el mismo idioma',
    subtitulo:
      'La mayoría de los problemas de un restaurante no son de sala: son de cocina. Esto es lo que suelo encontrarme cuando entro por primera vez.',
    lista: [
      {
        icono: 'TrendingDown',
        titulo: 'Los costes se disparan y no sabes por qué',
        texto:
          'Facturas que suben, food cost que no cuadra y márgenes que se comen tu beneficio sin que nadie lo vea venir.',
      },
      {
        icono: 'BookX',
        titulo: 'Una carta que no sabes si es rentable',
        texto:
          'Platos que "funcionan bien" en sala pero que, plato a plato, apenas dejan margen o directamente pierden dinero.',
      },
      {
        icono: 'LayoutGrid',
        titulo: 'Cocina desorganizada por dentro',
        texto:
          'Cada turno improvisa, no hay fichas técnicas ni procesos claros, y todo depende de quién esté ese día.',
      },
      {
        icono: 'Trash2',
        titulo: 'Desperdicio de género a diario',
        texto:
          'Compras mal calculadas, mermas altas y producto que se tira porque no hay control de stock ni previsión.',
      },
      {
        icono: 'Compass',
        titulo: 'Equipo sin rumbo ni criterio común',
        texto:
          'Cada cocinero hace las cosas a su manera, no hay formación real y la calidad varía según quién cocine.',
      },
      {
        icono: 'Users',
        titulo: 'Rotación de personal constante',
        texto:
          'Cuesta encontrar y retener buen equipo, y cada baja vuelve a poner la cocina patas arriba.',
      },
    ],
  },

  servicios: {
    titulo: 'Cómo puedo ayudarte',
    subtitulo:
      'Trabajo cada proyecto a medida, pero estos son los servicios que más suelo aplicar en restaurantes como el tuyo.',
    lista: [
      {
        icono: 'ClipboardCheck',
        titulo: 'Auditoría de cocina',
        texto:
          'Análisis completo de tu cocina: costes, carta, procesos, equipo y organización. Diagnóstico claro y por escrito.',
      },
      {
        icono: 'BookOpenCheck',
        titulo: 'Diseño de carta rentable',
        texto:
          'Rediseño tu carta con ingeniería de menú: qué platos potenciar, cuáles eliminar y cómo mejorar el margen sin perder identidad.',
      },
      {
        icono: 'Calculator',
        titulo: 'Control de costes y fichas técnicas',
        texto:
          'Fichas técnicas por plato, escandallos reales y un sistema para controlar el food cost mes a mes.',
      },
      {
        icono: 'GraduationCap',
        titulo: 'Organización y formación de equipo',
        texto:
          'Roles claros, rutinas de turno y formación práctica para que la cocina funcione igual de bien la tengas delante o no.',
      },
      {
        icono: 'ShieldCheck',
        titulo: 'Procesos y seguridad alimentaria',
        texto:
          'APPCC al día, protocolos de limpieza y trazabilidad, y procesos escritos para que nada dependa de la memoria de nadie.',
      },
      {
        icono: 'DoorOpen',
        titulo: 'Apertura de nuevos locales',
        texto:
          'Diseño de cocina, escandallos, carta y equipo desde cero para que tu apertura empiece con buen pie.',
      },
      {
        icono: 'ChefHat',
        titulo: 'Chef ejecutivo por temporada',
        texto:
          'Dirección de cocina temporal para cubrir una etapa concreta: lanzamiento, reestructuración o cambio de rumbo.',
      },
    ],
  },

  metodo: {
    titulo: 'Cómo trabajo',
    subtitulo:
      'Un proceso claro, sin humo, pensado para que veas resultados dentro de tu cocina, no solo en un informe.',
    pasos: [
      {
        numero: '01',
        titulo: 'Diagnóstico',
        texto:
          'Visito tu restaurante, reviso números, carta, procesos y equipo. Entiendo qué está pasando de verdad antes de proponer nada.',
      },
      {
        numero: '02',
        titulo: 'Plan de acción',
        texto:
          'Te entrego un plan concreto y priorizado: qué cambiar primero, qué impacto tiene y en cuánto tiempo se nota.',
      },
      {
        numero: '03',
        titulo: 'Implementación en cocina',
        texto:
          'Trabajo codo a codo con tu equipo dentro de la cocina para poner en marcha cada cambio, no solo sobre el papel.',
      },
      {
        numero: '04',
        titulo: 'Seguimiento',
        texto:
          'Reviso resultados, ajusto lo necesario y me aseguro de que lo implementado se mantiene cuando yo ya no estoy.',
      },
    ],
  },

  resultados: {
    titulo: 'Resultados que puedes esperar',
    subtitulo:
      'Cifras orientativas de proyectos anteriores. Cada restaurante es distinto, pero esta es la dirección habitual.',
    nota: 'Datos de ejemplo — se sustituirán por cifras reales de proyectos.',
    lista: [
      { valor: '[X]%', label: 'reducción de food cost' },
      { valor: '[X]%', label: 'mejora de margen en carta' },
      { valor: '[X]%', label: 'menos desperdicio de género' },
      { valor: '[X] semanas', label: 'para ver los primeros cambios' },
    ],
  },

  sobreMi: {
    titulo: 'Sobre mí',
    parrafos: [
      'Soy [NOMBRE DEL CHEF], cocinero de formación y consultor de cocina desde hace [AÑOS DE EXPERIENCIA] años. He pasado por cocinas de [TIPO DE RESTAURANTES/ESTRELLAS/EXPERIENCIA] antes de dedicarme a ayudar a otros dueños de restaurante a poner orden en la suya.',
      'No vengo a darte una charla de gestión ni un informe que nadie va a leer. Entro en tu cocina, me pongo el delantal si hace falta y trabajo con tu equipo hasta que los cambios se quedan.',
      'Mi filosofía es simple: una cocina rentable no está reñida con una cocina que cocina bien. Se puede tener las dos cosas si se ordena por dentro.',
    ],
    firma: '[NOMBRE DEL CHEF]',
    cargo: '[TÍTULO / EX-RESTAURANTE / CREDENCIAL DESTACADA]',
  },

  testimonios: {
    titulo: 'Lo que dicen quienes ya han trabajado conmigo',
    lista: [
      {
        texto:
          '"[TESTIMONIO PLACEHOLDER] Desde que trabajamos juntos, por fin entiendo los números de mi cocina y he dejado de tener sustos a fin de mes."',
        nombre: '[NOMBRE CLIENTE]',
        cargo: 'Propietario/a, [NOMBRE RESTAURANTE], [CIUDAD]',
      },
      {
        texto:
          '"[TESTIMONIO PLACEHOLDER] La carta nueva nos ha subido el margen sin subir precios. El equipo también está mucho más organizado."',
        nombre: '[NOMBRE CLIENTE]',
        cargo: 'Propietario/a, [NOMBRE RESTAURANTE], [CIUDAD]',
      },
      {
        texto:
          '"[TESTIMONIO PLACEHOLDER] Vino en el momento en que más lo necesitábamos, antes de abrir el segundo local. Hoy los dos funcionan con el mismo criterio."',
        nombre: '[NOMBRE CLIENTE]',
        cargo: 'Propietario/a, [NOMBRE RESTAURANTE], [CIUDAD]',
      },
    ],
  },

  paraQuienEs: {
    titulo: '¿Para quién es esta consultoría?',
    subtitulo: 'Trabajo con distintos tipos de negocio, siempre que haya una cocina real detrás.',
    lista: [
      { icono: 'Store', titulo: 'Restaurante independiente', texto: 'Uno o varios locales que necesitan orden y rentabilidad.' },
      { icono: 'Hotel', titulo: 'Hotel', texto: 'Cocina de hotel que necesita procesos sólidos y control de costes.' },
      { icono: 'Truck', titulo: 'Catering', texto: 'Operaciones de volumen que exigen escandallos y logística precisas.' },
      { icono: 'PackageSearch', titulo: 'Dark kitchen', texto: 'Cocinas ocultas centradas en eficiencia, costes y delivery.' },
      { icono: 'Rocket', titulo: 'Nueva apertura', texto: 'Proyectos que arrancan desde cero y quieren empezar bien.' },
    ],
  },

  faq: {
    titulo: 'Preguntas frecuentes',
    lista: [
      {
        pregunta: '¿Cuánto cuesta la consultoría?',
        respuesta:
          'Depende del alcance del proyecto: no es lo mismo una auditoría puntual que un acompañamiento de varios meses. Cuéntame tu caso y te paso una propuesta ajustada, sin compromiso.',
      },
      {
        pregunta: '¿Cuánto dura el proceso?',
        respuesta:
          'Los proyectos suelen ir de [X semanas] a [X meses], según si es una intervención puntual o un acompañamiento continuo. En el diagnóstico inicial te doy un plazo concreto.',
      },
      {
        pregunta: '¿Es un trabajo presencial?',
        respuesta:
          'La mayor parte del trabajo se hace de forma presencial en tu cocina, especialmente en la fase de implementación. Algunas partes (análisis de datos, seguimiento) pueden hacerse a distancia.',
      },
      {
        pregunta: '¿Cómo garantizas la confidencialidad?',
        respuesta:
          'Toda la información de tu negocio (recetas, costes, proveedores) es estrictamente confidencial. Podemos firmar un acuerdo de confidencialidad (NDA) antes de empezar si lo necesitas.',
      },
      {
        pregunta: '¿Trabajas con cualquier tipo de cocina o estilo?',
        respuesta:
          'Sí. Mi trabajo no es imponer un estilo de cocina, sino ordenar la gestión detrás de la tuya: costes, procesos y equipo, respetando tu identidad y tu carta.',
      },
      {
        pregunta: '¿Qué pasa si mi equipo se resiste a los cambios?',
        respuesta:
          'Es habitual al principio. Parte de mi trabajo es involucrar al equipo desde el primer día, explicar el porqué de cada cambio y acompañar la implementación para que se adopte de verdad.',
      },
    ],
  },

  contactoForm: {
    titulo: 'Hablemos de tu restaurante',
    subtitulo:
      'Cuéntame en qué punto está tu cocina y te respondo personalmente para ver cómo puedo ayudarte.',
    tiposDeNegocio: [
      'Restaurante independiente',
      'Grupo de restauración',
      'Hotel',
      'Catering',
      'Dark kitchen',
      'Nueva apertura',
      'Otro',
    ],
  },

  footer: {
    descripcion:
      'Consultoría gastronómica para dueños de restaurante que quieren una cocina ordenada, rentable y que funcione sin que estén encima cada día.',
    copyright: `© ${new Date().getFullYear()} [NOMBRE DEL CHEF]. Todos los derechos reservados.`,
  },
}

export default siteConfig
