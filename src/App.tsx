import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import MainLayout from './layouts/MainLayout/MainLayout'
import { routes } from './routes/routes.config'
import "./styles/index.scss"

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route 
                key={path} 
                path={path} 
                element={<Component />} 
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  )
}

export default App
