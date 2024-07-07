import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Header, LateralNav } from 'proyecto-viviana-ui';
import './app.css';
import { Suspense } from 'solid-js';

export default function App() {
  return (
    <Router
      root={(props) => (
        <main class='bg-bg-100 m-0 h-screen'>
          <Header />
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
