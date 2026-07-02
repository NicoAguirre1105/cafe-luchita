# Diseño

Directrices báscias para la generación de componentes en el proyecto cafe-luchita.

## Target

Target principal — Consumidor individual
Personas de 25 a 45 años, residentes en zonas urbanas del Ecuador (Quito, Guayaquil, Cuenca, Loja), con nivel socioeconómico medio-alto. En su mayoría profesionales dependientes o independientes, muchos en modalidad de trabajo remoto o híbrido. Consumen café diariamente y están dispuestos a pagar más por calidad, pero valoran sobre todo la comodidad: no quieren ir a buscar el producto, quieren recibirlo. Se identifican con el origen local, les importa saber de dónde viene lo que consumen.
Target secundario — Espacios de trabajo
Coworkings, oficinas pequeñas y medianas de entre 5 y 30 personas y cafeterías de especialidad que buscan ofrecer café de calidad a su equipo o clientes sin gestionar proveedores de manera compleja. Valoran la regularidad del servicio, la presentación del producto y el hecho de poder ofrecer café ecuatoriano como parte de su identidad de marca. El ticket es mayor y la frecuencia de compra es predecible, lo que los convierte en clientes estratégicos para el modelo de suscripción.

## Configuration
- **Tailwind CSS v4** via PostCSS — no `tailwind.config.ts`, configuration is done through `globals.css`.
- Responsive

## Tono visual
Frescura, artesanal, homemade y naturaleza son los tonos a transmitir mediante las animaciones, transiciones y componentes. Playful y artesanal.

## Paleta de colores
Se encuentran en globals.css
- --green: #457461
- --orange: #f59567
- --cream: #e2d6c4

Se puede añadir colores que combinen, pero que no opaquen los colores de la empresa.

## Typography
- body uses `Montserrat`
- You can add more fonts.

# Redesign information
Información acerca del rediseño, los componentes y secciones que se quiere generar.

## Secciones
- Hero: CTA claro para hacer pedidos. la imagen de hero serán como las actuales.
- Como funciona: Explica cómo funciona el proceso de pedido del café.
  1. Cominicarse con nosotros sobre cantidad de café y dirección.
  2. Entrega del café a domicilio 
  3. Disfruta del mejor café
- CTA enfocado para oficinas, coworking, cafeterías de especialidad, para comuncarse directamente en whatsapp para realizar convenios de envíos al por mayor.
- Grado de tueste:
Explica de forma informativa los grados de tueste comunes que existe.
1. Claro: (180-200 grados celsius) Conserva la mayoría de sabores originales del grano, alta acidez, cafeína alta y de cuerpo ligero. Cataciones de café y bebidas ligeras como light cold brew.
2. Medio: Equilibrio perfecto entre acidez y cuerpo. El más versátil de los tuestes. Cafeterías de especialidad, bebidas con leche, blends.
3. Medio oscuro: Los aceites del grano empiezan a asomarse y otroga una textura ligeramente cremosa. Sabor más amargo. espresso, cold brew concentrado, 
4. Oscuro: Los sabores de origen desaparecen y prevalece el carácter del tueste. Contiene baja cafeina. Café soluble y espresso comercial (máquinas automáticas de bar)
- Tipo de molido:
La regla central que lo explica todo: cuanto más dure el tiempo de extracción o el periodo de contacto entre el agua y el café, más gruesa debe ser la molienda. Es una relación inversa y bastante directa.
1. Extra grueso (+1h): Como sal marina gruesa. Cold brew
2. Grueso (4-10min): Como sal de grano. Prensa francesa
3. medio grueso (3-4min): Como arena gruesa. Café de olla 
4. Medio (2-4min): Como arena de playa. Cafeteras, café pasado.
5. Medio fino (1-2min): Como azúcar común. AeroPress
6. Fino (20seg-1min): Como sal de mesa. Espresso
7. Extra fino (Se hierve directamente): Como harina. Café turco
- Presentaciones: Se posee 3 presentaciones: 250gr café molido, 450gr café en grano, 450gr café molido y hay una futura presentación premium.

- Beneficios

Hay café que se produce. Y hay café que se cuida. El nuestro viene de fincas lojanas donde cada grano pasa por manos que llevan años aprendiendo qué hace grande a un café. Lo tostamos al punto justo —ni quemado, ni verde— para que tú sientas exactamente lo que esas tierras tienen para dar.

Por qué el tueste medio
1. El sabor del origen, intacto

El tueste medio es el único punto donde el grano todavía habla. Sientes Loja en la taza: dulce, redondo, con ese caramelo suave que no necesita azúcar.

2. Bien por dentro, rico por fuera

Antioxidantes, cafeína equilibrada y una acidez amigable que no le cae mal al estómago. El café que te hace bien sin pedirte que sacrifiques nada.

3. Para toda la familia

Ni demasiado fuerte, ni demasiado suave. El tueste que le gusta al abuelo, a tu pareja y al vecino que siempre aparece a la hora del café.

Además:
1. Deportistas

Pre y post entrenamiento

