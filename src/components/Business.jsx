export const Business = (props) => {
  return (
    <div>
      <img src={props.imageSrc} alt="" />
      <h2>Business Name: {props.name}</h2>
      <p>Address: {props.address}</p>
      <p>City: {props.city}</p>
      <p>State: {props.state}</p>
      <p>Zip Code: {props.zipCode}</p>
      <p>Category: {props.category}</p>
      <p>Rating: {props.rating}</p>
      <p>Review Count: {props.reviewCount}</p>
    </div>
  );
};
