import { ENDPOINT_ENUM } from "@/constants/endpoint";
import { ApiClient } from "@/lib/api-client";


class AccountService {
    static async getAccountDetails(): Promise<any> {
        try {   
            const response = await ApiClient.get(ENDPOINT_ENUM.LIST_ACCOUNTS);
            return response;
        } catch (error) {
            console.error("Error fetching account details:", error);
            throw error;
        }
    }

    static async updateAccountDetails(data: any): Promise<any> {
        try {
            const response = await ApiClient.put(ENDPOINT_ENUM.UPDATE_PROFILE, data);
            return response;
        } catch (error) {
            console.error("Error updating account details:", error);
            throw error;
        }
    }
}
export default AccountService;