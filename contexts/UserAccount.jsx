import { createContext, useState } from "react";

export const UserAccount = createContext(null);

export const UserAccountProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });

  return (
    <UserAccount.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserAccount.Provider>
  );
};
