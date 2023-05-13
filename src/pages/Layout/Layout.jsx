import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Layout = () => {
  return (
    <>
    <div className='text-sm md:text-lg font-primary '>
      <header>
        <Navbar className="py-5 shadow-normal hover:shadow-focus fixed top-0 w-full bg-white z-50" />
      </header>
      <main className='sm:px-10 mt-24 px-5 min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
  )
}

export default Layout;
