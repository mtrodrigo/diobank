import { api } from "../api"
import { UserDataProps } from "../pages/Home"


export const login = async (email: string, password: string): Promise<boolean> => {

    const data = await api as UserDataProps

    if (email !== data.email) {
        return false
    }
    if(password !== data.password) {
        return false
    }

    return true
}