# Cách chạy file .ts riêng lẻ

## 1. Chạy thẳng (không cần build)

```bash
npx tsx src/ten-file.ts
```

## 2. Chạy qua npm script

```bash
npm run tsx src/ten-file.ts
```

## 3. Chạy với watch mode (tự reload khi lưu)

```bash
npx tsx watch src/ten-file.ts
```

## Ví dụ

```bash
npx tsx src/index.ts
npx tsx src/bai2.ts
npx tsx watch src/bai3.ts
```
