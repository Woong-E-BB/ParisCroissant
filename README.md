# Paris Croissant Brand Platform

파리크라상 브랜드 통합 웹사이트입니다. Next.js 정적 export 기반으로 GitHub Pages에서 실행되도록 구성되어 있습니다.

## Local Development

```bash
npm install
npm run dev
```

기본 로컬 주소는 `http://localhost:3000`입니다. 필요하면 `npm run dev -- --port 3001`처럼 포트를 지정할 수 있습니다.

## Production Build

```bash
npm run build
```

정적 결과물은 `out/` 폴더에 생성됩니다.

## GitHub Pages

`.github/workflows/deploy-pages.yml`가 `main` 브랜치 push 시 자동으로 정적 사이트를 빌드하고 GitHub Pages에 배포합니다.

GitHub 저장소 설정에서 Pages source를 `GitHub Actions`로 설정해야 합니다.

배포 경로는 저장소 이름 기준으로 `/ParisCroissant` base path가 적용됩니다.
