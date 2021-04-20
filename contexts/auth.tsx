import { User as FirebaseUser } from '@firebase/auth-types'
import { FC, createContext, useEffect, useState } from 'react'
import { auth } from 'services/firebase'
import { signIn } from 'utils/api'
import { User } from "types"

type AuthContextProps = {
  currentUser: User | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(
    undefined
  )

  useEffect(() => {
    auth.onAuthStateChanged(async(firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken()
        const { user } = await signIn(token)
        console.log(user)
        setCurrentUser(user)
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
