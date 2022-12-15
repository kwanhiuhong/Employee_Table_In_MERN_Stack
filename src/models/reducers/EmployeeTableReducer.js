import actions from "../actions/EmployeeTableAction";

const EmployeeTableReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_OPEN_POPUP_FORM:
      return { ...state, shouldOpenPopupForm: payload };

    case actions.SET_EMPLOYEES_DATA:
      return { ...state, employeesData: payload };

    default:
      return state;
  }
};

export default EmployeeTableReducer;
