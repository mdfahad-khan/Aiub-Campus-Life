import React from "react";
import Gym from "../../assets/Facilities-Image/Gym/gym2.JPG";

const plans = [
  {
    title: "Basic",
    price: "500 TK.",
    description: "Perfect for those who want to try out our gym facilities.",
    features: [
      "Access to all gym equipment",
      "1 personal training session per week",
      "Access to group fitness classes",
      "Nutritional guidance",
    ],
    buttonStyle: "bg-gradient-to-r from-cyan-700 to-blue-500 text-white",
    divStyle:
      "bg-white p-2 h-96 text-center rounded-lg shadow-xl transition-transform transform hover:scale-105",
  },
  {
    title: "Professional",
    price: "800 TK.",
    description: "Ideal for serious fitness enthusiasts.",
    features: [
      "Access to all gym equipment",
      "2 personal training sessions per week",
      "Access to all group fitness classes",
      "Customized workout plans",
      "Monthly fitness assessments",
    ],
    buttonStyle: "bg-white text-gray-500",
    divStyle:
      "bg-gradient-to-r from-cyan-700 to-blue-500 p-2 h-[405px] text-white relative bottom-2 z-10 text-center rounded-lg shadow-xl transition-transform transform hover:scale-105",
  },
  {
    title: "Pro",
    price: "1200 TK.",
    description: "For serious athletes and competitors.",
    features: [
      "Access to all gym equipment",
      "Unlimited personal training sessions",
      "Advanced performance tracking",
      "Specialized nutrition plans",
      "Priority access to facilities",
    ],
    buttonStyle: "bg-gradient-to-r from-cyan-700 to-blue-500 text-white",
    divStyle:
      "bg-white p-2 h-96 text-center rounded-lg shadow-xl transition-transform transform hover:scale-105",
  },
];
const facilities = [
  {
    title: "State-of-the-art Equipment",
    description:
      "Our gym is equipped with the latest machines and free weights to help you achieve your fitness goals.",
  },
  {
    title: "Personal Training",
    description:
      "Our certified personal trainers are here to guide and motivate you every step of the way.",
  },
  {
    title: "Group Fitness Classes",
    description:
      "Join our dynamic group classes, including yoga, spinning, HIIT, and more.",
  },
  {
    title: "Swimming Pool",
    description:
      "Enjoy our indoor swimming pool for laps, relaxation, and water aerobics classes.",
  },
  {
    title: "Nutrition Counseling",
    description:
      "Get personalized nutrition advice to complement your fitness routine and achieve your health goals.",
  },
  {
    title: "Locker Rooms",
    description:
      "Our locker rooms are equipped with secure lockers, showers, and changing areas for your convenience.",
  },
];

const GymPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto">
        <div className="relative mb-6">
          <img
            src={Gym}
            alt="Gym Banner"
            className="w-full h-96 shadow-lg object-cover"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-extrabold text-white bg-black bg-opacity-50 rounded-lg">
            Welcome to Our Gym
          </h2>
        </div>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Achieve your fitness goals with our top-notch facilities and
          professional support.
        </p>
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-800 text-center">
            Membership Plans
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 md:px-48 gap-4 md:gap-0">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${plan.divStyle} ${
                  plan.buttonStyle === "bg-white text-black"
                    ? "relative bottom-4 z-10"
                    : ""
                }`}
              >
                <h4 className="text-3xl font-bold mb-3  text-center">
                  {plan.title}
                </h4>
                <h1 className="text-4xl font-extrabold font-mono  mb-2">
                  {plan.price}
                </h1>
                <p className=" mb-4">{plan.description}</p>
                <ul className="list-none text-center text-sm  mb-3 font-medium space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`border-b-2 ${
                        idx < plan.features.length - 1
                          ? "border-gray-400"
                          : "border-none"
                      }  mx-auto w-10/12`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={` px-20 py-1 rounded-sm transition-colors font-semibold ${plan.buttonStyle}`}
                >
                  LEARN MORE
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="px-16">
          <h3 className="text-4xl font-semibold mb-6 text-gray-800 text-center">
            Our Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105"
              >
                <h4 className="text-2xl font-semibold mb-6 text-blue-600">
                  {facility.title}
                </h4>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymPage;
