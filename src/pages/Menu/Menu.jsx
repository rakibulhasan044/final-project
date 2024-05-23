import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from "../../assets/menu/menu-logo.jpeg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="px-4">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      <SectionTitle
        subHeading={"Dont miss"}
        heading={"Todays offer"}
      ></SectionTitle>
      <MenuCategory items={offered} />
      <MenuCategory items={dessert} title="dessert" img={dessertImg} />
      <MenuCategory items={pizza} title="pizza" img={pizzaImg} />
      <MenuCategory items={salad} title="salad" img={saladImg} />
      <MenuCategory items={soup} title="soup" img={soupImg} />
    </div>
  );
};

export default Menu;
