import { useState } from "react";

export type FormErrors = {
  siteMark?: string;
};

export type InitData = {
  siteMark?: string;
};

export type FormStateType = {
  siteMark: string;
  isValid: boolean;
  errors: FormErrors;
  isReady: boolean;
};
type FormStateKeyType = keyof FormStateType;

const initialFormState: FormStateType = {
  siteMark: "",
  isValid: false,
  errors: {},
  isReady: false,
};

const isValidCheck = (checkData: FormStateType) => {
  const errors: FormErrors = {};

  if (!checkData.siteMark) {
    errors.siteMark = "SiteMark needs value";
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
type HookType = (initData: InitData) => [FormStateType, SetFormStateAction];

export const useChangeSiteMarkFormData: HookType = (initData) => {
  const [formState, innerSetFormState] = useState({
    ...initialFormState,
    ...initData,
  });

  const setFormState = (data: Partial<FormStateType>) => {
    const checkData = { ...formState, ...data };
    const errors: FormErrors = isValidCheck(checkData);
    const isValid = Object.keys(errors).length === 0;
    const isReady = isReadyCheck(isValid, checkData);

    innerSetFormState({ ...formState, ...data, isValid, errors, isReady });
  };

  return [formState, setFormState];
};
