import { createContext, useContext, useState } from 'react';

// 1. ADIM: Context tipini belirle
interface AuthContextType {
    isLoggedIn: boolean;
    username: string;
    login: (name: string) => void;
    logout: () => void;
}

// 2. ADIM: Context'i oluştur (başlangıçta undefined)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. ADIM: Provider component'i oluştur (verileri sağlayan)
interface AuthProviderProps {
    children: any;  // İçerisine alacağı componentler
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    // State'ler: Context'te tutulacak veriler
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    // Login fonksiyonu
    const login = (name: string) => {
        setIsLoggedIn(true);
        setUsername(name);
    };

    // Logout fonksiyonu
    const logout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    // Context'e verilecek değerler
    const value = {
        isLoggedIn,
        username,
        login,
        logout
    };

    // Provider ile sarmalayıp değerleri paylaş
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// 4. ADIM: Custom Hook - Context'i kullanmak için
export const useAuth = () => {
    const context = useContext(AuthContext);

    // Eğer Provider dışında kullanılırsa hata ver
    if (context === undefined) {
        throw new Error('useAuth, AuthProvider içinde kullanılmalı!');
    }

    return context;
};
