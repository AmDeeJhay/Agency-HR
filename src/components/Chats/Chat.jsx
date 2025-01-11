import React, { useState } from "react";
import { FaPaperPlane, FaTelegramPlane, FaRobot, FaTimes } from "react-icons/fa";

const Chat = ({ botLink }) => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

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

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="chat-container fixed bottom-0 right-0 m-4">
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center z-1000 bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
        >
          <FaRobot className="mr-2"  />
          Message Bot
        </button>
      )}
      {isChatOpen && (
        <div className="chat-box bg-white shadow-lg rounded-lg overflow-hidden mt-2 p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <FaTimes className="cursor-pointer" onClick={toggleChat} />
          </div>
          <div className="chat-history mb-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === "user" ? "text-right" : "text-left"} mb-2`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
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
      )}
    </div>
  );
};

export default Chat;