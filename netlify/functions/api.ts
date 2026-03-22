import { handle } from 'hono/netlify'

// 这里的路径取决于你原来的代码结构，确保引到了你的 Hono 实例
import app from '../../src/index.ts' 

// 【关键修改】：这里必须用 export default，不能用 export const handler
export default handle(app)
