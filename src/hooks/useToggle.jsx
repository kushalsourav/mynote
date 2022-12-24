import { useCallback, useState } from "react"

const useToggle = () => {
    const [state, setState] = useState(false);

    let toggle = useCallback(() => setState(state => !state), []);

    return [state, toggle];
};

export default useToggle;