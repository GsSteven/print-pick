import React from "react";

export default function Browse(props) {
  const displayBrands = () => {
    const brands = props.printers.map((brand, index) => {
      //for link ref
      const lowerCaseName = brand.name.toLowerCase();
      //for random image from brand
      const randomIndex = Math.floor(Math.random() * brand.printers.length);
      //get average price
      const randomImage = brand.printers[randomIndex].img;
      const priceArray = brand.printers.map((printer) => printer.price);
      const lowestPrice = Math.min(...priceArray);
      const highestPrice = Math.max(...priceArray);
      const averagePrice = (
        priceArray.reduce((a, b) => a + b) / brand.printers.length
      ).toFixed(0);

      //return every other brand as header first then image
      if (!(index % 2)) {
        return (
          <div
            className="brand"
            onClick={() => (window.location.href = `./browse/${lowerCaseName}`)}
            key={brand.name + index}
          >
            <div>
              <h1>{brand.name}</h1>
              <p>
                Avg Price: <span className="price">${averagePrice}</span>
              </p>
              <div className="lowestHighest">
                <p>
                  Lowest: <span className="price">${lowestPrice}</span>
                </p>
                <p>
                  Highest: <span className="price">${highestPrice}</span>
                </p>
              </div>
            </div>
            <img src={randomImage} alt={brand.name} />
          </div>
        );
      } else {
        return (
          <div
            className="brand"
            onClick={() => (window.location.href = `./browse/${lowerCaseName}`)}
            key={brand.name + index}
          >
            <img src={randomImage} alt={brand.name} />
            <div>
              <h1>{brand.name}</h1>
              <p>
                Avg Price: <span className="price">${averagePrice}</span>
              </p>
              <div className="lowestHighest">
                <p>
                  Lowest: <span className="price">${lowestPrice}</span>
                </p>
                <p>
                  Highest: <span className="price">${highestPrice}</span>
                </p>
              </div>
            </div>
          </div>
        );
      }
    });
    return brands;
  };

  return (
    <div className="browseWrapper">
      <div className="browseList">{displayBrands()}</div>
    </div>
  );
}
