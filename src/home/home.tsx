import Image from "next/image";
import { Layout } from "../layout/layouts";
// import "../src/scss/home/home.scss"; cambiar a modulo y sacar de app

export default function HomeTwo() {
  return (
    <Layout>
      <main>
        <section className="hero mb-5">
          <div className="main-banner">
            <div className="py-5 container">
              <div
                className="col-12 col-md-9 py-1 py-md-0 px-0"
                data-aos="fade-right"
              >
                <h1 className="mb-0 mb-md-5">
                  Conocé Obelisco, el sistema de diseño del Gobierno de la Ciudad
                  de Buenos Aires.
                </h1>
                <div className="hero-icons">
                  <div className="card p-3 wave-animation delay-1">
                    <span className="material-icons-round"> home </span>
                  </div>
                  <div className="card p-3 wave-animation delay-2">
                    <span className="material-icons-round"> unfold_more </span>
                  </div>
                  <div className="card p-3 wave-animation delay-3">
                    <span className="material-icons-round"> text_increase </span>
                  </div>
                  <div className="card p-3 wave-animation delay-4">
                    <span className="material-icons-round"> gps_fixed </span>
                  </div>
                  <div className="card p-3 wave-animation delay-5">
                    <span className="material-icons-round"> toggle_off </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section id="seccion-obelisco">
            <article className="mb-5">
              <h2>Acerca de Obelisco</h2>
              <p className="lead">
                Es el sistema de diseño para productos digitales del Gobierno de
                la Ciudad de Buenos Aires; una guía de recursos y herramientas
                creada para los ciudadanos/as. Obelisco busca brindar soluciones
                de diseño tanto a áreas internas como externas de Gobierno,
                poniendo el foco en la accesibilidad y los estándares de
                usabilidad para lograr una experiencia ideal para las personas
                usuarias.
              </p>
            </article>
          </section>

          <section className="panels" id="seccion-herramientas">
            <h2 className="mb-4">Utilizá obelisco</h2>

            <div
              className="card card-simple panel-horizontal mb-5"
              data-aos="fade-left"
            >
              <Image
                src="https://gcba.github.io/img/panel/panel.svg"
                className="card-img"
                alt="descripción alternativa"
                width="150"
                height="150"
              />
              <div className="card-body">
                <h2 className="card-title">Figma UI Kit</h2>
                <p className="card-text">
                  Simplificá tu proyecto con nuestra librería de componentes y
                  guía de estilos, para una implementación ágil y sencilla.
                </p>
                <div className="panel-footer">
                  <a
                    className="btn btn-secondary btn-lg btn-icon card-link"
                    href="./img/ui-kit/UI_KIT_Obelisco.fig"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enlace de descarga de UI KIT."
                  >
                    <span className="material-icons-round">file_download</span>
                    Descargar UI Kit
                  </a>
                </div>
              </div>
            </div>

            <div
              className="card card-simple panel-horizontal mb-5"
              data-aos="fade-left"
            >
              <Image
                src="https://gcba.github.io/img/panel/panel1.svg"
                className="card-img"
                alt="descripción alternativa"
                width="150"
                height="150"
              />
              <div className="card-body">
                <h2 className="card-title">Sistema y estándares</h2>
                <p className="card-text">
                  Conocé las características que deben cumplir los desarrollos
                  digitales para el Gobierno de la Ciudad de Buenos Aires
                  impulsados por la Agencia de Sistemas de Información.
                </p>
                <div className="panel-footer">
                  <a
                    href="https://gcba.github.io/estandares/"
                    className="btn btn-primary btn-lg card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enlace a Sistema y estandares de obelisco."
                  >
                    Explorar sistema
                  </a>
                </div>
              </div>
            </div>

            <div
              className="card card-simple panel-horizontal mb-5"
              data-aos="fade-left"
            >
              <Image
                src="https://gcba.github.io/img/panel/panel2.svg"
                className="card-img"
                alt="descripción alternativa"
                width="150"
                height="150"
              />
              <div className="card-body">
                <h2 className="card-title">Storybook</h2>
                <p className="card-text">
                  Descubrí nuestros componentes accesibles para la creación y
                  desarrollo de productos digitales, enfocados para la utilización
                  de desarrolladores.
                </p>
                <div className="panel-footer">
                  <a
                    href="https://gcba.github.io/Obelisco/?path=/story/comenzar-inicio--instalacion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg card-link"
                    aria-label="Enlace a herramienta Obelisco."
                  >
                    Conocer componentes
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="col-12 col-md-8 mb-5 p-0" id="seccion-nosotros">
            <h2 className="mb-3">Quiénes somos</h2>
            <p>
              Somos un equipo de trabajo interdisciplinario, una sinergia entre
              Diseñadores expertos en experiencia e interfaz para el usuario, y
              también Desarrolladores Front End.
              <br />
              <br />
              Nuestro enfoque se divide en dos vías de trabajo complementarias:
              &quot;Descubrimiento&quot; y &quot;Entrega&quot;.
              <br />
              <br />
              La vía de &quot;Descubrimiento&quot; se centra en producir, probar y
              validar ideas de componentes y estilos. Aquí es donde creamos y
              experimentamos, siempre buscando mejorar y elevar el estándar de
              experiencia para nuestros usuarios.
              <br />
              <br />
              Por otro lado, la vía de &quot;Entrega&quot; entra en acción para
              transformar estas ideas y componentes en desarrollos tangibles. Así,
              aseguramos que cada concepto se convierta en una realidad utilizable
              en futuros proyectos.
              <br />
              <br />
              Simultáneamente trabajamos en investigación y desarrollo, esto nos
              permite realizar iteraciones ágiles y brindar un valor continuo y
              significativo a nuestros usuarios en cada paso del proyecto.
            </p>

            <div className="accordion" id="accordionExample">
              <div className="card">
                <button
                  className="card-header collapsed card-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                >
                  Historia
                </button>
                <div
                  id="collapseOne"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Los estándares y el sistema de diseño Obelisco están
                    construidos por un equipo colaborativo en experiencia digital.
                    Desde noviembre de 2018, trabajamos en generar estándares de
                    usabilidad y accesibilidad para los formularios.
                    <br />
                    <br />
                    A partir de marzo de 2020, desde la Subsecretaría de
                    Experiencia Digital, Obelisco se convirtió en un proyecto que,
                    tras 8 meses de trabajo en un equipo colaborativo con
                    intermitencias de proyectos satélites, se pudo llevar adelante
                    el comienzo de la primera versión del proyecto.
                    <br />
                    <br />
                    En este lanzamiento, proporcionamos documentación y
                    herramientas esenciales para trabajar sobre productos y
                    servicios. También incluimos los archivos de diseño y
                    desarrollo para cada componente, así como las primeras fichas
                    informativas. Estas fichas son un recurso valioso que ayuda a
                    los equipos de diferentes áreas de gobierno y a proveedores a
                    adoptar el Sistema de Diseño en sus proyectos.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5 pb-5" id="seccion-noticias">
            <div className="mb-4">
              <h2>Te puede interesar</h2>
            </div>

            <div data-aos="fade-right">
              <div className="card-deck max-cards-3 card-column">
                <a
                  className="card"
                  href="https://documentosboletinoficial.buenosaires.gob.ar/publico/ck_PE-RES-MJGGC-SECITD-94-23-6626.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enlace a resolución."
                >
                  <Image
                    src="https://gcba.github.io/img/card/homev1.svg"
                    className="card-img-top"
                    alt="descripción alternativa"
                    width="332"
                    height="187"
                  />
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="badge badge-info">comunicación</span>
                    </div>
                    <h4 className="card-title">Conocé nuestra resolución</h4>
                    <p className="card-text">
                      Descargá la resolución publicada en el Boletín Oficial del
                      Gobierno de la Ciudad de Buenos Aires.
                    </p>
                  </div>
                  <div className="card-footer">
                    <small>Fecha de publicación: 17/05/2023</small>
                  </div>
                </a>
                <a
                  className="card"
                  href="https://gcba.github.io/obelisco-demo/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enlace a templates de ejemplo."
                >
                  <Image
                    src="https://gcba.github.io/img/card/homev1.svg"
                    className="card-img-top"
                    alt="descripción alternativa"
                    width="332"
                    height="187"
                  />
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="badge badge-info">Buenas Prácticas</span>
                      <span className="badge badge-info">comunicación</span>
                    </div>
                    <h4 className="card-title">Mirá todas las plantillas</h4>
                    <p className="card-text">
                      Para ahorrar tiempo y optimizar tu trabajo, te facilitamos
                      plantillas
                    </p>
                  </div>
                  <div className="card-footer">
                    <small>Fecha de publicación: 1/7/2023</small>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
