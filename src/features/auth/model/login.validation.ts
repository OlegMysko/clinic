export const loginValidation = {
  email: {
    required: "email is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "email not correct!",
    },
  },

  password: {
    required: "password is required",
    pattern: {
      value: /^[a-zA-Z0-9]{6,}$/,
      message: "the password is wrong",
    },
  },
};
