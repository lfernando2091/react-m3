import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { EmptyPage, HomePage } from './pages';
import { ButtonsPage } from './pages/buttons/ButtonsPage';
import { SwitchPage } from './pages/switch/SwitchPage';
import { CheckboxPage } from './pages/checkbox/CheckboxPage';
import { TextFieldPage } from './pages/textfield/TextFieldPage';
import { RadioButtonPage } from './pages/radio-button/RadioButtonPage';
import { CardPage } from './pages/card/CardPage';
import { BadgePage } from './pages/badge/BadgePage';
import { AppBarPage } from './pages/app-bar/AppBarPage';
import { ListPage } from './pages/list/ListPage';
import { AccordionPage } from './pages/accordion/AccordionPage';
import { AlertPage } from './pages/alert/AlertPage';
import { TabsPage } from './pages/tabs/TabsPage';
import { DividerPage } from './pages/divider/DividerPage';
import { DialogPage } from './pages/dialog/DialogPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="buttons" element={<ButtonsPage/>}/>
        <Route path="switch" element={<SwitchPage/>}/>
        <Route path="checkbox" element={<CheckboxPage/>}/>
        <Route path="text-field" element={<TextFieldPage/>}/>
        <Route path="radio-button" element={<RadioButtonPage/>}/>
        <Route path="cards" element={<CardPage/>}/>
        <Route path="badge" element={<BadgePage/>}/>
        <Route path="app-bar" element={<AppBarPage/>}/>
        <Route path="lists" element={<ListPage/>}/>
        <Route path="accordion" element={<AccordionPage/>}/>
        <Route path="alert" element={<AlertPage/>}/>
        <Route path="tabs" element={<TabsPage/>}/>
        <Route path="divider" element={<DividerPage/>}/>
        <Route path="dialog" element={<DialogPage/>}/>
        <Route path="empty" element={<EmptyPage/>}/>
      </Route>
    </Routes>
  )
}
