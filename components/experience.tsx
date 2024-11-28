import { useEffect, useState } from "react";

export default function Experience() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/experience')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res)
            })
    }, []);
    
    return (
        <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: '2.25rem',  textAlign: 'center'}}>Experience</h2>
            <div style={{display: 'flex', gap: '2rem'}}>
                {data && data.map(({title, role, description, url, imageUrl}, i) => (
                    <div key={title} style={{textAlign: 'center', flex: 1}}>
                        <p>{role}</p>
                        <p>at</p>
                        <h3>{title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}