import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

export default ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_VERCEL_ANALYTICS_ID': JSON.stringify(env.VERCEL_ANALYTICS_ID)
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
}
