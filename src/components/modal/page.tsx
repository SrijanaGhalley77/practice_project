'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const Details: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const name = searchParams.get('name');
    const price = searchParams.get('price');

    if (!name || !price) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <h3>{name}</h3>
            <p>{price}</p>
            <button onClick={() => router.back()}>Cancel</button>
        </section>
    );
}

export default Details;