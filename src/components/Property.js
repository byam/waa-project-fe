function Property(props) {
  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <img
        src={props.image}
        alt={props.title}
        className="h-full w-full object-cover object-center group-hover:opacity-75"
      />

      <h3 className="mt-4 text-sm text-gray-700">{props.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{props.price}</p>
    </div>
  );
}

export default Property;
