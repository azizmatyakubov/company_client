import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ user: null });
    const [darkMode, setDarkMode] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, darkMode, setDarkMode }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;