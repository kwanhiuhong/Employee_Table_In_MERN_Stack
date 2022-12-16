const EmployeeTableModel = {
  shouldOpenPopupForm: false,
  popupFormHeader: {
    title: "",
    description: "",
  },
  employeesData: {
    title: "",
    columns: [],
    rows: [],
  },
  formHeader: [
    { id: "firstName", label: "First Name" },
    {
      id: "lastName",
      label: "Last Name",
    },
    {
      id: "salary",
      label: "Salary",
    },
    {
      id: "button",
    },
  ],
};

export default EmployeeTableModel;
