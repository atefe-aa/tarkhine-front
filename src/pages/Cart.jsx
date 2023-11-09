import { useEffect } from "react";

function Cart() {
    useEffect(() => {
        document.title = ` ترخینه | سبد خرید`;
      }, []);
    return (
        <div>
            cart
        </div>
    )
}

export default Cart
