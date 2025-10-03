'use client'
import { DAppKitProvider } from '@vechain/dapp-kit-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 export default function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <DAppKitProvider
            // REQUIRED: The URL of the node you want to connect to
            node={'https://testnet.vechain.org/'}
        >
                {children}
            </DAppKitProvider>
        </QueryClientProvider>
    );
}