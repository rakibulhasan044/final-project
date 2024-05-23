
import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../shared/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter((item) => item.category === "popular");
  console.log(menu);
  return (
    <section>
      <SectionTitle
        heading={"Popular Items:"}
        subHeading={"From our menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popular.map((item) => (
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
