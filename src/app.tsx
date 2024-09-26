import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Header, LateralNav } from 'wyvern-ui-test';
import './app.css';
import { Suspense } from 'solid-js';

export default function App() {
  return (
    <Router
      root={(props) => (
        <main class='bg-secondary-900 m-0 h-screen font-oswald'>
          <Header first_word='WYE' second_word='DOCS' />
          <div class='flex h-full bg-bg-100'>
            <LateralNav />
            <Suspense>{props.children}</Suspense>
            <LateralNav transparent={true} />
          </div>
        </main>
      )}>
      <FileRoutes />
    </Router>
  );
}
