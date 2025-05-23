import { PageMeta } from '@/components/page-meta';
import React, { ReactNode } from 'react';

interface MainLayoutInterface {
    children: ReactNode;
    title?: string;
    description?: string;
}

export const MainLayout: React.FC<MainLayoutInterface> = ({ children, title = 'Default Title', description }) => {
    return (
        <div className="min-h-screen">
            <PageMeta title={title} description={description} />

            <main>
                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white text-black shadow-sm sm:rounded-lg">{children}</div>
                    </div>
                </div>
            </main>
        </div>
    );
};
