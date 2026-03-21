import { createContext, useContext, useState,  useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(()=>{
        const savedUser = localStorage.getItem('ecommerce_user');
        return savedUser ? JSON.parse(savedUser) : null;
    })

    useEffect(()=>{
        if(user){
            localStorage.setItem('ecommerce_user', JSON.stringify(user));
        }else{
            localStorage.removeItem('ecommerce_user')
        }
    }, [user])

    const login = (email, password) =>{
        setUser({
            id: '1',
            name: 'Jane Doe',
            email: email,
            role: 'user',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
            joinDate: new Date().toISOString(),
        });
    }
    const loginAsAdmin = () => {
        setUser({
        id: '0',
        name: 'Admin User',
        email: 'admin@luxecart.com',
        role: 'admin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
        joinDate: new Date().toISOString(),
        });
    };

    const logout = () =>{
        setUser(null);
    }
    return <AuthContext.Provider value={{user, login, loginAsAdmin, logout}}>
        {children}
    </AuthContext.Provider>
}