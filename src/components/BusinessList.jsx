import { Business } from "./Business";

export const BusinessList = (props) => {
  return (
    <div>
      {props.businesses.map((business, index) => (
        <Business
          key={index}
          imageSrc={business.imageSrc}
          name={business.name}
          address={business.address}
          city={business.city}
          state={business.state}
          zipCode={business.zipCode}
          category={business.category}
          rating={business.rating}
          reviewCount={business.reviewCount}
        />
      ))}
    </div>
  );
};
