import { ReactNode, useState } from 'react'
import TopNav from '../../components/Navigation/TopNav/TopNav'
import SideNav from '../../components/Navigation/SideNav/SideNav'
import './MainLayout.scss'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  return (
    <div className="main-layout">
      <TopNav onMenuClick={() => setIsSideNavOpen(true)} />
      <SideNav 
        isOpen={isSideNavOpen} 
        onClose={() => setIsSideNavOpen(false)} 
      />
      {isSideNavOpen && (
        <div 
          className="main-layout__overlay"
          onClick={() => setIsSideNavOpen(false)}
        />
      )}
      <main className="main-layout__content">
        {children}
      </main>
    </div>
  )
}

export default MainLayout