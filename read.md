The Practical Challenge: "The Research Agent" (60 Minutes)
实践挑战："研究代理"（60 分钟）
This repository contains a basic FastAPI backend and a React (Next.js) frontend.
这个仓库包含一个基础的 FastAPI 后端和一个 React（Next.js）前端。

The Goal: The agent successfully uses a "web_search" tool, but the implementation is buggy and provides a poor user experience. Your job is to fix the schema issues and upgrade the system to support real-time streaming of "thoughts" and answers.
目标：该代理成功使用了“web_search”工具，但实现存在错误，且用户体验不佳。你的任务是修复模式问题，并升级系统以支持“想法”和答案的实时流式传输。

IMPORT Preq
GO to your google ai studio, find your api key and set in your .env !!!!
前往您的谷歌 AI 工作室，找到您的 API 密钥并设置在您的.env 文件中！！！

1. Python Backend Task (25 Minutes)
1. Python 后端任务（25 分钟）
Scenario: The agent uses a web_search tool. However, it often fails to use it correctly or crashes. Additionally, the user has to wait ~3 seconds staring at a spinner before seeing any text.
场景：代理使用了一个 web_search 工具。然而，它经常无法正确使用或崩溃。此外，用户必须等待约 3 秒钟盯着加载动画才能看到任何文本。

The Tasks:  任务：

Fix the Bug: The agent configuration for the web_search tool seems to have a definition issue. debug and fix the schema so the LLM correctly parses the "query" argument.
修复错误：代理的 web_search 工具配置似乎存在定义问题。调试并修复模式，以便 LLM 正确解析"query"参数。
Streaming Upgrade: Refactor the endpoint (backend/main.py and backend/agent.py) to stream the agent's execution.
流式升级：重构端点（ backend/main.py 和 backend/agent.py ），以流式传输代理的执行。
The backend should yield events for "thoughts" (e.g. when the tool starts/ends).
后台应该为"思考"事件生成事件（例如工具启动/结束时）。
It should yield "answer" events as the token stream arrives.
当令牌流到达时，它应该生成"答案"事件。
2. React Frontend Task (20 Minutes)
2. React 前端任务（20 分钟）
Scenario: The UI currently just shows a loading spinner until the full text arrives (blocking HTTP request).
场景：当前 UI 只显示加载动画，直到完整文本到达（阻塞 HTTP 请求）。

The Tasks:  任务：

Handle Streaming: Modify frontend/app/hooks/useChat.ts to consume the streamed response instead of awaiting the full text.
处理流式传输：修改 frontend/app/hooks/useChat.ts 以消费流式响应而不是等待完整文本。
Visual Feedback: Implement the ThoughtTrace component (frontend/app/components/ThoughtTrace.tsx).
视觉反馈：实现 ThoughtTrace 组件（ frontend/app/components/ThoughtTrace.tsx ）。
It should display a status (with a small animation) when the agent is "thinking" or searching.
它应该在代理“思考”或搜索时显示状态（带有一个小动画）。
It should update accordingly when the task is complete.
当任务完成时，它应该相应地更新。
3. Evaluation Criteria (15 Minutes Code Walkthrough)
3. 评估标准（15 分钟代码演示）
Error Resilience: Does the frontend crash if a chunk is malformed?
错误恢复能力：如果数据块损坏，前端是否会崩溃？
Context Awareness: (Bonus/Discussion) How would you persist this conversation? Redis? Postgres?
上下文感知能力：（加分项/讨论）你会如何持久化这个对话？Redis？Postgres？
Streaming Implementation: Did you correctly handle the HTTP stream?
流式实现：你是否正确处理了 HTTP 流？