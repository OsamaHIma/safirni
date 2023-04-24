import Card from "../Card";
import { toursCards } from "@/constants";

const Tours = () => {
  return (
    <div className="container" id="tours">
      <div className="row g-5 mb-3">
        {toursCards.map((tour, index) => {
          const { title, text, img, price, link, bgColor } = tour;
          return (
            <Card
              key={index}
              title={title}
              text={text}
              img={img}
              price={price}
              link={link}
              bgColor={bgColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
