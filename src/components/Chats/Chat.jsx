import React, { useState } from "react";
import { FaPaperPlane, FaTelegramPlane } from "react-icons/fa";

const Chat = ({ botLink }) => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setChatHistory([...chatHistory, newMessage]);
    setInput("");

    try {
      // Here you can add any local chat handling if needed
      const botMessage = { sender: "bot", text: "Please continue the chat on Telegram." };
      setChatHistory((prevHistory) => [...prevHistory, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = { sender: "bot", text: "Failed to send message. Please try again." };
      setChatHistory((prevHistory) => [...prevHistory, errorMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleOpenTelegram = () => {
    window.open(botLink, "_blank");
  };

  return (
    <div className="chat-container p-4">
      <h3 className="text-lg font-semibold mb-4">Chat with Agency HR</h3>
      <div className="chat-history mb-4">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input relative flex items-center">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Message Agency HR"
          className="flex-1 p-2 pl-10 pr-10 border border-gray-300 rounded-md"
        />
        <FaPaperPlane
          onClick={handleSendMessage}
          className="absolute right-3 bottom-3 text-gray-400 cursor-pointer"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={handleOpenTelegram}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaTelegramPlane className="mr-2" />
          Open Telegram
        </button>
      </div>
    </div>
  );
};

export default Chat;