import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Layout = () => {
  return (
    <>
    <div className='text-sm md:text-lg font-primary '>
      <header>
        <Navbar className="py-5 shadow-normal hover:shadow-focus fixed left-0 right-0 bg-white z-50" />
      </header>
      <main className='sm:px-10 pt-[150px] px-5 min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
  )
}

export default Layout;
