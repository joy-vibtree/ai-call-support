import Link from 'next/link';
import React from 'react'

export default function About() {
    return (
        <>
            <div>about page</div>
            <Link href={'/'}><button>Back to home</button></Link>
        </>
    );
}