window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['hoa-hop-chu-vi'] = {
  id: 'hoa-hop-chu-vi',
  order: 8,
  title: 'Sự Hoà Hợp Chủ Ngữ – Động Từ',
  subtitle: 'Subject-Verb Agreement',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6 (dựa trên các cấu trúc bẫy phổ biến nhất)',
  sourceTheory: 'AZ Grammar 2022 (nội bộ AZEnglish)',

  theory: [
    {
      group: 'Quy tắc cơ bản',
      tip: [
        'Chủ ngữ số ít (danh từ số ít, danh từ không đếm được) → động từ chia số ít (V-s/es ở thì hiện tại đơn, is/was, has).',
        'Chủ ngữ số nhiều (danh từ số nhiều) → động từ chia số nhiều (V nguyên mẫu, are/were, have).',
        'Khi có mệnh đề quan hệ hoặc cụm từ xen giữa chủ ngữ và động từ (ví dụ "who attended the workshop"), hãy BỎ QUA phần xen giữa để xác định đúng số của chủ ngữ thật.'
      ]
    },
    {
      group: 'Các cấu trúc dễ gây nhầm (bẫy TOEIC kinh điển)',
      tip: [
        '"Each/Every + N số ít" → luôn chia V số ít, kể cả "each of + N số nhiều" (chủ ngữ thật là "each").',
        '"One of + N số nhiều" → chia V số ít (chủ ngữ thật là "one").',
        '"The number of + N số nhiều" = số ít (chia V số ít) >< "A number of + N số nhiều" = nhiều (chia V số nhiều).',
        '"Along with / together with / as well as / in addition to + cụm" thường có dấu phẩy bao quanh, KHÔNG ảnh hưởng đến việc chia động từ — động từ vẫn chia theo chủ ngữ chính đứng trước.',
        '"Either...or / Neither...nor / Not only...but also": động từ chia theo chủ ngữ đứng GẦN động từ nhất (quy tắc "gần đâu chia đó").',
        '"Both A and B" luôn là số nhiều, chia V số nhiều — không có ngoại lệ như either/or.',
        'Đại từ bất định kết thúc bằng -body/-one/-thing (everybody, everyone, someone, anybody, nobody...) luôn là số ít.',
        '"There + be" chia theo danh từ đứng NGAY SAU nó, không phải theo "there".',
        'Danh từ tập hợp (committee, team, staff, family, company) khi coi là MỘT khối thống nhất → chia V số ít.',
        'Cụm chủ ngữ dạng "V-ing + ..." hoặc "To V + ..." (danh động từ/động từ nguyên mẫu làm chủ ngữ) luôn chia V số ít.',
        'Danh từ có hình thức số nhiều nhưng luôn chia V số ít: news, means, series, species.',
        'Danh từ không đếm được (equipment, furniture, information, advice, luggage, machinery, news) luôn chia V số ít, không thêm "-s".',
        '"Phân số/phần trăm + of + N" và "All of/Most of/Some of/Half of + N" chia động từ theo danh từ đứng SAU "of".'
      ]
    }
  ],

  quizzes: [
    {
      id: 'hh-1', title: '1. Quy tắc cơ bản — each/every/one of/đại từ bất định',
      items: [
        {q:'Each of the applicants ------ asked to complete a short test before the interview.', choices:['was','were','are','have been'], correct:0, explain:'Dịch: Mỗi ứng viên đều được yêu cầu làm một bài kiểm tra ngắn trước buổi phỏng vấn. — "Each of + N số nhiều" vẫn chia động từ số ít vì "each" luôn mang nghĩa số ít khi làm chủ ngữ. Mẹo thêm: "each of the + N số nhiều" khác với "each + N số ít" (không có "of") — cả hai đều chia V số ít.'},
        {q:'Every employee in the department ------ attended the safety training last week.', choices:['has','have','are','were'], correct:0, explain:'Dịch: Mọi nhân viên trong phòng ban đều đã tham dự buổi tập huấn an toàn tuần trước. — "Every + N số ít" luôn đi với động từ số ít, ở đây là "has attended" (hiện tại hoàn thành). Mẹo thêm: "every" không bao giờ đứng trước danh từ số nhiều, khác với "all" (all + N số nhiều).'},
        {q:'One of the printers on the third floor ------ out of order.', choices:['is','are','were','have been'], correct:0, explain:'Dịch: Một trong những máy in ở tầng ba đang bị hỏng. — Chủ ngữ thật sự là "one" (số ít), "of the printers" chỉ là cụm bổ nghĩa, không quyết định số của động từ. Mẹo thêm: cấu trúc "one of + N số nhiều" luôn chia V số ít — lỗi rất hay gặp khi thí sinh nhìn thấy danh từ số nhiều đứng ngay trước động từ.'},
        {q:'Everybody in the meeting room ------ satisfied with the new proposal.', choices:['seems','seem','are','were'], correct:0, explain:'Dịch: Mọi người trong phòng họp đều có vẻ hài lòng với đề xuất mới. — "Everybody/everyone/someone/anybody/nobody..." luôn được coi là số ít, chia V số ít. Mẹo thêm: các đại từ bất định kết thúc bằng "-body/-one/-thing" đều là số ít, dù ý nghĩa có thể chỉ nhiều người.'},
        {q:'The number of visitors to the museum ------ increased significantly this year.', choices:['has','have','are','were'], correct:0, explain:'Dịch: Số lượng khách tham quan bảo tàng đã tăng đáng kể trong năm nay. — "The number of + N số nhiều" = số ít (chủ ngữ chính là "the number"), chia V số ít. Mẹo thêm: phân biệt với "a number of + N số nhiều" = nhiều, chia V số nhiều (ví dụ: "A number of visitors have complained.").'},
        {q:'A number of employees ------ requested to work remotely next month.', choices:['have','has','is','was'], correct:0, explain:'Dịch: Một số nhân viên đã yêu cầu được làm việc từ xa vào tháng tới. — "A number of + N số nhiều" mang nghĩa "một số/nhiều", chia động từ số nhiều. Mẹo thêm: đây là cặp bẫy kinh điển trong TOEIC — "the number of" (số ít) và "a number of" (số nhiều) chỉ khác nhau ở mạo từ nhưng chia động từ hoàn toàn khác nhau.'},
        {q:'Neither the manager nor the employees ------ aware of the schedule change.', choices:['were','was','is','has been'], correct:0, explain:'Dịch: Cả quản lý lẫn nhân viên đều không biết về việc thay đổi lịch trình. — Với "neither...nor" / "either...or" / "not only...but also", động từ chia theo chủ ngữ đứng GẦN động từ nhất — ở đây là "the employees" (số nhiều) nên dùng "were". Mẹo thêm: nếu đảo vị trí thành "Neither the employees nor the manager ___", đáp án sẽ đổi thành "was" vì chủ ngữ gần nhất lúc đó là "the manager" (số ít).'},
        {q:'Either the supervisor or her assistants ------ responsible for approving the request.', choices:['are','is','be','being'], correct:0, explain:'Dịch: Hoặc là người giám sát hoặc các trợ lý của cô ấy sẽ chịu trách nhiệm phê duyệt yêu cầu này. — Chủ ngữ gần động từ nhất là "her assistants" (số nhiều) → chia "are". Mẹo thêm: quy tắc "gần đâu chia đó" áp dụng cho cả "either...or" và "neither...nor" và "not only...but also".'},
        {q:'Not only the manager but also the staff members ------ invited to the annual dinner.', choices:['are','is','was','has been'], correct:0, explain:'Dịch: Không chỉ quản lý mà cả các nhân viên cũng được mời đến buổi tiệc thường niên. — "the staff members" (số nhiều) đứng gần động từ nên chia "are". Mẹo thêm: "not only...but also" nối 2 chủ ngữ nhưng động từ luôn theo chủ ngữ thứ hai (gần vị trí động từ hơn).'},
        {q:'Almost 60 percent of the budget ------ allocated to marketing activities this quarter.', choices:['has been','have been','are','were'], correct:0, explain:'Dịch: Gần 60% ngân sách đã được phân bổ cho các hoạt động marketing trong quý này. — "phần trăm/phân số + of + N" chia động từ theo danh từ đi sau "of": ở đây "the budget" không đếm được → số ít → "has been". Mẹo thêm: nếu là "60 percent of the employees ___ agreed", thì "employees" số nhiều nên chia "have agreed".'}
      ]
    },
    {
      id: 'hh-2', title: '2. Nâng cao — along with/there is-are/danh từ tập hợp/chủ ngữ dạng V-ing',
      items: [
        {q:'The CEO, along with several board members, ------ scheduled to attend the conference.', choices:['is','are','were','have'], correct:0, explain:'Dịch: Giám đốc điều hành, cùng với vài thành viên hội đồng quản trị, dự kiến sẽ tham dự hội nghị. — Cụm "along with/together with/as well as/in addition to + N" chỉ là cụm bổ nghĩa xen giữa (thường có dấu phẩy), KHÔNG ảnh hưởng đến việc chia động từ — động từ vẫn chia theo chủ ngữ chính "The CEO" (số ít). Mẹo thêm: đây khác với "and" — "The CEO and several board members ARE..." (nối bằng and thì cộng gộp thành số nhiều).'},
        {q:'There ------ several reasons why the project was delayed.', choices:['are','is','has','was'], correct:0, explain:'Dịch: Có vài lý do khiến dự án bị trì hoãn. — Trong cấu trúc "There + be", động từ chia theo danh từ đứng NGAY SAU nó, ở đây "several reasons" số nhiều → "are". Mẹo thêm: "there" không phải là chủ ngữ thật, chỉ đóng vai trò dẫn dắt câu — luôn nhìn danh từ phía sau để chọn dạng "be" phù hợp.'},
        {q:'The committee ------ meeting every Thursday to review new applications.', choices:['is','are','have been','were'], correct:0, explain:'Dịch: Ủy ban họp vào mỗi thứ Năm để xem xét các đơn ứng tuyển mới. — "Committee/team/staff/family/company" là danh từ tập hợp (collective noun), khi được xem là MỘT khối thống nhất thì chia V số ít. Mẹo thêm: TOEIC luôn ưu tiên coi danh từ tập hợp là số ít trừ khi có dấu hiệu rõ ràng nhấn mạnh từng thành viên riêng lẻ.'},
        {q:'Reading customer reviews before making a purchase ------ become a common habit.', choices:['has','have','are','were'], correct:0, explain:'Dịch: Việc đọc đánh giá của khách hàng trước khi mua sắm đã trở thành một thói quen phổ biến. — Khi một cụm V-ing (danh động từ) làm chủ ngữ, nó luôn được coi là số ít, dù có tân ngữ số nhiều theo sau ("customer reviews"). Mẹo thêm: cụm chủ ngữ dạng "V-ing + ..." hoặc "To V + ..." luôn chia động từ số ít.'},
        {q:'All of the information in the report ------ accurate and up to date.', choices:['is','are','have been','were'], correct:0, explain:'Dịch: Toàn bộ thông tin trong báo cáo đều chính xác và cập nhật. — "All of + N không đếm được" (information, furniture, equipment, advice) → V số ít. Mẹo thêm: so sánh với "All of the employees ARE satisfied" (N đếm được số nhiều → V số nhiều) — "all of" chia theo danh từ theo sau, giống "some of/most of/half of".'},
        {q:'Most of the equipment in the warehouse ------ outdated and needs replacement.', choices:['is','are','were','have'], correct:0, explain:'Dịch: Hầu hết thiết bị trong nhà kho đã lỗi thời và cần được thay thế. — "equipment" là danh từ không đếm được, nên "most of the equipment" chia V số ít. Mẹo thêm: các danh từ không đếm được thường gặp trong TOEIC: equipment, furniture, information, advice, luggage, machinery — luôn chia động từ số ít, không thêm "-s".'},
        {q:'Both the manager and the assistant ------ present at the negotiation.', choices:['were','was','is','has been'], correct:0, explain:'Dịch: Cả quản lý lẫn trợ lý đều có mặt tại buổi đàm phán. — "Both A and B" luôn được coi là chủ ngữ số nhiều, chia V số nhiều, không phụ thuộc vào chủ ngữ gần là gì (khác với either/or). Mẹo thêm: "both...and" = phép cộng chắc chắn tạo ra số nhiều, không có ngoại lệ như "either/or".'},
        {q:'The news about the merger ------ surprised many employees.', choices:['has','have','were','are'], correct:0, explain:'Dịch: Tin tức về việc sáp nhập đã khiến nhiều nhân viên bất ngờ. — "News" có hình thức số nhiều (kết thúc bằng "-s") nhưng LUÔN là danh từ không đếm được/số ít về ngữ pháp. Mẹo thêm: các từ dễ nhầm dạng này: news, means, series, species — nhìn giống số nhiều nhưng chia động từ số ít.'},
        {q:'Everyone who attended the workshop ------ given a certificate of completion.', choices:['was','were','are','have been'], correct:0, explain:'Dịch: Mọi người tham dự buổi hội thảo đều được cấp chứng chỉ hoàn thành. — "Everyone" luôn số ít; mệnh đề quan hệ "who attended the workshop" chỉ bổ nghĩa, không ảnh hưởng số của động từ chính. Mẹo thêm: khi có mệnh đề quan hệ xen giữa chủ ngữ và động từ chính, hãy bỏ qua mệnh đề đó để xác định đúng số của chủ ngữ thật.'},
        {q:'The majority of shareholders ------ in favor of the new policy.', choices:['are','is','was','has been'], correct:0, explain:'Dịch: Đa số cổ đông ủng hộ chính sách mới. — "The majority of + N số nhiều" chia theo danh từ phía sau (shareholders, số nhiều) → "are". Mẹo thêm: nếu là "The majority of the staff IS..." (staff là danh từ tập hợp số ít) thì có thể chia số ít — cần dựa vào danh từ đi kèm "of" là số ít hay số nhiều.'}
      ]
    }
  ],

  vocab: [
    {word:'allocate', ipa:'/ˈæləkeɪt/', meaning:'phân bổ (ngân sách, nguồn lực)', example:'Almost 60 percent of the budget has been allocated to marketing.', note:'danh từ: allocation'},
    {word:'shareholder', ipa:'/ˈʃerhoʊldər/', meaning:'cổ đông', example:'The majority of shareholders are in favor of the new policy.', note:'liên quan: stakeholder (bên liên quan)'},
    {word:'turnover', ipa:'/ˈtɜːrnoʊvər/', meaning:'tỷ lệ nghỉ việc / doanh thu (tuỳ ngữ cảnh)', example:'Employee turnover this year is much lower than before.', note:'"staff turnover" = tỷ lệ nhân viên nghỉ việc'},
    {word:'outdated', ipa:'/ˌaʊtˈdeɪtɪd/', meaning:'lỗi thời, cũ kỹ', example:'Most of the equipment in the warehouse is outdated.', note:'đồng nghĩa: obsolete'},
    {word:'in favor of', ipa:'/ɪn ˈfeɪvər əv/', meaning:'ủng hộ (điều gì)', example:'Shareholders are in favor of the new policy.', note:'trái nghĩa: opposed to'},
    {word:'merger', ipa:'/ˈmɜːrdʒər/', meaning:'sự sáp nhập (công ty)', example:'The news about the merger surprised many employees.', note:'động từ: merge (sáp nhập)'},
    {word:'certificate of completion', ipa:'/sərˈtɪfɪkət əv kəmˈpliːʃn/', meaning:'chứng chỉ hoàn thành (khoá học)', example:'Everyone who attended the workshop was given a certificate of completion.', note:'thường viết tắt: certificate'},
    {word:'negotiation', ipa:'/nɪˌɡoʊʃiˈeɪʃn/', meaning:'cuộc đàm phán', example:'Both the manager and the assistant were present at the negotiation.', note:'động từ: negotiate'}
  ]
};
