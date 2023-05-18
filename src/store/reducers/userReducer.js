const initState = {
    users: [
        { id: '1', fullname: 'User Fullname', username: 'username', password: 'passwrod' },
        { id: '2', fullname: 'User Fullname2', username: 'username2', password: 'passwrod2' }
    ]
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_USER': 
        console.log("created user", action.user)
    }
    return state
}

export default userReducer