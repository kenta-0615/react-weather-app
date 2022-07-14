# React-Weather-App

## 概要

日本の特定地域の天気情報を取得する web アプリケーションです。

## 使用技術

- React.js
- TypeScript
- storybook
- tailwindcss

## 環境

パッケージマネージャーは`npm`を利用しています。

- git clone でリポジトリをクローン
- npm i でパッケージインストール
- npm run start でローカル環境が立ち上がること
- npm run storybook で storybook が立ち上がること

## 気をつけた点・学んだ点

- コンポーネントの再利用

  - コンポーネント指向を基盤とし`props`を使用しパーツの再利用を意識して実装しました。

- `.map`メソッドを使用し、新しい配列の生成
  - コンポーネントに`.map`メソッドを追加し、コールバック関数を指定し実装
- 可読性の意識
  - コンポーネントの名前を分かりやすく、TSX を利用することによって短い構文で可読性を高めた

## 頑張ったこと

- API の非同期処理
  - 天気の情報を`axios`を使用し、気象庁のお天気の API を送受信ができるようにした。
  - 使用した API
    https://weather.tsukumijima.net/
- バグを生まない取り組み
  - TypeScript を採用して、静的型付け言語によるチェックを導入しました。
- コンポーネントのカタログ化
  - storybook を利用してコンポーネントをカタログ化して、どんな方でも使用把握しやすい形としました。
- スタイルの統一
  - スタイル当ての工数を減らす ＆ スタイルの記述統一の目的で tailwindcss を採用しました。

## デザインと仕様

- 一部デザインと異なる部分がありますが、基本は下記をベースに実装を進めました。
- API の使用により、週の天気の表示数と Highlight の湿度、風の強さ、空気圧、霧の濃さを波の高さと風の強さに変更しています。

- https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv
