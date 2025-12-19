import { SystemService } from "@/services/systemService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

class SystemHook {
    static useUpdateProductRenewTime(time: number) {
        const queryClient = useQueryClient();

        return useMutation({
            mutationFn: () => SystemService.updateProductRenewTime(time),

            onSuccess: () => {
            },
        });
    }
}
export default SystemHook;
