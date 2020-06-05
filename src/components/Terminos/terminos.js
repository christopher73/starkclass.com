import React, { Component } from 'react'
import Footer from  '../Footer/footer'

export default class terminos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          preguntas:[
              {
                id:1,
                ask:'1. Generalidades sobre los Términos de Servicio.',
                answer:
                [
                    '1.La Compañía posee y opera el sitio Starkclas.com. Le ofrecemos la posibilidad de aprender diversos cursos educativos a través de nuestros servicios en línea (plataforma educativa, chat, videos, streamings, etc.)',
                    '2.Lo siguiente es un breve resumen de determinados términos y condiciones que se incluyen en estos Términos de Servicio. No obstante, este resumen se proporciona únicamente para su comodidad; por lo tanto, usted debería leer todos los Términos de Servicio antes de aceptarlos.',
                    '-Para utilizar el Servicio, deberá registrarse y abrir una Cuenta de Starkclass.com.',
                    '-El Servicio sólo funciona en una computadora personal o dispositivos compatibles a la vez.',
                    '-Después de realizar el pago correspondiente, podrá visualizar todo el contenido.',
                    '-Repasos de parciales y finales, se subirán con dos semanas de anticipación de acorde a la fecha del examen establecido por el centro pre universitario, puesto que nos gusta estar actualizados con los ejercicios y temas.',
                    '-Asesorías, tracking académico y consultas por WhatsApp con respecto a nuestro material.',
                    '-Nos reservamos el derecho a realizar actualizaciones periódicas del Servicio, con o sin previo aviso.',
                    '-El reembolso es del 50%, hasta 3 días después de realizar la compra.',
                    '-El Servicio incluye funciones relacionadas con la seguridad y la manipulación indebida que, en caso de activarse, podrían ocasionar que el contenido previamente disponible para su uso, deje de estarlo a partir de entonces.',
                    '-El servicio culmina el día después del examen general a la universidad a la que postula.', 
                    '-Debe tener al menos 18 años de edad para aceptar estos Términos de Servicio, sin embargo, si fuera menor de 18 años, su padre o tutor legal será el responsable.',
                    '-Al utilizar el Servicio, usted autoriza la recopilación, procesamiento y utilización de toda aquella información relacionada con el uso que usted hace del Servicio, la cual se recopila y maneja de conformidad con los términos de nuestra Política de Privacidad. Usted comprende que podrá encontrar contenidos que le resulten objetables.',
                    '-Nos reservamos el derecho, a nuestra discreción, de cambiar estos Términos de Servicio en cualquier momento, sin previo aviso. En caso de algún cambio sustancial, haremos todos los esfuerzos comercialmente razonables para notificárselo y obtener su consentimiento antes de implementar dichos cambios.',
                    '-Starkclass.com renuncia, en la máxima medida permitida por la ley, a determinadas declaraciones y garantías relacionadas con el Servicio, y limita su responsabilidad con respecto a las mismas.',
                    '-Si tiene alguna pregunta acerca de estos Términos de Servicio, o desea comunicarse con nosotros por cualquier razón, envíe un correo electrónico a informes@starkclass.com.'
                ]
              },
              {
                  id:2,
                  ask:'2. Permiso para utilizar el Servicio; reserva de derechos.',
                  answer:
                  [
                      'Al aceptar estos Términos de Servicio, se le concede a usted un derecho limitado, no exclusivo, intransferible y no sub-licenciable, para entrar, acceder y utilizar el Servicio exclusivamente para uso personal y no comercial. Todos los derechos que no se le conceden expresamente a usted en estos Términos de Servicio, están reservados por la Compañía y sus licenciadores, según corresponda. Usted acepta que este permiso es para su uso personal, no comercial y que nadie más que usted va a utilizar el Servicio. Usted no tiene derechos para copiar o reproducir en todo o en parte alguna porción del Servicio, incluyendo sin que ello implique limitación alguna, el contenido de Starkclass.com. Aparte de la licencia limitada que se otorga en la Sección 2, usted no tiene ningún otro derecho, título ni participación en el Servicio. Usted entiende y reconoce que, en todas las circunstancias, sus derechos con respecto al Servicio estarán limitados por los derechos de autor o las leyes de propiedad intelectual pertinentes y los presentes Términos de Servicio.'
                  ]

              },
              {
                  id:3,
                  ask:'3. Descripción del Servicio.',
                  answer:
                  [
                      'Generalidades',
                      '1.Su Cuenta e Información de Registro. Puede navegar, previsualizar y realizar una búsqueda dentro del Servicio sin necesidad de abrir una Cuenta de Starklass.com ni de suministrar información de registro. Sin embargo, para cualquier otro uso del Servicio y el acceso al contenido de Starkclass.com, deberá abrir una cuenta y facilitar la información de registro a la Compañía.',
                      '2.Acceso al Contenido de Starkclass.com. La propiedad sobre el contenido de Starkclass.com se define más adelante en la Sección 8 (Propiedad Intelectual) de los presentes Términos de Servicio. Usted puede acceder al contenido de Starkclass.com la cantidad de veces que lo desee siempre que se haya suscrito al Servicio.',
                      '3.Términos adicionales del software y hardware. Tenga en cuenta que tal vez existan acuerdos de licencia del usuario final y términos de servicio por separado que deba aceptar para el hardware y el software que utilice en relación con el Servicio, o que pueda interactuar con el Servicio. Su negativa a aceptar los términos de dichos acuerdos limitaría su capacidad para utilizar plenamente el Servicio. Además, el Servicio sólo funciona con dispositivos compatibles.'  
                  ]
              },
              {
                id:4,
                ask:'4. Promociones y Garantía.',
                answer:
                [
                    '1.Promociones.',
                    'La Compañía, otras entidades de Starkclass.com y determinados terceros pueden, de vez en cuando, colocar anuncios publicitarios o presentar ofertas y materiales promocionales en o a través del Servicio. Su participación en cualquier promoción u oferta está sujeta a las normas aplicables relacionadas con la promoción. Sus relaciones con otras entidades o terceros, así como su participación en promociones u ofertas de terceros que se anuncian o aparecen en el Servicio son exclusivamente entre usted y dicho tercero. Tenga en cuenta que debe tener al menos 13 años de edad para participar en cualquier promoción u oferta que tenga conexión o guarde relación de alguna manera con el Servicio. USTED ACEPTA QUE LA COMPAÑÍA NO SERÁ RESPONSABLE DE NINGÚN TIPO DE DAÑO O PÉRDIDA QUE SURJA COMO RESULTADO DE TALES RELACIONES O DE LA PRESENCIA DE DICHOS ANUNCIANTES EN EL SERVICIO.'
                ]
              },
              {
                id:5,
                ask:'5. Normas y políticas de la Compañía.',
                answer:
                [
                    'Al utilizar el Servicio, usted estará sujeto a cualquier otra directriz o norma aplicable a los servicios y características específicas que se publiquen en forma ocasional (las "Directrices"). Todas las Directrices se incorporan mediante referencia a estos Términos de Servicio. Estas Directrices se aplicarán en forma general de manera no discriminatoria a todos los usuarios finales del Servicio y podrían incluir, por ejemplo, actualizaciones, modificaciones y reinstalaciones del software requeridas o automáticas, y la obtención de parches disponibles para, entre otras razones, abordar cuestiones de seguridad, interoperabilidad y/o funcionamiento. Estas actualizaciones, modificaciones y operaciones similares pueden realizarse en forma periódica o cuando sea necesario, sin previo aviso. Además, usted entiende que determinados aspectos del Servicio son capaces de controlarse a sí mismos y pueden crear un sistema especial de identificación con fines relacionados con la seguridad y la detección de manipulaciones indebidas. El acceso de usted a determinadas aplicaciones está sujeto a restricciones por motivos de seguridad o según las políticas de protección de Contenido de Starkclass.com consistentemente aplicadas. Usted entiende y acepta que es probable que el Contenido de Starkclass.com que anteriormente estaba disponible para su uso, no se encuentre disponible a partir de ese momento.'
                ]
              },
              {
                id:6,
                ask:'6. Restricciones.',
                answer:
                [
                    'El uso del Servicio, por parte de usted, está sujeto a las siguientes restricciones:',
                    '1.Requisito de edad.',
                    'Usted debe tener al menos 18 años de edad para convenir y aceptar estos Términos de Servicio en nombre propio. Si es menor de 18 años, su padre, madre o tutor legal debe aceptar estos Términos de Servicio y registrarse para el Servicio en nombre de usted. De conformidad con la Ley de Protección de Menores en Internet (COPPA, por sus siglas en inglés), y según las modificaciones que se realicen en forma ocasional, si es menor de 13 años, se le solicita que no proporcione información alguna a la Compañía, ya sea mediante el uso del Servicio, la participación en alguna de las promociones, concursos o sorteos relacionados con el Servicio, o a través de cualquier otra actividad.',
                    '2.Conducta prohibida.',
                    'Usted no utilizará el Servicio para transmitir, mostrar, ejecutar o de algún modo poner a disposición mensajes, contenidos o materiales (i) que sean ilegales, obscenos, amenazantes, masivos no solicitados o "spam", difamatorios, invasores de la privacidad, o (ii) que violen o infrinjan derechos de autor, marcas registradas, patentes, secretos comerciales y otros derechos de propiedad intelectual, derechos de privacidad o publicidad, reglamentos o estatutos de comunicaciones, o cualesquiera otras leyes, incluyendo, sin limitación, las leyes sobre difamación, acoso, obscenidad y pornografía; (iii) que constituyan campañas políticas o solicitudes de venta o marketing o que contengan virus informáticos u otro código de computadora destinado a interferir con la funcionalidad de los sistemas de computadoras, o (iv) que de alguna manera perjudiquen a los menores. Usted conviene en no interrumpir ni intentar interrumpir la operación o el Servicio de ninguna manera. Durante los Cursos, se espera que los estudiantes se comporten de una manera adecuada y respetuosa, teniendo en cuenta un alto estándar de educación y progresión de carrera para con las otras personas. Cualquier violación a lo aquí dispuesto, estará sujeta a la revisión y las acciones pertinentes que la Compañía decida adoptar, a su sola consideración e inclusive proceder al derecho de Terminar el Servicio de acuerdo a lo dispuesto en la Sección 9.3 del presente documento. Además, no podrá utilizar una dirección de correo electrónico falsa o de algún modo engañar a otros miembros en cuanto a su identidad o al origen de un mensaje o contenido.',
                    '3.Restricción sobre el uso relacionado con el Servicio.',
                    'El Servicio incluye componentes de seguridad por lo que se aplican normas y políticas especiales. Usted no deberá intentar (ni apoyar los intentos de otros) eludir, aplicar ingeniería inversa, descifrar, descompilar, desmontar o de algún modo modificar, alterar o interferir con ningún aspecto del Servicio. Usted no podrá distribuir, intercambiar, modificar, vender o revender, o transmitir a cualquier otra persona cualquier parte del Servicio, incluyendo, sin limitación, cualquier texto, imagen o audio, para cualquier propósito empresarial, comercial o público. Usted conviene en no copiar, vender, distribuir o de algún modo transferir Contenido de Starkclass.com, salvo del modo expresamente permitido en el presente.',
                    '4.Restricción sobre el uso relacionado con la Cuenta de Starkclass.com.',
                    'Usted solo puede abrir una cuenta de Starkclass.com para usted mismo, y no para ninguna otra persona, con sujeción a las disposiciones de la sección anterior titulada "Requisitos de Edad". Usted acepta que no permitirá que otras personas utilicen la Información de Registro y/o la Cuenta de Starkclass.com y acepta que usted es el único responsable de mantener la confidencialidad y seguridad de los mismos. Usted conviene en notificar inmediatamente a la Compañía cualquier uso no autorizado de su contraseña y/o Cuenta de Starkclass.com, enviándonos un correo electrónico a informes@starkclass.com. Si utiliza o abre una cuenta en el Servicio en nombre de una empresa, entidad u organización (colectivamente "Organización Suscriptora"), entonces usted declara y garantiza que es un representante autorizado de dicha Organización Suscriptora con autoridad para obligar a tal organización a estos Términos de Servicio, y acuerda obligarse por estos Términos de Servicio en nombre de dicha Organización Suscriptora.',
                    '5.Restricción sobre el uso relacionado con el Contenido de Starkclass.com.',
                    'Salvo del modo expresamente aquí permitido, los derechos concedidos a usted en virtud del presente no le confieren ninguno de los siguientes: (a) derechos de reproducción o uso promocional en el Contenido de Starkclass.com, (b) derechos de celebrar acuerdos con cualquier sistema de difusión que genere ingresos (terrestre, satelital, cable y/u otros canales de distribución), (c) derechos de distribuir o redistribuir el Contenido de Starkclass.com en aplicaciones de streaming (vía Internet, intranets y/u otras redes), (d) derechos de distribuir a otras personas el Contenido de Starkclass.com en otros sistemas de distribución de contenido (aplicaciones de audio de pago o audio bajo demanda, etc.) o en medios físicos (discos compactos, discos digitales versátiles, chips semiconductores, discos duros, tarjetas de memoria y similares), o (e ) derechos de uso comercial, venta, reventa, reproducción, distribución o promocional para el Contenido de Starkclass.com. Cualquier solución de gestión de derechos digitales que se proporciona con el Contenido de Starkclass.com es una parte inseparable del mismo, y no podrá eludirse, salvo en la medida permitida por la ley aplicable. Si usted está en posesión o control de Contenido de Starkclass.com, es su responsabilidad no perder, destruir ni dañar dicho contenido.'
                ]
              },
              {
                id:7,
                ask:'7. Cargos y facturación.',
                answer:
                [
                    '1.Acuerdo de pago.',
                    'Todos los usuarios del Servicio deben aceptar, en primer lugar, estos Términos de Servicio, y llenar una autorización de pago y, en el caso de que financien su compra, suscribir los Términos y Condiciones de Compra. Usted acepta pagar por todo el Contenido de Starkclass.com que no se obtenga por medio de un código de promoción o que la Compañía no le haya ofrecido en forma gratuita.',
                    '2.Política de reembolso.',
                    'Hacemos reembolso del 50% hasta 3 días después de haber realizado la compra.',
                    '3.Terminación.',
                    'La Compañía se reserva el derecho a dar por terminada su Cuenta de Starkclass.com y/o el acceso por parte de usted al Servicio si infringe los Términos de Servicio. Si se diera por terminada su membresía y suscripción(s) de Starkclass.com al Servicio, no serán reembolsables las cuotas ni los cargos.',
                    '4.Paquete completo.',
                    'El cobro del paquete completo, no tiene intereses y se puede realizar mediante pago virtual o “YAPE”, para deposito o “yape” tiene que mandar el screenshot al whatsapp +51 997 914 757 para habilitar la cuenta.',
                    'Si paga con tarjeta de crédito, los intereses lo genera su entidad bancaria.',
                    '5.Impuestos.',
                    'Las compras en el Servicio pueden incluir el impuesto sobre ventas o el impuesto al valor agregado (cuando proceda) y dicho impuesto se basará en la mejor información disponible acerca de su dirección. En tales casos, se aplicará el tipo impositivo que esté en vigor en el momento en que se realicen las compras en el Servicio. Si cambia el tipo impositivo aplicable a las ventas antes de finalizar las compras correspondientes, se aplicará el nuevo tipo impositivo que esté en vigor en el momento de concretar la compra en el Servicio. Podrían aplicarse otras limitaciones y renuncias a responsabilidad sobre productos y servicios. Usted será el único responsable de pagar la totalidad de dichos impuestos.',
                    '6.Derecho al cambio de precios.',
                    'Todos los precios relacionados con el Servicio están sujetos a cambios por la Compañía en cualquier momento, sin previo aviso y sin responsabilidad alguna hacia usted. La Compañía no ofrece una protección de precios o rembolsos en caso de una caída de precios o una oferta promocional.'

                ]
              },
              {
                id:8,
                ask:'8. Notificaciones especiales.',
                answer:
                [
                    'Como usuario del Servicio, tenga en cuenta lo siguiente:',
                    '1.Privacidad.',
                    'Al registrarse en el Servicio, usted otorga su consentimiento para la recopilación y procesamiento de toda la información relacionada con el uso que usted hace del Servicio, incluyendo la Información de Registro. La Compañía recopila y maneja esta información de conformidad con los términos de la Política de Privacidad, que queda expresamente incorporada en estos Términos de Servicio mediante referencia. Al aceptar estos Términos de Servicio, usted también acepta la Política de Privacidad la cual está disponible en el website de la Compañía.',
                    '2. Exactitud de la información.',
                    'Usted declara y garantiza que toda la información (incluida la Información de Registro y las respuestas a los sondeos y encuestas) que proporciona a la Compañía es correcta, completa y vigente, y se compromete a actualizar dicha información cuando sea necesario. También admite que cualquier información proporcionada por usted a la Compañía no violará ninguna ley o reglamento, ni infringirá los derechos de terceros.',
                    '3.Certificación de residencia y capacidad para celebrar contratos.',
                    'Al abrir una Cuenta en el servicio de e-learning de Starkclass.com, usted declara y garantiza a la Compañía que reside en el territorio que ha indicado en su perfil y que tiene capacidad para celebrar contratos de conformidad con las leyes de su jurisdicción.',
                    '4.Naturaleza del Contenido.',
                    'Usted entiende que al utilizar el Servicio y tener acceso al Contenido de Starkclass.com, podrá encontrar materiales que puede considerar explícitos, ofensivos o de alguna manera objetables. La Compañía podrá incluir, si se encontrara disponible, información relacionada con calificaciones, tipo de contenido y descripciones, si los propietarios correspondientes del Contenido de Starkclass.com proporcionaran dicha información. Sin embargo, la Compañía no es responsable de la exactitud de ese tipo de información. Usted conviene en lo siguiente, sin importar si el Servicio incluye o no incluye las funciones de control por parte de los padres y sin importar las veces que utiliza dichas funciones: (a) es su responsabilidad determinar qué Contenido de Starkclass.com o qué materiales que integran el Servicio cumplen con sus estándares, y (b) bajo ninguna circunstancia, la Compañía o sus Afiliadas o proveedores de contenido serán de ninguna forma responsables de ningún Contenido de Starkclass.com o materiales a los que usted tenga acceso. Usted acepta usar el Servicio a su propio riesgo y que la Compañía y sus Afiliadas no tendrán responsabilidad alguna frente a usted respecto a cualquier contenido o materiales que incluya el Servicio.',
                    '5.Riesgo de uso.',
                    'Ni la Compañía ni sus Afiliadas asumirán responsabilidad alguna y no serán responsables por ningún daño o virus que provoque algún daño a su computadora u otra propiedad como consecuencia del acceso, uso, descarga o navegación por el Servicio.',
                    '6.Enlaces de otros sitios Web a sitios de terceros; noticias RSS.',
                    'La Compañía no es responsable del contenido o la disponibilidad de las noticias en formato RSS ni de sitios web relacionados con el Servicio, ni tampoco lo es de sitios web de terceros que tengan enlaces hacia o desde el Servicio. El acceso por parte de usted a noticias RSS y enlaces a otros sitios Web queda a riego de usted por completo. Todas las noticias RSS y los enlaces se proporcionan únicamente para su comodidad y no deberán interpretarse como un aval del propietario/patrocinador del sitio. La Compañía renuncia a cualquier garantía, ya sea expresa o implícita, en cuanto a la exactitud, calidad o cualquier otro aspecto de cualquier material o información que contengan dichas noticias RSS y sitios Web.',
                    '7.El derecho de la Compañía a cambiar estos Términos de Servicio.',
                    'La Compañía se reserva el derecho, a su discreción, de cambiar, modificar, añadir o eliminar partes de estos Términos de Servicio en cualquier momento, sin previo aviso a usted. Todos los cambios entrarán en vigor de inmediato. En caso de algún cambio sustancial, haremos todos los esfuerzos comercialmente razonables para notificárselo y obtener su consentimiento antes de implementar dichos cambios. Le recomendamos que consulte estos Términos de Servicio en forma periódica para ver si se han registrado cambios. El uso continuado del Servicio por parte suya después de la publicación de dichos cambios implica la aceptación de los mismos.',
                    '8.El derecho de la Compañía a efectuar cambios al Servicio.',
                    'La Compañía puede agregar, cambiar, terminar, remover o suspender cualquier material incorporado al Servicio, incluyendo características, precios y especificaciones de los productos descritos o reseñados en el Servicio, en forma temporal o permanente, en cualquier momento, sin previo aviso y sin responsabilidad alguna. Además, la Compañía y/o los propietarios del Contenido de Starkclass.com pueden, en forma ocasional, sacar el Contenido de Starkclass.com del Servicio sin previo aviso, y la Compañía podrá en cualquier momento perder el derecho a poner a disposición determinado Contenido de Starkclass.com. En tal caso, usted ya no podrá obtener ni ver determinado contenido.'
                ]
              },
              {
                id:9,
                ask:'9. Propiedad intelectual.',
                answer:
                [
                    '1.Secretos comerciales y materiales de propiedad exclusiva.',
                    'El Servicio contiene y/o incorpora secretos comerciales, inventos patentados (y/o con patente pendiente) y / u otros materiales de propiedad exclusiva y propiedad intelectual de la Compañía y/o sus licenciadores. Todos los derechos de título y propiedad en el Servicio, incluyendo sin que signifique limitación alguna el contenido Starkclass.com y cualquier copia relacionada con el Servicio y el contenido de Starkclass.com, permanecen bajo la propiedad de la Compañía y sus licenciadores, según corresponda. Usted conviene en mantener en forma confidencial aquella información contenida en el Servicio que no sea de dominio público, y no revelar dicha información a terceros sin la aprobación previa por escrito de la Compañía.',
                    'Los estudiantes no están autorizados para tratar de reconfigurar, descomponer o utilizar ingeniería inversa sobre la página web de Starkclass.com, el Servicio y/o el Contenido de Starkclass.com.',
                    '2.Derechos de autor.',
                    'El Contenido de Starkclass.com y otras obras de autoría que se encuentran en el Servicio, o forman parte del mismo (colectivamente, el "Contenido"), están protegidos por las leyes aplicables de derechos de autor y los tratados internacionales de derechos de autor, así como por otras leyes y tratados de propiedad intelectual. El Contenido se licencia, no se vende. Usted no puede realizar copias no autorizadas o utilizar ninguna parte del Contenido, salvo como se especifica en este documento y de conformidad con la legislación aplicable. Todos los títulos y derechos de autor del Contenido y del Servicio (incluyendo, entre otros, imágenes, fotografías, animaciones, vídeo, audio, código, artículos, texto y "applets", incorporados al Servicio), son propiedad de la Compañía o sus licenciadores. Usted acepta cumplir con todas las leyes aplicables sobre protección de derechos de autor en relación con el uso del Servicio y del Contenido por parte de usted. Además de lo estipulado en estos Términos de Servicio, la Compañía podrá adoptar medidas adecuadas para proteger los derechos de autor en el Contenido.',
                    '3.Marcas comerciales.',
                    'No puede utilizar ninguna de las marcas comerciales que se encuentran dentro del Servicio, salvo lo especificado en el presente y de conformidad con la legislación aplicable. No puede copiar, exhibir o utilizar ninguna de las marcas comerciales sin el permiso previo por escrito del propietario. Cualquier uso no autorizado podría violar las leyes de marcas comerciales, las leyes de privacidad y publicidad, así como las leyes civiles o penales. Las marcas que figuran a continuación son marcas registradas de la Compañía, sus casas matrices directas o indirectas, y/o sus Afiliadas, licenciadores o terceros propietarios. Nada de lo contenido en el Servicio deberá interpretarse como una concesión por impedimento o de algún otro modo, de cualquier licencia o derecho de uso de cualquier marca. Tenga en cuenta que la siguiente lista de marcas se actualiza en forma periódica. Por lo tanto, ni esta lista ni sus actualizaciones incluyen todas las marcas. El logotipo de " Starkclass.com ", Starkclass.com plataforma, y otras marcas comerciales utilizadas en el Servicio son marcas registradas de sus respectivos propietarios.',
                    '4.Derechos de la Compañía respecto a los materiales que usted pública.',
                    'Al enviar mensajes, opiniones, ingresar datos o participar en cualquier otra forma de comunicación a través del Servicio (si así lo permite la Compañía), usted declara que tiene todos los derechos para publicar dichos materiales, que estos no violan los derechos de terceros, y que acepta que la Compañía puede copiar, sub-licenciar, adaptar, transmitir, ejecutar públicamente o exhibir cualquiera de tales contenidos para proporcionar y/o promover el Servicio y/o responder a cualquier requisito legal, demanda o amenaza. Si el uso de tales contenidos por parte de la Compañía explota cualquier derecho de propiedad que usted pueda tener sobre dicho material, usted acepta que la Compañía tiene un derecho irrestricto, libre de regalías, no exclusivo y perpetuo de hacerlo en todo el mundo. Usted acepta que toda pérdida o daño de cualquier tipo que se produzca como consecuencia de la utilización de cualquier mensaje, contenido o material que usted carga, publica, transmite, exhibe o pone de algún modo a disposición a través del uso que usted haga del Servicio, es exclusivamente responsabilidad de usted.',
                    '5.Acción por infracción de los derechos de propiedad intelectual.',
                    'Si la Compañía recibe una notificación alegando que usted se ha involucrado en una conducta que viola cualquiera de los derechos de propiedad intelectual de la Compañía o de sus Afiliadas, o de un tercero, o razonablemente sospecha esto, la Compañía podrá suspender o dar por terminado el acceso suyo al Servicio, sin previo aviso. Si la Compañía actúa conforme a esta Sección, la misma no tendrá responsabilidad alguna frente a usted, incluso por cualquier cantidad que haya pagado previamente o cualquier crédito que tenga en el Servicio.',
                    '6.Cumplimiento con la Ley de Protección de los Derechos de Autor, en el Milenio Digital.',
                    'Si usted es titular de derechos de autor o un agente del mismo, y considera que los materiales enviados por algún usuario, u otros materiales que no son de la Compañía, violan sus derechos, puede enviar una notificación de conformidad con la Ley de Protección de los Derechos de Autor, facilitándole a nuestro agente de derechos de autor (que se indica abajo) la siguiente información por escrito :(a) una firma física o electrónica de la persona autorizada para actuar en nombre del titular de un derecho exclusivo presuntamente infringido, (b) la identificación de la obra protegida por derechos de autor que, según se afirma, ha sido objeto de una infracción, o bien, si una sola notificación cubre varias obras protegidas por derechos de autor en el Servicio, una lista representativa de dichas obras en el Servicio, (c) la identificación del material que, según se afirma, infringe o es objeto de una actividad infractora y que debe eliminarse o al que debe inhabilitarse el acceso, e información razonablemente suficiente que le permita a Video Greetings localizar el material; (d) información razonablemente suficiente que le permita a Video Greetings comunicarse con la parte demandante, como una dirección, número de teléfono y, si estuviera disponible, una dirección de correo electrónico donde se pueda contactar a la parte demandante, (e) una declaración que la parte demandante cree de buena fe explicando que el uso del material en cuestión no fue autorizado por el titular de los derechos de autor, su representante o la ley, y (f) una declaración diciendo que la información incluida en la notificación es exacta y, bajo pena de perjurio, que la parte demandante está autorizada a actuar en nombre del titular de un derecho exclusivo que presuntamente se infringe. Cualquier consulta al respecto no dude en contactarnos.'
                ]
              },
              {
                id:10,
                ask:'10. Términos estándar.',
                answer:
                [
                    '1.Recursos.',
                    'Usted acuerda que cualquier uso no autorizado del Servicio y de cualquier tecnología contenida en el mismo podría ocasionar un perjuicio irreparable a la Compañía para la cual una compensación por daños y perjuicios monetarios sería insuficiente. Por lo tanto, en tal caso, la Compañía tendrá derecho, además de otros recursos disponibles de acuerdo al derecho y en equidad, a un desagravio por mandato judicial inmediato en contra de usted y para evitar cualquier uso no autorizado. Nada de lo contenido en esta Sección o en otra parte de estos Términos de Servicio se interpretará como que limita los recursos disponibles de conformidad con las reclamaciones legales o de otro tipo que la Compañía pueda tener bajo una autoridad jurídica independiente. Usted entiende y conviene en que la cancelación de su cuenta de Starkclass.com es su único derecho y recurso con respecto a cualquier controversia con la Compañía.',
                    '2.Indemnización.',
                    'Usted conviene en defender, indemnizar y eximir de toda responsabilidad a la Compañía respecto a todas y cualesquiera reclamaciones, pérdidas, daños y perjuicios, responsabilidades, deficiencias, sentencias, gravámenes, multas, costas y otros gastos (incluidos los honorarios razonables de abogados) que surjan de o, en relación con, el uso por parte de usted del Servicio, o cualquier incumplimiento por parte de usted de estos Términos de Servicio, y conviene en rembolsar a la Compañía, a solicitud, cualquier pérdida, costo o gasto en los que incurran a causa de ello.',
                    '3.Plazo; terminación.',
                    'El plazo de estos Términos de Servicio se mantendrá en efecto hasta que se dé por terminado, según se describe en el presente. Estos Términos de Servicio y los derechos que usted tiene a acceder, descargar y utilizar el Servicio están sujetos a la terminación inmediata, sin previo aviso, (a) si usted incumple (o la Compañía sospecha razonablemente que usted ha incumplido) cualquier disposición de estos Términos de Servicio, o (b) tras la interrupción por parte de la Compañía de la difusión o apoyo del Servicio. Si dicha terminación sin previo aviso está expresamente prohibida por la legislación aplicable, entonces dicha terminación se producirá tras la notificación de cualquiera de dichos incumplimientos. Tras la terminación, usted debe dejar de utilizar el Servicio, por completo. Si la Compañía da por terminados estos Términos de Servicio, o suspende su Cuenta de Starkclass.com por cualquiera de las razones expuestas en estos Términos de Servicio, la Compañía no tendrá ninguna obligación ni responsabilidad hacia usted y no le devolverá ningún importe que usted haya pagado con anterioridad.',
                    'a.NOTAS LEGALES; LIMITACIÓN DE RESPONSABILIDAD.',
                    'i.USTED ENTIENDE Y CONVIENE EN QUE EL USO DEL SERVICIO ES A SU EXCLUSIVO RIESGO. SALVO LO EXPRESAMENTE ESTABLECIDO EN EL PRESENTE, EL SERVICIO SE PROPORCIONA "EN EL ESTADO EN QUE SE ENCUENTRA" Y SIN GARANTÍA DE NINGÚN TIPO POR PARTE DE LA COMPAÑÍA NI DE SUS AFILIADAS, SEGÚN CORRESPONDA, Y EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, LA COMPAÑÍA EXPRESAMENTE RENUNCIA A TODAS LAS GARANTÍAS, YA SEA EXPRESAS O IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, LAS GARANTÍAS IMPLÍCITAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN FIN DETERMINADO, NO INFRACCIÓN Y TÍTULO. SALVO LO EXPRESAMENTE ESTABLECIDO EN EL PRESENTE, LA COMPAÑÍA NO GARANTIZA NI HACE NINGUNA DECLARACIÓN SOBRE EL USO O LOS RESULTADOS DEL USO DEL SERVICIO CON RESPECTO AL RENDIMIENTO, PRECISIÓN, FIABILIDAD, SEGURIDAD, CAPACIDAD, ACTUALIDAD U OTROS ASPECTOS. USTED NO RESPONSABILIZARÁ A LA COMPAÑÍA NI A SUS AFILIADAS DE NINGÚN DAÑO DERIVADO DE SU ACCESO (INCLUYENDO CUALQUIER SOFTWARE O SISTEMAS QUE UTILICE PARA ACCEDER) AL SERVICIO, INCLUYENDO, SIN LIMITACIÓN, DAÑOS A CUALQUIER COMPUTADORA, SOFTWARE O SISTEMAS, O DISPOSITIVOS PORTÁTILES REGISTRADOS QUE USTED UTILICE PARA ACCEDER AL MISMO. NO SE GARANTIZA QUE EL FUNCIONAMIENTO DEL SERVICIO SEA ININTERRUMPIDO NI QUE ESTÉ EXENTO DE ERRORES. NINGUNA INFORMACIÓN O ASESORAMIENTO ORAL O ESCRITO PROPORCIONADO POR CUALQUIER PERSONA, CONSTITUIRÁ NINGÚN TIPO DE GARANTÍA EN RELACIÓN CON LA COMPAÑÍA O SUS AFILIADAS.',
                    'ii.LA COMPAÑÍA NO GARANTIZA QUE EL SERVICIO SEA COMPATIBLE CON CUALQUIER COMPUTADORA PERSONAL, REPRODUCTOR DE CD O DVD, GRABADOR DE CD O DVD, O DISPOSITIVOS PORTÁTILES REGISTRADOS. USTED ES EL ÚNICO RESPONSABLE DE ASEGURARSE DE QUE SUS SISTEMAS FUNCIONEN CORRECTAMENTE CON EL SERVICIO.',
                    'iii.EL SERVICIO PUEDE CONTENER PUNTOS DE VISTA, CONSEJOS, DECLARACIONES Y OPINIONES, QUE REPRESENTAN LAS OPINIONES, CONSEJOS, OPINIONES Y DECLARACIONES DE LOS AUTORES INDIVIDUALES y NO NECESARIAMENTE LOS DE CUALQUIER COMPAÑÍA AFILIADA. LA COMPAÑÍA NO DECLARA NI AVALA LA EXACTITUD O LA CONFIABILIDAD DE CUALQUIER PUNTO DE VISTA, CONSEJO, OPINIÓN, DECLARACIÓN U OTRA INFORMACIÓN PROPORCIONADA POR DICHOS AUTORES. DICHOS PUNTOS DE VISTA, OPINIONES, CONSEJOS, DECLARACIONES U OTRA INFORMACIÓN SON ÚNICAMENTE LOS DE LOS AUTORES Y NO PUEDEN SER ATRIBUIDOS A LA COMPAÑÍA O SUS AFILIADAS. LA CONFIANZA QUE USTED DEPOSITE EN TALES PUNTOS DE VISTA, OPINIONES, CONSEJOS, DECLARACIONES U OTRA INFORMACIÓN QUEDA TAMBIÉN BAJO SU PROPIO RIESGO. LA COMPAÑÍA NO SERÁ RESPONSABLE ANTE NADIE DE NINGUNA INEXACTITUD, ERROR, OMISIÓN, INTERRUPCIÓN, OPORTUNIDAD, INFRACCIÓN DE CUALQUIER DERECHO DE PROPIEDAD INTELECTUAL, INTEGRIDAD, ELIMINACIÓN, DEFECTO, FALLA DE FUNCIONAMIENTO, FALLA EN LAS LÍNEAS DE COMUNICACIÓN, ALTERACIÓN O USO DE LAS OBRAS DEL AUTOR, INDEPENDIENTEMENTE DE LA CAUSA, O POR CUALQUIER DAÑO QUE DE ALLÍ RESULTE. LA COMPAÑÍA NO ASUME RESPONSABILIDAD ALGUNA, y NO SERÁ RESPONSABLE DE NINGÚN DAÑO O VIRUS QUE DAÑE LA COMPUTADORA DE USTED U OTRA PROPIEDAD, DEBIDO AL ACCESO POR PARTE SUYA O AL USO DE LOS MATERIALES DEL AUTOR.',
                    'iv.EN NINGÚN CASO, LA COMPAÑÍA SERÁ RESPONSABLE POR DAÑOS Y PERJUICIOS DIRECTOS, EMERGENTES, EJEMPLARES, CUANTIFICABLES, INDIRECTOS, ACCESORIOS O PUNITIVOS, LUCRO CESANTE, SIN IMPORTAR SU CAUSA, QUE SURJAN DE O EN RELACIÓN CON EL SERVICIO, ESTOS TÉRMINOS DE SERVICIO O EL OBJETO DE CUALQUIERA DE LO QUE ANTECEDE, BAJO NINGUNA TEORÍA DE RESPONSABILIDAD, INCLUYENDO, ENTRE OTROS: (1) DAÑOS Y PERJUICIOS DERIVADOS DE LA PÉRDIDA DE DATOS, LUCRO CESANTE, PÉRDIDA DEL USO DEL SERVICIO Y CUALQUIER DESCARGA O CUALQUIER EQUIPO RELACIONADO, TIEMPO DE INACTIVIDAD Y TIEMPO DEL USUARIO, AUNQUE LA COMPAÑÍA Y SUS AFILIADAS HAYAN SIDO NOTIFICADAS SOBRE LA POSIBILIDAD DE TALES DAÑOS Y PERJUICIOS (2) DAÑOS Y PERJUICIOS DERIVADOS DEL USO QUE USTED HAGA DEL SERVICIO Y QUE INFRINJA ESTOS TÉRMINOS DE SERVICIO, EN PARTICULAR LAS LIMITACIONES CON RESPECTO AL USO. BAJO NINGUNA CIRCUNSTANCIA LA COMPAÑÍA O SUS AFILIADAS SERÁN RESPONSABLES POR EL USO NO AUTORIZADO DE CUALQUIER CONTENIDO O CUALQUIER USO DEL SERVICIO PARA DESARROLLAR, DISTRIBUIR O UTILIZAR CUALQUIER MATERIAL QUE SEA DIFAMATORIO, CALUMNIOSO, INJURIOSO U OBSCENO, QUE DÉ UNA FALSA IMPRESIÓN DE CUALQUIER PERSONA, QUE CONSTITUYA UNA INVASIÓN DE CUALQUIER DERECHO A LA PRIVACIDAD O UNA INFRACCIÓN DE CUALQUIER DERECHO A LA PUBLICIDAD, QUE VIOLE O INFRINJA LOS DERECHOS DE CUALQUIER TERCERO O QUE INFRINJA CUALQUIER LEY O REGULACIÓN EXTRANJERA, FEDERAL, ESTATAL O LOCAL.',
                    'v.ALGUNAS JURISDICCIONES NO PERMITEN LA EXCLUSIÓN O LIMITACIÓN DE GARANTÍAS IMPLÍCITAS O DE RESPONSABILIDAD POR DAÑOS Y PERJUICIOS ACCESORIOS O EMERGENTES, DE MODO QUE ES POSIBLE QUE DICHAS EXCLUSIONES O LIMITACIONES NO SEAN APLICABLES AL CASO DE USTED. EN LA MEDIDA EN QUE EN UNA CIRCUNSTANCIA DETERMINADA, CUALQUIER NOTA LEGAL O LIMITACIÓN SOBRE DAÑOS Y PERJUICIOS O RESPONSABILIDAD AQUÍ ESTABLECIDA ESTÉ PROHIBIDA POR LA LEY APLICABLE, ENTONCES, EN LUGAR DE LAS DISPOSICIONES DEL PRESENTE EN DICHA CIRCUNSTANCIA DETERMINADA, LA COMPAÑÍA TENDRÁ DERECHO A LAS MÁXIMAS RENUNCIAS Y/O LIMITACIONES SOBRE DAÑOS Y PERJUICIOS Y LA RESPONSABILIDAD DISPONIBLES EN DERECHO Y EN EQUIDAD POR DICHA LEY APLICABLE EN TAL CIRCUNSTANCIA EN PARTICULAR. EN NINGÚN CASO TALES DAÑOS Y PERJUICIOS O LA RESPONSABILIDAD TOTAL DE LA COMPAÑÍA SUPERARÁ LOS CARGOS PAGADOS POR USTED EN LOS ÚLTIMOS 12 MESES O $10, LO QUE SEA MAYOR.',
                    'b.Propietario posterior del Servicio; Fusión/adquisición de la Compañía.',
                    'Al utilizar el Servicio, usted acuerda que la Compañía o una de sus compañías podrán, en el momento de una fusión, adquisición o venta del Servicio, o de todos o de sustancialmente todos los activos de la Compañía, ceder sus derechos y obligaciones en relación con el Servicio a un propietario u operador aplicable posterior. En caso de dicha fusión, adquisición o venta, el uso continuado del Servicio significa su acuerdo a obligarse por el Servicio de Términos y la política de privacidad del propietario u operador posterior del Servicio.',
                    'c. Supervivencia.',
                    'Los párrafos de estos Términos de Servicio titulados "Indemnización", "Limitación de responsabilidad", "Elección de derecho y jurisdicción", "Cargos y facturación", "Derechos de la compañía a los materiales que usted pública", "Recursos" y "Renuncias" sobrevivirán a su terminación.'
                ]
              },
              {
                id:11,
                ask:'11. Definiciones.',
                answer:
                [
                    '"Afiliadas" significa la Compañía y sus casas matrices directas e indirectas, agentes, empleados, licenciadores, distribuidores, socios comerciales, proveedores y afiliadas (y cada uno de los respectivos ejecutivos, directores, empleados y agentes de las entidades anteriores).',
                    '"Cuenta de Starkclass.com " significa una cuenta de usuario registrada en el Servicio.',
                    '"Contenido de Starkclass.com " significa la música, imágenes, texto y otros materiales que usted puede obtener o a los cuales puede acceder en forma digital desde el Servicio, cuyo contenido es propiedad de la Compañía o de terceros licenciadores.',
                    '"Política de Privacidad" significa la Política de Privacidad de la Compañía que puede consultar haciendo clic en el enlace que se encuentra en la parte inferior de la página principal del Servicio, la cual podrá ser enmendada, modificada o revisada en forma ocasional por la Compañía como se indica en los términos de la Política de Privacidad.',
                    '"Información de Registro" significa la información que usted proporciona a la compañía o al Servicio cuando se registra para una cuenta de Starkclass.com y durante el proceso de instalación que lleva a cabo para utilizar el Servicio (incluyendo un nombre único de miembro (usuario), una contraseña y su dirección válida de correo electrónico).'
                ]
              },
              {
                id:12,
                ask:'12. Preguntas',
                answer:
                [
                    'Si tiene alguna pregunta o comentario sobre estos Términos de Servicio, no dude en contactarnos en informes@starkclass.com o escribanos al WhatsApp +51 997 914 757.'
                ]
              }


          ]
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderPreguntas(){
        return this.state.preguntas.map((item, index)=>{
            return(
                <div className='col-12 stylepreguntasterminos' key={index}>
                    <h3>{   item.ask   }</h3>
                    {
                        item.answer.map((answer,posicion)=>{
                            return <p key={posicion} >{    answer  }</p>
                        })
                    }
                </div>
            )

        })
    }

    render() {
        return (
            <div style={{backgroundColor:'white'}}>
                <div className='container' >
                        <div className='col-12'>
                            <h3 style={{color:'#0482FF',paddingTop:60,fontWeight:'700',fontFamily:'Arial'}}>TÉRMINOS DE SERVICIO DE </h3>
                            <h3 style={{color:'#0482FF',fontWeight:'700',fontFamily:'Arial'}}>Starkclass.com™</h3>
                        </div>
                       
                        <div className='col-12 stylepreguntas' style={{marginTop:30}}>
                            <p>Bienvenido a Starkclass.com™ proporcionado por MyCode S.A.C. con RUC:20605063790 y domicilio Av. Javier Prado Este 4730, Lima.</p>
                            <p>Nos complace ofrecerle acceso al Servicio (como se define más abajo), sujeto a estos términos y condiciones (los "Términos de Servicio") y a la Política de Privacidad correspondiente de Starkclass.com. Al acceder y utilizar el Servicio, usted expresa su consentimiento, acuerdo y entendimiento de los Términos de Servicio y la Política de Privacidad. Si no está de acuerdo con los Términos de Servicio o la Política de Privacidad, no utilice el Servicio.</p>
                        </div>

                        {this.renderPreguntas()}

                        <div className="col-md-12 m-auto  text-center p-2" align='center' >
                            <img
                            src="/assets/icons/grupo.svg"
                            className="img-fluid"
                            alt="cello"
                            style={{marginTop:200}}
                            />
                        </div>
                </div>
                <Footer sectionR={false} />
            </div>
        )
    }
}
