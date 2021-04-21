import axios from "utils/axios"
import camelize from "camelize"
import { User } from "types"

type SignInResponse = {
  user?: User
  error?: string
}

export const signIn = async (token: string): Promise<SignInResponse> => {
  const { data } = await axios
    .post<SignInResponse>("/myself", {
      token,
    })
    .catch((error) => {
      console.error(error)
      return {
        data: {
          user: undefined,
          error: error,
        },
      }
    })
  return camelize(data)
}
