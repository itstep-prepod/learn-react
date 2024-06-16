import { useEffect, useRef } from "react";


// 1. Переменные, обунялются - да, ререндер - нет
// 2. Стейт, обнуляется - нет, ререндер - да
// 3. Реф, обнуляется - нет, ререндер - нет

export const useFirstRender = () => {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender) {
         isFirstRender.current = false;
        }
     }, []);

     return isFirstRender.current;
};