export interface UserInfo {
  first_name: string;
  last_name: string;
  gender: boolean;
  email: string;
  birthday?: number;
  phoneNumber?: string;
  country?: Country;
}

export interface Country {
  countryName: string;
  countryTag: string;
  phoneTag: string;
}

export enum Role {
  ADMINISTRATOR = "ADMINISTRATOR",
  CUSTOMER = "CUSTOMER",
  OPERATOR = "OPERATOR",
  GUEST = "GUEST",
}
