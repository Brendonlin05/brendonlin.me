import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

function getLastCommitDate() {
  try {
    return execSync('git log -1 --format=%cs').toString().trim();
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

export default defineConfig({
  plugins: [react()],
  define: {
    __LAST_UPDATED__: JSON.stringify(getLastCommitDate()),
  },
})
