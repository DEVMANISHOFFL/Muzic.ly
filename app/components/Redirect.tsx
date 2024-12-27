'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Redirect() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && status === "authenticated" && session?.user) {
            router.push("/dashboard");
        }
    }, [isClient, status, session, router]);

    // Don't render anything on the server side
    if (!isClient) {
        return null;
    }

    // Optionally, you can show a loading state here
    return <div>Redirecting...</div>;
}

