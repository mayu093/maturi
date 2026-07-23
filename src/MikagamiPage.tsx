import { useEffect, useState } from "react";
import "./mikagami.css";

export default function MikagamiPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const experienceCards = [
    {
      num: "01",
      title: (
        <>
          水月鏡花
          <br />
          （水上LED＆灯籠アート）
        </>
      ),
      desc: "伊勢湾の波打ち際に揺らめく数百の光。幾何学模様を描く水上ライティングが、夜の海面を静かな舞台へと変えます。",
    },
    {
      num: "02",
      title: (
        <>
          海上BAR
          <br />
          Aquaria
        </>
      ),
      desc: "波音とセントレアの夜景を背に、バタフライピーを使った限定カクテルを味わう特別席。移ろう色彩を眺めながら過ごす一杯。",
    },
    {
      num: "03",
      title: (
        <>
          涼ミストテラス
          <br />＆ 割烹屋台
        </>
      ),
      desc: "幻想的な雲海ミストのなか、冷やし出汁そうめんや透明な水硝子ゼリーに舌鼓。涼と美食が交わるテラス空間です。",
    },
  ];

  const schedule = [
    {
      time: "18:00",
      title: "Opening & Sunset",
      desc: "開場・伊勢湾に沈む夕陽とアンビエント音楽のスタート",
    },
    {
      time: "19:00",
      title: "Lighting Ignition",
      desc: "水上LED・灯籠の点灯セレモニー",
    },
    {
      time: "20:00",
      title: "Floating Lanterns",
      desc: "水上BARオープン ＆ メッセージ流し灯籠体験",
    },
    {
      time: "21:30",
      title: "Final Lighting Show",
      desc: "光と音の演出フィナーレ",
    },
    { time: "22:00", title: "Closing", desc: "閉場" },
  ];

  return (
    <div className="mikagami">
      <div className="ripple-bg" />

      <header className={scrolled ? "scrolled" : ""}>
        <div className="logo">
          <span className="logo-title">水鏡の夏夜祭</span>
          <span className="en">— MIZUKAGAMI —</span>
        </div>
        <nav>
          <div className="links">
            <a className="navlink" href="#concept">
              Concept
            </a>
            <a className="navlink" href="#experience">
              Experience
            </a>
            <a className="navlink" href="#schedule">
              Schedule
            </a>
            <a className="navlink" href="#access">
              Access
            </a>
          </div>
          <a className="cta-btn" href="#tickets">
            事前チケット購入
          </a>
        </nav>
      </header>

      <section id="hero">
        <p className="eyebrow">2026.08.01 SAT — 常滑りんくうビーチ</p>
        <h1>
          水面に沈む月と、揺れる光。
          <br />
          <span className="accent">今夜、大人の夏</span>がひらく。
        </h1>
        <p className="sub">
          開催日：2026.08.01（Sat）18:00 – 22:00
          <br />
          場所：愛知・常滑りんくうビーチ
        </p>
        <div className="cta-wrap">
          <a className="big-cta" href="#tickets">
            限定入場チケットを予約する
          </a>
        </div>
        <div className="scroll-cue">
          <span>SCROLL</span>
          <span className="line" />
        </div>
      </section>

      <section id="concept">
        <div className="concept-divider" />
        <span className="eyebrow-tag">CONCEPT</span>
        <h2>五感で涼む、大人のための幻想的な夏祭り</h2>
        <p>
          騒々しい日常を離れ、静かな海辺へと誘う一夜。8月1日、常滑りんくうビーチが光と水のアート空間へと姿を変えます。
          波音に耳を澄ませ、グラスを傾け、水面に浮かぶ灯火を眺める。
          ここにあるのは、五感で涼む、大人のための幻想的な夏祭りです。
        </p>
      </section>

      <section id="experience">
        <div className="section-head">
          <span className="eyebrow-tag" style={{ justifyContent: "center" }}>
            EVENT EXPERIENCE
          </span>
          <h2>三つの特別体験</h2>
        </div>
        <div className="cards">
          {experienceCards.map((card) => (
            <div className="card" key={card.num}>
              <span className="num">{card.num}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="schedule">
        <div className="section-head">
          <span className="eyebrow-tag" style={{ justifyContent: "center" }}>
            TIME SCHEDULE
          </span>
          <h2>タイムスケジュール</h2>
        </div>
        <div className="timeline">
          {schedule.map((item) => (
            <div className="t-item" key={item.time}>
              <span className="t-time">{item.time}</span>
              <span className="t-dot" />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="access">
        <div className="section-head">
          <span className="eyebrow-tag" style={{ justifyContent: "center" }}>
            LOCATION &amp; ACCESS
          </span>
          <h2>会場・常滑りんくうビーチ</h2>
        </div>
        <div className="access-grid">
          <div className="access-info">
            <div className="access-row">
              <div className="label">会場</div>
              <div className="value">
                常滑りんくうビーチ 特設会場
                <br />
                愛知県常滑市りんくう町2丁目
              </div>
            </div>
            <div className="access-row">
              <div className="label">電車</div>
              <div className="value">
                名鉄空港線「りんくう常滑駅」徒歩13分
                <br />
                名鉄「中部国際空港駅」タクシー5分
              </div>
            </div>
            <div className="access-row">
              <div className="label">お車</div>
              <div className="value">
                知多横断道路「りんくうIC」よりすぐ
                <br />
                （※事前予約制VIP駐車場あり）
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="tickets">
        <div className="ticket-wrap">
          <span className="eyebrow-tag" style={{ justifyContent: "center" }}>
            TICKET
          </span>
          <h2>完全事前予約制</h2>
          <div className="ticket-cards">
            <div className="ticket-card vip">
              <div className="tname">VIP チケット（BAR利用権付き）</div>
              <div className="price">¥5,000</div>
              <div className="desc">
                海上BAR Aquariaの利用権付き。VIP駐車場のご予約も可能です。
              </div>
              <a className="buy" href="#">
                予約する
              </a>
            </div>
            <div className="ticket-card">
              <div className="tname">一般入場チケット</div>
              <div className="price">¥2,500</div>
              <div className="desc">
                全ての光のアート・タイムスケジュールをお楽しみいただけます。
              </div>
              <a className="buy" href="#">
                予約する
              </a>
            </div>
          </div>
        </div>
        <div className="footer-notes">
          <p>雨天決行・荒天中止</p>
          <div className="copyright">
            © 2026 水鏡の夏夜祭実行委員会 — MIZUKAGAMI ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
