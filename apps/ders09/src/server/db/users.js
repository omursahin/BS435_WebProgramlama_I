
/*
    Hafızada verileri tutarak simüle ediyoruz.
    Burada şifreyi plain text olarak tutuyor olsak da asla ama asla
    plain text olarak tutulmamalıdır. BCrypt gibi algoritmalarla
    şifrelemek gerekmektedir.
*/

const users = new Map();


function getUser(id){

    return users.get(id);
}

function verifyUser(id, password){

    const user = getUser(id);

    if(!user){
        return false;
    }

    return user.password === password;
}

function createUser(id, password){

    if(getUser(id)){
        return false;
    }

    const user = {
        id: id,
        password: password,
        victories: 0,
        defeats: 0
    };

    users.set(id, user);
    return true;
}

function resetAllUsers(){
    users.clear();
}

function reportEndOfMatch(userId, isVictory){

    const user = getUser(userId);
    if(! user){
        throw "Invalid userId: " + userId;
    }

    if(isVictory) {
        user.victories++;
    } else {
        user.defeats++;
    }
}


module.exports = {getUser, verifyUser, createUser, resetAllUsers, reportEndOfMatch};
