window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['khiem-khuyet'] = {
  id: 'khiem-khuyet',
  order: 11,
  title: 'Động Từ Khiếm Khuyết',
  subtitle: 'Modal Verbs',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 5/6',
  sourceTheory: 'AZ Grammar 2nd edition — Auxiliary Verbs (Trợ động từ)',
  note: 'Bài tập do AZEnglish soạn thêm theo lý thuyết trong sách AZ Grammar (không nằm trong sách luyện đề gốc). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'Quy tắc chung của Modal Verbs',
      tip: [
        'Cấu trúc: S + modal + V0. Modal KHÔNG chia theo ngôi (không thêm -s/-es), KHÔNG có "to" phía sau (trừ ought to, have to).',
        'Phủ định thêm "not" ngay sau modal (cannot/can’t, should not/shouldn’t, must not/mustn’t); câu hỏi đảo modal lên trước chủ ngữ (Can you…? Should we…?).',
        'Bị động: modal + be + V-pp (The report should be submitted by 5 p.m.).',
        'Modal hoàn thành: modal + have + V-pp — nói về QUÁ KHỨ: should have + V-pp (đáng lẽ nên làm, mà không làm), must have + V-pp (chắc hẳn đã), could/may/might have + V-pp (có thể đã), can’t have + V-pp (chắc chắn không thể đã).',
        'Bổ sung: had better + V0 = tốt hơn là nên (mang sắc thái cảnh báo): You had better back up your files.'
      ]
    },
    {
      group: 'Ý nghĩa của 9 modal verbs thường gặp',
      tenses: [
        {
          name: 'CAN / COULD',
          form: 'can (hiện tại) · could (quá khứ / lịch sự)',
          usage: ['can: khả năng, cho phép, đề nghị — The manager can speak both English and Japanese fluently. · Can you open the window?', 'could: khả năng trong quá khứ, cho phép/đề nghị lịch sự — Could you please fill out the form?'],
          signals: 'Yêu cầu lịch sự trong email/điện thoại thường dùng "Could you please…?"'
        },
        {
          name: 'MAY / MIGHT',
          form: 'may (khả năng vừa phải, cho phép) · might (khả năng thấp)',
          usage: ['may: The project may take longer than expected. · May I help you, sir?', 'might: The shipment might be delayed due to the storm. · Might I offer some advice?'],
          signals: 'Cho phép trang trọng → "may"; khả năng không chắc chắn → may/might.'
        },
        {
          name: 'SHALL / SHOULD',
          form: 'shall (đề xuất, văn bản pháp lý) · should (lời khuyên, kỳ vọng)',
          usage: ['shall: Shall I arrange a meeting with the client for you?', 'should: You should submit the report before 5 p.m. · The shipment should arrive by next Monday. (kỳ vọng)'],
          signals: '"Should" vừa là lời khuyên vừa là điều được kỳ vọng sẽ xảy ra.'
        },
        {
          name: 'WILL / WOULD',
          form: 'will (chắc chắn, hứa hẹn) · would (điều kiện, yêu cầu lịch sự)',
          usage: ['will: We will complete the project ahead of the deadline.', 'would: If we had more time, we would conduct a more thorough analysis. · Would you like me to schedule the meeting?'],
          signals: 'Câu điều kiện loại 1 → will; loại 2 → would (xem chủ điểm Câu Điều Kiện).'
        },
        {
          name: 'MUST',
          form: 'must (bắt buộc / suy đoán chắc chắn)',
          usage: ['Bắt buộc: You must submit the report by the end of today.', 'Suy đoán chắc chắn: She must be very busy with the new project.'],
          signals: 'must not = cấm; don’t have to = không cần thiết (đừng nhầm hai nghĩa).'
        }
      ]
    }
  ],

  quizzes: [
    {
      id: 'kk-1', title: '1. Ý nghĩa & cách dùng modal verbs',
      items: [
        {q:'The manager can ------ both English and Japanese fluently.', choices:['speak','to speak','speaking','speaks'], correct:0, explain:'Dịch: Vị giám đốc có thể nói lưu loát cả tiếng Anh và tiếng Nhật. — Giải thích: sau modal "can" luôn là V0, không thêm -s, -ing hay "to". Mẹo thêm: "fluently" (lưu loát) là trạng từ bổ nghĩa cho "speak".'},
        {q:'You ------ submit the report by the end of today; the deadline cannot be extended.', choices:['may','must','might','could'], correct:1, explain:'Dịch: Bạn phải nộp báo cáo trước cuối hôm nay; hạn chót không thể gia hạn. — Giải thích: nghĩa vụ bắt buộc, không thể thương lượng → "must". Mẹo thêm: may/might chỉ khả năng hoặc cho phép, không diễn đạt sự bắt buộc.'},
        {q:'The shipment ------ arrive by next Monday, according to the carrier.', choices:['should have','must have','might have','should'], correct:3, explain:'Dịch: Theo hãng vận chuyển, lô hàng dự kiến sẽ đến trước thứ Hai tuần sau. — Giải thích: "should + V0" diễn tả điều được kỳ vọng sẽ xảy ra ở tương lai. Mẹo thêm: các dạng "have + V-pp" chỉ nói về quá khứ nên không hợp với "next Monday".'},
        {q:'------ you please fill out the form before you leave?', choices:['Did','Are','Could','Have'], correct:2, explain:'Dịch: Bạn vui lòng điền vào mẫu đơn trước khi rời đi được không? — Giải thích: yêu cầu lịch sự đi với "Could you please + V0…?". Mẹo thêm: đây là cấu trúc nhờ vả phổ biến nhất trong email và hội thoại TOEIC.'},
        {q:'All employees ------ wear their ID badges while inside the building.', choices:['must','are must','must to','musts'], correct:0, explain:'Dịch: Mọi nhân viên phải đeo thẻ nhân viên khi ở trong tòa nhà. — Giải thích: quy định bắt buộc → "must + V0"; modal không thêm -s và không có "to". Mẹo thêm: "have to" cũng có nghĩa bắt buộc nhưng là cụm động từ thường, chia theo ngôi.'},
        {q:'The report should ------ submitted before 5 p.m. to avoid delays.', choices:['is','being','been','be'], correct:3, explain:'Dịch: Báo cáo nên được nộp trước 5 giờ chiều để tránh chậm trễ. — Giải thích: bị động sau modal: modal + be + V-pp → "should be submitted". Mẹo thêm: "report" không tự nộp nên phải dùng bị động.'},
        {q:'If we had more time, we ------ conduct a more thorough analysis.', choices:['will','would','can','shall'], correct:1, explain:'Dịch: Nếu có thêm thời gian, chúng tôi sẽ tiến hành phân tích kỹ hơn. — Giải thích: câu điều kiện loại 2 (mệnh đề if dùng quá khứ "had") → mệnh đề chính dùng "would + V0". Mẹo thêm: "will" chỉ dùng cho điều kiện loại 1.'},
        {q:'The shipment ------ be delayed by the storm; we are not certain yet.', choices:['has to','will definitely','might','must'], correct:2, explain:'Dịch: Lô hàng có thể bị chậm vì bão; chúng tôi chưa chắc chắn. — Giải thích: "chưa chắc chắn" → khả năng thấp → "might". Mẹo thêm: "must be" và "will definitely" đều thể hiện sự chắc chắn nên mâu thuẫn với "not certain".'},
        {q:'She ------ be very busy with the new project; she has not replied to any e-mail all week.', choices:['would','can','must','should'], correct:2, explain:'Dịch: Chắc hẳn cô ấy rất bận với dự án mới; cả tuần nay cô ấy chưa trả lời email nào. — Giải thích: suy đoán chắc chắn dựa trên bằng chứng → "must be". Mẹo thêm: "can be" không dùng để suy đoán ở câu khẳng định.'},
        {q:'You ------ leave the office early today if you have finished all your tasks.', choices:['must','may','would','shall'], correct:1, explain:'Dịch: Hôm nay bạn có thể về sớm nếu đã hoàn thành hết công việc. — Giải thích: xin/cho phép → "may". Mẹo thêm: "must leave" mang nghĩa bắt buộc phải về, không hợp ngữ cảnh.'}
      ]
    },
    {
      id: 'kk-2', title: '2. Modal hoàn thành, had better & các bẫy hay gặp',
      items: [
        {q:'Our technicians ------ help you if you delete something important by mistake.', choices:['could to','can to','cans','can'], correct:3, explain:'Dịch: Các kỹ thuật viên của chúng tôi có thể giúp bạn nếu bạn lỡ xóa nhầm thứ quan trọng. — Giải thích: chủ ngữ số nhiều + "can + V0"; modal không có dạng "cans" hay "can to". Mẹo thêm: "by mistake" (do nhầm lẫn) đồng nghĩa "accidentally".'},
        {q:'The system crashed last night, so someone ------ have changed the settings.', choices:['must','should','shall','ought'], correct:0, explain:'Dịch: Hệ thống bị sập tối qua nên chắc hẳn ai đó đã thay đổi cài đặt. — Giải thích: "must have + V-pp" = suy đoán chắc chắn về quá khứ. Mẹo thêm: "ought" chỉ đi được khi có "to" (ought to have + V-pp).'},
        {q:'You ------ have called us earlier; we could have fixed the problem before the shipment left.', choices:['will','should','can','must'], correct:1, explain:'Dịch: Đáng lẽ bạn nên gọi cho chúng tôi sớm hơn; khi đó chúng tôi đã có thể sửa lỗi trước khi lô hàng rời kho. — Giải thích: "should have + V-pp" diễn tả việc đáng lẽ nên làm nhưng đã không làm. Mẹo thêm: vế sau "could have fixed" là modal hoàn thành cùng loại.'},
        {q:'I ------ have known about the change; nobody told me.', choices:['shouldn’t','mustn’t','couldn’t','wouldn’t'], correct:2, explain:'Dịch: Tôi không thể nào biết về thay đổi đó; chẳng ai nói với tôi cả. — Giải thích: "couldn’t have + V-pp" = chắc chắn không thể đã xảy ra, hợp với lý do "nobody told me". Mẹo thêm: "mustn’t have" hầu như không dùng trong tiếng Anh hiện đại.'},
        {q:'The department ------ hire two more analysts if the budget is approved.', choices:['might have','would','shall','will'], correct:3, explain:'Dịch: Phòng sẽ tuyển thêm hai chuyên viên phân tích nếu ngân sách được duyệt. — Giải thích: câu điều kiện loại 1 (if + hiện tại đơn) → "will + V0". Mẹo thêm: "would hire" chỉ đúng với điều kiện loại 2 (if + quá khứ).'},
        {q:'You ------ back up your files before the update begins.', choices:['had better','have better','would better','had better to'], correct:0, explain:'Dịch: Tốt hơn hết là bạn nên sao lưu tệp trước khi bản cập nhật bắt đầu. — Giải thích: cấu trúc cố định "had better + V0" (không có "to"). Mẹo thêm: "had better" mang sắc thái cảnh báo mạnh hơn "should" — nếu không làm sẽ có hậu quả.'},
        {q:'------ I offer you some advice on how to improve the proposal?', choices:['May','Must','Are','Has'], correct:0, explain:'Dịch: Tôi xin phép đưa ra vài lời khuyên để cải thiện đề xuất được không? — Giải thích: xin phép lịch sự → "May I + V0…?". Mẹo thêm: "Might I…?" còn trang trọng hơn nữa nhưng ít dùng.'},
        {q:'The new policy ------ be announced next week, according to the CEO.', choices:['would have','will','should have','must have'], correct:1, explain:'Dịch: Theo CEO, chính sách mới sẽ được công bố vào tuần sau. — Giải thích: sự việc ở tương lai (next week) → "will + be + V-pp". Mẹo thêm: các dạng "have + V-pp" chỉ quá khứ nên loại ngay.'},
        {q:'The printer is broken, so we ------ print the invoices today.', choices:['could have','can','can’t','must'], correct:2, explain:'Dịch: Máy in bị hỏng nên hôm nay chúng tôi không thể in hóa đơn. — Giải thích: kết quả phủ định của việc máy hỏng → "can’t + V0". Mẹo thêm: "must print" nghĩa là bắt buộc in, mâu thuẫn với "broken".'},
        {q:'We regret that we ------ accept returns after 30 days.', choices:['must','can','might','cannot'], correct:3, explain:'Dịch: Chúng tôi rất tiếc không thể nhận đổi trả sau 30 ngày. — Giải thích: "regret that" (rất tiếc rằng) đi với nội dung phủ định → "cannot". Mẹo thêm: "cannot" viết liền một từ (không viết "can not").'}
      ]
    }
  ],

  vocab: [
    {word:'deadline', ipa:'/ˈdedlaɪn/', meaning:'hạn chót', example:'The deadline cannot be extended.', note:'meet a deadline = kịp hạn'},
    {word:'carrier', ipa:'/ˈkæriər/', meaning:'hãng vận chuyển', example:'According to the carrier, the shipment should arrive on Monday.', note:'shipping company'},
    {word:'thorough', ipa:'/ˈθʌrə/', meaning:'kỹ lưỡng, toàn diện', example:'We would conduct a more thorough analysis.', note:'trạng từ: thoroughly'},
    {word:'back up', ipa:'/bæk ʌp/', meaning:'sao lưu (dữ liệu)', example:'You had better back up your files.', note:'danh từ: backup'},
    {word:'regret', ipa:'/rɪˈɡret/', meaning:'rất tiếc', example:'We regret that we cannot accept returns.', note:'trang trọng, hay dùng trong thông báo'},
    {word:'crash', ipa:'/kræʃ/', meaning:'sập, treo (hệ thống)', example:'The system crashed last night.', note:'cũng là "va chạm"'}
  ]
};
