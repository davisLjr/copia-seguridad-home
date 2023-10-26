import CardTemplate from "../../src/homeTemplate/CardTemplate/CardTemplate";


// Usar la función para generar el HTML
const pagSimple = [
  { 
    CardData: [
      { id: 1, 
        imgSrc: "/assets/template.jpg", 
        route: "../preview.html", 
        title: "Primer nivel", 
        description: "Opción 1", 
      }
    ]
  },
  { 
    CardData: [
      { id: 2, 
        imgSrc: "/assets/template.jpg", 
        route: "./templates/pagina_area/area_de_gobierno_1_nivel/op2.html", 
        title: "Primer nivel", 
        description: "Opción 2", 
      }
    ]
  },
  { 
    CardData: [
      { id: 3, 
        imgSrc: "/assets/template.jpg", 
        route: "./templates/pagina_area/area_de_gobierno_2_nivel/op1.html", 
        title: "Segundo nivel", 
        description: "Opción 1", 
      }
    ]
  },
  { 
    CardData: [
      { id: 4, 
        imgSrc: "/assets/template.jpg", 
        route: "./templates/pagina_area/area_de_gobierno_2_nivel/op1.html", 
        title: "Segundo nivel", 
        description: "Opción 2", 
      }
    ]
  },
  { 
    CardData: [
      { id: 5, 
        imgSrc: "/assets/template.jpg", 
        route: "./templates/pagina_area/area_de_gobierno_2_nivel/op1.html", 
        title: "Segundo nivel", 
        description: "Opción 3", 
      }
    ]
  },
];

const CardSimples = () => {
  return pagSimple.map((data) => {
    // Realizar el mapeo de los datos a tu componente CardTemplate
    return data.CardData.map((card) => {
      // Devolver un componente CardTemplate para cada conjunto de datos
      return (
        <CardTemplate
          key={card.id}
          title={card.title}
          description={card.description}
          route={card.route}
          imgSrc={card.imgSrc}
        />
      );
    });
  });
};

export { CardSimples };
