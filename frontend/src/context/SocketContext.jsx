import React, { createContext, useContext, useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Placeholder for actual socket connection
    // const newSocket = io('http://localhost:5000');
    // setSocket(newSocket);
    
    // newSocket.on('connect', () => setIsConnected(true));
    // newSocket.on('disconnect', () => setIsConnected(false));
    
    // Mocking real-time connection for now
    setIsConnected(true);

    return () => {
      // newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
