import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types"


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const a = 9

    const authInfo = {
        user,
        a

    }
    return (
        <div>

            <AuthContext.Provider value={authInfo}>

                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

AuthProvider.propTypes = {

    children: PropTypes.node
}

export default AuthProvider;