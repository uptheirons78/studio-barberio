import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebar] = React.useState(false);

  const handleSidebar = () => {
    setSidebar(!isSidebarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        handleSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
