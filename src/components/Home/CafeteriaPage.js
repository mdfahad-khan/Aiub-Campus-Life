import React from "react";
import Cafeteria from "../../assets/Facilities-Image/Cafeteria/cafeteria.jpg";
import Burger from "../../assets/Facilities-Image/Cafeteria/burger.jpg";
import Pizza from "../../assets/Facilities-Image/Cafeteria/pizza.jpg";
import France from "../../assets/Facilities-Image/Cafeteria/france.jpg";
import Mango from "../../assets/Facilities-Image/Cafeteria/mango.jpg";
import Orance from "../../assets/Facilities-Image/Cafeteria/orange.jpg";
import Watermelon from "../../assets/Facilities-Image/Cafeteria/watermelon.jpg";
import Somucha from "../../assets/Facilities-Image/Cafeteria/somocha.jpg";
import Rool from "../../assets/Facilities-Image/Cafeteria/rool.jpg";
import Cake from "../../assets/Facilities-Image/Cafeteria/cake.jpg";

const FastMenuItems = [
  {
    name: "Burger",

    price: 250,
    image: Burger,
  },
  {
    name: "Pizza",

    price: 500,
    image: Pizza,
  },
  {
    name: "France Fry",

    price: 100,
    image: France,
  },
];

const DrinkMenuItems = [
  {
    name: "Mango Juice",

    price: 50,
    image: Mango,
  },
  {
    name: "Orance Juice",

    price: 40,
    image: Orance,
  },
  {
    name: "Watermelon Juice",

    price: 60,
    image: Watermelon,
  },
];

const SnacksMenuItems = [
  {
    name: "Chicken Somocha",

    price: 20,
    image: Somucha,
  },
  {
    name: "Chiken Rool",

    price: 40,
    image: Rool,
  },
  {
    name: "Cake",

    price: 60,
    image: Cake,
  },
];

// Sample data for cafeteria features
const cafeteriaFeatures = [
  {
    title: "Healthy Options",
    description:
      "Our menu includes a variety of healthy meals that cater to different dietary needs.",
  },
  {
    title: "Locally Sourced Ingredients",
    description:
      "We use fresh, locally sourced ingredients to ensure the highest quality.",
  },
  {
    title: "Customizable Meals",
    description:
      "Customize your meals to suit your taste and dietary preferences.",
  },
  {
    title: "Eco-Friendly Packaging",
    description:
      "We use eco-friendly packaging to reduce our environmental impact.",
  },
  {
    title: "Online Ordering",
    description:
      "Order your meals online for a convenient and hassle-free experience.",
  },
  {
    title: "Comfortable Seating",
    description:
      "Enjoy your meals in our comfortable and welcoming seating area.",
  },
];

const CafeteriaPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className=" mx-auto">
        <div className="relative mb-5">
          <img
            src={Cafeteria}
            alt="Cafeteria Banner"
            className="w-full h-96 rounded-lg shadow-lg object-cover"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-extrabold text-white bg-black bg-opacity-50 rounded-lg">
            Welcome to Our Cafeteria
          </h2>
        </div>
        <p className="text-center text-gray-600 mb-6 text-2xl">
          Enjoy a variety of delicious and healthy meals at our cafeteria.
        </p>

        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-4 text-gray-800 text-center">
            Our Menu
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-10 items-center align-middle justify-center">
            <div className="items-center justify-center">
              <h1 className="text-center text-xl bg-blue-500 py-2 text-white">
                Fast Food
              </h1>
              {FastMenuItems.map((menuItem, index) => (
                <div
                  key={index}
                  className=" items-center  justify-center flex flex-col  bg-white rounded-sm px-2 shadow-md overflow-hidden"
                >
                  <div className="relative mt-3">
                    <img
                      src={menuItem.image}
                      alt={menuItem.name}
                      className="w-40 h-40 rounded-full mt- object-cover ring-2 ring-blue-500"
                    />
                    <div className="absolute inset- -inset-1 ring-2 ring-blue-500 rounded-full"></div>
                  </div>

                  <div className="p-1 mt-2 text-center">
                    <h4 className="text-xl font-semibold text-gray-800 ">
                      {menuItem.name}
                    </h4>
                    <p className="text-lg font-semibold text-blue-600">
                      {menuItem.price} Tk
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="items-center justify-center">
              <h2 className="text-center bg-blue-500 py-2 text-xl text-white">
                Juice
              </h2>
              {DrinkMenuItems.map((menuItem, index) => (
                <div
                  key={index}
                  className=" items-center  justify-center flex flex-col  bg-white rounded-sm px-2 shadow-md overflow-hidden"
                >
                  <div className="relative mt-3">
                    <img
                      src={menuItem.image}
                      alt={menuItem.name}
                      className="w-40 h-40 rounded-full mt- object-cover ring-2 ring-blue-500"
                    />
                    <div className="absolute inset- -inset-1 ring-2 ring-blue-500 rounded-full"></div>
                  </div>

                  <div className="p-1 mt-2 text-center">
                    <h4 className="text-xl font-semibold text-gray-800 ">
                      {menuItem.name}
                    </h4>
                    <p className="text-lg font-semibold text-blue-600">
                      {menuItem.price} Tk
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="items-center justify-center">
              <h2 className="text-center bg-blue-500 py-2 text-xl text-white">
                Snacks
              </h2>
              {SnacksMenuItems.map((menuItem, index) => (
                <div
                  key={index}
                  className=" items-center  justify-center flex flex-col  bg-white rounded-sm px-2 shadow-md overflow-hidden"
                >
                  <div className="relative mt-3">
                    <img
                      src={menuItem.image}
                      alt={menuItem.name}
                      className="w-40 h-40 rounded-full mt- object-cover ring-2 ring-blue-500"
                    />
                    <div className="absolute inset- -inset-1 ring-2 ring-blue-500 rounded-full"></div>
                  </div>

                  <div className="p-1 mt-2 text-center">
                    <h4 className="text-xl font-semibold text-gray-800 ">
                      {menuItem.name}
                    </h4>
                    <p className="text-lg font-semibold text-blue-600">
                      {menuItem.price} Tk
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-8">
          <h3 className="text-4xl font-semibold mb-6 text-gray-800 text-center">
            Our Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cafeteriaFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h4 className="text-xl  font-semibold text-blue-600 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeteriaPage;
