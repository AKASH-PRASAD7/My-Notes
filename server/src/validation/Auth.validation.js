import joi from "joi";

export const ValidateSignup = (userData) => {
  const Schema = joi.object({
    name: joi.string().required().min(5),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });

  return Schema.validateAsync(userData);
};

export const ValidateSignin = (userData) => {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  return Schema.validateAsync(userData);
};
