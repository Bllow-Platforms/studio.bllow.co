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

interface IFileUploadResponse {
  url: string;
  fullpath: string;
  path: string;
}

interface IDashboardNavData {
  title: string;
  icon: string;
  path: string;
}

type TUser = 'creator' | 'fan';
export type { IBankResponse, TUser, IFileUploadResponse, IDashboardNavData };
