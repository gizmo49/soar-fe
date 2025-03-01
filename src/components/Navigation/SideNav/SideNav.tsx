import { NavLink } from 'react-router-dom'
import { routes } from '../../../routes/routes.config'
import Icon from '../../Icon/Icon'
import { useEffect, useRef } from 'react'
import './SideNav.scss'

interface SideNavProps {
  isOpen: boolean
  onClose: () => void
}

function SideNav({ isOpen, onClose }: SideNavProps) {
  const sideNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sideNavRef.current && !sideNavRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <aside 
      className={`side-nav ${isOpen ? 'side-nav--open' : ''}`}
      ref={sideNavRef}>
      <div className="side-nav__header">
        <Icon name='logo' />
        <span>Soar Task</span>
      </div>
      <nav className="side-nav__content">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) => 
              `side-nav__link ${isActive ? 'side-nav__link--active' : ''}`
            }
            onClick={() => onClose()}
          >
            <Icon name={route.icon} className="side-nav__icon" />
            <span className="side-nav__text">{route.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default SideNav