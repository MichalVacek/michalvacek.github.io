import { useState, useTransition } from 'react';
import Layout from './Layout.js';
import Home from './pages/Home.js';
import Unknown from './pages/Unknown.js';
import About from './pages/About.js';

export default function Router() {
    const [page, setPage] = useState('/');
    const [isPending, startTransition] = useTransition();
  
    function navigate(url) {
      startTransition(() => {
        setPage(url);
      });
    }
  
    let content;
    switch (page) {
        case '/':
            content = (
                <Home />
            );
            break;
        case '/about':
            content = (
                <About />
            );
            break;
        default:
            navigate('/');
    }
    return (
        <Layout navigate={navigate}>
            {content}
        </Layout>
    );
}