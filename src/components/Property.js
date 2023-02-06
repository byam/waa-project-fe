function Property(props) {
  return (
    <div className="p-5 bg-gray-200 m-2 w-1/3 h-64 flex flex-col justify-between">
      <img src={props.image} className="w-full h-32 object-cover object-center" alt={props.title} />
      <h1 className="text-xl font-bold">{props.title}</h1>
      <p className="text-base">{props.description}</p>
      <p className="text-base font-bold">${props.price}</p>
    </div>
  );
}

export default Property;
