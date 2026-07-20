# AI Coding Rules CLI 🧠🚀

**The ultimate "Vibe Coding" Toolkit.**

AI coding assistants (Cursor, Copilot, Windsurf) are fast, but they often hallucinate bad code, ignore best practices, and use raw SQL when they shouldn't. 

**You need to give the AI a strict set of rules before it writes a single line of code.**

`ai-coding-rules` is an interactive CLI that automatically injects senior-level instructions (`.cursorrules` or `.github/copilot-instructions.md`) directly into your project directory.

## 🚀 Usage

You don't even need to install it. Just run it anywhere using `npx`:

```bash
npx ai-rules-init
```

### What happens next?
1. The CLI will ask you: **"What is your primary tech stack?"** (Choose between Next.js, Python FastAPI, Golang, Flutter, etc.)
2. It will ask: **"Which AI Assistant are you using?"** (Cursor or GitHub Copilot).
3. **Boom!** The perfect ruleset is instantly copied into your project.

## 🛠️ Supported Stacks

Currently, we have hand-crafted, highly optimized rules for:

*   **TypeScript + Next.js (App Router)** - Focuses on Server Components, Zod validation, and Tailwind.
*   **Python + FastAPI** - Focuses on Pydantic v2, Async SQLAlchemy, and clean architecture.
*   **Golang (Standard Library Focus)** - Idiomatic Go, explicit error handling, and concurrency.
*   **Flutter + BLoC** - Sound null safety, Clean Architecture, and separation of UI from logic.

## 🤔 Want to do it manually?

If you hate CLIs, you can still clone this repository and manually copy the files from the folders (`/typescript-nextjs`, `/python-fastapi`, etc.) into your project.

## 🤝 Contributing

This is a community-driven project! If you are a senior developer in a stack that isn't listed here, please submit a Pull Request.

**Guidelines for PRs:**
1. Keep the rules concise (bullet points).
2. Focus on architecture, safety, and modern idioms, not just basic syntax formatting.
3. Add a new folder with `.cursorrules` and `copilot-instructions.md`, then update the `choices` array in `bin/cli.js`.

## License
MIT. Let's build better software with AI!
