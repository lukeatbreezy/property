import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { StyleGalleryApp } from './StyleGalleryApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleGalleryApp />
  </StrictMode>,
)
