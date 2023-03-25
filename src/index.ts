import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useProgress = () => {
    const router = useRouter();
    useEffect(() => {
        router.events.on('routeChangeStart', NProgress.start);
        router.events.on('routeChangeComplete', NProgress.done);
        router.events.on('routeChangeError', NProgress.done);
        return () => {
            router.events.off('routeChangeStart', NProgress.start);
            router.events.off('routeChangeComplete', NProgress.done);
            router.events.off('routeChangeError', NProgress.done);
        };
    }, [router]);
};

export default useProgress;
