window.AZ_GRAMMAR_DATA = window.AZ_GRAMMAR_DATA || {};
window.AZ_GRAMMAR_DATA['lien-tu-part6'] = {
  id: 'lien-tu-part6',
  order: 13,
  title: 'Từ Nối Câu & Part 6',
  subtitle: 'Transitions & Text Completion',
  sourceExercises: 'Biên soạn theo phong cách TOEIC Part 6',
  sourceTheory: 'AZ Grammar 2nd edition — Conjunctions (Liên từ) + kinh nghiệm luyện Part 6',
  note: 'Bài tập do AZEnglish soạn thêm theo dạng Part 6 (điền từ nối, chọn câu chèn vào đoạn văn). Nhờ giáo viên rà soát trước khi dùng chính thức.',

  theory: [
    {
      group: 'Từ nối câu (Transitions) theo chức năng',
      tenses: [
        {
          name: 'Bổ sung thông tin',
          form: 'moreover · furthermore · in addition · besides · also',
          usage: ['The new policy reduces costs. Furthermore, it improves customer satisfaction.', 'The hotel offers free breakfast. In addition, guests can use the fitness center at no charge.'],
          signals: 'Hai ý CÙNG HƯỚNG (đều tích cực hoặc đều tiêu cực) → dùng từ bổ sung.'
        },
        {
          name: 'Tương phản, nhượng bộ',
          form: 'however · nevertheless · nonetheless · on the other hand · in contrast · instead',
          usage: ['The company had planned to open in May. However, construction delays pushed the opening to July.', 'The budget was cut by half. Nevertheless, sales rose by 15%.', 'Ms. Lee did not attend; instead, she sent her assistant.'],
          signals: 'Hai ý ĐỐI LẬP hoặc kết quả trái với dự đoán → however/nevertheless; thay thế một hành động bằng hành động khác → instead.'
        },
        {
          name: 'Kết quả, hệ quả',
          form: 'therefore · consequently · as a result · thus · accordingly',
          usage: ['The printer has been repaired twice this month. Consequently, we have decided to replace it.'],
          signals: 'Câu sau là HỆ QUẢ/quyết định rút ra từ câu trước.'
        },
        {
          name: 'Ví dụ, trình tự, điều kiện',
          form: 'for example / for instance · meanwhile · then · afterward · finally · otherwise',
          usage: ['Several factors affect morale. For example, a flexible schedule improves job satisfaction.', 'One team tests the software. Meanwhile, the other team writes the manual.', 'Submit the form by Friday. Otherwise, your application will not be processed.'],
          signals: 'otherwise = nếu không thì (hậu quả xấu nếu không làm điều trước đó).'
        }
      ]
    },
    {
      group: 'Phân biệt từ nối câu, liên từ và giới từ',
      tip: [
        'Từ nối câu (however, therefore, moreover…) đứng đầu câu/sau dấu chấm phẩy và có DẤU PHẨY theo sau: "…; however, sales rose."',
        'Liên từ (although, because, while, since) nối hai mệnh đề đầy đủ (S + V): Although the train was delayed, all passengers arrived on time.',
        'Giới từ (despite, because of, due to) theo sau là DANH TỪ/V-ing: Despite the heavy rain, the event went ahead. · The store closed early because of a power outage.',
        'Cặp dễ nhầm: although (+ mệnh đề) ↔ despite (+ danh từ) · because (+ mệnh đề) ↔ because of (+ danh từ).'
      ]
    },
    {
      group: 'Chiến lược Part 6: câu chèn vào đoạn văn',
      tip: [
        'Bước 1: đọc câu TRƯỚC và SAU chỗ trống để hiểu mạch ý.',
        'Bước 2: tìm "manh mối liên kết": đại từ (it, they, this), từ nối (however, in addition), từ lặp lại danh từ ở câu trước/sau.',
        'Bước 3: loại các câu lạc đề (nói chuyện khác chủ đề đoạn văn), câu sai thì, hoặc câu lặp lại nguyên ý đã có.',
        'Bước 4: đọc lại cả đoạn với câu vừa chọn xem có mạch lạc không.'
      ]
    }
  ],

  quizzes: [
    {
      id: 'p6-1', title: '1. Điền từ nối câu, liên từ & giới từ',
      items: [
        {q:'The marketing budget was cut by half. ------, sales rose by 15% last quarter.', choices:['Nevertheless','Likewise','For example','Therefore'], correct:0, explain:'Dịch: Ngân sách marketing bị cắt một nửa. Tuy vậy, doanh số quý trước vẫn tăng 15%. — Giải thích: kết quả trái với dự đoán (ngân sách giảm nhưng doanh số tăng) → "Nevertheless". Mẹo thêm: "Therefore" chỉ hệ quả hợp lý, không hợp ở đây.'},
        {q:'The printer has been repaired twice this month. ------, we have decided to replace it.', choices:['Instead of','Although','However','Consequently'], correct:3, explain:'Dịch: Máy in đã được sửa hai lần trong tháng này. Do đó, chúng tôi quyết định thay nó. — Giải thích: quyết định là hệ quả của việc hỏng nhiều lần → "Consequently". Mẹo thêm: "Instead of" và "Although" không đứng đầu câu với dấu phẩy như từ nối.'},
        {q:'The hotel offers free breakfast. ------, guests can use the fitness center at no charge.', choices:['Nevertheless','In addition','Otherwise','In contrast'], correct:1, explain:'Dịch: Khách sạn phục vụ bữa sáng miễn phí. Ngoài ra, khách có thể dùng phòng gym không mất phí. — Giải thích: hai ưu đãi cùng hướng → từ bổ sung "In addition". Mẹo thêm: "In contrast" dùng khi hai ý đối lập.'},
        {q:'Please submit the form by Friday. ------, your application will not be processed.', choices:['Therefore','Moreover','Otherwise','Meanwhile'], correct:2, explain:'Dịch: Vui lòng nộp mẫu đơn trước thứ Sáu. Nếu không, hồ sơ của bạn sẽ không được xử lý. — Giải thích: "Otherwise" = nếu không thì (hậu quả xấu). Mẹo thêm: rất hay gặp trong thông báo và thư trang trọng.'},
        {q:'Several factors affect employee morale. ------, a flexible schedule can greatly improve job satisfaction.', choices:['However','For example','As a result','Otherwise'], correct:1, explain:'Dịch: Có nhiều yếu tố ảnh hưởng đến tinh thần nhân viên. Ví dụ, lịch làm việc linh hoạt có thể cải thiện đáng kể sự hài lòng. — Giải thích: câu sau nêu ví dụ cho câu trước → "For example". Mẹo thêm: đồng nghĩa "For instance".'},
        {q:'The first team is testing the software. ------, the second team is preparing the user manual.', choices:['Meanwhile','Otherwise','Therefore','Instead'], correct:0, explain:'Dịch: Nhóm thứ nhất đang kiểm thử phần mềm. Trong khi đó, nhóm thứ hai đang soạn hướng dẫn sử dụng. — Giải thích: hai việc diễn ra cùng lúc → "Meanwhile". Mẹo thêm: "Meanwhile" cũng có thể mở đầu câu và theo sau bởi dấu phẩy.'},
        {q:'The company had planned to open in May. ------, construction delays pushed the opening to July.', choices:['Moreover','For example','However','Similarly'], correct:2, explain:'Dịch: Công ty đã dự định khai trương vào tháng 5. Tuy nhiên, việc xây dựng bị chậm nên lùi sang tháng 7. — Giải thích: kế hoạch bị đảo ngược → "However". Mẹo thêm: "Moreover" chỉ thêm ý cùng hướng.'},
        {q:'Ms. Lee did not attend the meeting; ------, she sent her assistant to take notes.', choices:['therefore','moreover','otherwise','instead'], correct:3, explain:'Dịch: Bà Lee không dự họp; thay vào đó, bà cử trợ lý đến ghi chép. — Giải thích: thay thế một hành động bằng hành động khác → "instead". Mẹo thêm: trước "instead" dùng dấu chấm phẩy hoặc dấu chấm.'},
        {q:'The new policy reduces costs. ------, it improves customer satisfaction.', choices:['Nonetheless','Otherwise','Furthermore','Instead'], correct:2, explain:'Dịch: Chính sách mới giúp giảm chi phí. Hơn nữa, nó còn nâng cao sự hài lòng của khách hàng. — Giải thích: hai lợi ích cùng hướng → "Furthermore". Mẹo thêm: Furthermore = Moreover = In addition.'},
        {q:'------ the train was delayed, all passengers arrived on time.', choices:['Therefore','However','Despite','Although'], correct:3, explain:'Dịch: Mặc dù tàu bị trễ, tất cả hành khách vẫn đến đúng giờ. — Giải thích: chỗ trống theo sau là mệnh đề đầy đủ (the train was delayed) → cần liên từ "Although". Mẹo thêm: "Despite" phải theo sau là danh từ/V-ing.'}
      ]
    },
    {
      id: 'p6-2', title: '2. Chọn câu chèn vào đoạn văn & giới từ',
      items: [
        {q:'------ the heavy rain, the outdoor event went ahead as planned.', choices:['Because','Despite','Although','However'], correct:1, explain:'Dịch: Bất chấp cơn mưa lớn, sự kiện ngoài trời vẫn diễn ra như kế hoạch. — Giải thích: theo sau là cụm danh từ "the heavy rain" → giới từ "Despite". Mẹo thêm: "Although" cần một mệnh đề đầy đủ.'},
        {q:'The store closed early ------ a power outage.', choices:['because of','because','although','however'], correct:0, explain:'Dịch: Cửa hàng đóng cửa sớm do mất điện. — Giải thích: theo sau là danh từ "a power outage" → "because of". Mẹo thêm: "because" phải đi kèm mệnh đề (because there was a power outage).'},
        {q:'Thank you for booking with Sunrise Travel. Your tour begins on June 3 at 8 a.m. ------ Please arrive at the meeting point 15 minutes early.', choices:['The meeting point is in front of the main station.','The tour was cancelled last year.','Our office is closed on Sundays.','We sell many types of souvenirs.'], correct:0, explain:'Dịch: Câu cần chọn phải giải thích thêm về "meeting point" được nhắc ở câu sau. — Giải thích: câu sau nói về "the meeting point" → câu chèn phải giới thiệu nó trước. Mẹo thêm: từ khóa lặp lại giữa hai câu là manh mối tốt nhất.'},
        {q:'Memo: Effective Monday, all staff must use the new time-tracking system. ------ Training sessions will be held on Friday.', choices:['The cafeteria has a new menu.','This change is intended to simplify payroll processing.','Many employees enjoy hiking.','Last year’s profits were lower.'], correct:1, explain:'Dịch: Câu chèn giải thích mục đích của việc đổi hệ thống chấm công. — Giải thích: "This change" quay lại chủ đề hệ thống mới, và nối tiếp tự nhiên sang lịch đào tạo. Mẹo thêm: đại từ chỉ định "This + N" là dấu hiệu liên kết với câu trước.'},
        {q:'We are pleased to announce that Ms. Kim will join our team as sales director. ------ She brings more than ten years of experience in retail.', choices:['Please turn off your phones.','Retail sales are seasonal.','The office will be repainted soon.','Her appointment takes effect on March 1.'], correct:3, explain:'Dịch: Câu chèn nói về hiệu lực của việc bổ nhiệm bà Kim. — Giải thích: "Her" quay lại Ms. Kim, cùng chủ đề bổ nhiệm; các câu còn lại lạc đề. Mẹo thêm: loại ngay câu không liên quan chủ đề đoạn văn.'},
        {q:'The library will close for renovation next month. ------ Books can be returned at the drop box outside the building.', choices:['Most students prefer online books.','The library was built in 1950.','During this time, borrowers may still return items.','Fiction is the most popular genre.'], correct:2, explain:'Dịch: Câu chèn nối thời gian đóng cửa với việc vẫn trả sách được. — Giải thích: "During this time" gắn với "close for renovation", và câu sau nói cách trả sách. Mẹo thêm: hãy đọc câu sau để xem câu chèn phải dẫn dắt điều gì.'},
        {q:'Mr. Park submitted his resignation on Friday. ------ He plans to start his own consulting firm.', choices:['Please call back later.','The weather was warm.','Parking is limited.','His last day will be April 30.'], correct:3, explain:'Dịch: Câu chèn cung cấp thêm chi tiết về việc từ chức của ông Park. — Giải thích: cùng chủ đề "resignation" và nối mạch sang kế hoạch sau khi nghỉ. Mẹo thêm: tránh chọn câu chỉ chứa từ quen thuộc mà không liên quan chủ đề.'},
        {q:'Thank you for contacting customer support. ------ We will reply to your inquiry within two business days.', choices:['We have received your message.','Your flight is delayed.','The sale ends tomorrow.','Our stock price has risen.'], correct:0, explain:'Dịch: Câu chèn xác nhận đã nhận tin nhắn của khách. — Giải thích: mở đầu thư hỗ trợ khách hàng: cảm ơn → xác nhận đã nhận → hứa phản hồi. Mẹo thêm: hãy chú ý trình tự logic điển hình của email dịch vụ.'},
        {q:'To reset your password, click the link below. ------ If you did not request a reset, please ignore this e-mail.', choices:['Passwords are hard to remember.','The company was founded in 1998.','The link will expire in 24 hours.','Tickets are non-refundable.'], correct:2, explain:'Dịch: Câu chèn bổ sung thông tin về đường link vừa nhắc. — Giải thích: "The link" lặp lại danh từ ở câu trước, cùng chủ đề đặt lại mật khẩu. Mẹo thêm: danh từ lặp lại giữa các câu = dấu hiệu liên kết mạnh.'},
        {q:'Dear Mr. Lopez, We are writing to inform you that your order ------ shipped yesterday.', choices:['has','was','is being','were'], correct:1, explain:'Dịch: Kính gửi ông Lopez, chúng tôi xin thông báo đơn hàng của ông đã được gửi đi hôm qua. — Giải thích: "yesterday" → quá khứ đơn bị động, chủ ngữ số ít "your order" → "was shipped". Mẹo thêm: trong Part 6 vẫn thường xen câu hỏi ngữ pháp giống Part 5.'}
      ]
    }
  ],

  vocab: [
    {word:'consequently', ipa:'/ˈkɑːnsɪkwentli/', meaning:'do đó, vì vậy', example:'Consequently, we have decided to replace it.', note:'đồng nghĩa: therefore, as a result'},
    {word:'nevertheless', ipa:'/ˌnevərðəˈles/', meaning:'tuy nhiên, dù vậy', example:'Nevertheless, sales rose by 15%.', note:'đồng nghĩa: nonetheless'},
    {word:'otherwise', ipa:'/ˈʌðərwaɪz/', meaning:'nếu không thì', example:'Otherwise, your application will not be processed.', note:'cũng nghĩa "theo cách khác"'},
    {word:'meanwhile', ipa:'/ˈmiːnwaɪl/', meaning:'trong khi đó', example:'Meanwhile, the second team is preparing the manual.', note:'chỉ hai việc cùng lúc'},
    {word:'inquiry', ipa:'/ɪnˈkwaɪəri/', meaning:'yêu cầu hỏi thông tin', example:'We will reply to your inquiry within two days.', note:'cũng viết enquiry'},
    {word:'resignation', ipa:'/ˌrezɪɡˈneɪʃn/', meaning:'đơn từ chức', example:'Mr. Park submitted his resignation.', note:'động từ: resign'}
  ]
};
