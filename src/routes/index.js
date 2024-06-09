import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../components/Home/HomePage1";

import StudentActivities from "../components/Home/StudentActivities";
import Clubs from "../components/Home/Clubs";
import GymPage from "../components/Home/GymPage";
import Contact from "../components/Contact";
import Facilities from "../components/Home/Facilities";
import CafeteriaPage from "../components/Home/CafeteriaPage";
import ClubDetails from "../components/ClubDetails";
import clubs from "../data/clubs.json";
import book from "../assets/book.json";

import LibraryPage from "../components/Home/LibraryPage";
import Sports from "../components/Facilites/Sports";
import Diversity from "../components/Facilites/Diversity";
import SwimmingPool from "../components/Facilites/SwimmingPool";
import StudentLaunge from "../components/Facilites/StudentLaunge";
import BookDetails from "../components/bookDetails";
import Task from "../components/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "student-activities",
        element: <StudentActivities />,
      },
      {
        path: "clubs",
        element: <Clubs />,
      },
      {
        path: "gym",
        element: <GymPage />,
      },
      {
        path: "library",
        element: <LibraryPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "facilities",
        element: <Facilities />,
      },
      {
        path: "cafeteria",
        element: <CafeteriaPage />,
      },
      {
        path: "sports",
        element: <Sports />,
      },
      {
        path: "diversity",
        element: <Diversity />,
      },
      {
        path: "swimming-pool",
        element: <SwimmingPool />,
      },
      {
        path: "task",
        element: <Task />,
      },
      {
        path: "student-lounge",
        element: <StudentLaunge />,
      },
      {
        path: "club/:id",
        element: <ClubDetails clubs={clubs} />,
      },
      {
        path: "book/:id",
        element: <BookDetails books={book} />,
      },
    ],
  },
]);

export default router;
