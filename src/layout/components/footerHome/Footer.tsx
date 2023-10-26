import Image from "next/image";

const FooterHome: React.FC = () => {
  return (
    <footer className="main-footer pb-0">
      <div className="container">
        <section className="footer-legal-section mb-4">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-xl-4 footer-content-img mb-0">
              <Image
                className="d-lg-none"
                src="https://gcba.github.io/img/footer/ciudad-ba.svg"
                alt="Ciudad de Buenos Aires"
                height="48"
                width="204"
              />
              <Image
                className="d-none d-lg-inline"
                src="https://gcba.github.io/img/footer/ciudad-ba.svg"
                alt="Ciudad de Buenos Aires"
                height="40"
                width="204"
              />
              <div className="divisor"></div>
              <Image
                className="img-vamos-ba"
                src="https://gcba.github.io/img/footer/vamos-ba.svg"
                alt="Vamos Buenos Aires"
                width="111"
                height="40"
              />
            </div>
          </div>
        </section>
        <Image
          className="header-logo-obelisco mb-4"
          src="https://gcba.github.io/img/footer/Obelisco-logo-footer.svg"
          alt="Ciudad de Buenos Aires"
          width="122"
          height="25"
        />
        <section className="mb-4">
          <h4 className="mb-3">Redes de la ciudad</h4>
          <ul className="list-inline">
            <li className="list-inline-item redes-items">
              <a href="https://github.com/gcba">
                <i className="bx bxl-github"></i>Github
              </a>
            </li>
            <li className="list-inline-item redes-items">
              <a href="https://dribbble.com/ExperieniciadigitalBA">
                <i className="bx bxl-dribbble"></i>
                Dribbble
              </a>
            </li>
            <li className="list-inline-item redes-items">
              <a href="https://www.linkedin.com/company/secretar%C3%ADa-de-innovaci%C3%B3n-y-transformaci%C3%B3n-digital/mycompany/">
                <i className="bx bxl-linkedin-square"></i>
                Linkedin
              </a>
            </li>
          </ul>
        </section>
      </div>
      <section>
        <div className="footer-license-text bg-white py-4">
          <div className="container footer-text">
            Los contenidos de buenosaires.gob.ar están licenciados bajo Creative
            Commons Reconocimiento 2.5 Argentina License.
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterHome;
