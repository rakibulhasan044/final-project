import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../shared/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <section>
      <SectionTitle
        heading={"Popular Items:"}
        subHeading={"From our menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex items-center justify-center py-8">
      <button className="btn btn-outline btn-warning">View full menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
