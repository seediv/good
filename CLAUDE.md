# REAL Agent

## Design System準拠
- **参照**: https://mirror.seehub.org/design-system
- **Token仕様**: mirror/docs/design/DESIGN_SYSTEM_TOKENS_PROPOSAL.md
- **Monochrome**: gray-50〜900 + white/blackのみ使用
- **Spacing**: 4px base scale (0,2,4,8,12,16,24,32,48,64,96)

### Typography Role System
| Role | Weight | Tracking | Family | 用途 |
|------|--------|----------|--------|------|
| Display | 900 (black) | tighter | accent | Hero, ページタイトル |
| Structure | 700 (bold) | normal | accent | 見出し |
| Emphasis | 500 (medium) | normal | accent | 強調テキスト |
| Body | 400 (normal) | normal | base | 本文 |
| Label | 500 (medium) | widest | accent | ラベル, タグ |

**ルール**:
- 禁止ウェイト: 600 (semibold), 800 (extrabold) — 800はロゴ例外のみ
- `font-black` + `tracking-tighter` は常にペアで使用（Display Role）
- Font ≠ Typography: Fontは素材、Typographyは設計
- 参照: mirror `src/lib/shared/design-system/tokens/typography.ts`

## Session Notes

セッション終了時に進捗・未完了タスク・次回アクションをここに記録し、次セッションへ引き継ぐ。

| 日付 | 対象領域 | 進捗 | 未完了・次回アクション |
|------|---------|------|----------------------|
| <!-- セッション終了時に追記 --> | | | |
