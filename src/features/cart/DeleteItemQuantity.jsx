import { useUpdateCart } from "./useUpdateCart";
import ReactLoading from "react-loading";

function DeleteItem({ foodId }) {
  const { isPending, updateCart } = useUpdateCart();

  return (
    <button
      disabled={isPending}
      className="w-10"
      onClick={() => updateCart({ foodId, count: 0 })}
    >
      {isPending ? (
        <ReactLoading type="bubbles" color="#417F56" height={24} width={24} />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20.9999 6.72998C20.9799 6.72998 20.9499 6.72998 20.9199 6.72998C15.6299 6.19998 10.3499 5.99998 5.11992 6.52998L3.07992 6.72998C2.65992 6.76998 2.28992 6.46998 2.24992 6.04998C2.20992 5.62998 2.50992 5.26998 2.91992 5.22998L4.95992 5.02998C10.2799 4.48998 15.6699 4.69998 21.0699 5.22998C21.4799 5.26998 21.7799 5.63998 21.7399 6.04998C21.7099 6.43998 21.3799 6.72998 20.9999 6.72998Z"
            fill="#353535"
          />
          <path
            d="M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z"
            fill="#353535"
          />
          <path
            d="M15.2099 22.7501H8.7899C5.2999 22.7501 5.1599 20.8201 5.0499 19.2601L4.3999 9.19007C4.3699 8.78007 4.6899 8.42008 5.0999 8.39008C5.5199 8.37008 5.8699 8.68008 5.8999 9.09008L6.5499 19.1601C6.6599 20.6801 6.6999 21.2501 8.7899 21.2501H15.2099C17.3099 21.2501 17.3499 20.6801 17.4499 19.1601L18.0999 9.09008C18.1299 8.68008 18.4899 8.37008 18.8999 8.39008C19.3099 8.42008 19.6299 8.77007 19.5999 9.19007L18.9499 19.2601C18.8399 20.8201 18.6999 22.7501 15.2099 22.7501Z"
            fill="#353535"
          />
          <path
            d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"
            fill="#353535"
          />
          <path
            d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"
            fill="#353535"
          />
        </svg>
      )}
    </button>
  );
}

export default DeleteItem;
