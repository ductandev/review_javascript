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
# Chạy thẳng một file bất kỳ
npx tsx src/ten-file.ts

# Chạy qua npm script
npm run tsx src/ten-file.ts

# Chạy với watch mode (tự reload khi lưu file)
npx tsx watch src/ten-file.ts
```

## Scripts

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Chạy với nodemon (tự reload khi lưu) |
| `npm run build` | Build toàn bộ project ra thư mục `dist/` |
| `npm run start` | Chạy file đã build (`dist/index.js`) |
| `npm run lint` | Kiểm tra lỗi lint |
| `npm run lint:fix` | Tự động fix lỗi lint |
| `npm run prettier` | Kiểm tra format code |
| `npm run prettier:fix` | Tự động format code |

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
