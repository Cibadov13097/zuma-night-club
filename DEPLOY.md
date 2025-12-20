# GitHub Pages Deployment Guide

## Hazırlıq

Bu layihə GitHub Pages üçün hazırlanıb. Deploy etmək üçün aşağıdakı addımları izləyin:

## Deployment Metodları

### Metod 1: GitHub Actions (Avtomatik) - Tövsiyə olunur ✅

1. **Repository Settings-i yoxlayın:**
   - GitHub-da repository-nizə gedin
   - Settings > Pages bölməsinə keçin
   - Source-u "GitHub Actions" olaraq seçin

2. **Kodu push edin:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Avtomatik deploy:**
   - `main` branch-ə push etdikdən sonra GitHub Actions avtomatik işləyəcək
   - Actions tab-ında progress-i izləyə bilərsiniz
   - Bir neçə dəqiqə sonra saytınız hazır olacaq

4. **Saytınızın URL-i:**
   ```
   https://cibadov13097.github.io/zuma-night-club/
   ```

### Metod 2: Manual Deploy (gh-pages)

1. **Build edin:**
   ```bash
   npm run build
   ```

2. **Deploy edin:**
   ```bash
   npm run deploy
   ```

3. **Repository Settings:**
   - Settings > Pages bölməsinə gedin
   - Source-u "gh-pages branch" olaraq seçin
   - Root folder-u "/ (root)" seçin

## Əhəmiyyətli Qeydlər

### Base Path
- `vite.config.ts`-də base path `/zuma-night-club/` olaraq təyin edilib
- Əgər repository adınız fərqlidirsə, `vite.config.ts`-də dəyişdirin:
  ```typescript
  base: mode === "production" ? "/your-repo-name/" : "/",
  ```

### Repository Adı
- Hazırda: `zuma-night-club`
- Əgər repository adınız fərqlidirsə, aşağıdakı fayllarda dəyişdirin:
  - `vite.config.ts` - base path
  - `package.json` - homepage URL
  - `.github/workflows/deploy.yml` - yalnız comment-lərdə

### Environment Variables
- Production build üçün `NODE_ENV=production` avtomatik təyin edilir
- Əlavə environment variables lazımdırsa, GitHub Actions workflow-da əlavə edin

## Troubleshooting

### Problem: Sayt açılmır / 404 error
**Həll:**
- Base path-in düzgün olduğunu yoxlayın
- Repository adının base path ilə uyğun olduğunu təsdiq edin
- GitHub Pages-in aktiv olduğunu yoxlayın (Settings > Pages)

### Problem: Assets yüklənmir
**Həll:**
- Base path-in düzgün olduğunu yoxlayın
- Browser console-da error-ları yoxlayın
- Hard refresh edin (Ctrl+Shift+R / Cmd+Shift+R)

### Problem: GitHub Actions işləmir
**Həll:**
- Repository Settings > Actions > General
- "Allow all actions and reusable workflows" seçin
- Permissions-i yoxlayın (Settings > Actions > General > Workflow permissions)

## Test

Deploy-dan əvvəl lokal test:
```bash
npm run build
npm run preview
```

Bu, production build-i lokal olaraq test etməyə imkan verir.

## Support

Əgər problem yaşayırsınızsa:
1. GitHub Actions logs-u yoxlayın
2. Browser console-da error-ları yoxlayın
3. Network tab-da failed requests-i yoxlayın

