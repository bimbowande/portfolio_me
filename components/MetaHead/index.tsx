import React from 'react';
import Head from 'next/head'

export const MetaHead : React.FC = () =>{
    return (
        <Head>
            <title>{``}</title>
            <meta name="description" content="." />
            <meta name="theme-color" content="#0a161c" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        </Head>
    )
}