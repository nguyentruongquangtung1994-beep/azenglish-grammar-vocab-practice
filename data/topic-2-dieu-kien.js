window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['dieu-kien'] = {
  id: 'dieu-kien',
  order: 2,
  title: 'Câu Điều Kiện',
  subtitle: 'Conditional Sentences',
  sourceExercises: 'toeic-practice-book-offset.pdf',
  sourceTheory: 'azgrammar-2nd-edition.pdf',

  theory: [
    {
      group: '5 loại câu điều kiện',
      tenses: [
        {
          name: 'LOẠI 0 — Sự thật hiển nhiên',
          form: 'If + hiện tại đơn, hiện tại đơn',
          usage: ['Quy luật tự nhiên, sự việc luôn đúng — If you heat water to 100°C, it boils.', 'Nhờ vả, yêu cầu, nhắn nhủ — If you meet him, give him this letter.', 'Có thể thay IF bằng WHEN mà không đổi nghĩa.'],
          signals: 'Cả 2 vế đều hiện tại đơn'
        },
        {
          name: 'LOẠI 1 — Có thể xảy ra ở tương lai',
          form: 'If + hiện tại đơn, tương lai đơn',
          usage: ['Tình huống có khả năng xảy ra — If it rains, I will stay at home.', 'Đảo ngữ: Should + S + V0, tương lai đơn — Should he come, we will go to the cinema.'],
          signals: 'if-clause hiện tại đơn, mệnh đề chính will/can/may + V0'
        },
        {
          name: 'LOẠI 2 — Không có thật ở hiện tại',
          form: 'If + quá khứ đơn, S + could/would/might + V0',
          usage: ['Giả định trái với thực tế hiện tại — If I were you, I wouldn’t buy that dress.', 'Luôn dùng WERE cho mọi ngôi khi chia "to be".', 'Đảo ngữ: Were + S…, S + would/could/might + V0 — Were I you, I wouldn’t buy that dress.'],
          signals: 'if-clause quá khứ đơn, mệnh đề chính would/could/might + V0'
        },
        {
          name: 'LOẠI 3 — Không có thật ở quá khứ (tiếc nuối)',
          form: 'If + quá khứ hoàn thành, S + could/would/might + have Ved/V3',
          usage: ['Diễn tả điều không xảy ra trong quá khứ, thể hiện tiếc nuối — If you had arrived sooner, you would have seen a famous singer.', 'Đảo ngữ: Had + S + Ved/V3, … — Had I seen you, I would have said hello.'],
          signals: 'if-clause quá khứ hoàn thành (had + Vpp), mệnh đề chính would/could/might + have + Vpp'
        },
        {
          name: 'MIXED CONDITIONAL — Điều kiện hỗn hợp',
          form: '(1) If + QKHT, S + would + V0  ·  (2) If + QKĐ, S + would have + Vpp',
          usage: ['(1) Điều kiện không xảy ra trong QUÁ KHỨ → kết quả không có thật ở HIỆN TẠI — If I had studied harder, I would be more successful now.', '(2) Điều kiện không có thật ở HIỆN TẠI → kết quả thay đổi trong QUÁ KHỨ — If I were you, I would have apologized.'],
          signals: 'Chú ý mốc thời gian của từng vế không trùng nhau'
        }
      ]
    },
    {
      group: 'Mẹo làm bài TOEIC liên quan',
      tip: [
        'UNLESS = IF … NOT (trừ khi/nếu không) — You won’t pass the exam unless you study harder. = …if you don’t study harder.',
        'AS IF / AS THOUGH (như thể là) dùng để giả định điều không có thật — He looks at me as if I had insulted him. (như thể tôi đã xúc phạm anh ấy — nhưng thực ra không).',
        'Khi câu hỏi cho 2 chỗ trống liền nhau kiểu "Had he had…", hãy xác định loại câu điều kiện qua mệnh đề còn lại trước, rồi suy ngược cấu trúc đảo ngữ tương ứng.',
        'Đảo ngữ chỉ bỏ được "if" khi if-clause có trợ động từ was/were/had/should ở đầu — không áp dụng đảo ngữ cho loại 0 và loại 1 thông thường (trừ dạng "Should + S + V0" của loại 1).',
        'Sau UNLESS/IF, không bao giờ dùng "will/would" trong chính if-clause đó (giống quy tắc mệnh đề thời gian ở chủ điểm Các Thì) — will/would chỉ nằm ở mệnh đề chính.'
      ]
    }
  ],

  quizzes: [
    {
      id: 'dk-1', title: '1. Nhận diện 3 loại điều kiện cơ bản',
      items: [
        {q:'If you ------ a choice, which country would you visit?', choices:['have','had','have had','will have'], correct:1, explain:'Dịch: Nếu có quyền lựa chọn, bạn sẽ đi nước nào? — Giải thích: mệnh đề chính "would visit" → điều kiện loại 2 (giả định không có thật ở hiện tại) → if-clause chia quá khứ đơn "had". Mẹo thêm: "have a choice" (có quyền lựa chọn) là cụm cố định với "have", không dùng "make a choice" trong ngữ cảnh này (make a choice = đưa ra lựa chọn, khác sắc thái).'},
        {q:'If she ------ him, she would be very happy.', choices:['met','will meet','is meeting','should meet'], correct:0, explain:'Dịch: Nếu cô ấy gặp anh ấy, cô ấy sẽ rất hạnh phúc. — Giải thích: "would be" → loại 2 → if-clause quá khứ đơn "met". Mẹo thêm: động từ "meet" ở quá khứ đơn có dạng bất quy tắc "met" (meet–met–met), không thêm "-ed".'},
        {q:'If I had enough money, I ------ abroad to improve my English.', choices:['will go','would go','should go','should have to go'], correct:1, explain:'Dịch: Nếu tôi có đủ tiền, tôi sẽ đi nước ngoài để cải thiện tiếng Anh. — Giải thích: if-clause "had" (quá khứ đơn) → loại 2 → mệnh đề chính "would go". Mẹo thêm: "go abroad" (đi nước ngoài) không cần giới từ "to" trước "abroad" — khác với "go to + tên nước cụ thể".'},
        {q:'Do you think there would be less conflict in the world if all people ------ the same language?', choices:['spoke','speak','had spoken','will speak'], correct:0, explain:'Dịch: Bạn có nghĩ thế giới sẽ ít xung đột hơn nếu mọi người nói cùng một ngôn ngữ không? — Giải thích: "would be" → loại 2 → if-clause quá khứ đơn "spoke". Mẹo thêm: mệnh đề "if" có thể đứng SAU mệnh đề chính (như trong câu này) mà không đổi ý nghĩa hay cách chia thì — thứ tự 2 mệnh đề trong câu điều kiện luôn linh hoạt.'},
        {q:'Unless you ------ all of my questions, I can’t do anything to help you.', choices:['answered','answer','would answer','are answering'], correct:1, explain:'Dịch: Trừ khi bạn trả lời hết câu hỏi của tôi, tôi không thể giúp gì được. — Giải thích: mệnh đề chính "can’t" (hiện tại) → loại 1 → unless + hiện tại đơn "answer". Mẹo thêm: "unless" tự nó đã mang nghĩa phủ định ("nếu không") nên KHÔNG được thêm "not" trong mệnh đề unless (không nói "unless you don’t answer").'},
        {q:'Trees won’t grow ------ there is enough water.', choices:['if','when','unless','as'], correct:2, explain:'Dịch: Cây sẽ không lớn được trừ khi có đủ nước. — Giải thích: "won’t grow … there IS enough water" mang nghĩa phủ định kép → dùng "unless" (= if…not). Mẹo thêm: có thể viết lại câu này thành "Trees will grow only if there is enough water" để kiểm tra lại nghĩa — đây là mẹo "dịch ngược" rất hữu ích khi phân vân giữa if/unless.'},
        {q:'If you ------ to be chosen for the job, you’ll have to be experienced in the field.', choices:['want','wanted','had wanted','wants'], correct:0, explain:'Dịch: Nếu bạn muốn được chọn cho công việc này, bạn phải có kinh nghiệm trong lĩnh vực đó. — Giải thích: mệnh đề chính "you’ll have to" → loại 1 → if-clause hiện tại đơn "want". Mẹo thêm: "be chosen for" (được chọn cho việc gì) là dạng bị động — chủ ngữ "you" là người CHỊU hành động chọn, không phải người chọn.'},
        {q:'The patient could not recover unless he ------ an operation.', choices:['had undergone','would undergo','underwent','was undergoing'], correct:2, explain:'Dịch: Bệnh nhân không thể hồi phục trừ khi anh ta trải qua phẫu thuật. — Giải thích: "could not recover" (quá khứ đơn) hoà hợp thì với "unless + quá khứ đơn" — underwent. Mẹo thêm: "undergo an operation/surgery" (trải qua phẫu thuật) là cụm cố định — "undergo" luôn mang nghĩa trải qua điều gì đó khó khăn/quan trọng, không dùng cho trải nghiệm thông thường.'},
        {q:'"I wish this city ------- so noisy." "I know. I wish we ------ in the countryside."', choices:['isn’t - live','wasn’t - live','weren’t - live','weren’t - lived'], correct:3, explain:'Dịch: "Ước gì thành phố này đừng ồn ào thế." "Đúng vậy. Ước gì chúng ta sống ở vùng quê." — Giải thích: "wish" + hiện tại không có thật → dùng "were" cho mọi ngôi; "wish + quá khứ đơn" cho "lived". Mẹo thêm: cấu trúc "wish" đi với thì tương tự câu điều kiện loại 2 (quá khứ đơn/were) khi ước về hiện tại, và loại 3 (quá khứ hoàn thành) khi ước về quá khứ — rất hay bị nhầm với câu điều kiện thật nhưng KHÔNG có "if".'},
        {q:'------ interested in that subject, I would try to learn more about it.', choices:['Were I','Should I','I was','If I am'], correct:0, explain:'Dịch: Nếu tôi hứng thú với chủ đề đó, tôi sẽ tìm hiểu thêm về nó. — Giải thích: mệnh đề chính "would try" → loại 2 → đảo ngữ "Were I interested…" (= If I were interested…). Mẹo thêm: đảo ngữ loại 2 với "to be" luôn bắt đầu bằng "Were" bất kể chủ ngữ là gì (Were I, Were she, Were they…) — không có dạng "Was I" trong đảo ngữ trang trọng này.'},
        {q:'------ she agreed, you would have done it.', choices:['If','Had','Should','Would'], correct:1, explain:'Dịch: Nếu cô ấy đồng ý, bạn đã làm việc đó rồi. — Giải thích: "would have done" → loại 3 → đảo ngữ "Had she agreed…" (= If she had agreed…). Mẹo thêm: 3 từ dùng để đảo ngữ 3 loại câu điều kiện cần nhớ: WERE (loại 2), SHOULD (loại 1), HAD (loại 3) — không dùng "if" khi đã đảo ngữ.'},
        {q:'If the doctor had arrived sooner, the boy ------.', choices:['might be saved','have been saved','was saved','might have been saved'], correct:3, explain:'Dịch: Nếu bác sĩ đến sớm hơn, cậu bé đã được cứu. — Giải thích: if-clause "had arrived" → loại 3 → mệnh đề chính "might have been saved". Mẹo thêm: "the boy" là người CHỊU hành động cứu (bị động) nên phải có "be" trong cụm động từ: might + have + been + saved (modal + have + been + Vpp, dạng bị động của loại 3).'},
        {q:'If there ------, the rice fields could have been more productive.', choices:['had been enough water','were enough water','would be enough water','are enough water'], correct:0, explain:'Dịch: Nếu có đủ nước, ruộng lúa đã có thể năng suất hơn. — Giải thích: mệnh đề chính "could have been" → loại 3 → if-clause quá khứ hoàn thành "had been enough water". Mẹo thêm: "There is/are + danh từ" khi chuyển sang quá khứ hoàn thành thành "There had been + danh từ" — cấu trúc "there be" vẫn giữ nguyên khi chia các thì khác nhau.'},
        {q:'----- he ----- a thorough knowledge of English, he could have applied for this post.', choices:['Had – had','Had – has','Has – has','Has – had'], correct:0, explain:'Dịch: Nếu anh ấy có kiến thức tiếng Anh vững vàng, anh ấy đã có thể ứng tuyển vị trí này. — Giải thích: "could have applied" → loại 3 → đảo ngữ "Had he had…" (= If he had had…). Mẹo thêm: cụm "Had he had" nhìn rối nhưng thực chất "Had" đầu là trợ động từ đảo ngữ, "had" sau là động từ chính "have" (có) ở dạng quá khứ phân từ — đây là hiện tượng 2 "had" liên tiếp khá phổ biến trong câu điều kiện loại 3.'},
        {q:'It seemed as if he ------ of it before.', choices:['would never hear','has never heard','never heard','had never heard'], correct:3, explain:'Dịch: Có vẻ như trước đó anh ấy chưa từng nghe về việc này. — Giải thích: "as if" diễn tả điều xảy ra TRƯỚC thời điểm "seemed" (quá khứ) → quá khứ hoàn thành "had never heard". Mẹo thêm: "hear of something" (nghe nói/biết về việc gì) khác với "hear something" (nghe thấy âm thanh gì) — chú ý giới từ "of" khi nói về việc "biết đến" một thông tin.'}
      ]
    },
    {
      id: 'dk-2', title: '2. Đảo ngữ, mệnh đề hỗn hợp & "wish/as if"',
      items: [
        {q:'------ today, she would get home by Friday.', choices:['Would she leave','Was she leaving','Were she to leave','If she leaves'], correct:2, explain:'Dịch: Nếu hôm nay cô ấy rời đi, cô ấy sẽ về nhà kịp thứ Sáu. — Giải thích: mệnh đề chính "would get" → loại 2 → đảo ngữ "Were she to leave…" (= If she left / were to leave…). Mẹo thêm: cấu trúc "Were + S + to V0" là một biến thể trang trọng của loại 2, nhấn mạnh tính giả định/ít chắc chắn hơn so với "If + S + quá khứ đơn" thông thường.'},
        {q:'"He’s a very brave man." "Yes, I wish I ------ his courage."', choices:['have','had','will have','would have'], correct:1, explain:'Dịch: "Anh ấy rất dũng cảm." "Đúng vậy, ước gì tôi có được lòng can đảm như anh ấy." — Giải thích: "wish" + điều không có thật ở hiện tại → quá khứ đơn "had". Mẹo thêm: "courage" (lòng can đảm) là danh từ không đếm được, không có dạng số nhiều "courages" — một lỗi chính tả phổ biến cần tránh.'},
        {q:'----- he ----- hard last year, he would have lost the first prize.', choices:['Hadn’t – studied','Had – studied','Didn’t – study','If – had studied'], correct:0, explain:'Dịch: Nếu năm ngoái anh ấy KHÔNG học chăm chỉ, anh ấy đã mất giải nhất rồi (ý là thực tế anh ấy có học chăm và đã đoạt giải). — Giải thích: đảo ngữ phủ định của loại 3: "Hadn’t he studied hard…" (= If he hadn’t studied hard…). Mẹo thêm: khi đảo ngữ câu điều kiện phủ định, "not" có thể rút gọn dính liền với trợ động từ (Hadn’t he…) thay vì tách rời (Had he not…) — cả hai đều đúng ngữ pháp.'},
        {q:'We’re going to be late if ------.', choices:['we not leave right now','we didn’t leave right now','we won’t leave right now','we don’t leave right now'], correct:3, explain:'Dịch: Chúng ta sẽ trễ nếu không đi ngay bây giờ. — Giải thích: mệnh đề chính hiện tại/tương lai gần → loại 1 → if-clause hiện tại đơn phủ định "don’t leave". Mẹo thêm: "be going to" (sắp/sẽ) trong mệnh đề chính vẫn thuộc nhóm "chỉ tương lai" như "will", nên if-clause vẫn tuân theo quy tắc loại 1 bình thường (hiện tại đơn).'},
        {q:'He acted as though he ------ for days.', choices:['not eat','hasn’t eaten','hadn’t eaten','didn’t eat'], correct:2, explain:'Dịch: Anh ấy hành xử như thể đã không ăn gì suốt mấy ngày trời. — Giải thích: "as though" diễn tả điều xảy ra trước hành động quá khứ "acted" → quá khứ hoàn thành "hadn’t eaten". Mẹo thêm: "as though" và "as if" hoàn toàn có thể thay thế nhau về nghĩa và cách chia thì — chọn từ nào chỉ là vấn đề văn phong.'},
        {q:'We ------ the game if we’d had a few more minutes.', choices:['might have won','won','had won','will win'], correct:0, explain:'Dịch: Chúng tôi đã có thể thắng trận đấu nếu có thêm vài phút. — Giải thích: if-clause "we’d had" = "had had" (quá khứ hoàn thành) → loại 3 → mệnh đề chính "might have won". Mẹo thêm: "’d" viết tắt có thể là "would" hoặc "had" tùy ngữ cảnh — ở đây theo sau là "had" (quá khứ phân từ) nên "’d" = "had", không phải "would".'},
        {q:'I ------ William with me if I had known you and he didn’t get along with each other.', choices:['hadn’t brought','didn’t bring','wouldn’t have brought','won’t bring'], correct:2, explain:'Dịch: Tôi đã không mang William theo nếu biết bạn và anh ấy không hợp nhau. — Giải thích: if-clause "had known" → loại 3 → mệnh đề chính "wouldn’t have brought". Mẹo thêm: "get along with each other" (hợp nhau, hòa thuận với nhau) — "each other" luôn dùng khi nói về sự tương tác qua lại giữa 2 người/nhóm.'},
        {q:'If you ------ to my advice in the first place, you wouldn’t be in this mess right now.', choices:['listen','will listen','had listened','listened'], correct:2, explain:'Dịch: Nếu ngay từ đầu bạn nghe lời khuyên của tôi, thì bây giờ bạn đã không gặp rắc rối này. — Giải thích: điều kiện hỗn hợp — nguyên nhân ở QUÁ KHỨ ("in the first place") + kết quả ở HIỆN TẠI ("right now") → if-clause quá khứ hoàn thành "had listened". Mẹo thêm: "listen to someone’s advice" luôn cần giới từ "to" — không nói "listen someone’s advice".'},
        {q:'I ------ you sooner had someone told me you were in the hospital.', choices:['would have visited','visited','had visited','visit'], correct:0, explain:'Dịch: Tôi đã đến thăm bạn sớm hơn nếu có ai đó báo cho tôi biết bạn đang nằm viện. — Giải thích: "had someone told me" là đảo ngữ if-clause loại 3 → mệnh đề chính "would have visited". Mẹo thêm: mệnh đề chính đứng TRƯỚC if-clause đảo ngữ trong câu này — thứ tự này khá thường gặp trong văn viết trang trọng/báo chí.'},
        {q:'------ then what I know today, I would have saved myself a lot of time and trouble over the years.', choices:['Had I known','Did I know','If I know','If I would know'], correct:0, explain:'Dịch: Nếu khi đó tôi biết được những gì tôi biết hôm nay, tôi đã tiết kiệm được bao thời gian và rắc rối. — Giải thích: mệnh đề chính "would have saved" → loại 3 → đảo ngữ "Had I known…". Mẹo thêm: "save oneself + danh từ" (tiết kiệm cho bản thân điều gì) — cấu trúc phản thân này khác với "save + danh từ" (tiết kiệm/cứu điều gì) thông thường.'},
        {q:'Had you told me that this was going to happen, I ------ it.', choices:['would never have believed','don’t believe','hadn’t believed','can’t believe'], correct:0, explain:'Dịch: Nếu bạn đã nói với tôi rằng chuyện này sẽ xảy ra, tôi đã không bao giờ tin điều đó. — Giải thích: "Had you told…" (đảo ngữ loại 3) → mệnh đề chính "would never have believed". Mẹo thêm: "never" trong mệnh đề chính đứng giữa "would" và "have" (would never have believed) — đúng vị trí chuẩn của trạng từ tần suất trong cấu trúc động từ phức.'},
        {q:'If Jake ------ to go on the trip, would you have gone?', choices:['doesn’t agree','didn’t agree','hadn’t agreed','wouldn’t agree'], correct:2, explain:'Dịch: Nếu Jake đã không đồng ý đi chuyến đi đó, liệu bạn có đi không? — Giải thích: mệnh đề chính "would you have gone" → loại 3 → if-clause quá khứ hoàn thành phủ định "hadn’t agreed". Mẹo thêm: "go on a trip" (đi một chuyến du lịch/công tác) là cụm cố định với giới từ "on", không dùng "go in/at a trip".'},
        {q:'If you pass your examination we ------ a celebration.', choices:['have','will have','would have had','would have'], correct:1, explain:'Dịch: Nếu bạn thi đậu, chúng tôi sẽ tổ chức ăn mừng. — Giải thích: if-clause "pass" (hiện tại đơn) → loại 1 → mệnh đề chính "will have". Mẹo thêm: "have a celebration" = "celebrate" (tổ chức ăn mừng) — "have" ở đây không mang nghĩa sở hữu mà đi cùng danh từ chỉ hoạt động, giống "have a party/have a meeting".'},
        {q:'The meeting ------ more productive if the agenda had been prepared beforehand.', choices:['is','was','would be','would have been'], correct:3, explain:'Dịch: Cuộc họp đã có thể hiệu quả hơn nếu chương trình nghị sự được chuẩn bị trước. — Giải thích: if-clause "had been prepared" → loại 3 → mệnh đề chính "would have been". Mẹo thêm: "the agenda" (chương trình nghị sự) là chủ ngữ BỊ chuẩn bị (bị động: had been prepared) — phân biệt với "prepare the agenda" (chủ động, ai đó chuẩn bị nó).'}
      ]
    }
  ],

  vocab: [
    {word:'undeniable', ipa:'/ˌʌndɪˈnaɪəbəl/', meaning:'không thể phủ nhận', example:'It is undeniable that practice improves fluency.', note:'phủ định của deniable'},
    {word:'sooner', ipa:'/ˈsuːnər/', meaning:'sớm hơn', example:'If the doctor had arrived sooner, the boy might have been saved.', note:'so sánh hơn của soon'},
    {word:'undergo an operation', ipa:'/ˌʌndərˈɡoʊ/', meaning:'trải qua ca phẫu thuật', example:'The patient could not recover unless he underwent an operation.', note:'undergo–underwent–undergone'},
    {word:'get along with', ipa:'/ɡet əˈlɔːŋ wɪð/', meaning:'hợp nhau, hòa thuận với ai', example:'I wouldn’t bring him if he didn’t get along with you.', note:'cụm động từ thường gặp trong Part 5'},
    {word:'first-hand', ipa:'/ˌfɜːrstˈhænd/', meaning:'trực tiếp, tận mắt', example:'She learned first-hand what it takes to run a business.', note:'trái nghĩa: second-hand'},
    {word:'thorough', ipa:'/ˈθʌroʊ/', meaning:'kỹ lưỡng, đầy đủ', example:'Had he had a thorough knowledge of English, he could have applied.', note:'danh từ: thoroughness'},
    {word:'mess', ipa:'/mes/', meaning:'tình trạng lộn xộn, rắc rối', example:'You wouldn’t be in this mess if you had listened to my advice.', note:'thành ngữ: "in a mess"'},
    {word:'countryside', ipa:'/ˈkʌntrisaɪd/', meaning:'vùng nông thôn', example:'I wish we lived in the countryside.', note:'trái nghĩa: city/urban area'},
    {word:'celebration', ipa:'/ˌselɪˈbreɪʃn/', meaning:'lễ ăn mừng', example:'If you pass your examination, we will have a celebration.', note:'động từ: celebrate'},
    {word:'beforehand', ipa:'/bɪˈfɔːrhænd/', meaning:'trước đó, từ trước', example:'The meeting would be more productive if the agenda had been prepared beforehand.', note:'đồng nghĩa: in advance'}
  ]
};
