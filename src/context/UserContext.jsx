import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userstatus");
    return storedUser ? JSON.parse(storedUser) : false;
  });

  useEffect(() => {
    localStorage.setItem("userstatus", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
