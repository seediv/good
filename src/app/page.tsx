/**
 * GOOD Project Landing Page
 *
 * TIP（Translation Integrity Principles）を世界に展開するプロジェクト
 * Design: Marketing density mode (72px H1, 18px body, 64px section gaps)
 */

import Link from "next/link";

export default function GoodPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container-base py-24 md:py-32 text-center">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-4 font-montserrat">
          Translation Integrity Principles
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-montserrat tracking-tight">
          意図が、消えない世界
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
          AI時代、「思った通りに実装される」は当たり前ではない。
          <br />
          TIPは「問いの質」を構造化し、意図を守る。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#core4"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            核心4原則を見る
          </a>
          <Link
            href="/tip"
            className="inline-block px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            詳細ドキュメント
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container-base py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center font-montserrat">
            AI時代のバッドサイクル
          </h2>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-start gap-4">
                <span className="text-gray-400 font-mono">1.</span>
                <span>意図不明確</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                ↓
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gray-400 font-mono">2.</span>
                <span>AIに曖昧な指示</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                ↓
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gray-400 font-mono">3.</span>
                <span>AIが「それっぽい」出力</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                ↓
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gray-400 font-mono">4.</span>
                <span>人間が検証スキップ</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                ↓
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gray-400 font-mono">5.</span>
                <span>低品質が本番へ → 問題発生</span>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                ↓
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gray-400 font-mono">6.</span>
                <span>「AIに直させよう」→ 根本原因は残る → ∞ ループ</span>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            <strong>AIが速いほど、間違いも速く増幅される。</strong>
            <br />
            TIPは、この悪循環を断ち切る構造を提供する。
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container-base py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            TIPとは
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Translation Integrity Principles（翻訳整合性原則）
            <br />
            意図を実装に「翻訳」する過程で品質を保つための
            <strong>15原則</strong>
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-gray-900 mb-2 font-montserrat">
                4
              </div>
              <div className="text-lg font-medium text-gray-700 mb-2">
                核心原則
              </div>
              <p className="text-gray-600">
                C1→C2→C3→C4の順序で適用。この順序が品質を決める。
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-gray-900 mb-2 font-montserrat">
                11
              </div>
              <div className="text-lg font-medium text-gray-700 mb-2">
                補助原則
              </div>
              <p className="text-gray-600">
                フェーズ別（形式化→構造化→実装→進化→横断）に適用。
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-gray-900 mb-2 font-montserrat">
                3
              </div>
              <div className="text-lg font-medium text-gray-700 mb-2">
                メタ原則
              </div>
              <p className="text-gray-600">
                レイヤー思考・二重翻訳回避・意図の遡及的発見。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core 4 Principles Section */}
      <section
        id="core4"
        className="container-base py-16 bg-gray-900 text-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-montserrat">
            核心4原則
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            C1→C2→C3→C4の順序で問う。逆順はカオスを生む。
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* C1 */}
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold font-montserrat text-white">
                  C1
                </span>
                <span className="text-xl font-medium">制約による解放</span>
              </div>
              <p className="text-2xl font-medium text-gray-200 mb-4">
                何を禁止すれば可能性が広がるか？
              </p>
              <p className="text-gray-400">
                制約がないと選択肢が無限になり、決定できない。
                適切な制約が、創造性を解放する。
              </p>
            </div>
            {/* C2 */}
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold font-montserrat text-white">
                  C2
                </span>
                <span className="text-xl font-medium">結合規約の単純さ</span>
              </div>
              <p className="text-2xl font-medium text-gray-200 mb-4">
                最小の約束事は何か？
              </p>
              <p className="text-gray-400">
                複雑なインターフェースは誤解を生む。
                最小限の契約が、明確なコミュニケーションを生む。
              </p>
            </div>
            {/* C3 */}
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold font-montserrat text-white">
                  C3
                </span>
                <span className="text-xl font-medium">
                  構造に検証を埋め込む
                </span>
              </div>
              <p className="text-2xl font-medium text-gray-200 mb-4">
                どうすれば間違いに気づけるか？
              </p>
              <p className="text-gray-400">
                後からのテストでは遅い。 構造自体が間違いを検出する設計にする。
              </p>
            </div>
            {/* C4 */}
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold font-montserrat text-white">
                  C4
                </span>
                <span className="text-xl font-medium">創発の余地を残す</span>
              </div>
              <p className="text-2xl font-medium text-gray-200 mb-4">
                想定外を許容するか？
              </p>
              <p className="text-gray-400">
                完璧な設計は進化を妨げる。
                意図的な余白が、新しい価値の創発を可能にする。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Section - Link to Cases */}
      <section className="container-base py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            これらの原則はどこから来たか
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            TIP核心4原則は、歴史的に「美しい」と認められた実装を
            <br />
            <strong>逆算</strong>して発見された。
          </p>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  前向き設計（失敗しやすい）
                </h3>
                <p className="text-gray-600 text-sm">
                  意図 → ??? → 実装
                  <br />
                  <span className="text-gray-400">
                    抽象的な原則を先に作り、適用しようとする
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  逆算アプローチ（採用）
                </h3>
                <p className="text-gray-600 text-sm">
                  美しい実装 → 原則の発見 → 意図との関係
                  <br />
                  <span className="text-gray-400">
                    50年生き残った現物から原則を抽出する
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/case"
              className="inline-block px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              美しい現物たちを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="container-base py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center font-montserrat">
            4つの展開チャネル
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            TIPを世界に届けるための4つの道
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-montserrat font-bold">
                  A
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">学術</h3>
              <p className="text-gray-600 text-sm">
                論文・書籍・大学連携
                <br />
                <span className="text-gray-400">権威の獲得</span>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-montserrat font-bold">
                  S
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">サービス</h3>
              <p className="text-gray-600 text-sm">
                診断・コンサル・研修
                <br />
                <span className="text-gray-400">実績の蓄積</span>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-montserrat font-bold">
                  C
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">コミュニティ</h3>
              <p className="text-gray-600 text-sm">
                協会・Meetup・認定制度
                <br />
                <span className="text-gray-400">信頼の構築</span>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-gray-800 font-montserrat font-bold">
                  T
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">ツール</h3>
              <p className="text-gray-600 text-sm">
                Template・Linter・Plugin
                <br />
                <span className="text-gray-400">普及の加速</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="container-base py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center font-montserrat">
            3フェーズロードマップ
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            証明 → 伝播 → 定着
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-sm text-gray-500 mb-2">Phase 1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
                証明
              </h3>
              <p className="text-gray-500 text-sm mb-4">0-18ヶ月</p>
              <p className="text-gray-700 mb-4">
                「TIPは本当に機能する」を統計的有意差で実証する
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 自社実験（mirror適用）</li>
                <li>• パイロット企業3-5社</li>
                <li>• ケーススタディ5本</li>
              </ul>
            </div>
            {/* Phase 2 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-sm text-gray-500 mb-2">Phase 2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
                伝播
              </h3>
              <p className="text-gray-500 text-sm mb-4">12-36ヶ月</p>
              <p className="text-gray-700 mb-4">
                「TIPを知る人を増やす」4チャネルで認知拡大
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 論文投稿・書籍出版</li>
                <li>• 認定研修開始</li>
                <li>• TIP協会設立</li>
              </ul>
            </div>
            {/* Phase 3 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-sm text-gray-500 mb-2">Phase 3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
                定着
              </h3>
              <p className="text-gray-500 text-sm mb-4">24-60ヶ月</p>
              <p className="text-gray-700 mb-4">
                「TIPが当たり前になる」業界標準へ
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 導入企業100社</li>
                <li>• 認定者1,000人</li>
                <li>• グローバル展開</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-base py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
          TIPを始める
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          まずは核心4原則を覚え、次のタスクで試してみる。
          <br />
          5分で始められる。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tip"
            className="inline-block px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            TIPドキュメント
          </Link>
          <a
            href="https://github.com/seediv/good"
            className="inline-block px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
