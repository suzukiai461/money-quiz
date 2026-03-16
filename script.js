const questions = [
    {
        q: "一人暮らしを始めるとき、家賃は収入の何％くらいまでに抑えるのが理想的と言われていますか？",
        choices: ["約10％", "約30％", "約50％", "約70％"],
        correct: 1,
        desc: "一般的に、家賃は手取り収入の3分の1（約30％）以内に収めると、生活が安定しやすいと言われています。"
    },
    {
        q: "「生きるために必要なもの」と「あれば嬉しいもの」を区別する考え方を何と言いますか？",
        choices: ["ギブとテイク", "キャッシュとマネー", "ニーズとウォンツ", "リスクとリターン"],
        correct: 2,
        desc: "生活に必要な「ニーズ（Needs）」と、自分の欲求である「ウォンツ（Wants）」を分けて考えることが節約の第一歩です。"
    },
    {
        q: "毎月の決まった収入から、まず貯金する分を先に引いて、残ったお金で生活することを何と言いますか？",
        choices: ["衝動買い", "先取り貯金", "後回し貯金", "投資信託"],
        correct: 1,
        desc: "余った分を貯めるのではなく、最初に貯金分を確保するのが確実にお金を貯めるコツです。"
    },
    {
        q: "電気代、水道代、ガス代などをまとめて何と呼びますか？",
        choices: ["公共料金", "通信料", "教養娯楽費", "保険料"],
        correct: 0,
        desc: "生活に欠かせない公共サービスを利用するために支払う費用のことです。"
    },
    {
        q: "将来、結婚や住宅購入など、人生の大きな変化のことを何と言いますか？",
        choices: ["ライフイベント", "タイムスリップ", "サイドビジネス", "キャリアパス"],
        correct: 0,
        desc: "人生の節目節目で大きなお金が必要になることがあるため、計画性が大切です。"
    },
    {
        q: "会社から支払われる額面（総支給額）から、税金などが引かれた後の「実際に受け取れる金額」を何と言いますか？",
        choices: ["手取り", "年収", "基本給", "ボーナス"],
        correct: 0,
        desc: "給与明細には総額と、そこから引かれた金額、そして実際に振り込まれる「手取り」が書かれています。"
    },
    {
        q: "給料から引かれるお金のうち、医療や年金のために使われる仕組みを何と言いますか？",
        choices: ["消費税", "社会保険", "交通費", "入場料"],
        correct: 1,
        desc: "みんなで少しずつお金を出し合って、病気や老後に備える助け合いの仕組みです。"
    },
    {
        q: "中学生でもアルバイトをすることはできますか？",
        choices: ["いつでもできる", "届け出ればできる", "原則として、義務教育を終えるまではできない", "24時間いつでもできる"],
        correct: 2,
        desc: "労働基準法により、子どもの成長を妨げないよう、原則として中学生の就労は禁止されています。"
    },
    {
        q: "働くことの目的として、適切でないものはどれですか？",
        choices: ["お金を得て生活を安定させる", "自分の得意なことを社会に役立てる", "他人を困らせるため", "自己実現や成長のため"],
        correct: 2,
        desc: "仕事は社会に貢献し、その対価として報酬を得る素晴らしい活動です。"
    },
    {
        q: "正社員、パート、アルバイトなど、働き方のスタイルのことを何と言いますか？",
        choices: ["雇用形態", "趣味", "部活動", "血液型"],
        correct: 0,
        desc: "将来、どのような形で働くかによって、給料の仕組みや補償の内容が変わってきます。"
    },
    {
        q: "お店で商品を買うという行為は、法律的にはどのような行為になりますか？",
        choices: ["譲渡", "契約", "貸借", "寄付"],
        correct: 1,
        desc: "お金を払って商品を受け取るのは、お互いの合意に基づいた「契約」です。"
    },
    {
        q: "スマートフォンでアプリをダウンロードする際、最初に同意ボタンを押す文書を何と言いますか？",
        choices: ["招待状", "利用規約", "通知表", "ラブレター"],
        correct: 1,
        desc: "ルールや注意事項が書かれています。トラブルを防ぐために必ず確認しましょう。"
    },
    {
        q: "一度契約した後でも、一定期間内であれば無条件で契約を解除できる仕組みを何と言いますか？",
        choices: ["クーリング・オフ", "チェンジ・アップ", "ストップ・ウォッチ", "タイム・セール"],
        correct: 0,
        desc: "強引な勧誘などで思わず契約してしまったときのために、消費者を守るルールがあります。"
    },
    {
        q: "クレジットカードとデビットカードの大きな違いは何ですか？",
        choices: ["クレジットは後払い、デビットは即時払い", "クレジットは現金、デビットは金券", "クレジットは18歳未満限定、デビットは18歳以上限定", "特に違いはない"],
        correct: 0,
        desc: "クレジットカードは将来の支払い能力を信用して後払いする仕組みです。"
    },
    {
        q: "インターネットで買い物をする際、セキュリティ上注意すべき点はどれですか？",
        choices: ["どんなサイトでもパスワードは同じにする", "安ければ怪しいサイトでも入力して良い", "公式の、信頼できるサイトかどうか確認する", "個人情報はどんどん公開する"],
        correct: 2,
        desc: "偽のサイトに騙されないよう、常に正しい情報を確認する習慣をつけましょう。"
    },
    {
        q: "有名企業や銀行を装ったメールを送り、偽のサイトに誘導してパスワードなどを盗む詐欺を何と言いますか？",
        choices: ["フィッシング詐欺", "フィッシング教室", "キャンプ詐欺", "サッカー詐欺"],
        correct: 0,
        desc: "魚を釣るように、巧妙な手口で情報を盗むことからこう呼ばれます。"
    },
    {
        q: "SNSを通じて「誰でも簡単に高額な収入が得られる」という広告があった場合、どうすべきですか？",
        choices: ["すぐに申し込む", "怪しいと思い、無視する", "友達にも勧める", "全部自分の個人情報を教える"],
        correct: 1,
        desc: "甘い言葉には裏があることが多いです。慎重に判断しましょう。"
    },
    {
        q: "「マルチ商法」と呼ばれる、商品を紹介して新しい会員を増やすことで報酬が得られる仕組みのトラブルについて正しいのはどれですか？",
        choices: ["簡単に稼げるので安心", "友達との信頼関係を壊すリスクが高い", "国が推奨している", "子どもなら誰でもやって良い"],
        correct: 1,
        desc: "無理な勧誘がトラブルを生みやすく、大切な人間関係を失うこともあります。"
    },
    {
        q: "もしもお金のトラブルに巻き込まれたとき、相談できる公共の窓口はどこですか？",
        choices: ["消費者ホットライン「188」", "天気予報", "時報", "郵便番号の問い合わせ"],
        correct: 0,
        desc: "「いやや（188）」と覚えてください。全国の消費生活センターにつながります。"
    },
    {
        q: "インターネットの掲示板などで、銀行口座を売ったり買ったりする行為はどうなりますか？",
        choices: ["自由に行って良い", "お小遣い稼ぎになるので推奨される", "犯罪になり、罰せられる", "銀行が喜びぶ"],
        correct: 2,
        desc: "自分の口座を他人に譲ることは犯罪に関担することになり、非常に危険です。"
    },
    {
        q: "将来の夢や目標を、お金の面から計画することを何と言いますか？",
        choices: ["ライフプランニング", "イベントカレンダー", "料理レシピ", "旅行ガイド"],
        correct: 0,
        desc: "いつまでに、どのくらいのお金が必要かを知ることで、夢の実現に近づけます。"
    },
    {
        q: "銀行にお金を預けたとき、預けた期間や金額に応じて受け取れる「お礼のお金」を何と言いますか？",
        choices: ["参加費", "利息", "入場料", "お年玉"],
        correct: 1,
        desc: "お金を貸したり預けたりしたことの対価です。"
    },
    {
        q: "「利息にさらに利息がつく」ことで、お金が効率よく増えていく仕組みを何と言いますか？",
        choices: ["無理", "複利", "単発", "福利厚生"],
        correct: 1,
        desc: "時間をかけると大きな力になります。複利の効果は早いうちに知っておくと得です。"
    },
    {
        q: "高い利益が期待できるものほど、損をする可能性も大きくなる関係を何と言いますか？",
        choices: ["ハイリスク・ハイリターン", "ローリスク・ハイリターン", "ノーリスク・ノーリターン", "ハイリスク・ノーリターン"],
        correct: 0,
        desc: "世の中に「絶対儲かる、リスクなし」という話はないということを覚えておきましょう。"
    },
    {
        q: "投資先を一つに絞らず、複数のものに分けることで、全体が受ける損失を小さくする工夫を何と言いますか？",
        choices: ["分散投資", "一点集中", "爆買い", "全額貯金"],
        correct: 0,
        desc: "「卵を一つのカゴに盛るな」という格言があります。リスクを分散することが大切です。"
    },
    {
        q: "私たちが買い物をしたときに、代金の一部として国や自治体に納める税金は何ですか？",
        choices: ["消費税", "所得税", "重量税", "自動車税"],
        correct: 0,
        desc: "現在、日本では商品の価格の10％（一部8％）が消費税となっています。"
    },
    {
        q: "集められた税金は、主に何のために使われていますか？",
        choices: ["公務員の贅沢のため", "公共サービス（道路、公園、警察、教育など）", "全部海外に寄付する", "貯金して使わない"],
        correct: 1,
        desc: "私たちが安心して生活できる社会を維持するために使われています。"
    },
    {
        q: "価値を長期間取っておけるお金の機能はどれですか？",
        choices: ["交換機能", "尺度機能", "保存機能", "移動機能"],
        correct: 2,
        desc: "お魚は腐ってしまいますが、お金に換えておけば将来使うことができる「保存機能」があります。"
    },
    {
        q: "物価（モノの値段）が上がり続けて、お金の価値が下がってしまう現象を何と言いますか？",
        choices: ["インフレーション", "デフレーション", "グラデーション", "イントネーション"],
        correct: 0,
        desc: "同じ100円でも、買えるモノが少なくなってしまう状態をインフレと呼びます。"
    },
    {
        q: "成年（18歳）になると、親の同意がなくてもできることは何ですか？",
        choices: ["親に内緒で高額なローンを組む", "自分の意志でクレジットカードの契約をする", "法律を無視する", "すべての義務を免除される"],
        correct: 1,
        desc: "18歳から成人となり、法的な責任を自分で負うことになります。契約の重みが変わります。"
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let availableQuestions = []; // 追加: まんべんなく出題するためのプール

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const allQuestionsScreen = document.getElementById('all-questions-screen'); // 追加: 一覧画面
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const feedbackContainer = document.getElementById('feedback-container');
const resultText = document.getElementById('result-text');
const explanationText = document.getElementById('explanation-text');
const nextBtn = document.getElementById('next-btn');
const questionNumber = document.getElementById('question-number');
const progressFill = document.getElementById('progress-fill');
const keywordContainer = document.getElementById('keyword-container'); // 追加: キーワードエリア
const viewAllBtn = document.getElementById('view-all-btn'); // 追加: 一覧ボタン
const allQuestionsList = document.getElementById('all-questions-list'); // 追加: 一覧表示エリア

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', startQuiz);
document.getElementById('back-to-result-btn').addEventListener('click', showResult); // 追加: 結果へ戻る
document.getElementById('back-to-top-btn').addEventListener('click', () => { // 追加: トップへ戻る
    allQuestionsScreen.classList.remove('active');
    startScreen.classList.add('active');
});
viewAllBtn.addEventListener('click', showAllQuestions); // 追加: 一覧表示ボタンのイベント
nextBtn.addEventListener('click', nextQuestion);

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    
    // 出題可能な問題が5問未満になったら、全30問をリセットしてシャッフルする
    if (availableQuestions.length < 5) {
        availableQuestions = [...questions];
        for (let i = availableQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableQuestions[i], availableQuestions[j]] = [availableQuestions[j], availableQuestions[i]];
        }
    }
    
    // 配列の先頭から5問を取り出して今回の問題にする
    currentQuestions = availableQuestions.splice(0, 5);

    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');

    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    questionText.innerText = q.q;
    questionNumber.innerText = `第 ${currentQuestionIndex + 1} 問 / 5`;
    progressFill.style.width = `${(currentQuestionIndex / 5) * 100}%`;

    choicesContainer.innerHTML = '';
    feedbackContainer.style.display = 'none';

    q.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.innerText = choice;
        btn.classList.add('btn', 'choice-btn');
        btn.addEventListener('click', () => selectChoice(index));
        choicesContainer.appendChild(btn);
    });
}

