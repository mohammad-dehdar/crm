import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomerEditPage from "@/components/templates/CustomerEditPage";
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
  
  if (data) return <CustomerEditPage data={data} id={data._id} />;
}

export default Index;