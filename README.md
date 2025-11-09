# React Router 7 + Biome Starter Kit

モダンでプロダクションレディなReact Router 7スターターキット。Biomeによる高速なリンター・フォーマッター、Lucide Iconsを統合しています。

## ✨ 特徴

- ⚡️ **React Router 7** - 最新のフルスタックReactフレームワーク
- 🔧 **Biome** - 高速なリンター・フォーマッター（ESLint + Prettierの代替）
- 🎨 **Tailwind CSS v4** - ユーティリティファーストのCSSフレームワーク
- 🎯 **Lucide React** - 美しいアイコンライブラリ
- 🚀 **Server-side rendering** - サーバーサイドレンダリング対応
- ⚡️ **Hot Module Replacement (HMR)** - 高速な開発体験
- 📦 **Asset bundling and optimization** - 最適化されたビルド
- 🔄 **Data loading and mutations** - データローディングとミューテーション
- 🔒 **TypeScript** - 型安全な開発
- 📦 **pnpm** - 高速で効率的なパッケージマネージャー

## � ドキュメント

- [React Router](https://reactrouter.com/)
- [Biome](https://biomejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 🚀 はじめ方

### インストール

依存関係をインストール：

```bash
pnpm install
```

### 開発

開発サーバーを起動：

```bash
pnpm dev
```

アプリケーションは `http://localhost:5173` で利用可能です。

### コード品質

```bash
# Biomeでリント
pnpm lint

# Biomeでフォーマット
pnpm format

# Biomeでリント・フォーマット・チェック
pnpm check

# TypeScriptの型チェック
pnpm typecheck
```

## 🏗️ プロダクションビルド

プロダクション用ビルドを作成：

```bash
pnpm build
```

## 🐳 デプロイ

### Dockerデプロイ

Dockerを使用してビルド・実行：

```bash
docker build -t my-app .

# コンテナを実行
docker run -p 3000:3000 my-app
```

以下のようなDockerをサポートするプラットフォームにデプロイ可能：

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIYデプロイ

Nodeアプリケーションのデプロイに慣れている場合、組み込みのアプリサーバーはプロダクションレディです。

`pnpm build` の出力をデプロイしてください：

```
├── package.json
├── pnpm-lock.yaml
├── build/
│   ├── client/    # 静的アセット
│   └── server/    # サーバーサイドコード
```

## 🎨 スタイリング

このテンプレートには[Tailwind CSS v4](https://tailwindcss.com/)があらかじめ設定されています。お好みのCSSフレームワークを使用することもできます。

## 📦 含まれるパッケージ

### 依存関係
- `react` & `react-dom` - React 19
- `react-router` - React Router 7
- `@react-router/node` & `@react-router/serve` - React Routerサーバー
- `lucide-react` - アイコンライブラリ
- `isbot` - ボット検出

### 開発依存関係
- `@biomejs/biome` - リンター・フォーマッター
- `@react-router/dev` - React Router開発ツール
- `tailwindcss` & `@tailwindcss/vite` - Tailwind CSS v4
- `typescript` - TypeScript
- `vite` - ビルドツール
- `vite-tsconfig-paths` - TypeScriptパスエイリアス

## 📝 ライセンス

MIT

---

Built with ❤️ using React Router, Biome, and Lucide Icons.
