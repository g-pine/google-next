import Link from 'next/link';
import WebSearchResuts from '@/components/WebSearchResuts';
import { Suspense } from 'react';

// Función de obtención de datos asincrónicos
async function fetchData(searchParams) {
    const startIndex = searchParams.start || '1';
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de retardo
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);
    if (!response.ok) throw new Error('Something went wrong');
    return await response.json();
}

export default function WebSearchPage({ searchParams }) {
    return (
        <div>
            {/* Envolviendo la búsqueda en un Suspense */}
            <Suspense fallback={<div>Loading...</div>}>
                <WebSearchContent searchParams={searchParams} />
            </Suspense>
        </div>
    );
}

async function WebSearchContent({ searchParams }) {
    const data = await fetchData(searchParams);
    const results = data.items;

    if (!results) {
        return (
            <div className='flex flex-col justify-center items-center pt-10'>
                <h1 className='text-3xl mb-4'>
                    No results found for {searchParams.searchTerm}
                </h1>
                <p className='text-lg'>
                    Try searching the web or images for something else {' '}
                    <Link href='/' className='text-blue-500'>
                        Home
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div>
            {results && <WebSearchResuts results={data} />}
        </div>
    );
}
