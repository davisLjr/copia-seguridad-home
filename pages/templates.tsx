import styles from "../src/scss/templates/home.module.scss";
import { CardAreaGob } from "../utils/helpers/areaDeGobierno";
import { CardForm } from "../utils/helpers/formularios";
import { CardInstitutional } from "../utils/helpers/institucional";
import { CardNotice } from "../utils/helpers/noticias";
import { CardAreas } from "../utils/helpers/pagAreas";
import { CardBooks } from "../utils/helpers/pagLibro";
import { CardSimples } from "../utils/helpers/pagSimple";
import { Layout } from "../src/layout/layouts";
import Head from "next/head";

export default function TemplatesHome() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Agradecimiento a Neitrys Barrera, con su ayuda puedo desarrollar paginas web."
        />
        <meta
          property="og:title"
          content="Neitrys Barrera - Practicas de programación"
        />
        <meta
          property="og:description"
          content="Esto es una practica de desarrollo guiada por Neitrys Barrera."
        />
      </Head>

      <Layout>
        <h1 style={{ opacity: 0, height: "1px" }}>Neitrys Barrera</h1>
        <main className={styles["main"]}>
          <header className="px-0">
            <div className="container">
              <div className="mt-2 pt-1">
                <h1 className={styles["title-block"]}>Plantillas HTML GCBA</h1>
                <p className="lead">
                  Las plantillas se crean en Obelisco como sus propios marcos
                  extendidos, con sus componentes y complementos, documentación
                  y herramientas de construcción.
                </p>
              </div>
            </div>
            <div className={styles["bg-landing"]}></div>
          </header>

          <section className="mb-5 pb-5">
            <div className="container-fluid">
              <div className="mt-2 pt-1">
                <h2 className={styles["title-block"]}>Categorias</h2>
              </div>

              <nav
                className={styles["tabs-slider"]}
                aria-label="Simple tab list"
              >
                <ul
                  className={`nav nav-pills tabs ${styles.nav} ${styles["nav-pills"]} ${styles.tabs}`}
                  id="simple-myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-toggle="tab"
                      data-target="#panel-content-1"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-1"
                      aria-selected="true"
                    >
                      Área de Gobierno
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-toggle="tab"
                      data-target="#panel-content-2"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-2"
                      aria-selected="false"
                    >
                      Formularios
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-toggle="tab"
                      data-target="#panel-content-3"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-3"
                      aria-selected="false"
                    >
                      Institucional
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      // tabindex="-1"
                      data-toggle="tab"
                      data-target="#panel-content-4"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-4"
                      aria-selected="false"
                    >
                      Noticias
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      // tabindex="-1"
                      data-toggle="tab"
                      data-target="#panel-content-5"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-5"
                      aria-selected="false"
                    >
                      Página de Área
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      // tabindex="-1"
                      data-toggle="tab"
                      data-target="#panel-content-6"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-6"
                      aria-selected="false"
                    >
                      Página de Libro
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      // tabindex="-1"
                      data-toggle="tab"
                      data-target="#panel-content-7"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-7"
                      aria-selected="false"
                    >
                      Página Simple
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className={`tab-content container-fluid ${styles["tab-content"]}`}
              id="simple-myTabContent"
            >
              <div
                className={`tab-pane fade show active ${styles["tab-pane"]}`}
                id="panel-content-1"
                role="tabpanel"
                aria-label="1-tab"
              >
                <div className={styles["listCard"]}>
                  <CardAreaGob />
                </div>
              </div>

              <div
                className={`tab-pane fade ${styles["tab-pane"]}`}
                id="panel-content-2"
                role="tabpanel"
                aria-label="2-tab"
              >
                <div className={styles["listCard"]}>
                  <CardForm />
                </div>
              </div>
              <div
                className={`tab-pane fade ${styles["tab-pane"]}`}
                id="panel-content-3"
                role="tabpanel"
                aria-label="3-tab"
              >
                <div className={styles["listCard"]}>
                  <CardInstitutional />
                </div>
              </div>

              <div
                className={`tab-pane fade ${styles["tab-pane"]}`}
                id="panel-content-4"
                role="tabpanel"
                aria-label="4-tab"
              >
                <div className={styles["listCard"]}>
                  <CardNotice />
                </div>
              </div>

              <div
                className={`tab-pane fade ${styles["tab-pane"]}`}
                id="panel-content-5"
                role="tabpanel"
                aria-label="5-tab"
              >
                <div className={styles["listCard"]}>
                  <CardAreas />
                </div>
              </div>

              <div
                className={`tab-pane fade ${styles["tab-pane"]}`}
                id="panel-content-6"
                role="tabpanel"
                aria-label="6-tab"
              >
                <div className={styles["listCard"]}>
                  <CardBooks />
                </div>
              </div>

              <div
                className={`tab-pane fade ${styles["tab-pane"]}`}
                id="panel-content-7"
                role="tabpanel"
                aria-label="7-tab"
              >
                <div className={styles["listCard"]}>
                  <CardSimples />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
