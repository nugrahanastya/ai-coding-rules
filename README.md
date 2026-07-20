# AI Coding Rules (The "Vibe Coding" Toolkit) 🧠

A comprehensive collection of `.cursorrules` and `.github/copilot-instructions.md` files for modern tech stacks.

**The Problem:** AI coding assistants (like Cursor, GitHub Copilot, Windsurf) are incredibly fast, but if left unchecked, they write messy, inconsistent code that ignores your framework's best practices. They will use `any` in TypeScript, raw SQL in Python, and massive stateful widgets in Flutter.

**The Solution:** You need to give the AI a strict set of rules before it writes a single line of code.

This repository provides copy-pasteable, highly optimized instruction files crafted by senior engineers. By dropping these files into your project root, your AI will instantly write production-grade, idiomatically correct code for your specific stack.

---

## 🚀 How to Use

### For Cursor IDE Users
1. Find your tech stack in the folders above (e.g., `typescript-nextjs`).
2. Copy the `.cursorrules` file from that folder.
3. Paste it into the **root** of your own project.
4. Open Cursor, and the AI will automatically read and follow these rules for every chat and inline generation.

### For GitHub Copilot Users
1. Find your tech stack in the folders above.
2. Copy the `copilot-instructions.md` file.
3. Paste it into a `.github/` folder at the root of your project (so the path is `.github/copilot-instructions.md`).
4. GitHub Copilot Chat will automatically ingest these rules as context.

### For Windsurf / Claude Code / Others
Most modern AI IDEs and CLI agents support `.cursorrules` or generic `instructions.md` files. Simply copy the content and paste it into your tool's respective configuration section.

---

## 🛠️ Supported Stacks (So Far)

We are constantly expanding. Currently, we have hand-crafted rules for:

*   **[TypeScript + Next.js (App Router)](./typescript-nextjs/)** - Focuses on Server Components, Zod validation, and Tailwind CSS.
*   **[Python + FastAPI](./python-fastapi/)** - Focuses on Pydantic v2, Async SQLAlchemy, and clean architecture.
*   **[Golang (Standard Library Focus)](./go-standard/)** - Focuses on idiomatic Go, explicit error handling, and concurrency management.
*   **[Flutter + BLoC](./flutter-bloc/)** - Focuses on sound null safety, Clean Architecture, and separation of UI from business logic.

---

## 🤝 Contributing

This is a community-driven project! If you are a senior developer in a stack that isn't listed here (e.g., Laravel, Ruby on Rails, Rust, Kotlin/Android), please submit a Pull Request!

**Guidelines for PRs:**
1. Keep the rules concise. AI context windows are large, but attention spans are limited. Bullet points work best.
2. Focus on architecture, safety, and modern idioms, not just basic syntax formatting (Prettier/Linting should handle that).
3. Include both a `.cursorrules` and a `copilot-instructions.md` (they should have identical content).

---

## License
MIT. Use these prompts freely in any personal, commercial, or enterprise projects. Let's build better software with AI!
