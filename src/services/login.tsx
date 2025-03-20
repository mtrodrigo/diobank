import { api } from "../api"
import { UserDataProps } from "../pages/Home"


export const login = async (email: string): Promise<boolean> => {

    const data = await api as UserDataProps

    if (email !== data.email) {
        return false
    }

    return true
}