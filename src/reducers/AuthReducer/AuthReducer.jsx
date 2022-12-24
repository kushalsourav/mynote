const AuthReducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
          return {...state, [action.name] : action.input};
      case "CLEAR_INPUTS":
          return {...state, email:'', password:'', firstName:'',lastName:''};
      case "LOGIN":
          return {...state, login: action.login};
      case "USER_DATA":
          return {...state, userData: action.userData};
      default:
          return state;
    };
};

export default AuthReducer;