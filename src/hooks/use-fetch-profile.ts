import { useQuery } from "@tanstack/react-query"
import AccountService from "@/services/account-service"

const useFetchProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: () => AccountService.getAccountDetails(),
        refetchOnWindowFocus: false,
        retry: 0,
        refetchOnReconnect: false,
        refetchOnMount: false,
    })
}

export { 
    useFetchProfile
}