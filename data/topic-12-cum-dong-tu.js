window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['cum-dong-tu'] = {
  id: 'cum-dong-tu',
  order: 12,
  title: 'Cụm Động Từ',
  subtitle: 'Phrasal Verbs',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6',
  sourceTheory: 'AZ Grammar 2nd edition — Phrasal Verbs (Cụm động từ)',
  note: 'Bài tập do AZEnglish soạn thêm theo danh sách phrasal verbs trong sách AZ Grammar (không nằm trong sách luyện đề gốc). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'Cụm động từ là gì?',
      tip: [
        'Cụm động từ = động từ + giới từ/trạng từ, tạo nghĩa KHÁC với nghĩa của từng từ riêng lẻ: carry (mang) → carry out (thực hiện); look (nhìn) → look forward to (trông đợi).',
        'Có thể TÁCH RỜI (tân ngữ chen giữa): She turned the job down. · Please fill this form out.',
        'KHÔNG thể tách rời: She looks after her parents. · We ran into unexpected issues.',
        'Đi kèm giới từ thứ hai (3 thành phần): run out of, get along with, keep up with, come up with, cut down on, look forward to.',
        'Khi tân ngữ là đại từ (it, them, him…), phrasal verb tách rời BẮT BUỘC phải tách: turn it down (không nói turn down it).'
      ]
    },
    {
      group: 'Phrasal verbs theo chủ đề TOEIC',
      tenses: [
        {
          name: 'Công việc, văn phòng',
          form: 'carry out · come up with · fill out · follow up (on) · hand in · look over · put off · turn in · keep up with',
          usage: ['carry out: thực hiện — The company is carrying out a new policy.', 'come up with: nghĩ ra — She came up with a great marketing idea.', 'fill out: điền (mẫu đơn) — Please fill out this application form.', 'hand in / turn in: nộp — Employees must hand in their reports by Friday.', 'look over: xem xét — Please look over the contract carefully.', 'keep up with: theo kịp — It’s hard to keep up with all the new updates.'],
          signals: 'Gặp "form/report/contract" → nghĩ tới fill out / hand in / look over.'
        },
        {
          name: 'Tài chính, kế toán',
          form: 'account for · cut down on · pay off · run up (a bill) · take out (a loan) · write off',
          usage: ['cut down on: cắt giảm — The company needs to cut down on expenses.', 'pay off: trả hết nợ — She finally paid off her student loans.', 'run up (a bill): tích lũy nợ — He ran up a huge credit card bill.', 'take out (a loan): vay tiền — The company took out a loan for expansion.', 'write off: xóa nợ, ghi giảm — The company had to write off bad debts.'],
          signals: 'Chủ đề tiền bạc: loan → take out / pay off; bill → run up; bad debts → write off.'
        },
        {
          name: 'Giao tiếp, email, lịch trình',
          form: 'call back · get back to · put through · wrap up · hold up · call off · put off · bring forward · run over',
          usage: ['get back to: phản hồi lại — I’ll get back to you as soon as possible.', 'put through: nối máy — Can you put me through to the manager?', 'call off: hủy bỏ — The event was called off due to rain.', 'put off: hoãn lại — The meeting was put off until next week.', 'bring forward: dời sớm hơn — The meeting has been brought forward to Monday.', 'run over: quá giờ — The meeting ran over its scheduled time.'],
          signals: 'Hoãn = put off / postpone; hủy = call off / cancel; dời sớm = bring forward.'
        },
        {
          name: 'Vận chuyển, du lịch & sự cố',
          form: 'check in/out · pick up · set off · break down · figure out · run into · sort out · run out of · set up · take over · find out',
          usage: ['check in / check out: làm thủ tục / trả phòng — We need to check out by noon.', 'set off: khởi hành — They set off for their trip early in the morning.', 'break down: hỏng hóc — My car broke down on the way to work.', 'figure out / sort out: tìm ra / giải quyết — I need to figure out a solution quickly.', 'run into: tình cờ gặp, gặp sự cố — We ran into unexpected issues.', 'run out of: hết, cạn — We have run out of paper.', 'set up: thành lập — They set up a new business. · take over: tiếp quản — The company was taken over by a bigger firm.'],
          signals: 'Phân biệt run out of (hết) — run into (gặp) — run over (quá giờ) — run up (tích lũy): cùng gốc "run" nhưng nghĩa hoàn toàn khác.'
        }
      ]
    }
  ],

  quizzes: [
    {
      id: 'cdt2-1', title: '1. Phrasal verbs: công việc & tài chính',
      items: [
        {q:'Please ------ this application form and return it by Friday.', choices:['put off','fill out','call off','take over'], correct:1, explain:'Dịch: Vui lòng điền vào mẫu đơn này và gửi lại trước thứ Sáu. — Giải thích: điền mẫu đơn = "fill out". Mẹo thêm: "put off" (hoãn) và "call off" (hủy) đều không hợp nghĩa với "form".'},
        {q:'Employees must ------ their expense reports by Friday.', choices:['hand in','break down','hold up','look up'], correct:0, explain:'Dịch: Nhân viên phải nộp báo cáo chi phí trước thứ Sáu. — Giải thích: nộp tài liệu = "hand in" (hoặc "turn in"). Mẹo thêm: "hold up" là làm chậm trễ, "look up" là tra cứu.'},
        {q:'Please ------ the contract carefully before you sign it.', choices:['look forward','look after','look over','look up'], correct:2, explain:'Dịch: Vui lòng xem kỹ hợp đồng trước khi ký. — Giải thích: xem xét, kiểm tra = "look over". Mẹo thêm: "look after" là chăm sóc; "look forward to" là trông đợi (phải có "to").'},
        {q:'I will ------ your request and get back to you tomorrow.', choices:['run into','put through','turn down','follow up on'], correct:3, explain:'Dịch: Tôi sẽ theo dõi yêu cầu của bạn và phản hồi lại vào ngày mai. — Giải thích: tiếp tục xử lý một việc = "follow up on". Mẹo thêm: "turn down" là từ chối — không hợp với câu hứa phản hồi.'},
        {q:'She ------ a great idea for the marketing campaign.', choices:['came down on','came out of','came across to','came up with'], correct:3, explain:'Dịch: Cô ấy nghĩ ra một ý tưởng tuyệt vời cho chiến dịch marketing. — Giải thích: nghĩ ra, đề xuất (ý tưởng) = "come up with" (cụm 3 thành phần). Mẹo thêm: động từ đứng ở quá khứ "came" nhưng cụm không đổi.'},
        {q:'The company had to ------ bad debts last year.', choices:['write out of','pay up','write off','take out'], correct:2, explain:'Dịch: Năm ngoái công ty phải xóa các khoản nợ xấu. — Giải thích: xóa sổ khoản nợ không thu hồi được = "write off". Mẹo thêm: "bad debt" (nợ xấu) thường đi với "write off".'},
        {q:'He ------ a huge credit card bill last month.', choices:['ran out','ran up','ran over','ran off'], correct:1, explain:'Dịch: Tháng trước anh ấy đã tích lũy một hóa đơn thẻ tín dụng khổng lồ. — Giải thích: "run up a bill" = làm hóa đơn/nợ tăng lên. Mẹo thêm: "run out" là cạn kiệt (không có tân ngữ "bill").'},
        {q:'The firm ------ a loan of $2 million to expand its factory.', choices:['took out','took over','took up','took off'], correct:0, explain:'Dịch: Công ty đã vay 2 triệu đô để mở rộng nhà máy. — Giải thích: vay tiền = "take out a loan". Mẹo thêm: "take over" là tiếp quản, dễ nhầm.'},
        {q:'The company needs to ------ expenses in order to increase its profit.', choices:['cut up with','cut down on','cut out at','cut off from'], correct:1, explain:'Dịch: Công ty cần cắt giảm chi phí để tăng lợi nhuận. — Giải thích: cắt giảm = "cut down on" (cụm 3 thành phần). Mẹo thêm: chú ý giới từ cuối "on" — thiếu nó cụm sẽ đổi nghĩa.'},
        {q:'It is hard to ------ all the new software updates.', choices:['keep in','keep away','keep out of','keep up with'], correct:3, explain:'Dịch: Rất khó để theo kịp tất cả các bản cập nhật phần mềm mới. — Giải thích: theo kịp = "keep up with". Mẹo thêm: "keep out of" là tránh xa, không dính vào.'}
      ]
    },
    {
      id: 'cdt2-2', title: '2. Phrasal verbs: lịch trình, giao tiếp & sự cố',
      items: [
        {q:'The outdoor concert was ------ because of heavy rain.', choices:['filled out','picked up','called off','set up'], correct:2, explain:'Dịch: Buổi hòa nhạc ngoài trời bị hủy vì mưa lớn. — Giải thích: hủy bỏ = "call off" (bị động: was called off). Mẹo thêm: "set up" là tổ chức/thiết lập, nghĩa ngược.'},
        {q:'We have ------ paper, so please order more before Monday.', choices:['run out of','run up','run over','run into'], correct:0, explain:'Dịch: Chúng ta đã hết giấy, nên hãy đặt thêm trước thứ Hai. — Giải thích: hết, cạn kiệt = "run out of + N". Mẹo thêm: "run into" là gặp phải, "run over" là quá giờ.'},
        {q:'The company plans to ------ a new branch in Da Nang next year.', choices:['set off','check out','set up','break down'], correct:2, explain:'Dịch: Công ty dự định thành lập chi nhánh mới ở Đà Nẵng vào năm sau. — Giải thích: thiết lập, thành lập = "set up". Mẹo thêm: "set off" là khởi hành.'},
        {q:'The delivery was ------ by heavy traffic.', choices:['looked over','handed in','given up','held up'], correct:3, explain:'Dịch: Việc giao hàng bị chậm trễ vì kẹt xe. — Giải thích: bị trì hoãn = "be held up". Mẹo thêm: "hold up" cũng có nghĩa là cướp — cần đọc ngữ cảnh.'},
        {q:'Could you ------ me through to the sales manager, please?', choices:['pull','put','pass','pick'], correct:1, explain:'Dịch: Bạn có thể nối máy giúp tôi tới giám đốc kinh doanh được không? — Giải thích: nối máy điện thoại = "put someone through (to)". Mẹo thêm: cụm này rất hay gặp trong Part 3 (hội thoại điện thoại).'},
        {q:'Please ------ before noon; check-out time is 12 p.m.', choices:['check out','check up','check in','check on'], correct:0, explain:'Dịch: Vui lòng trả phòng trước buổi trưa; giờ trả phòng là 12 giờ. — Giải thích: trả phòng khách sạn = "check out". Mẹo thêm: "check in" là nhận phòng/làm thủ tục lên máy bay.'},
        {q:'The meeting ------ its scheduled time, so I missed my train.', choices:['ran out','ran up','ran into','ran over'], correct:3, explain:'Dịch: Cuộc họp kéo dài quá giờ dự kiến nên tôi lỡ chuyến tàu. — Giải thích: quá giờ, vượt thời gian = "run over". Mẹo thêm: chú ý tân ngữ "its scheduled time" đi trực tiếp sau "ran over".'},
        {q:'We ------ unexpected problems during the installation.', choices:['ran over','ran off','ran into','ran up'], correct:2, explain:'Dịch: Chúng tôi gặp phải những vấn đề bất ngờ trong quá trình lắp đặt. — Giải thích: tình cờ gặp, gặp sự cố = "run into" (không tách rời). Mẹo thêm: "run into" cũng dùng khi tình cờ gặp ai đó.'},
        {q:'The tour group ------ for the airport at dawn.', choices:['turn off','set off','put off','set up'], correct:1, explain:'Dịch: Đoàn du lịch khởi hành đến sân bay lúc rạng sáng. — Giải thích: khởi hành = "set off". Mẹo thêm: "put off" (hoãn) và "turn off" (tắt) không hợp nghĩa.'},
        {q:'The board decided to ------ the launch until next quarter.', choices:['put off','put on','put in','put out'], correct:0, explain:'Dịch: Hội đồng quản trị quyết định hoãn buổi ra mắt sang quý sau. — Giải thích: hoãn lại = "put off" (đồng nghĩa "postpone"). Mẹo thêm: hoãn = put off; hủy = call off; dời sớm = bring forward.'}
      ]
    }
  ],

  vocab: [
    {word:'carry out', ipa:'/ˈkæri aʊt/', meaning:'thực hiện, tiến hành', example:'The company will carry out a survey next month.', note:'đồng nghĩa: conduct'},
    {word:'follow up on', ipa:'/ˈfɑːloʊ ʌp ɑːn/', meaning:'theo dõi, tiếp tục xử lý', example:'I will follow up on your request soon.', note:'danh từ: follow-up'},
    {word:'write off', ipa:'/raɪt ɔːf/', meaning:'xóa nợ, ghi giảm', example:'The company had to write off bad debts.', note:'lĩnh vực kế toán'},
    {word:'put through', ipa:'/pʊt θruː/', meaning:'nối máy', example:'Can you put me through to the manager?', note:'hay gặp trong hội thoại điện thoại'},
    {word:'hold up', ipa:'/hoʊld ʌp/', meaning:'trì hoãn, làm chậm', example:'Traffic held up the delivery.', note:'cũng có nghĩa "cướp"'},
    {word:'run over', ipa:'/rʌn ˈoʊvər/', meaning:'quá giờ, vượt thời gian', example:'The meeting ran over its scheduled time.', note:'khác "run out of" (hết)'}
  ]
};
