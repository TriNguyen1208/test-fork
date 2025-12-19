import { SystemService } from "@/services/SystemService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { STALE_10_MIN } from "@/config/query.config";
class SystemHook {
    static useGetProductRenewTime() {
        return useQuery({
            queryKey: ["system_config"],

            queryFn: () => SystemService.getProductRenewTime(),

            staleTime: STALE_10_MIN,

            select: (data) => {
                return data.data.result;
            },
        });
    }
    static useUpdateProductRenewTime() {
        const queryClient = useQueryClient();

        return useMutation({
            mutationFn: (time: number) => SystemService.updateProductRenewTime(time),

            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["system_config"],
                });
            },
        });
    }
}
export default SystemHook;
