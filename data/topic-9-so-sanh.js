window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['so-sanh'] = {
  id: 'so-sanh',
  order: 9,
  title: 'Câu So Sánh',
  subtitle: 'Comparison',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6 (dựa trên các cấu trúc bẫy phổ biến nhất)',
  sourceTheory: 'AZ Grammar 2022 (nội bộ AZEnglish)',

  theory: [
    {
      group: 'Phân loại tính từ & 3 cấp so sánh cơ bản',
      tip: [
        'Tính từ ngắn (1 âm tiết, hoặc 2 âm tiết kết thúc bằng "y"): so sánh hơn thêm "-er", so sánh nhất thêm "the -est". Ví dụ: high→higher→the highest, early→earlier→the earliest.',
        'Tính từ dài (từ 2 âm tiết trở lên, không kết thúc bằng "y"): so sánh hơn dùng "more + adj", so sánh nhất dùng "the most + adj". Ví dụ: efficient→more efficient→the most efficient.',
        'So sánh ngang bằng: "S + be/V + as + adj/adv (nguyên thể) + as". Phủ định: "not as/so + adj + as".',
        'Tính từ/trạng từ bất quy tắc cần nhớ: good/well→better→the best, bad→worse→the worst, far→farther/further→the farthest/furthest, little→less→the least, many/much→more→the most.'
      ]
    },
    {
      group: 'So sánh nâng cao & dấu hiệu nhận biết',
      tip: [
        'So sánh gấp bội: "twice/three times/four times + as + adj + as" (gấp đôi/ba/bốn lần).',
        'So sánh kép (càng...càng...): "The + so sánh hơn + S + V, the + so sánh hơn + S + V". Ví dụ: The more you practice, the better you become.',
        'Tăng dần theo thời gian (ngày càng...): tính từ ngắn lặp "-er and -er" (bigger and bigger), tính từ dài dùng "more and more + adj".',
        'Chỉ so sánh giữa HAI đối tượng ("of the two", "between the two") → dùng so sánh HƠN, KHÔNG dùng so sánh nhất dù nghĩa tiếng Việt có thể dịch là "nhất".',
        'So sánh giữa từ BA đối tượng trở lên ("of all", "among all", "in the department/company") → dùng so sánh NHẤT, luôn có "the" đứng trước.',
        'Cấu trúc "one of the + so sánh nhất + N số nhiều" (một trong những... nhất) — danh từ theo sau luôn ở dạng số nhiều.',
        'Trạng từ nhấn mạnh mức độ chênh lệch (far/much/a lot/considerably/significantly) chỉ đứng trước so sánh HƠN/NHẤT, không đứng trực tiếp trước tính từ nguyên thể. "Very" KHÔNG được dùng với so sánh hơn.',
        '"Lately" (gần đây, trạng từ chỉ thời gian) dễ nhầm với "later" (so sánh hơn của "late") — hai từ khác nghĩa hoàn toàn dù nhìn giống nhau.'
      ]
    }
  ],

  quizzes: [
    {
      id: 'ss-1', title: '1. So sánh ngang bằng, hơn, nhất & so sánh gấp bội/kép',
      items: [
        {q:"This year's sales figures are ------ than last year's.", choices:['higher','high','highest','more high'], correct:0, explain:'Dịch: Doanh số năm nay cao hơn năm ngoái. — So sánh hơn với tính từ ngắn "high" (1 âm tiết) → thêm "-er": "higher than". Mẹo thêm: không dùng "more" trước tính từ ngắn — "more high" là lỗi sai phổ biến.'},
        {q:'The new software is ------ than the previous version.', choices:['more efficient','efficienter','most efficient','more efficiently'], correct:0, explain:'Dịch: Phần mềm mới hiệu quả hơn phiên bản trước. — Tính từ dài "efficient" (3 âm tiết) dùng "more + adj" để so sánh hơn, không thêm đuôi "-er". Mẹo thêm: phân biệt với đáp án gây nhiễu "more efficiently" (trạng từ) — sau "is" cần tính từ, không phải trạng từ.'},
        {q:'Of all the candidates, Mr. Tran has ------ experience.', choices:['the most','the more','most','more'], correct:0, explain:'Dịch: Trong số tất cả ứng viên, ông Trần có nhiều kinh nghiệm nhất. — So sánh nhất với danh từ không đếm được "experience" dùng "the most". Mẹo thêm: cụm "of all the + N" là dấu hiệu nhận biết so sánh NHẤT (từ 3 đối tượng trở lên), luôn có "the" đứng trước.'},
        {q:'Please try to arrive as ------ as possible to avoid missing the opening remarks.', choices:['early','earlier','earliest','more early'], correct:0, explain:'Dịch: Vui lòng cố gắng đến càng sớm càng tốt để không bỏ lỡ phần phát biểu khai mạc. — Cấu trúc "as + adj/adv (nguyên thể) + as possible" (càng...càng tốt) luôn dùng dạng nguyên thể, không chia so sánh hơn/nhất. Mẹo thêm: "as soon as possible", "as much as possible" đều theo mẫu này — rất hay gặp trong email/thông báo TOEIC.'},
        {q:'Customer satisfaction this quarter is not as ------ as we had hoped.', choices:['high','higher','highest','highly'], correct:0, explain:'Dịch: Mức độ hài lòng của khách hàng quý này không cao như chúng tôi mong đợi. — "not as + adj (nguyên thể) + as" diễn tả so sánh ngang bằng ở dạng phủ định (không bằng). Mẹo thêm: giữa 2 "as" luôn là tính từ/trạng từ ở dạng NGUYÊN THỂ, không chia so sánh hơn.'},
        {q:'This is by far the ------ decision the board has ever made.', choices:['worst','worse','bad','more bad'], correct:0, explain:'Dịch: Đây là quyết định tệ nhất mà hội đồng quản trị từng đưa ra. — "bad" là tính từ bất quy tắc: bad → worse (hơn) → the worst (nhất). Mẹo thêm: "by far + so sánh nhất" nhấn mạnh "vượt trội hẳn" — cụm này là dấu hiệu chắc chắn của câu so sánh nhất.'},
        {q:'Employees who arrive early tend to be ------ productive than those who arrive late.', choices:['more','most','much','very'], correct:0, explain:'Dịch: Nhân viên đến sớm có xu hướng làm việc hiệu quả hơn những người đến muộn. — "productive" là tính từ dài, so sánh hơn cần "more + adj + than". Mẹo thêm: "much/very" không tự tạo thành so sánh hơn nếu thiếu "than" — chỉ "more...than" mới đúng cấu trúc so sánh hơn.'},
        {q:'The farther you travel from the city center, the ------ the rent becomes.', choices:['cheaper','cheap','cheapest','more cheap'], correct:0, explain:'Dịch: Càng đi xa trung tâm thành phố, tiền thuê nhà càng rẻ. — Cấu trúc so sánh kép "The + so sánh hơn + S + V, the + so sánh hơn + S + V" (càng...càng...) — vế sau cần "the cheaper" (tính từ ngắn thêm -er). Mẹo thêm: cả 2 vế của câu so sánh kép đều bắt đầu bằng "the" + dạng so sánh hơn, không phải so sánh nhất.'},
        {q:'As the company grows, its logistics needs become ------ and more complex.', choices:['more','most','much','the most'], correct:0, explain:'Dịch: Khi công ty phát triển, nhu cầu về hậu cần trở nên ngày càng phức tạp hơn. — "more and more + adj" (ngày càng...) diễn tả xu hướng tăng dần theo thời gian, dùng với tính từ dài. Mẹo thêm: với tính từ ngắn dùng dạng lặp "-er and -er" (ví dụ: "bigger and bigger").'},
        {q:'The new factory can produce ------ as many units as the old one.', choices:['twice','two','double','twofold'], correct:0, explain:'Dịch: Nhà máy mới có thể sản xuất gấp đôi số lượng sản phẩm so với nhà máy cũ. — So sánh gấp bội dùng "twice/three times/four times + as + adj/adv + as". Mẹo thêm: "twice" đứng riêng trước "as...as", trong khi "double" thường dùng như động từ/tính từ (double the amount), không đặt trực tiếp theo cách này.'}
      ]
    },
    {
      id: 'ss-2', title: '2. So sánh nâng cao & các bẫy thường gặp',
      items: [
        {q:"Of the two proposals, the marketing team's plan is ------.", choices:['more practical','most practical','practical','practicaler'], correct:0, explain:'Dịch: Trong hai đề xuất, kế hoạch của đội marketing thực tế hơn. — Khi so sánh CHỈ GIỮA HAI đối tượng ("of the two"), phải dùng so sánh HƠN, không dùng so sánh NHẤT dù trong tiếng Việt có thể dịch là "nhất". Mẹo thêm: dấu hiệu "of the two/between the two" luôn đi với so sánh hơn — bẫy rất hay gặp trong TOEIC Part 5.'},
        {q:'This model is considerably ------ than the one we purchased last year.', choices:['more advanced','advanced','most advanced','advance'], correct:0, explain:'Dịch: Mẫu này tiên tiến hơn đáng kể so với mẫu chúng tôi đã mua năm ngoái. — Trạng từ nhấn mạnh mức độ như "considerably/significantly/much/far/a lot" thường đứng trước so sánh HƠN để nhấn mạnh mức độ chênh lệch. Mẹo thêm: các trạng từ nhấn mạnh này chỉ đi với so sánh hơn/nhất, không đi trực tiếp với tính từ nguyên thể.'},
        {q:'She is one of the ------ engineers in the company.', choices:['most talented','more talented','talented','most talent'], correct:0, explain:'Dịch: Cô ấy là một trong những kỹ sư tài năng nhất công ty. — Cấu trúc "one of the + so sánh nhất + N số nhiều" (một trong những... nhất). Mẹo thêm: sau "one of the + so sánh nhất" luôn là danh từ SỐ NHIỀU, vì "one of" ngụ ý có nhiều đối tượng cùng đạt mức độ đó.'},
        {q:'The report was submitted ------ than the deadline required.', choices:['later','more late','latest','lately'], correct:0, explain:'Dịch: Báo cáo được nộp trễ hơn so với yêu cầu của hạn chót. — "late" khi là trạng từ so sánh hơn thêm "-er" thành "later". Mẹo thêm: "lately" là trạng từ chỉ thời gian (= recently, "gần đây"), không phải dạng so sánh của "late" — rất dễ nhầm vì hình thức gần giống nhau.'},
        {q:'The less experience a candidate has, the ------ training they will need.', choices:['more','most','much','many'], correct:0, explain:'Dịch: Ứng viên càng ít kinh nghiệm thì càng cần nhiều đào tạo hơn. — Câu so sánh kép "the less... the more..." — "more" đi với danh từ không đếm được "training". Mẹo thêm: "much" là dạng gốc của "more/most" khi đi với danh từ không đếm được (much → more → most).'},
        {q:'Our new office is ------ larger than the old one — almost double the size.', choices:['far','very','so','too'], correct:0, explain:'Dịch: Văn phòng mới của chúng tôi rộng hơn nhiều so với văn phòng cũ — gần gấp đôi diện tích. — "far/much/a lot/considerably" dùng để nhấn mạnh so sánh hơn ("far larger than"). Mẹo thêm: "very" KHÔNG được dùng trực tiếp với so sánh hơn (không nói "very larger") — lỗi rất hay gặp.'},
        {q:'Among all the branches, the Hanoi office generates ------ revenue.', choices:['the most','most','more','the more'], correct:0, explain:'Dịch: Trong số tất cả các chi nhánh, văn phòng Hà Nội tạo ra doanh thu nhiều nhất. — "Among all the + N" là dấu hiệu so sánh NHẤT (giữa từ 3 đối tượng trở lên), với danh từ không đếm được "revenue" dùng "the most". Mẹo thêm: "among" (giữa nhiều đối tượng) khác với "between" (giữa 2 đối tượng) — quyết định dùng so sánh nhất hay so sánh hơn.'},
        {q:'Employee turnover this year is much ------ than it was five years ago.', choices:['lower','low','lowest','more low'], correct:0, explain:'Dịch: Tỷ lệ nghỉ việc năm nay thấp hơn nhiều so với 5 năm trước. — Tính từ ngắn "low" so sánh hơn thêm "-er": "lower". Mẹo thêm: "much" đứng trước so sánh hơn để nhấn mạnh ("much lower than"), không đứng trước tính từ nguyên thể trong câu so sánh.'},
        {q:'This contract is ------ favorable to us as the previous one was.', choices:['as','so','more','most'], correct:0, explain:'Dịch: Hợp đồng này có lợi cho chúng ta ngang bằng với hợp đồng trước. — So sánh ngang bằng cần cặp "as...as" — đáp án đầu tiên phải là "as". Mẹo thêm: "so...as" chỉ đúng trong câu PHỦ ĐỊNH ("not so...as"), còn câu khẳng định luôn dùng "as...as".'},
        {q:'The report is good, but I think the previous one was ------.', choices:['better','more good','best','gooder'], correct:0, explain:'Dịch: Báo cáo này tốt, nhưng tôi nghĩ báo cáo trước còn tốt hơn. — "good" là tính từ bất quy tắc: good → better (hơn) → the best (nhất), không thêm "-er" hay dùng "more". Mẹo thêm: các tính từ bất quy tắc thường gặp: good/well→better→best, bad→worse→worst, far→farther/further→farthest/furthest.'}
      ]
    }
  ],

  vocab: [
    {word:'considerably', ipa:'/kənˈsɪdərəbli/', meaning:'đáng kể (nhấn mạnh mức độ chênh lệch)', example:'This model is considerably more advanced than the previous one.', note:'đồng nghĩa: significantly'},
    {word:'proposal', ipa:'/prəˈpoʊzl/', meaning:'đề xuất, bản đề nghị', example:"Of the two proposals, the marketing team's plan is more practical.", note:'động từ: propose'},
    {word:'revenue', ipa:'/ˈrevənuː/', meaning:'doanh thu', example:'The Hanoi office generates the most revenue among all the branches.', note:'phân biệt với "profit" (lợi nhuận)'},
    {word:'branch', ipa:'/bræntʃ/', meaning:'chi nhánh', example:'Among all the branches, the Hanoi office generates the most revenue.', note:'đồng nghĩa: subsidiary (công ty con)'},
    {word:'favorable', ipa:'/ˈfeɪvərəbl/', meaning:'có lợi, thuận lợi', example:'This contract is as favorable to us as the previous one was.', note:'trái nghĩa: unfavorable'},
    {word:'submit', ipa:'/səbˈmɪt/', meaning:'nộp, đệ trình', example:'The report was submitted later than the deadline required.', note:'danh từ: submission'},
    {word:'candidate', ipa:'/ˈkændɪdət/', meaning:'ứng viên', example:'The less experience a candidate has, the more training they will need.', note:'đồng nghĩa: applicant'},
    {word:'purchase', ipa:'/ˈpɜːrtʃəs/', meaning:'mua, sự mua sắm', example:'The model we purchased last year is less advanced.', note:'trang trọng hơn "buy"'}
  ]
};