⚡
Rendimiento medible. La EFSA confirma que 3–6 mg/kg de cafeína mejoran la resistencia y la fuerza muscular. El tueste medio entrega suficiente cafeína sin el riesgo de sobreestimulación del claro.
🏃
Retrasa la fatiga. La cafeína bloquea los receptores de adenosina, permitiendo entrenamientos más intensos y más largos con la misma percepción de esfuerzo.
🔄
Recuperación más rápida. Tomado con carbohidratos después del ejercicio, acelera la reposición de glucógeno muscular, reduciendo el tiempo entre sesiones.Protección antioxidante. Sus polifenoles combaten el estrés oxidativo generado por el ejercicio intenso, reduciendo el daño celular en músculos y tejidos.
🫃
Amigable al estómago. Su acidez moderada no provoca las molestias gástricas que puede causar el tueste claro en ayunas antes de entrenar.
Consejo: tomarlo 30–45 min antes del entrenamiento, que es cuando la cafeína alcanza su pico máximo en sangre.
2. Empresarios

Rendimiento cognitivo

🧠
Concentración sostenida. La cafeína mejora la memoria de trabajo y la atención en tareas complejas. Ideal para jornadas largas con decisiones de alto impacto.
⚖️
Mejor toma de decisiones. Contrarresta la fatiga de decisión que se acumula a lo largo del día, manteniendo la claridad mental en reuniones y negociaciones.
💡
Creatividad e innovación. Investigación del MIT vincula el consumo moderado de café con mayor pensamiento lateral y resolución creativa de problemas.Cohesión de equipo. El ritual del café en entornos laborales favorece interacciones más fluidas, conversaciones más relevantes y mejor colaboración entre equipos.
😌
Bienestar emocional. Estimula dopamina y serotonina, mejorando el estado de ánimo en entornos de alta presión sin los picos y caídas de un tueste más extremo.
Consejo: 1–2 tazas en la mañana y una tercera a media jornada maximizan la productividad sin afectar el sueño nocturno.
3. En casa

Ritual y bienestar diario

🌅
Ritual de bienestar. El acto de preparar café activa la atención plena: el aroma, el sonido, la temperatura. Es un ancla emocional que estabiliza el inicio del día.
🔀
Máxima versatilidad doméstica. Funciona en moka, prensa francesa, filtro de goteo o AeroPress. No requiere máquina de espresso profesional para dar lo mejor de sí.
🧬
Doble perfil antioxidante. Ácidos clorogénicos y melanoidinas a la vez: protección celular acumulada con el consumo diario, respaldada por estudios de Harvard y Johns Hopkins.Efecto ansiolítico leve. A diferencia del tueste claro, la cafeína moderada del tueste medio no provoca nerviosismo en consumidores habituales, haciendo el ritual más placentero.
👨‍👩‍👧
Para toda la familia. Su perfil accesible es el punto de entrada ideal para quienes se inician en el café de calidad, sin la barrera del sabor ácido o amargo extremo.
Consejo: guardarlo en recipiente hermético, lejos de la luz. Consumirlo en 3–4 semanas tras el tueste para conservar todos sus aromas.
- Entregas a domicilio
Entregas a domicilio para Quito y Loja. Así una preocupación menos para tu hogar. Entregas periódicas y bajo pedido.
- Testimonios
- Proceso del café
1. Locación
Cararango, Loja — donde nace nuestro café
En el sur del Ecuador, entre los valles que rodean Vilcabamba, se eleva el cerro de Cararango. Ahí, a más de 1.700 metros sobre el nivel del mar, nuestras fincas aprovechan un clima subtropical único: días cálidos, noches frescas, y la humedad justa que viene del choque entre las corrientes del Pacífico y la Amazonía.
Esta altura no es un detalle menor. A esta elevación, el cafeto crece más despacio. Y un café que madura despacio es un café que concentra más azúcares y aromas en cada grano, antes de llegar a tu taza.
Pero Cararango no es solo café. Nuestras fincas comparten tierra con guineos, caña de azúcar y árboles frutales que crecen junto a los cafetos, como siempre se ha hecho en esta región. Este policultivo no es casualidad: la sombra de los árboles protege al café del sol directo, regula la temperatura del suelo y le da a la planta un entorno más equilibrado para desarrollarse. El resultado es un grano con menos estrés y más complejidad de sabor.
Esta es la tierra lojana que ha posicionado a la provincia como referente del café de especialidad en Ecuador. Cada funda que recibes en tu casa lleva ese origen.
2. Proceso
  1. Cosecha
  2. Fermentación
  3. Secado
  4. Pilado/Trillado
  5. Tueste
  6. Molido 
- Sobre nosotros (Utiliza el sobre nosotros actual y añade cosas importantes)
- CTA final destinado para consumidores particulares para pedidos a domicilio

## Motion

En secciones, títulos, imágenes y textos. Quiero que estén con animaciones y transiciones que reflejen frescura. En el formulario, quiero que el background tenga un ícono svg de un grano de café repetido varias veces. Igualmente quiero que la página tenga not-found, loaging,sitemap y todo lo necesario para un SEO adecuado.
