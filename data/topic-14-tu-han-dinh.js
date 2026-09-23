window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['tu-han-dinh'] = {
  id: 'tu-han-dinh',
  order: 14,
  title: 'Từ Hạn Định & Lượng Từ',
  subtitle: 'Determiners & Quantifiers',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6',
  sourceTheory: 'AZ Grammar 2022 (another/other/each other) + AZ Grammar 2nd edition (lượng từ)',
  note: 'Bài tập do AZEnglish soạn thêm (không nằm trong sách luyện đề gốc). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'another / other / others / the other / each other',
      tenses: [
        {
          name: 'another',
          form: 'another + N số ít (một cái nữa, một cái khác)',
          usage: ['We need another week to finish the audit.', 'I don’t like this design. Could you show me another one?'],
          signals: 'another = an + other → chỉ đi với danh từ SỐ ÍT (hoặc đứng một mình như đại từ).'
        },
        {
          name: 'other / others',
          form: 'other + N số nhiều · others = other + N (đại từ, không có danh từ theo sau)',
          usage: ['Why don’t you ask the other people to go camping? (the other + N số nhiều)', 'Some employees prefer email, while others prefer phone calls. (others = other employees)'],
          signals: '"Others" đứng một mình, KHÔNG có danh từ phía sau; "other" luôn có danh từ số nhiều phía sau.'
        },
        {
          name: 'the other / the others / each other',
          form: 'the other = cái còn lại (trong 2) · the others = những cái còn lại (xác định) · each other = lẫn nhau',
          usage: ['The company has two branches. One is in Hanoi and the other is in Da Nang.', 'I love this girl, I don’t like the others.', 'You should help each other. (= one another)'],
          signals: 'Nhóm CHỈ 2 → one … the other; nhóm nhiều → some … others / the others; "each other" là tân ngữ chỉ sự tương hỗ.'
        }
      ]
    },
    {
      group: 'Lượng từ thường gặp trong TOEIC',
      tip: [
        'every / each + N số ít: Every employee must sign… · each + N số ít / each of the + N số nhiều: The manager gave each employee a copy.',
        'either / neither (của 2 đối tượng): You may choose either of the two plans. · Neither of the two candidates has enough experience (không dùng "none of the two").',
        'both + N số nhiều (cả hai) · all (từ 3 trở lên) · most of the + N (hầu hết): Most of the staff attended. — "Almost" + every/all/any: Almost every employee received a bonus (không nói "most employee").',
        'many / few / a few / several + N đếm được số nhiều; much / little / a little + N không đếm được. "few / little" mang nghĩa gần như không có (tiêu cực); "a few / a little" mang nghĩa có một ít (tích cực).',
        'some dùng trong câu khẳng định và lời mời/đề nghị; any dùng trong câu phủ định và câu hỏi: We do not have any vacancies at the moment.'
      ]
    }
  ],

  quizzes: [
    {
      id: 'hd-1', title: '1. another / other / others / each other',
      items: [
        {q:'We have one meeting room on the first floor and ------ on the second floor.', choices:['other','each other','others','another'], correct:3, explain:'Dịch: Chúng tôi có một phòng họp ở tầng 1 và một phòng khác ở tầng 2. — Giải thích: "another" (một cái nữa) đứng như đại từ số ít, thay cho "another meeting room". Mẹo thêm: "other" không bao giờ đứng một mình như đại từ số ít.'},
        {q:'Some employees prefer e-mail, while ------ prefer phone calls.', choices:['the other','others','another','other'], correct:1, explain:'Dịch: Một số nhân viên thích email, trong khi những người khác thích gọi điện. — Giải thích: "others" = other employees, đứng một mình không có danh từ theo sau. Mẹo thêm: mẫu "Some … others …" rất hay gặp.'},
        {q:'The company has two branches. One is in Hanoi and ------ is in Da Nang.', choices:['other','another','the other','others'], correct:2, explain:'Dịch: Công ty có hai chi nhánh. Một cái ở Hà Nội và cái còn lại ở Đà Nẵng. — Giải thích: nhóm chỉ có 2 → one … the other. Mẹo thêm: nếu nhóm có từ 3 trở lên mới dùng another / the others.'},
        {q:'Please invite the ------ managers to the meeting as well.', choices:['other','others','each other','another'], correct:0, explain:'Dịch: Vui lòng mời cả các quản lý còn lại đến cuộc họp. — Giải thích: "the other + N số nhiều" (managers) = những người còn lại. Mẹo thêm: "another" chỉ đi với danh từ số ít nên loại.'},
        {q:'The two departments should help ------ during the busy season.', choices:['the other','another','others','each other'], correct:3, explain:'Dịch: Hai phòng ban nên giúp đỡ lẫn nhau trong mùa cao điểm. — Giải thích: hành động tương hỗ → "each other" (làm tân ngữ). Mẹo thêm: đồng nghĩa "one another".'},
        {q:'We need ------ week to finish the audit.', choices:['others','other','another','the others'], correct:2, explain:'Dịch: Chúng tôi cần thêm một tuần nữa để hoàn tất cuộc kiểm toán. — Giải thích: "another + N số ít" (week) = thêm một. Mẹo thêm: "other week" sai vì thiếu "an-".'},
        {q:'I don’t like this design. Could you show me ------ one?', choices:['other','another','others','each other'], correct:1, explain:'Dịch: Tôi không thích mẫu thiết kế này. Bạn cho tôi xem mẫu khác được không? — Giải thích: "another one" = một mẫu khác. Mẹo thêm: "one" ở đây thay cho danh từ số ít đã nhắc.'},
        {q:'------ students passed the exam; the rest have to retake it.', choices:['Some','Every','Each other','Any'], correct:0, explain:'Dịch: Một số sinh viên đã qua kỳ thi; số còn lại phải thi lại. — Giải thích: khẳng định + danh từ số nhiều → "Some". Mẹo thêm: "Any" chủ yếu dùng ở câu phủ định/nghi vấn.'},
        {q:'Both ------ the proposals were rejected by the board.', choices:['at','of','in','on'], correct:1, explain:'Dịch: Cả hai đề xuất đều bị hội đồng quản trị bác bỏ. — Giải thích: "both of the + N số nhiều" hoặc "both the + N". Mẹo thêm: nếu có đại từ thì bắt buộc "of": both of them.'},
        {q:'These two projects are similar, but ------ project has a different budget.', choices:['each','others','every one','all'], correct:0, explain:'Dịch: Hai dự án này giống nhau nhưng mỗi dự án có ngân sách khác nhau. — Giải thích: "each + N số ít" = mỗi. Mẹo thêm: "every one" phải đi với "of" (every one of the projects).'}
      ]
    },
    {
      id: 'hd-2', title: '2. Lượng từ: every, each, either, neither, few, little…',
      items: [
        {q:'------ employee must sign the attendance sheet.', choices:['Both','Many','Every','All'], correct:2, explain:'Dịch: Mỗi nhân viên phải ký vào bảng chấm công. — Giải thích: danh từ số ít "employee" → "Every". Mẹo thêm: All/Both/Many phải đi với danh từ số nhiều.'},
        {q:'We received ------ complaints about the new schedule this week.', choices:['much','little','a little','few'], correct:3, explain:'Dịch: Tuần này chúng tôi nhận được rất ít khiếu nại về lịch mới. — Giải thích: "complaints" là danh từ đếm được số nhiều → "few". Mẹo thêm: little/much/a little dùng cho danh từ không đếm được.'},
        {q:'There is ------ time left before the deadline, so we must hurry.', choices:['few','little','several','many'], correct:1, explain:'Dịch: Còn rất ít thời gian trước hạn chót nên chúng ta phải khẩn trương. — Giải thích: "time" không đếm được → "little" (gần như không còn). Mẹo thêm: "few/many/several" dành cho danh từ đếm được.'},
        {q:'------ of the staff attended the training, so it was a great success.', choices:['Almost','Much','Most','Mostly'], correct:2, explain:'Dịch: Hầu hết nhân viên đã tham dự buổi đào tạo nên nó rất thành công. — Giải thích: "most of the + N" = phần lớn. Mẹo thêm: "almost" là trạng từ (almost all / almost every), không đứng trước "of the".'},
        {q:'Almost ------ employee received a bonus this year.', choices:['every','much','many of','most'], correct:0, explain:'Dịch: Hầu như mọi nhân viên đều nhận được tiền thưởng năm nay. — Giải thích: "almost every + N số ít". Mẹo thêm: "most employee" sai vì "most" đi với danh từ số nhiều ("most employees").'},
        {q:'------ of the two candidates has enough experience for the position.', choices:['Any','None','No','Neither'], correct:3, explain:'Dịch: Không ai trong hai ứng viên có đủ kinh nghiệm cho vị trí này. — Giải thích: chỉ có 2 đối tượng → "Neither of the two". Mẹo thêm: "none of" dùng khi từ 3 đối tượng trở lên.'},
        {q:'You may choose ------ of the two plans; both cost the same.', choices:['any','each other','either','every'], correct:2, explain:'Dịch: Bạn có thể chọn một trong hai gói; cả hai đều cùng giá. — Giải thích: "either of the two" = một trong hai. Mẹo thêm: either / neither chỉ dùng cho 2 đối tượng.'},
        {q:'We do not have ------ vacancies at the moment.', choices:['any','some','another','every'], correct:0, explain:'Dịch: Hiện tại chúng tôi không có vị trí trống nào. — Giải thích: câu phủ định → "any". Mẹo thêm: "some" chủ yếu dùng ở câu khẳng định hoặc lời mời.'},
        {q:'The manager gave ------ employee a copy of the schedule.', choices:['both','each','each of','all'], correct:1, explain:'Dịch: Quản lý đưa cho mỗi nhân viên một bản lịch trình. — Giải thích: "each + N số ít" (employee). Mẹo thêm: nếu dùng "each of" thì phải kèm "the + N số nhiều" (each of the employees).'},
        {q:'We have ------ information about the new product yet.', choices:['few','a few','many','little'], correct:3, explain:'Dịch: Chúng tôi vẫn chưa có nhiều thông tin về sản phẩm mới. — Giải thích: "information" không đếm được → "little". Mẹo thêm: đừng nhầm "informations" — danh từ này không có dạng số nhiều.'}
      ]
    }
  ],

  vocab: [
    {word:'attendance sheet', ipa:'/əˈtendəns ʃiːt/', meaning:'bảng điểm danh, chấm công', example:'Every employee must sign the attendance sheet.', note:'attendance = sự có mặt'},
    {word:'vacancy', ipa:'/ˈveɪkənsi/', meaning:'vị trí trống, phòng trống', example:'We do not have any vacancies at the moment.', note:'số nhiều: vacancies'},
    {word:'retake', ipa:'/ˌriːˈteɪk/', meaning:'thi lại', example:'The rest have to retake the exam.', note:'tiền tố re- = lại'},
    {word:'candidate', ipa:'/ˈkændɪdət/', meaning:'ứng viên', example:'Neither of the two candidates has enough experience.', note:'đồng nghĩa: applicant'},
    {word:'schedule', ipa:'/ˈskedʒuːl/', meaning:'lịch trình', example:'The manager gave each employee a copy of the schedule.', note:'Anh-Mỹ đọc "sked-jool"'},
    {word:'audit', ipa:'/ˈɔːdɪt/', meaning:'kiểm toán', example:'We need another week to finish the audit.', note:'người kiểm toán: auditor'}
  ]
};
