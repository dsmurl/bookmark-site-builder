export const makeSuccessResponse = (data: any, messages: string[]) => ({
  status: "OK",
  messages: messages ? messages : [],
  data: data ? data : {},
});

export const makeFailResponse = (messages: string[]) => ({
  status: "FAIL",
  messages: messages ? messages : [],
});
