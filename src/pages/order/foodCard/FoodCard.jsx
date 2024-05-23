const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
  return (
    <div className=" bg-base-100 shadow-xl">
      <figure className=" relative">
        <img className="h-[270px] w-full"
          src={image}
        />
        <p className=" absolute top-3 px-3 py-2 right-3 bg-slate-900 text-yellow-600 rounded-2xl">${price}</p>
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-center">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-center">
        <button className="btn btn-outline btn-warning bg-slate-500 mt-2 border-b-4 border-0">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
