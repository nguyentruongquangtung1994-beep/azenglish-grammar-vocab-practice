/**
 * AZTOEIC Grammar & Vocab Trainer — nhận lead (tên/email/SĐT) VÀ điểm số bài luyện tập,
 * ghi vào Google Sheet. Dùng CHUNG project Apps Script "TOEIC LEADS" đã có sẵn (đang chạy
 * cho AZTOEIC Trainer cũ) — mở rộng doPost để phân biệt "type":"lead" và "type":"score".
 *
 * CÁCH DEPLOY (project "TOEIC LEADS" đã tồn tại ở script.google.com):
 * 1. Mở project Apps Script "TOEIC LEADS".
 * 2. Xoá hết code cũ trong Code.gs, dán toàn bộ nội dung file này vào.
 * 3. Bấm biểu tượng Lưu (đĩa mềm) — SPREADSHEET_URL bên dưới đã điền sẵn đúng link Sheet.
 * 4. Bấm "Triển khai" (Deploy) → "Quản lý các bản triển khai" (Manage deployments) → bấm nút
 *    sửa (bút chì) trên deployment đang có → mục "Phiên bản" (Version) chọn "Phiên bản mới"
 *    (New version) → Deploy. (Giữ nguyên URL cũ, không cần đổi URL trong index.html.)
 * 5. Nếu Google hỏi cấp quyền lại: chọn tài khoản → Advanced → Go to (tên project) (unsafe) → Allow.
 *
 * Sau khi deploy, dữ liệu sẽ tự động chia vào các tab:
 * - "AZTOEIC Leads"           — lead cũ từ TOEIC Trainer (giữ nguyên, không đổi)
 * - "AZTOEIC Grammar Leads"   — lead mới từ web Ngữ Pháp & Từ Vựng (cổng vào)
 * - "AZTOEIC Grammar Scores"  — điểm số mỗi lần học viên làm bài trên web Ngữ Pháp & Từ Vựng
 */

var SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/16S5ZihpyNRXucz6YXVpQ9yt1ybEDpufzGghcPVP4sMM/edit";

var LEGACY_LEADS_SHEET = "AZTOEIC Leads";           // AZTOEIC Trainer cũ — không đổi
var GRAMMAR_LEADS_SHEET = "AZTOEIC Grammar Leads";   // web Ngữ Pháp & Từ Vựng — lead
var GRAMMAR_SCORES_SHEET = "AZTOEIC Grammar Scores"; // web Ngữ Pháp & Từ Vựng — điểm số
var GRAMMAR_SOURCE = "AZTOEIC-Grammar-Vocab-Trainer";

function getOrCreateSheet_(ss, name, headerRow) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) sheet.appendRow(headerRow);
  return sheet;
}

function doPost(e) {
  var ss = SpreadsheetApp.openByUrl(SPREADSHEET_URL);

  var data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    data = {};
  }

  if (data.type === "score") {
    var scoreSheet = getOrCreateSheet_(ss, GRAMMAR_SCORES_SHEET, [
      "Thời gian", "Họ tên", "Email", "Số điện thoại",
      "Chủ điểm", "Bài luyện tập", "Điểm đúng", "Tổng số câu", "Phần trăm", "Chế độ"
    ]);
    var total = Number(data.total) || 0;
    var score = Number(data.score) || 0;
    var pct = total ? Math.round((score / total) * 100) : 0;
    scoreSheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.topic || "",
      data.quiz || "",
      score,
      total,
      pct + "%",
      data.mode === "test" ? "Kiểm tra" : "Luyện tập"
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // type === "lead" (hoặc không có type — tương thích ngược với AZTOEIC Trainer cũ)
  var isGrammarSite = data.source === GRAMMAR_SOURCE;
  var leadSheet = getOrCreateSheet_(
    ss,
    isGrammarSite ? GRAMMAR_LEADS_SHEET : LEGACY_LEADS_SHEET,
    ["Thời gian nhận", "Họ tên", "Email", "Số điện thoại", "Nguồn"]
  );
  leadSheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.source || ""
  ]);

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
