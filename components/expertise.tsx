import { useEffect, useState } from "react";

export default function Expertise() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/hello')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res);
                setLoading(false);
            })
    }, []);
    
    return (
        <div>
            <h2>Expertise</h2>
        </div>
    );
}