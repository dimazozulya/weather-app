import { useEffect, useState, useRef } from "react";
import { searchCities } from "../../api/weather";
import { useApp } from "../../context/AppContext";
import { useDebounced } from "../../hooks/useDebounced";

export default function SearchBox () {
    const { setCurrentCity } = useApp();
    const [ query, setQuery] = useState ('');
    const [ items, setItems ] = useState ([]);
    const [ loading, setLoading ] = useState (false);
    const [ err, setErr ] = useState ('');

    const debounced = useDebounced (query, 300);
    const abortRef = useRef(null);
    const cacheRef = useRef (new Map ());

    useEffect (() => {
        setErr ('');
        setItems ([]);

        const q = debounced.trim ();
        if (q.length < 2) return;
    })
}