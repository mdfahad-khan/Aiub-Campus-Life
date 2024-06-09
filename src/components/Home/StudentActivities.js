import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

import Modal from "react-modal";

const initialActivities = [
  {
    id: 1,
    date: "2024-09-15",
    time: "10:00 AM - 4:00 PM",
    location: "D building",
    description: "Career Fair",
    organizer: "Career Services Office",
  },
  {
    id: 2,
    date: "2024-10-05",
    time: "7:00 PM - 10:00 PM",
    location: "Muktomoncho",
    description: "Campus Concert",
    organizer: "Student Union",
  },
  {
    id: 3,
    date: "2024-11-12",
    time: "9:00 AM - 12:00 PM",
    location: "City Park",
    description: "Environmental Clean-Up Day",
    organizer: "Environmental Club",
  },
  {
    id: 4,
    date: "2024-09-20",
    time: "2:00 PM - 3:30 PM",
    location: "Annex 3",
    description: "Study Abroad Information Session",
    organizer: "International Studies Office",
  },
  {
    id: 5,
    date: "2024-10-10",
    time: "1:00 PM - 3:00 PM",
    location: "Health and Wellness Center, Room 101",
    description: "Mental Health Awareness Workshop",
    organizer: "Health and Wellness Center",
  },
  {
    id: 6,
    date: "2024-11-18 to 2024-11-20",
    time: "9:00 AM - 5:00 PM",
    location: "Computer Science Building, Lab 3",
    description: "Coding Bootcamp",
    organizer: "Computer Science Department",
  },
  {
    id: 7,
    date: "2024-12-03",
    time: "11:00 AM - 2:00 PM",
    location: "American Interantional University-Bangladesh",
    description: "International Food Festival",
    organizer: "International Student Association",
  },
  {
    id: 8,
    date: "2024-10-25",
    time: "10:00 AM - 3:00 PM",
    location: "Student Center, Conference Room B",
    description: "Leadership Training Seminar",
    organizer: "Leadership Development Program",
  },
];

Modal.setAppElement("#root");

const StudentActivities = () => {
  const [activities, setActivities] = useState(initialActivities);

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <div className="max-w-4xl bg-gray-200 p-4 w-full relative">
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Student Activities
        </h2>

        <div className="space-y-6 mb-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="p-6 bg-white border rounded-lg shadow-lg flex justify-between"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">
                  {activity.description}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaClock className="mr-2" />
                  <span>{activity.time}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaUsers className="mr-2" />
                  <span>{activity.organizer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentActivities;
