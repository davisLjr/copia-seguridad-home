import CardTemplate from "../../src/homeTemplate/CardTemplate/CardTemplate";


// Usar la función para generar el HTML
const pagLibro = [
  {
    CardData: [
      {
        id: 1,
        imgSrc: "/assets/template.jpg",
        route: "../preview.html",
        title: "Primer nivel",
        description: "Opción 1",
      },
    ],
  },
];

const CardBooks = () => {
  return pagLibro.map((data) => {
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

export { CardBooks };