function selectChoice(index) {
    const q = currentQuestions[currentQuestionIndex];
    const buttons = choicesContainer.getElementsByTagName('button');

    // 他のボタンを押せなくする
    for (let btn of buttons) {
        btn.disabled = true;
    }

    if (index === q.correct) {
        score++;
        resultText.innerText = "⭕ 正解！";
        resultText.style.color = "#78e08f";
        buttons[index].classList.add('correct');
    } else {
        resultText.innerText = "❌ 不正解...";
        resultText.style.color = "#fab1a0";
        buttons[index].classList.add('incorrect');
        buttons[q.correct].classList.add('correct');
    }

    explanationText.innerText = q.desc;
    feedbackContainer.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.remove('active');
    allQuestionsScreen.classList.remove('active'); // 追加: 念のため一覧画面も非表示に
    resultScreen.classList.add('active');

    document.getElementById('score').innerText = score;
    const msg = document.getElementById('result-message');
    
    // キーワード表示と全問題閲覧ボタンの制御
    if (score === 5) {
        msg.innerText = "完璧です！将来のお金マスターになれるかもしれませんね。";
        keywordContainer.style.display = 'block'; // 5問正解ならキーワード表示
        viewAllBtn.style.display = 'block'; // 全問題閲覧ボタンも表示
    } else {
        keywordContainer.style.display = 'none'; // それ以外は隠す
        viewAllBtn.style.display = 'none'; // 全問題閲覧ボタンも隠す
        if (score >= 4) {
            msg.innerText = "素晴らしい！基本的な知識がしっかり身についています。";
        } else if (score >= 2) {
            msg.innerText = "まずまずです。間違えたところを復習して、さらに理解を深めましょう。";
        } else {
            msg.innerText = "これから少しずつ学んでいきましょう。自立に向けて一歩ずつ進みましょう！";
        }
    }
}

// 追加: 全問題一覧を表示する関数
function showAllQuestions() {
    resultScreen.classList.remove('active');
    allQuestionsScreen.classList.add('active');
    
    // HTML内にコメントがあるため、要素が空かどうかは子要素(children)の数で判定する
    if (allQuestionsList.children.length === 0) {
        let listHTML = '';
        questions.forEach((q, index) => {
            const correctAnswerText = q.choices[q.correct];
            listHTML += `
                <div class="question-item">
                    <div class="question-title">第 ${index + 1} 問</div>
                    <div class="question-text">${q.q}</div>
                    <div class="question-answer">正解：${correctAnswerText}</div>
                    <div class="question-desc">${q.desc}</div>
                </div>
            `;
        });
        allQuestionsList.innerHTML = listHTML;
    }
}
