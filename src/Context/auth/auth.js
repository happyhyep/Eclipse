import { createContext, useContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    user: {
        id: null,
        email: null,
        name: null,
        profileImage: null,
        nickname: null,
        student_id: null,
        department: null,
        department_score: null,
        all_score: [],
        etc: null,
    },
    setIsLoggedIn: () => {},
    setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);
