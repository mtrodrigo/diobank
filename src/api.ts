const account = {
    email: 'admin@diobank.com',
    password: '123456',
    name: 'Admin',
    balance: 12600,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account)
    }, 4000)
})