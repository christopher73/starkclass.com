import React, { Component } from 'react';
import './style.css';
import Footer from '../Footer/footer';
import Parser from 'html-react-parser';

export default class preguntas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preguntas: [
        {
          id: 0,
          ask: '¿Qué es Starkclass?',
          answer: [
            'Starkclass es una plataforma de educación virtual en la que te enseñamos los cursos pre universitarios para que puedas ingresar a la universidad de manera rápida y sencilla. Nuestros cursos son virtuales y todo está disponible 24/7 en la plataforma, así puedes aprender a tu ritmo.'
          ]
        },
        {
          id: 1,
          ask: '¿Cómo funcionan los cursos? ¿Debo seguir un horario?',
          answer: [
            'Todos nuestros cursos virtuales están disponible 24/7 en la plataforma. Por lo tanto, una vez estén publicados, los cursos empiezan y acaban cuando tú quieras. Encontrarás videos de clases, repasos para tu parcial, final y admisión, como también material de lectura y desafíos. Además podrás mandarnos tus consultas y ejercicios al WhatsApp.'
          ]
        },
        {
          id: 2,
          ask: '¿Qué planes tienen disponibles para mí?',
          answer: [
            'Contamos con un ciclo especialmente para ti:',
            'Con el Ciclo Pre Ulima tienes acceso a los cursos de Razonamiento Matemático, Matemática I, Matemática II, Lectura y Redacción. Además, contenido adicional de Psicología y Procesos Históricos, así como repasos para tu parcial, final y admisión a la Universidad de Lima.'
          ]
        },
        {
          id: 3,
          ask: '¿Pago por suscripción? ¿Qué es y cómo funciona?',
          answer: [
            'Una suscripción es un pago recurrente que se realiza según el ciclo que elijas. Descubrimos que los alumnos pierden tiempo en el tráfico o en clases aburridas que no enseñan el mismo temario de la Universidad a la que postulan. Con nuestros Ciclos puedes acceder a todos los cursos y a contenido especial.',
            'Tenemos opciones de pago; ya sea, online, depósito bancario y YAPE. Además, brindamos boleta de pago electrónico.'
          ]
        },
        {
          id: 4,
          ask: '¿Hay compromiso de permanencia según el ciclo?',
          answer: [
            'No. Sin embargo nos interesa que te comprometas a aprender con nosotros, así que esperamos que te quedes hasta que cumplas todos tus objetivos.'
          ]
        },
        {
          id: 5,
          ask: '¿Qué medios de pago aceptan?',
          answer: [
            'Aceptamos tarjetas de crédito o tarjetas débito internacional (Visa, MasterCard) que tienen el código de seguridad de 3 dígitos atrás y permiten pagos online. Te cobramos desde Perú mediante la plataforma Culqui.',
            'También aceptamos Depósitos bancarios y Yape.'
          ]
        },
        {
          id: 6,
          ask: '¿Cuánto tarda en activarse si pago con tarjeta?',
          answer: [
            'Se activa de inmediato. Al pagar tendrás acceso al contenido conforme vaya avanzando las semanas.'
          ]
        },
        {
          id: 7,
          ask: '¿Cuánto tarda en activarse si pago con DEPÓSITO O YAPE?',
          answer: [
            'En algunos casos hasta 24 horas, pero casi siempre menos de una hora. Envía un mensaje de inmediato con detalles del depósito al WhatsApp (997 914 757) o al correo (<a>informes@starkclass.com</a>).',
            'Por favor incluye una captura o fotografía del comprobante, además de brindarnos tus nombres completos y correo electrónico del cual te suscribiste.'
          ]
        },
        {
          id: 8,
          ask: '¿Entregan facturas?',
          answer: [
            'Sí. Si pagaste con tarjeta de crédito encontrarás tus facturas en tu perfil, en “Boletas de pago”.',
            'Si hiciste un pago por depósito o transferencia bancaria envía el recibo de pago y tu información a informes@starkclass.com solicitando la factura.'
          ]
        },
        {
          id: 9,
          ask: '¿El cobro de la suscripción es manual o automático?',
          answer: [
            'Los cobros de las suscripciones, lo haces de manera manual, así que no tienes nada de qué preocuparte.',
            'No almacenamos los datos de tu tarjeta. Usamos proveedores externos, como Culqui, para las transacciones y ellos almacenan tu información de forma segura.'
          ]
        },
        {
          id: 10,
          ask: '¿Cómo puedo pausar mi suscripción temporalmente?',
          answer: [
            'No se puede; por tal motivo, esté seguro antes de comprar el paquete escogido.'
          ]
        },
        {
          id: 11,
          ask: '¿Puedo compartir mi cuenta con varios compañeros?',
          answer: [
            'En Starkclass cada cuenta es individual, ya que el progreso de aprendizaje es independiente. Además, solo se puede visualizar en un dispositivo a la vez. '
          ]
        },
        {
          id: 12,
          ask: 'Ya he pagado, ¿Qué pasos siguen?',
          answer: [
            'Puedes entrar de manera inmediata a en nuestra plataforma a través de tu cuenta en Gmail o Facebook. No te preocupes, no invadimos tu privacidad ni tenemos acceso a tu contraseña. Aquí puedes leer nuestras <a href=/politica>políticas de privacidad.</a>'
          ]
        },
        {
          id: 13,
          ask: '¿Hay reembolso?',
          answer: [
            'El reembolso es del 50%, hasta 3 días después de realizar la compra.'
          ]
        },
        {
          id: 14,
          ask: '¿Qué necesito para tomar los cursos?',
          answer: [
            'Sólo una conexión a Internet y un computador, laptop, Tablet o Smartphone con Android 4+ o iOS5+. Si en tu conexión puedes ver videos en YouTube a 480p fluidos, verás los cursos sin ningún problema. No necesitas instalar Skype ni nada. Todo Starkclass está basado en web, la mejor experiencia en educación online.'
          ]
        },
        {
          id: 15,
          ask: 'En serio ¿cualquier laptop, teléfono o Tablet?',
          answer: [
            'Sí, en serio ¿no es genial? Sólo recuerda que debe ser un Smartphone o Tablet modernos. El iPad 1 te sirve, una Tablet Android con Android 4 o superior también.'
          ]
        },
        {
          id: 16,
          ask: '¿Hasta cuándo tengo acceso a todos los cursos?',
          answer: [
            'Si te matriculaste: Tendrás acceso hasta al día después del examen de admisión general de la universidad a la que postulas'
          ]
        },
        {
          id: 17,
          ask: '¿Puedo descargar los materiales?',
          answer: [
            'Los cursos son online y todo está disponibles 24/7 en la plataforma. Más que materiales para descargar, la experiencia Starkclass está construida para que la disfrutes al iniciar tu sesión. Te esperamos.'
          ]
        },
        {
          id: 18,
          ask: '¿Cómo puedo obtener ayuda personalizada?',
          answer: [
            'Ofrecemos ayuda técnica, administrativa o de pagos relacionados con la plataforma, por correo (<a>informes@starkclass.com</a>) por medio de Mensaje directo en nuestra plataforma o por WhatsApp.',
            'Para preguntas relacionadas con el contenido de las clases, tendrás respuesta inmediata. Si tu tema es súper específico, a nuestro equipo le gustan los desafíos y buscaremos guiarte en tu búsqueda particular. Para dudas y ejercicios háblanos al WhatsApp: 997 914 757.'
          ]
        },
        {
          id: 19,
          ask: 'Quiero recomendarles que den un curso de...',
          answer: [
            'Nos encantaría escuchar tus sugerencias. Cuéntanos qué ideas tienes en informes@starkclass.com'
          ]
        }
      ]
    };
  }

  renderPreguntas() {
    return this.state.preguntas.map((item, index) => {
      return (
        <div className="col-12 stylepreguntas">
          <h3 key={index}>{item.ask}</h3>
          {item.answer.map((answer, posicion) => {
            return <p key={posicion}>{Parser(answer)}</p>;
          })}
        </div>
      );
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="col-12">
            <h3
              style={{
                color: '#0482FF',
                paddingTop: 60,
                fontWeight: '700',
                fontFamily: 'Arial'
              }}>
              PREGUNTAS FRECUENTES
            </h3>
          </div>
          {this.renderPreguntas()}
          <div className="col-md-12 m-auto  text-center p-2" align="center">
            <img
              src="/assets/icons/grupo.svg"
              className="img-fluid"
              alt="cello"
              style={{ marginTop: 200 }}
            />
          </div>
        </div>
        <Footer sectionR={false} />
      </div>
    );
  }
}
