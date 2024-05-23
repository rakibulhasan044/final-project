import { Link } from "react-router-dom";
import MenuItems from "../../shared/MenuItems";
import Cover from "../../shared/cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to={`/order/${title}`} className="btn btn-outline btn-warning mt-2 border-b-4 border-0">
        Order Now
      </Link>
    </div>
  );
};

export default MenuCategory;
