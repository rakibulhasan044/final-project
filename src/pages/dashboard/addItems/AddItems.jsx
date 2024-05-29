import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imageHostKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostAPI = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data)
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(imageHostAPI, imageFile, {
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    })
    console.log(res.data);
    if(res.data.success) {
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe : data.recipe,
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post('/menu', menuItem);
        console.log(menuRes.data);
        if(menuRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.name} added to the menu`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
     

};

  return (
    <div>
      <SectionTitle heading={"add an item"} subHeading={"Whats New?"} />
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            {...register("name")}
            required
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <div className="flex gap-6">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
            defaultValue='default'
              {...register("category")}
              required
              className="select select-bordered w-full"
            >
              <option disabled value='default'>
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="drinks">Drink</option>
              <option value="dessert">Dessert</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              {...register("price")}
              type="number"
              step="0.01"
              required
              placeholder="price"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details</span>
          </div>
          <textarea
            {...register("recipe")}
            required
            className="textarea textarea-info textarea-bordered h-32"
            placeholder="recipe details"
          ></textarea>
        </label>
        <input
          {...register("image")}
          type="file"
          required
          className="file-input w-full max-w-xs"
        />
        <br />
        <button className="btn ">
          Add Item <FaUtensils className="ml-3" />
        </button>
      </form>
    </div>
  );
};

export default AddItems;
