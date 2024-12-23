// src/components/SomeComponent.js
import React, { useEffect } from 'react';
import { connectWebSocket, sendMessage, disconnectWebSocket } from './services/WebSocket';

const SomeComponent = () => {
  useEffect(() => {
    // Establish WebSocket connection when the component mounts
    connectWebSocket();

    return () => {
      // Close WebSocket connection when the component unmounts
      disconnectWebSocket();
    };
  }, []);

  const handleSendMessage = () => {
    sendMessage({ text: 'Hello from client!' });
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default SomeComponent;
