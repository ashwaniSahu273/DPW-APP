export enum ContextColor {
  primary = "primary",
  secondary = "secondary",
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
  black = "black",
  white = "white",
}

export enum ContextBorderRadius {
  none = "none",
  sm = "sm",
  md = "md",
  lg = "lg",
  full = "full",
}

export type ContextBorderRadiusString = "none" | "sm" | "md" | "lg" | "full";

export const contextBdRadius = {
  [ContextBorderRadius.none]: "rounded-none",
  [ContextBorderRadius.sm]: "rounded-sm",
  [ContextBorderRadius.md]: "rounded-md",
  [ContextBorderRadius.lg]: "rounded-lg",
  [ContextBorderRadius.full]: "rounded-full",
};

export type ContextColorString =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "black"
  | "white";

export const contextBgColors = {
  [ContextColor.primary]: "bg-primary",
  [ContextColor.secondary]: "bg-secondary",
  [ContextColor.info]: "bg-info",
  [ContextColor.success]: "bg-success",
  [ContextColor.warning]: "bg-warning",
  [ContextColor.error]: "bg-error",
  [ContextColor.white]: "bg-white",
  [ContextColor.black]: "bg-black",
};

export const contextTextColors = {
  [ContextColor.primary]: "text-primary",
  [ContextColor.secondary]: "text-secondary",
  [ContextColor.info]: "text-info",
  [ContextColor.success]: "text-success",
  [ContextColor.warning]: "text-warning",
  [ContextColor.error]: "text-error",
  [ContextColor.white]: "text-white",
  [ContextColor.black]: "text-black",
};
