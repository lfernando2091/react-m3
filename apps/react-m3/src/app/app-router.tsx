import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { EmptyPage, HomePage } from './pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/empty" element={<EmptyPage/>}/>
      </Route>
    </Routes>
  )
}
