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
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]\\/]).{8,}$/,
      message: "the password is wrong",
    },
  },
  name: {
    required: "First name is required",
    pattern: {
      value: /^[A-Za-zА-Яа-яІіЇїЄєҐґ]+(?:['’-][A-Za-zА-Яа-яІіЇїЄєҐґ]+)*$/,
      message:
        "Name can contain only letters, hyphens, and apostrophes",
    },
 
  
    
  
  }
}