import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewList from './routes/Lists/New/NewList';
import Lists from './routes/Lists/ViewLists';
import List from './routes/Lists/List/ViewList';
import ListsPageLayout from './routes/Lists/ListsPageLayout';
import Landing from './routes/Landing/Landing';
import ProviderHomePageLayout from './routes/Provider/ProviderPageLayout';
import ProviderHome from './routes/Provider/ProviderHome';
import ProviderSettings from './routes/Settings/ProviderSettings';
import { initialiseFirebaseApp } from './api/firebase';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';

// Firebase App
initialiseFirebaseApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="provider" element={<ProviderHomePageLayout />}>
            <Route index element={<ProviderHome />} />
            <Route path="settings" element={<ProviderSettings />} />
          </Route>
          <Route path="lists" element={<ListsPageLayout />}>
            <Route index element={<Lists />} />
            <Route path=":listId" element={<List />} />
            <Route path="new" element={<NewList />} />
          </Route>
        </Route>
        <Route path="login" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
