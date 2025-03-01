import { useLocation } from 'react-router-dom'
import { routes } from '../../../routes/routes.config'
import Icon from '../../Icon/Icon'
import './TopNav.scss'

const PROFILE_IMAGE = 'https://i.pravatar.cc/300'

interface TopNavProps {
  onMenuClick: () => void
}

const SearchBar = () => {
  return (
    <div className="top-nav__search">
      <Icon name="search" className="top-nav__search-icon" />
      <input
        type="text"
        placeholder="Search for something"
        className="top-nav__search-input"
      />
    </div>
  )
}
function TopNav({ onMenuClick }: TopNavProps) {
  const location = useLocation()
  const currentRoute = routes.find(route => route.path === location.pathname)

  return (
    <header className="top-nav">
      <div className="top-nav__main">
        <button className="top-nav__menu-btn" onClick={onMenuClick}>
          <Icon name="menu" className="top-nav__menu-icon" />
        </button>
        <h1 className="top-nav__title">
          {currentRoute?.name || 'Dashboard'}
        </h1>
        <div className="top-nav__actions">
          <div className="top-nav__desktop-actions">
            <SearchBar />
            <button className="top-nav__icon-btn">
              <Icon name="lite-bolt" className="top-nav__action-icon" />
            </button>
            <button className="top-nav__icon-btn">
              <Icon name="lite-bell" className="top-nav__action-icon" />
            </button>
          </div>
          <div className="top-nav__profile">
            <img
              src={PROFILE_IMAGE}
              alt="Profile"
              className="top-nav__profile-image"
            />
          </div>
        </div>
      </div>
      <div className="top-nav__search-container">
        <SearchBar />
      </div>
    </header>
  )
}

export default TopNav