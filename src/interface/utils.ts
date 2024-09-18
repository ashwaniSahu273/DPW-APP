export const getFormBody = (form: any) =>
  Object.entries(form)
    .filter(([k]) => typeof form[k] !== "undefined")
    .map(
      ([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v as any)}`
    ).join("&");
