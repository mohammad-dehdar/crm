import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomerDetailsPage from "@/components/templates/CustomerDetailsPage";
import isReadyFunction from "@/utils/isReady";

function Index() {
    const [data, setData] = useState(null);

    const router = useRouter();
    const {
        query: { customerId },
        isReady,
    } = router;

    useEffect(() => {
        isReadyFunction(isReady, customerId, setData)
    }, [isReady]);

    if (data) return <CustomerDetailsPage data={data} />;
}

export default Index;