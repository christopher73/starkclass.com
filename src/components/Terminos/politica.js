import React, { Component } from 'react'
import Footer from  '../Footer/footer'
import { Link } from 'react-router-dom';

export default class politica extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div style={{backgroundColor:'white'}}>
                <div className='container' >
                        <div className='col-12'>
                            <h3 style={{color:'#0482FF',paddingTop:60,fontWeight:'700',fontFamily:'Arial'}}>POLÍTICAS DE PRIVACIDAD DE</h3>
                            <h3 style={{color:'#0482FF',fontWeight:'700',fontFamily:'Arial'}}>Starkclass.com™</h3>
                        </div>
                       
                        <div className='col-12 stylepreguntas' style={{marginTop:30}}>
                            <p>El siguiente es un documento legal que explica como cuidamos tus datos y los términos de uso del Servicio cuando utilizas STARKCLASS.COM.</p>
                            <p>Gracias por tu confianza. Si algún concepto requiere más explicación, no dudes en escribirnos un correo a <Link>informes@starkclass.com.</Link></p>
                        </div>
                        <div className='col-12 stylepreguntas' >
                            <h3>1. INTRODUCCIÓN</h3>
                            <p >Le damos la bienvenida a Starkclass, un servicio académico en Internet ("El Servicio" o el "Website") proveído por Mycode S.A.C. con RUC: 20605063790 y domicilio Av. Javier Prado 5268, La Molina, Lima.</p>
                            <p>Respetamos su privacidad y la información que recolectamos sobre usted y qué hacemos con ella. La siguiente Política de Privacidad fue creada para ayudarlo a entender cómo será usada la información que usted provee a Starkclass.com. Esta Política de Privacidad aplica para toda la información que recolectamos sobre usted. Por favor sepa que Starkclass.com puede contener hipervínculos a otros sitios de Internet y ocasionalmente estos sitios podrían compartir la marca Starkclass.com o la marca de uno de nuestros afiliados. Sitios que están conectados a El Servicio o poseen la marca de Starkclass.com pueden tener Políticas de Privacidad que difieren de las de Starkclass.com.</p>                  
                        </div>
                        <div className='col-12 stylepreguntas' >
                            <h3>2. CÓMO CONTACTARNOS</h3>
                            <p>Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a informes@starkclass.com. </p>
                        </div>
                        <div className='col-12 stylepreguntas' >
                            <h3>3. ¿QUÉ TIPO DE INFORMACIÓN RECOLECTAMOS?</h3>
                            <p>Dependiendo del uso de nuestro servicio podremos recopilar la siguiente información:</p>
                            <br/>
                            <h6>Información de registro</h6>
                            <p>No es requerido que usted nos brinde ningún tipo de información personal para acceder a nuestro sitio web ni para ver la información que proveemos generalmente en este. Sin embargo, podremos ofrecerle la oportunidad de registrarse con nosotros o unirse a nuestra lista de correo. A pesar de que no es necesario registrarse para acceder a nuestro sitio web, sí es necesario conectar cuentas de redes sociales para participar en los chats. En caso de querer participar en un curso se le pedirán sus datos personales para el registro en cada curso así como ser redireccionado a algún medio de pago para realizar el respectivo abono correspondiente. En otros momentos, puede que también se le pida que nos provea información adicional, como su edad, género, y otra información personal para que usted reciba información adicional de nuestros servicios a futuro. Starkclass.com podría necesitar esta información para conocerlo mejor, ayudarlo a entender nuevos servicios, programas y ofertas en las cuales usted pueda estar interesado y así mejorar su experiencia online.</p>
                            <br/>
                            <h6>Recolección automática de datos</h6>
                            <p>Usted podrá visitar nuestro sitio web y utilizar ciertos nuestros servicios de manera anónima. Starkclass.com puede recolectar cierta información personal para el uso de nuestros servicios aún así se haya registrado con nosotros o no. Por ejemplo, Starkclass.com puede recolectar información concerniente al tipo de Navegador de Internet que usted usa, el tipo de computadora o sistema operativo que usted usa, su dirección de IP, la velocidad de su conexión, el nombre del dominio de su proveedor de servicio Internet, la localidad geográfica de dónde usted esta accediendo a nuestros servicios y/o la Website o propaganda de donde usted se conectó a nuestro sitio web. Una vez que se haya registrado con nosotros, también rastreamos y recolectamos información sobre usted incluyendo sus transacciones con nosotros, nuestros afiliados, u otros, y los patrones que siguió usted al usar nuestra Website, como las páginas del sitio web que usted visitó, búsquedas que condujo, y el tiempo que usted estuvo en nuestra Website. Si decide contactarnos, podremos guardar un historial de su correspondencia.</p>
                            <br/>
                            <h6>Cookies</h6>
                            <p>Cuando usted visita nuestro sitio web o pulsa cualquier hipervínculo que aparece en él, o usa uno o más de nuestros servicios, podremos usar una tecnología industrial llamada "cookies" la cual almacena cierta información en su computadora y que nos permitirá personalizar su experiencia para alinearla con sus intereses y preferencias o simplemente facilitar su acceso al usar nuestros servicios. La mayoría de los Navegadores permitirán que usted elimine o bloquee las "cookies" de su computador o su disco duro o alertará las mismas cuando estas se activen. Por favor refiérase a las instrucciones de su Navegador para ayuda o para conocer mejor sus funciones. Por favor note, sin embargo, que si usted bloquea de su Navegador el uso de estos cookies, el servicio no podrá ser utilizado o no podrá acceder a nuestra Website o quizás pueda afectar el funcionamiento de la página como tal.</p>
                            <br/>
                            <h6>Información que recibimos de nuestros afiliados</h6>
                            <p>También podrá proveer información personal a terceros o páginas de marcas afiliadas a través de las cuales proveemos acceso a nuestros servicios ("Redes Afiliadas"). Cuando se registra con nosotros, la Red Afiliada de la cual usted ingresó podría proveernos con su nombre de usuario y contraseña de dicha Red. Algunas de esas Redes Afiliadas u otras redes podrían compartir cualquier otra información que usted comparta, con nosotros. Al usar nuestros servicios, usted estará de acuerdo en permitirnos a recibir y usar cualquier información, excepto información de tarjetas de crédito que usted le provea a las redes afiliadas, bajo los mismos términos como si nos la hubiera proveído a nosotros directamente. Pase o no que una Red Afiliada comparta su información y hasta qué punto la compartan con nosotros dependerá de su acuerdo con nosotros y su Política de Privacidad individual o particular.</p>                 
                        </div>
                        <div className='col-12 stylepreguntas' >
                            <h3>4. ¿CÓMO UTILIZAMOS TU INFORMACIÓN PERSONAL?</h3>
                            <br/>
                            <h6>Ofrecer un mejor producto y servicio</h6>
                            <p>En general, Starkclass.com podrá usar información sobre usted para proporcionar y mejorar El Servicio. Starkclass.com podrá compartir esta información con los proveedores del s|ervicio sobre contenido, afiliados y otras entidades de forma no-personal para estudios demográficos e información preferencial para los usuarios del servicio o para otros propósitos. Esta información podrá incluir el uso y la data demográfica, pero no incluirá información personal (tal como su dirección de correo electrónico). Si usted provee a Starkclass.com con información personal, tomaremos razonados y apropiados pasos para proteger esta información. Excepto conforme está descrito en esta Política de Privacidad, Starkclass.com no revelará, compartirá, venderá ni rentará información personal recolectada en nuestra Website a terceros para su uso promocional sin su consentimiento a menos que sea para un programa específico al que le podrá pedirnos no participar. Si usted solicita recibir información de nuestros afiliados al seleccionar esta opción en el futuro, podremos compartir su información de registro e información acerca de sus transacciones en nuestro servicio con los estudios y/o nuestros afiliados. Si usted accede a nuestros servicios a través de una versión afiliada de nuestra Website que contenga un aviso que esa información será compartida con dicho afiliado la cual aparecerá bajo el nombre de la Website afiliada, cualquier información personal o no-personal será compartida con dicha Website afiliada. Cualquier uso de esa información de parte de Starkclass.com será sujeto a esta Política de Privacidad, y cualquier uso de dicha información por un afiliado estará sujeto a esta Política de Privacidad y la Política de Privacidad del afiliado. Nosotros no compartimos la información de sus cuentas de tarjetas de crédito con redes afiliadas ni ningún otro tercero, excepto al servicio de procesamiento de tarjetas de crédito descritos abajo.</p>
                            <br/>
                            <h6>Comunicarnos contigo</h6>
                            <p>Para mantenerlo informado sobre nuestros servicios, podríamos enviar correos electrónicos y anuncios que son necesarios para la administración de nuestro Website y El Servicio. También podríamos proveer a nuestros usuarios con la opción de unirse a nuestra lista de correos electrónicos para recibir información adicional sobre nuestra Website, servicios y ofertas, incluyendo las de Starkclass.com, o sus afiliados.</p>
                        </div>
                        <div className='col-12 stylepreguntas' >
                            <h3>5. SERVICIOS DE TERCEROS CON LOS CUALES COMPARTIMOS INFORMACIÓN DEL USUARIO</h3>
                            <br/>
                            <h6>Estadísticas y anuncios</h6>
                            <p>•Google Analytics</p>
                            <p>•Inspectlet</p>
                            <p>•Facebook Analytics</p>
                            <p>•Twitter Analytics</p>
                            <p>•Facebook Ads</p>
                            <p>•Google Adwords</p>
                            <br/>
                            <h6>Datos personales</h6>
                            <p>•Cookies</p>
                            <p>•Datos de uso</p>
                            <br/>
                            <h6>Registro y autenticación</h6>
                            <p>•Twitter OAuth</p>
                            <p>•Facebook Authentication</p>
                            <br/>
                            <h6>Datos Personales</h6>
                            <p>•Distintas clases de Datos, según se especifica en la Política de Privacidad del servicio</p>
                            <br/>
                            <h6>Procesamiento de pagos</h6>
                            <p>•Culqi (Plataforma de pago Peruana)</p>
                            <br/>
                            <h6>Datos personales</h6>
                            <p>•Nombres y apellidos</p>
                            <p>•Correo electrónico</p>
                        </div>
                        <div className='col-12 stylepreguntas' >
                            <h3>6. SEGURIDAD</h3>
                            <p>Usamos métodos razonables de seguridad para proteger la data que reside en nuestros servidores. Sin embargo, ningún sistema de seguridad es impenetrable, debido a esto, no le podemos garantizar la seguridad de nuestros servidores. Es también posible que la información que usted nos provea pueda ser interceptada durante la transmisión de datos.</p>
                            <p>Cada vez que usted le dé a Starkclass.com información sensible (ejemplo: contraseñas, números de tarjeta de crédito, etc), Starkclass.com tomara medidas comerciales razonables para proteger dicha información y establecer una conexión segura con nuestro Navegador de Web.</p>
                            <p>Starkclass.com emplea una tecnología industrial estándar conocida como secure-socket-layer ("SSL") para proteger la transmisión de información de pago al Website. Puede usted chequear la seguridad de su conexión tras observar la barra de direcciones en su ventana de Navegador. Cuando usted acceda un servidor protegido por SSL, los primeros caracteres de la dirección cambiaran de "http" a "https."</p>
                            <p>Para ayudarle a proteger la información de su cuenta de Starkclass.com, por favor mantenga su contraseña segura. Su contraseña se mantendrá en nuestro sistema de forma codificada ya que Starkclass.com comprende que su privacidad es muy importante. Starkclass.com generara una nueva contraseña en caso de que a usted se le olvide y se la enviara a su correo electrónico. Esto no afectara su perfil de ninguna manera. Le sugerimos que escoja una contraseña no-obvia que contenga números y letras. Además, le recomendamos que no divulgue su contraseña a nadie. Ultimamente, usted es responsable por mantener en secreto su contraseña y su información de su cuenta de Starkclass.com.</p>
                            <p>La Política de Privacidad de Starkclass.com no se extiende a nada inherente en la operación de Internet, por lo tanto más lejos del control de Starkclass.com, y no se aplicará de ninguna manera contraria a la ley o los reglamentos del gobierno.</p>  
                        </div>
                        <div className='col-12 stylepreguntas' >
                            <h3>7. ENLACES A OTRAS REDES</h3>
                            <p>Los enlaces a otras redes son una parte integral de la funcionalidad de Internet, incluyendo nuestra Website. Cualquier hipervínculo que disponga de una URL de un dominio distinto a Starkclass.com en la barra de direcciones de su Navegador es un hipervínculo a una página fuera de nuestro servicio. Esto incluye hipervínculos a nuestros proveedores de contenido en el servicio, afiliados, o hipervínculos a terceros que pudieran estar enlazados con Starkclass.com. Estas otras redes podrán enviar sus "cookies" a usted, recolectar data o solicitar información personal. Starkclass.com no puede garantizar y no se hace responsable por el contenido de otras redes o páginas.
Por favor tenga en mente que cada vez que le dé información personal a otras redes o páginas (por ejemplo, vía mensajes o Chat), esa información puede ser recolectada y o usada por personas que usted no conoce. Mientras Starkclass.com se esfuerza para proteger a nuestros visitantes, su información personal, y privacidad, no podemos garantizar la seguridad ni la privacidad de ninguna información que usted revele a otros Websites, y usted lo hace a su propio riesgo. Debe aprender sobre las prácticas y políticas de privacidad y seguridad de sitios de Internet externos antes de proporcionarles sus datos personales.</p>
                        </div>

                        
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
