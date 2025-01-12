import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaPaperclip, FaTelegramPlane } from 'react-icons/fa';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [headerText, setHeaderText] = useState('');
  const fullHeaderText = 'What can I help you with?';
  const fileInputRef = useRef(null);
  const botLink = "https://t.me/hr_agentic_bot";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setHeaderText((prev) => {
        if (index < fullHeaderText.length) {
          return prev + fullHeaderText[index];
        }
        clearInterval(interval);
        return prev;
      });
      index++;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleOpenTelegram = () => {
    window.open(botLink, "_blank");
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a response from the AI
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Click the button below to chat with our bot on Telegram.', sender: 'ai' },
        ]);
      }, 1000);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages([...messages, { text: `Uploaded file: ${file.name}`, sender: 'user' }]);
    }
  };

  const handlePaperclipClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">{headerText}</h2>
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-md ${
                message.sender === 'user' ? 'bg-black font-poppins font-medium text-sm text-white self-end' : 'bg-gray-300 text-black self-start'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="relative flex items-center">
          <FaPaperclip
            onClick={handlePaperclipClick}
            className="absolute left-3 bottom-3 text-black cursor-pointer"
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
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
            className="absolute right-3 bottom-3 text-black cursor-pointer"
          />
        </div>

        <div className="chat-container p-4">
          <button
            onClick={handleOpenTelegram}
            className="flex items-center justify-center bg-black border border-black hover:bg-white shadow-lg hover:text-black text-white font-bold font-poppins text-sm py-2 px-4 rounded-full"
          >
            <FaTelegramPlane className="mr-2" />
            Open Telegram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;