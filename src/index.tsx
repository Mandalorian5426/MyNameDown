import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './routes/Home';
import NewList from './routes/Home/Lists/New';
import Lists from './routes/Home/Lists';
import List from './routes/Home/Lists/List';
import Settings from './routes/Home/Settings';
import ListsPageLayout from './routes/Home/Lists/PageLayout';
import HomePageLayout from './routes/Home/PageLayout';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<App />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="lists" element={<ListsPageLayout />}>
          <Route index element={<Lists />} />
          <Route path=":listId" element={<List />} />
          <Route path="new" element={<NewList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
