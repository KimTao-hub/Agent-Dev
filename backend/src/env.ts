// 环境变量加载模块
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

// 设置OPENAI_API_KEY环境变量
if (process.env.DEEPSEEK_API_KEY) {
  process.env.OPENAI_API_KEY = process.env.DEEPSEEK_API_KEY;
  console.log('Environment variables configured successfully');
} else {
  console.error('DEEPSEEK_API_KEY environment variable is not set');
  throw new Error('DEEPSEEK_API_KEY environment variable is required');
}

export default process.env;
