export function recieveUser(user){
  return {
    type: 'RECIEVE_USER',
    data: user,
  };
};

export function logoutUser(){
  return {
    type: 'LOGOUT_USER',
  }
};
