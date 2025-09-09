import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "virtual:windi.css"

function App() {
  return (
    <div className="h-screen w-full flex bg-[radial-gradient(circle_20px_at_0%_0%,#a5e29c,#1b7b2c,black),radial-gradient(circle_20px_at_100%_0%,#a5e29c,#1b7b2c,black),radial-gradient(circle_20px_at_100%_100%,#a5e29c,#1b7b2c,black),radial-gradient(circle_20px_at_0%_100%,#a5e29c,#1b7b2c,black)] bg-[length:24px_24px] bg-blend-screen"></div>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)

const style = document.createElement("style")
style.textContent = `
  *,*::after,*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  body {
    height: 100vh;
    width: 100%;
    display: flex;
  }
`
document.head.appendChild(style)
