import { useLocation } from "react-router-dom";

function useCurrentPath() {
    const location = useLocation();
    const currentPath = location.pathname;
    return currentPath;
}

export default useCurrentPath
