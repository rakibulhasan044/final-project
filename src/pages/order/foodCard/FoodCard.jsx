import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {

  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()

  const handleAddToCart = (food) => {
    if(user && user.email) {
      console.log(food, user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post(`/carts`, cartItem)
      .then(res => {
        if(res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to cart`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      })
    }
    else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }
  };

  return (
    <div className=" bg-base-100 shadow-xl">
      <figure className=" relative">
        <img className="h-[270px] w-full" src={image} />
        <p className=" absolute top-3 px-3 py-2 right-3 bg-slate-900 text-yellow-600 rounded-2xl">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-center">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline btn-warning bg-slate-500 mt-2 border-b-4 border-0"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
