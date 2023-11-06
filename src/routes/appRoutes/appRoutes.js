import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutPage';
import AboutYoutube from '../../pages/AboutPage/AboutYoutube';
import Channels from '../../pages/AboutPage/Channels';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
import HocDemoPage from '../../pages/HocDemoPage/HocDemoPage';
import HomePage from '../../pages/HomePage/HomePage';
import StyledComponent from '../../pages/HomePage/StyledComponent/StyledComponent';
import HooksDemoPage from '../../pages/HooksDemoPage/HooksDemoPage';
import InstaFeedPage from '../../pages/InstaFeedPage/InstaFeedPage';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
import RenderPropsDemoPage from '../../pages/RenderPropsDemoPage/RenderPropsDemoPage';
import UnitTestingDemo from '../../pages/UnitTestingDemo/UnitTestingDemo';
import PageNotFoundPage from '../../components/PageNotFoundPage/PageNotFoundPage';

export const appRoutes = (
  <Routes>
    {/* URL Configuration */}
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />}>
      <Route path="/about/aboutYoutube" element={<AboutYoutube />} />
      <Route path="/about/channels" element={<Channels />} />
    </Route>
    <Route path="/contact-us" element={<ContactUsPage />} />
    <Route path="/styled-comp-demo" element={<StyledComponent />} />
    <Route path="/hoc-demo" element={<HocDemoPage />} />
    <Route path="/insta-feed" element={<InstaFeedPage />} />
    <Route path="/hooks-demo" element={<HooksDemoPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/render-props-demo" element={<RenderPropsDemoPage />} />
    <Route path="/unit-testing-demo" element={<UnitTestingDemo />} />
    <Route path="*" element={<PageNotFoundPage />} />
  </Routes>
);
