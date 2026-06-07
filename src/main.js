if (import.meta.env.VITE_ANALYTICS_URL && import.meta.env.VITE_ANALYTICS_ID) {
  const script = document.createElement('script')
  script.defer = true
  script.src = import.meta.env.VITE_ANALYTICS_URL
  script.dataset.websiteId = import.meta.env.VITE_ANALYTICS_ID
  document.head.appendChild(script)
}

if (window.location.pathname!=='/'&&!window.location.pathname.includes('.')){
  window.location.replace('/')//自动回根！
}
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')