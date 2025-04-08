import { ENDPOINT_ENUM } from '@/constants/endpoint';
import { ApiClient } from '@/lib/api-client';
import { IApiResponse } from '@/types/api-types';
import { IAddBankProps, IBankResponse, IResolveBank } from '@/types/bank-types';

export class BankServices {
  static async fetchBankList(): Promise<IBankResponse[]> {
    try {
      const response = await ApiClient.get<IBankResponse[]>(
        ENDPOINT_ENUM.LIST_BANK
      );
      return response;
    } catch (error: any) {
      throw new Error('Failed to fetch bank list: ' + error?.message);
    }
  }

  static async addBank(data: IAddBankProps) {
    return ApiClient.post(ENDPOINT_ENUM.ADD_BANK, data);
  }

  async resolveBank(accountNumber: string, bankCode: string) {
    return ApiClient.get<IResolveBank>(
      `${ENDPOINT_ENUM.RESOLVE_BANK}?account_number=${accountNumber}&bank_code=${bankCode}`
    );
  }
}
