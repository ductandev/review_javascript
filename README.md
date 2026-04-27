# TypeScript Learning Project

Project học TypeScript cá nhân.

## Yêu cầu

- Node.js
- npm

## Cài đặt

```bash
npm install
```

## Chạy file .ts riêng lẻ

```bash
# Chạy thẳng một file bất kỳ (không cần build)
npx tsx src/ten-file.ts

# Chạy với watch mode (tự reload khi lưu file)
npx tsx watch src/ten-file.ts
```

## Chạy với Nodemon (watch mode linh động)

```bash
# Mặc định chạy src/index.ts
npm run dev

# Chạy file bất kỳ với nodemon (khuyên dùng trên Windows)
npm run dev:file src/ten-file.ts
npm run dev:file src/bai2.ts
npm run dev:file src/06_decorator.ts

# Chạy file bất kỳ qua biến môi trường (Git Bash / WSL)
FILE=bai2 npm run dev
FILE=06_decorator npm run dev
```

## Build toàn bộ project

```bash
# Build ra thư mục dist/
npm run build

# Chạy sau khi build
npm run start
```

## Scripts

| Lệnh                           | Mô tả                                |
| ------------------------------ | ------------------------------------ |
| `npm run dev`                  | Chạy `src/index.ts` với nodemon      |
| `npm run dev:file src/file.ts` | Chạy file bất kỳ với nodemon         |
| `npm run tsx src/file.ts`      | Chạy thẳng file không cần build      |
| `npm run build`                | Build toàn bộ project ra `dist/`     |
| `npm run start`                | Chạy file đã build (`dist/index.js`) |
| `npm run lint`                 | Kiểm tra lỗi lint                    |
| `npm run lint:fix`             | Tự động fix lỗi lint                 |
| `npm run prettier`             | Kiểm tra format code                 |
| `npm run prettier:fix`         | Tự động format code                  |

## Cấu trúc thư mục

```
ts/
├── src/          # Source code TypeScript
├── dist/         # Output sau khi build (tự sinh)
├── tsconfig.json # Cấu hình TypeScript
├── nodemon.json  # Cấu hình nodemon
└── eslint.config.mts # Cấu hình ESLint
```

## Tech stack

- **TypeScript** ^6.0.3
- **tsx** — chạy file `.ts` trực tiếp không cần build
- **tsc-alias** — hỗ trợ path alias sau khi build
- **ESLint** + **Prettier** — lint và format code
- **nodemon** — tự reload khi dev
