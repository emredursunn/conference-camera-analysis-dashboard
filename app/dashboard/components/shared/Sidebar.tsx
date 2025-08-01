"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const conferences = [
  {
    id: 1,
    name: "Tech Conference 2025",
    summary: {
      "Key Talking Points": [
        "The future of AI in enterprise applications.",
        "Scaling microservices for high-demand systems.",
        "Cybersecurity trends and proactive defense strategies.",
      ],
      "Decisions & Action Items": [
        "Invest in a dedicated AI research team.",
        "Adopt a new container orchestration platform.",
        "Schedule mandatory security training for all developers.",
      ],
    },
  },
  {
    id: 2,
    name: "Marketing Summit 2025",
    summary: {
      "Key Talking Points": [
        "The impact of social media on brand perception.",
        "Data-driven approaches to customer segmentation.",
        "The rise of influencer marketing and its ROI.",
      ],
      "Decisions & Action Items": [
        "Launch a new social media campaign on TikTok.",
        "Implement a customer data platform (CDP).",
        "Allocate 15% of the marketing budget to influencers.",
      ],
    },
  },
  {
    id: 3,
    name: "Design Week 2025",
    summary: {
      "Key Talking Points": [
        "The role of ethics in modern product design.",
        "The latest trends in UI/UX for mobile apps.",
        "The use of design systems to maintain brand consistency.",
      ],
      "Decisions & Action Items": [
        "Establish an ethics committee for product design.",
        "Redesign the mobile app with a new UI/UX.",
        "Develop a comprehensive design system for the company.",
      ],
    },
  },
];

export default function Sidebar() {
  const [selectedConference, setSelectedConference] = useState(conferences[0]);
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="w-96 bg-gray-50 shadow-md flex flex-col p-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Conferences</h2>
        <ul className="mt-4 space-y-2">
          {conferences.map((conference) => (
            <li key={conference.id}>
              <button
                onClick={() => setSelectedConference(conference)}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                  selectedConference.id === conference.id
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}>
                {conference.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">
            {selectedConference.name} Summary
          </h3>
          <div className="mt-4 space-y-6">
            {Object.entries(selectedConference.summary).map(([section, points]) => (
              <div key={section}>
                <h4 className="font-semibold text-gray-600">{section}</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-500 list-disc list-inside">
                  {points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Presenter</p>
            <p className="text-xs text-gray-500">presenter@example.com</p>
          </div>
          <button
            onClick={handleLogout}
            className="ml-auto px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
