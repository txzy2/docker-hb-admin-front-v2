import { Head } from '@inertiajs/react';
import React from 'react';

interface PageMetaProps {
    title?: string;
    description?: string;
}

export const PageMeta: React.FC<PageMetaProps> = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
        </Head>
    );
};
