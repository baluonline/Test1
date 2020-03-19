export  const UPDATE_USER='user:updateUser'
export default function updateUser (newUser) {
    return{
        type:UPDATE_USER,
        payload:{
            user:newUser
        }
    }
}

