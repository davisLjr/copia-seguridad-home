import Image from "next/image";
import Link from "next/link";

const HeaderHome: React.FC = () => {
  return (
    <>
      <header className="navbar navbar-light sticky-header">
        <div className="container">
          <Link href="/">
            <Image className="header-logo-obelisco" src="https://gcba.github.io/img/header/Obelisco-logo.svg" alt="Ciudad de Buenos Aires" width="128" height="24"/>
          </Link>
          <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills">
              <li className="nav-item">
              <Link href="https://gcba.github.io/estandares/" className="nav-link" target="_blank">
                  <span>Estandares</span>
                </Link>
              </li>
              <li className="nav-item" >
                <Link href="https://gcba.github.io/Obelisco" className="nav-link" target="_blank">
                  <span>Storybook</span>
                </Link>
              </li>
              <li className="nav-item">
                <a href="https://gcba.github.io/#seccion-nosotros" className="nav-link"><span>UI Kit</span></a>
              </li>
              <li className="nav-item">
                <Link href="/templates" className="nav-link">
                  <span>Templates</span>
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderHome;
