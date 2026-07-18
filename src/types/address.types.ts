export interface Address {
  street: string;
  id: string;

  label?: string;

  fullName: string;
  phone: string;

  addressLine: string;

  city: string;
  state?: string;
  country: string;

  isDefault: boolean;
}

export interface AddressPayload {
  label?: string;

  fullName: string;
  phone: string;

  addressLine: string;

  city: string;
  state?: string;
  country: string;

  isDefault?: boolean;
}