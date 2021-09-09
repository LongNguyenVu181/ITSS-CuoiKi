import { useState } from 'react';

const useStorage = ({ init }) => {
    const [data, setData] = useState(init);
    const [arr, setArr] = useState(init);
    const handleRemove = (name) => {
        setArr(arr.filter(e => e !== name));
    }
    return { data, arr, handleRemove,};
};

export default useStorage;
