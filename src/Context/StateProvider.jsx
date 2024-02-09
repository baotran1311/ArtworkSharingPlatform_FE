import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();


export const StateProvider = ({ children }) => {
  
    const [theme, setTheme] = useState(localStorage.getItem("theme") != null ? localStorage.getItem("theme"): false);
    const [idRoomChat, setIdRoomChat] = useState(null);
    const [showSearchFriends, setShowSearchFriends] = useState(false);
    const [showChatList,setShowChatList] = useState(true);
    const [active, setActive] = useState(0);
    

  
    const state = {
      theme,
      setTheme,
      idRoomChat,
      setIdRoomChat,
      showSearchFriends,
      setShowSearchFriends,
      showChatList,
      setShowChatList,
      active, 
      setActive,
    };
  
    return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
  };
  
  export const useStateValue = () => useContext(StateContext);