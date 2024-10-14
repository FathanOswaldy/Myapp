"use client";
import { useState, useEffect } from "react";
import Card from "../../../../components/card";

export default function AdminMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/message"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        setMessages(data.data); // Adjust based on the API response structure
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleAction = (id) => {
    // Define your action here (e.g., delete or edit)
    console.log(`Action for message ID: ${id}`);
  };

  return (
    <>
      <Card title="List Of Message" className="mt-20">
        <table className="w-full border-collapse mt-5 transparent-table">
          <thead>
            <tr className="background-color: #f2f2f2">
              <th className="border border-gray-300 p-2  transparent-table">No</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Subject</th>
              <th className="border border-gray-300 p-2">Message</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data for illustration */}
            {messages.map((message, index) => (
              <tr key={message.id}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{message.Name}</td>
                <td className="border border-gray-300 p-2">{message.Email}</td>
                <td className="border border-gray-300 p-2">
                  {message.Subject}
                </td>
                <td className="border border-gray-300 p-2">
                  {message.Message}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    onClick={() => handleReply(message.id)}
                    className="bg-gray-300 text-white px-1 py-1 rounded-1"
                  >
                    Balas
                  </button>
                  <button
                    onClick={() => handleArchive(message.id)}
                    className="bg-blue-300 text-white px-1 py-1 rounded-1"
                  >
                    Arsipkan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}