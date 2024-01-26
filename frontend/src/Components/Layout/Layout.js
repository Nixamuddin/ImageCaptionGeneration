import React from 'react';
import './Layout.css';
import { DiMagento } from 'react-icons/di';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../Auth/Auth';
import SearchInput from './SearchInput';

const Layout = () => {
  const [auth, setAuth] = useAuth();
  const logout=()=>{
    setAuth({
      ...auth, user:null, token:" ",
    })
    localStorage.removeItem(" ")
  }
  return (
    <>
      <section id='navsection'>
        <nav className='navbar navbar-expand-lg navbar-light '>
          <div className='container-fluid'>
            <Link className='navbar-brand'>
              <DiMagento size={50} /> Image Caption Generator
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavDropdown'
              aria-controls='navbarNavDropdown'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
              <ul className='navbar-nav ms-auto'>
                {!auth?.user ? (
                  <>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/'>
                        Home
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/caption'>
                        Generate Caption
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/voicetotext'>
                        Voice ➡ Text
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/translator'>
                        Translator
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/register'>
                        Personal Diary
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                  <li className='nav-item'>
                  <SearchInput/>
                  </li>


                    <li className='nav-item dropdown'>
                      <NavLink
                        className='nav-link dropdown-toggle'
                        href='#'
                        role='button'
                        data-bs-toggle='dropdown'
                        style={{ border: 'none' }} > {auth?.user.username}</NavLink>
                      <ul className='dropdown-menu'>
                        <li>
                        <NavLink
                          onClick={logout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                      </ul>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Layout;
