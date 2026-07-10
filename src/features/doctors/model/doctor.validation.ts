export const doctorValidation = {
  firstName: {
    required: "First name is required",
    pattern: {
      value: /^[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:['’-][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$/,
      message: "Only letters are allowed",
    },
  },

  lastName: {
    required: "Last name is required",
    pattern: {
      value: /^[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:['’-][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$/,
      message: "Only letters are allowed",
    },
  },

  specialty: {
    required: "Please select a specialty",
  },

  experience: {
    required: "Experience is required",
    min: {
      value: 0,
      message: "Experience cannot be negative",
    },
    max: {
      value: 60,
      message: "Invalid experience",
    },
    valueAsNumber: true,
  },

  employmentType: {
    required: "Select employment type",
  },

  workingDays: {
    required: "Select at least one working day",
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Invalid email",
    },
  },

  phone: {
    required: "Phone is required",
    pattern: {
      value: /^\+?[0-9\s()-]{10,20}$/,
      message: "Invalid phone number",
    },
  },
};