import { useState } from "react";

export type FormErrors = {
  title?: string;
  url?: string;
  description?: string;
};

export type FormStateType = {
  title: string;
  url: string;
  description: string;
  isValid: boolean;
  errors: FormErrors;
  isReady: boolean;
};
type FormStateKeyType = keyof FormStateType;

const initialFormState: FormStateType = {
  title: "",
  url: "",
  description: "",
  isValid: false,
  errors: {},
  isReady: false,
};

const isValidCheck = (checkData: FormStateType) => {
  const errors: FormErrors = {};

  if (!checkData.title) {
    errors.title = "Title needs value";
  }

  if (!checkData.url) {
    errors.url = "Url needs value";
  }

  if (!checkData.description) {
    errors.description = "Description needs value";
  }

  return errors;
};

const isReadyCheck = (isValid: boolean, checkData: FormStateType) => {
  if (!isValid) {
    return false;
  }

  let isReady = true;
  Object.keys(checkData).forEach((formKey: string) => {
    if (checkData[formKey as keyof FormStateType] === "") {
      isReady = false;
    }
  });

  return isReady;
};

export type SetFormStateAction = (data: Partial<FormStateType>) => void;
type HookType = () => [FormStateType, SetFormStateAction];

export const useAddArticleFormData: HookType = () => {
  const [formState, innerSetFormState] = useState(initialFormState);

  const setFormState = (data: Partial<FormStateType>) => {
    const checkData = { ...formState, ...data };
    const errors: FormErrors = isValidCheck(checkData);
    const isValid = Object.keys(errors).length === 0;
    const isReady = isReadyCheck(isValid, checkData);

    innerSetFormState({ ...formState, ...data, isValid, errors, isReady });
  };

  return [formState, setFormState];
};
