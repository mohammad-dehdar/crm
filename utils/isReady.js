export default function isReadyFunction(isReady ,customerId, setData) {
        if (isReady) {
            fetch(`/api/customer/${customerId}`)
                .then((res) => res.json())
                .then((data) => setData(data.data));
        } 
}