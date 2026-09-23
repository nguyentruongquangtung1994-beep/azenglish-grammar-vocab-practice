window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['trang-tu-danh-tu-ghep'] = {
  id: 'trang-tu-danh-tu-ghep',
  order: 15,
  title: 'Vị Trí Trạng Từ & Danh Từ Ghép',
  subtitle: 'Adverb Positions & Compound Nouns',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6',
  sourceTheory: 'AZ Grammar 2nd edition — Adverbs (Trạng từ) + bổ sung của AZEnglish',
  note: 'Bài tập do AZEnglish soạn thêm (không nằm trong sách luyện đề gốc). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'Các loại trạng từ và vị trí trong câu',
      tenses: [
        {
          name: 'Trạng từ theo chức năng (theo sách AZ Grammar)',
          form: 'Cách thức · Tần suất · Thời gian · Nơi chốn · Mức độ',
          usage: ['Cách thức: She speaks fluently.', 'Tần suất: She always smiles.', 'Thời gian: I saw her yesterday.', 'Nơi chốn: She cried here.', 'Mức độ: She was very sad.'],
          signals: 'Trạng từ có thể bổ nghĩa cho động từ, tính từ, trạng từ khác hoặc cả câu; vị trí: đầu, giữa hoặc cuối câu tùy chức năng.'
        },
        {
          name: 'Vị trí điển hình',
          form: 'Tần suất: trước động từ thường, sau "be" · Giữa trợ động từ và V-pp · Trước tính từ · Sau tính từ (enough)',
          usage: ['Tần suất: She rarely arrives late. · She is never late. (sau be)', 'Giữa trợ động từ và V-pp: The manager has already approved the plan. · Employees are strongly encouraged to…', 'Trước tính từ: The project is almost complete. · The results were much better than expected.', 'enough đứng SAU tính từ: The room is large enough to hold 200 people; too đứng TRƯỚC tính từ: This offer is too good to be true.'],
          signals: 'Trạng từ hầu như không chen giữa động từ và tân ngữ trực tiếp — tránh "reviewed carefully every application".'
        },
        {
          name: 'Cặp trạng từ dễ nhầm',
          form: 'hard / hardly · late / lately · near / nearly · just / yet / already · high / highly',
          usage: ['hard (chăm chỉ) ↔ hardly (hầu như không): The staff worked hard. · We hardly had time to eat lunch.', 'late (muộn) ↔ lately (gần đây): The flight arrived late. · She has been very busy lately.', 'yet (phủ định/nghi vấn: chưa) ↔ already (rồi) ↔ just (vừa mới).'],
          signals: 'Trạng từ KHÔNG đuôi -ly: fast, hard, late, early, well, soon — đừng tự thêm -ly vào.'
        }
      ]
    },
    {
      group: 'Danh từ ghép (Compound Nouns) và tính từ ghép',
      tip: [
        'Danh từ ghép N + N: danh từ đầu bổ nghĩa cho danh từ sau và LUÔN ở dạng số ít: retirement plan, customer service, job application, exchange rate.',
        'Ngoại lệ số nhiều thường gặp: sales figures, terms and conditions, savings account, customs office, human resources.',
        'Tính từ ghép có số đếm + danh từ: danh từ ở dạng SỐ ÍT và có gạch nối: a three-year contract, a two-day workshop, a five-star hotel (không viết three-years).',
        'Danh từ đầu có thể là danh động từ: monitoring system, washing machine, shipping address, parking lot.'
      ]
    }
  ],

  quizzes: [
    {
      id: 'tt-1', title: '1. Vị trí và lựa chọn trạng từ',
      items: [
        {q:'The project is ------ complete; only the final report is missing.', choices:['most','mostly of','almost of','almost'], correct:3, explain:'Dịch: Dự án gần như đã hoàn tất; chỉ còn thiếu báo cáo cuối. — Giải thích: trạng từ chỉ mức độ đứng trước tính từ "complete" → "almost". Mẹo thêm: "most" là lượng từ/đại từ, không bổ nghĩa cho tính từ.'},
        {q:'We have ------ received the shipment, so you can pick it up now.', choices:['just','ever','still not','yet'], correct:0, explain:'Dịch: Chúng tôi vừa mới nhận lô hàng nên bạn có thể đến lấy ngay. — Giải thích: "have just + V-pp" = vừa mới. Mẹo thêm: "yet" chỉ dùng trong câu phủ định/nghi vấn.'},
        {q:'The manager has not approved the budget ------.', choices:['just','yet','ever','already'], correct:1, explain:'Dịch: Quản lý vẫn chưa phê duyệt ngân sách. — Giải thích: câu phủ định, nói việc chưa xảy ra → "yet" (đặt cuối câu). Mẹo thêm: "already" dùng trong câu khẳng định.'},
        {q:'The staff worked ------ to finish the report before the deadline.', choices:['hardly','harder','hard','hardness'], correct:2, explain:'Dịch: Nhân viên làm việc chăm chỉ để hoàn thành báo cáo trước hạn. — Giải thích: "hard" là trạng từ nghĩa "chăm chỉ" (không thêm -ly). Mẹo thêm: "hardly" nghĩa là hầu như không — đổi hẳn nghĩa câu.'},
        {q:'We ------ had time to eat lunch because of the back-to-back meetings.', choices:['hardness','hardy','hard','hardly'], correct:3, explain:'Dịch: Chúng tôi hầu như không có thời gian ăn trưa vì các cuộc họp liên tiếp. — Giải thích: "hardly + had time" = hầu như không có. Mẹo thêm: "back-to-back" (liên tiếp không nghỉ) là tính từ ghép hay gặp.'},
        {q:'The manager has been very busy ------, so she cannot attend the event.', choices:['lateness','latest','lately','late'], correct:2, explain:'Dịch: Gần đây quản lý rất bận nên bà không thể dự sự kiện. — Giải thích: "lately" = gần đây (hay đi với hiện tại hoàn thành). Mẹo thêm: "late" = muộn.'},
        {q:'The flight arrived ------, so we missed the connection.', choices:['late','latest','lately','later than'], correct:0, explain:'Dịch: Chuyến bay đến muộn nên chúng tôi lỡ chuyến nối. — Giải thích: "arrived late" (muộn) dùng "late" làm trạng từ. Mẹo thêm: không nói "lately" trong nghĩa này.'},
        {q:'The results were ------ better than we expected.', choices:['too','much','so','very'], correct:1, explain:'Dịch: Kết quả tốt hơn nhiều so với chúng tôi mong đợi. — Giải thích: trước so sánh hơn dùng "much/far/even/a lot" để nhấn mạnh. Mẹo thêm: "very better" là lỗi phổ biến.'},
        {q:'This offer is ------ good to be true.', choices:['very','too','enough','so much'], correct:1, explain:'Dịch: Ưu đãi này tốt đến mức khó tin. — Giải thích: "too + adj + to V0" = quá … để làm gì. Mẹo thêm: "enough" phải đứng SAU tính từ.'},
        {q:'The room is large ------ to hold 200 people.', choices:['very','too','enough','much'], correct:2, explain:'Dịch: Căn phòng đủ rộng để chứa 200 người. — Giải thích: "adj + enough + to V0" = đủ … để. Mẹo thêm: enough đứng sau tính từ, nhưng đứng trước danh từ (enough space).'}
      ]
    },
    {
      id: 'tt-2', title: '2. Danh từ ghép, tính từ ghép & chọn câu đúng',
      items: [
        {q:'The company announced a new ------ plan for employees.', choices:['retired','retiring','retire','retirement'], correct:3, explain:'Dịch: Công ty công bố kế hoạch hưu trí mới cho nhân viên. — Giải thích: danh từ ghép "retirement plan" (danh từ + danh từ). Mẹo thêm: danh từ đầu luôn ở dạng số ít và không thêm -s.'},
        {q:'Please check the ------ before you sign the contract.', choices:['terms and conditions','conditions terms','terms and condition','term and condition'], correct:0, explain:'Dịch: Vui lòng kiểm tra các điều khoản và điều kiện trước khi ký hợp đồng. — Giải thích: cụm cố định số nhiều "terms and conditions". Mẹo thêm: nhớ như một khối, không tách hay đổi số.'},
        {q:'The ------ for last quarter were disappointing.', choices:['sale figure','sales figures','sale figures','sales figure'], correct:1, explain:'Dịch: Số liệu bán hàng quý trước gây thất vọng. — Giải thích: "sales figures" là cụm cố định (sales luôn có -s) và động từ "were" cần danh từ số nhiều. Mẹo thêm: khác với quy tắc N1 số ít thông thường — "sales" là ngoại lệ.'},
        {q:'She applied for the ------ position at the bank.', choices:['customer service','customer services','customers service','customers services'], correct:0, explain:'Dịch: Cô ấy ứng tuyển vị trí chăm sóc khách hàng tại ngân hàng. — Giải thích: danh từ ghép "customer service" (dịch vụ khách hàng), làm bổ nghĩa cho "position". Mẹo thêm: danh từ đầu "customer" số ít.'},
        {q:'We signed a ------ contract with the supplier.', choices:['three-years','three years','three-year','third-year'], correct:2, explain:'Dịch: Chúng tôi đã ký hợp đồng ba năm với nhà cung cấp. — Giải thích: tính từ ghép số đếm + danh từ số ít có gạch nối: "three-year". Mẹo thêm: "three-years contract" là lỗi rất hay gặp.'},
        {q:'She attended a ------ workshop on time management.', choices:['two days','two-days','second-day','two-day'], correct:3, explain:'Dịch: Cô ấy tham dự một buổi hội thảo hai ngày về quản lý thời gian. — Giải thích: tính từ ghép "two-day" (số ít, có gạch nối) đứng trước danh từ "workshop". Mẹo thêm: khi không ghép: "The workshop lasts two days" (số nhiều, không gạch nối).'},
        {q:'The ------ has risen sharply this month.', choices:['exchanges rate','rate exchange','exchange rate','exchange rates rate'], correct:2, explain:'Dịch: Tỷ giá hối đoái đã tăng mạnh trong tháng này. — Giải thích: danh từ ghép "exchange rate" theo đúng thứ tự "danh từ bổ nghĩa + danh từ chính". Mẹo thêm: "has risen" (số ít) khớp với "rate".'},
        {q:'Chọn câu đúng:', choices:['She rarely late arrives.','She rarely arrives late.','Rarely she arrives late.','She arrives rarely late.'], correct:1, explain:'Dịch: Cô ấy hiếm khi đến muộn. — Giải thích: trạng từ tần suất "rarely" đứng trước động từ thường "arrives". Mẹo thêm: nếu đặt "Rarely" đầu câu thì phải đảo ngữ (Rarely does she arrive late).'},
        {q:'Chọn câu đúng:', choices:['The manager has already approved the plan.','The manager has approved already the plan.','The manager has the plan already approved.','The manager already has approved plan the.'], correct:0, explain:'Dịch: Quản lý đã phê duyệt kế hoạch rồi. — Giải thích: "already" đứng giữa trợ động từ "has" và V-pp "approved". Mẹo thêm: các câu còn lại sai trật tự từ.'},
        {q:'Employees are ------ encouraged to submit their ideas.', choices:['strengthen','strong','strength','strongly'], correct:3, explain:'Dịch: Nhân viên được khuyến khích mạnh mẽ nộp ý tưởng của mình. — Giải thích: trạng từ đứng giữa "are" và V-pp "encouraged" → "strongly". Mẹo thêm: "strongly encouraged/recommended" là cụm rất phổ biến trong thông báo.'}
      ]
    }
  ],

  vocab: [
    {word:'terms and conditions', ipa:'/tɜːmz ənd kənˈdɪʃnz/', meaning:'điều khoản và điều kiện', example:'Please check the terms and conditions before you sign.', note:'luôn số nhiều'},
    {word:'exchange rate', ipa:'/ɪksˈtʃeɪndʒ reɪt/', meaning:'tỷ giá hối đoái', example:'The exchange rate has risen sharply.', note:'lĩnh vực tài chính'},
    {word:'sales figures', ipa:'/seɪlz ˈfɪɡjərz/', meaning:'số liệu bán hàng', example:'The sales figures for last quarter were disappointing.', note:'"sales" luôn có -s'},
    {word:'retirement plan', ipa:'/rɪˈtaɪərmənt plæn/', meaning:'kế hoạch hưu trí', example:'The company announced a new retirement plan.', note:'phúc lợi nhân viên'},
    {word:'back-to-back', ipa:'/ˌbæk tə ˈbæk/', meaning:'liên tiếp, nối tiếp nhau', example:'We had back-to-back meetings all day.', note:'tính từ ghép'},
    {word:'strongly encouraged', ipa:'/ˈstrɔːŋli ɪnˈkʌrɪdʒd/', meaning:'được khuyến khích mạnh mẽ', example:'Employees are strongly encouraged to submit ideas.', note:'cụm hay gặp trong thông báo'}
  ]
};
