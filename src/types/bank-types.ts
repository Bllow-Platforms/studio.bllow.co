interface IAddBankProps {
  bankName: string;
  accountName: string;
  accountNumber: string;
  bankCode: string;
}

export interface IResolveBank {
  bank_id: number;
  account_name: string;
  account_number: string;
}

interface IBankResponse {
  id: number;
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway: string;
  pay_with_bank: boolean;
  active: boolean;
  country: string;
  currency: string;
  type: string;
  is_deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export type { IAddBankProps, IBankResponse };
