# 🧪 Test Template

File này giúp bạn test xem template đã hoạt động chưa.

## ✅ Checklist Test

### Test 1: CLAUDE.md (Auto Vietnamese)
```
Bạn gõ: "Hello"
Kỳ vọng: Claude trả lời bằng TIẾNG VIỆT

Bạn gõ: "Giới thiệu về bạn"
Kỳ vọng: Claude giới thiệu bằng tiếng Việt, đầy đủ
```

**Kết quả:** ☐ Pass / ☐ Fail

---

### Test 2: Slash Command /review
```bash
/review demo.js
```

**Kỳ vọng:**
- Claude đọc và phân tích file demo.js
- Đánh giá chất lượng code
- Format output bằng tiếng Việt với sections:
  - 📊 Tổng Quan
  - ✅ Những Điểm Tốt
  - ⚠️ Vấn Đề Cần Chú Ý
  - 💡 Đề Xuất Cải Thiện

**Kết quả:** ☐ Pass / ☐ Fail

---

### Test 3: Output Style - Kiến Trúc Sư
```bash
/output-style kien-truc-su
```

Sau đó hỏi:
```
Nên dùng REST API hay GraphQL cho app mobile?
```

**Kỳ vọng:**
- Response theo format architect
- Có sections:
  - 🏗️ Tổng Quan
  - 🔄 Các Lựa Chọn (REST vs GraphQL)
  - ⚖️ Trade-offs
  - ✅ Khuyến Nghị
- Có bảng so sánh
- Có sơ đồ ASCII (có thể)

**Kết quả:** ☐ Pass / ☐ Fail

---

### Test 4: Skill - Giải Thích Code
```
Giải thích code này cho tôi:

const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2);
console.log(doubled);
```

**Kỳ vọng:**
- Skill tự động kích hoạt
- Output có:
  - 📋 Tổng Quan
  - 🔍 Phân Tích Chi Tiết
  - 💡 Khái Niệm (giải thích .map())
  - 🗣️ Nói Cách Khác
  - ⚠️ Lỗi Thường Gặp
  - 📚 Nên Tìm Hiểu Thêm

**Kết quả:** ☐ Pass / ☐ Fail

---

### Test 5: Agent - Debug Expert
```
Code này bị lỗi:

function divide(a, b) {
  return a / b;
}

console.log(divide(10, 0));
```

**Kỳ vọng:**
- Claude phân tích lỗi
- Chỉ ra vấn đề (division by zero)
- Đề xuất fix (check b !== 0)
- Format theo debug workflow

**Kết quả:** ☐ Pass / ☐ Fail

---

### Test 6: Combine Features
```bash
# Bước 1: Kích hoạt architect mode
/output-style kien-truc-su

# Bước 2: Review với architect perspective
/review demo.js
```

**Kỳ vọng:**
- Review code nhưng với architect style
- Đánh giá architecture decisions
- Trade-offs analysis

**Kết quả:** ☐ Pass / ☐ Fail

---

## 📊 Test Summary

```
Total Tests: 6
Passed: ___
Failed: ___
Success Rate: ___%
```

---

## 🐛 Common Issues & Solutions

### Issue 1: Claude không trả lời tiếng Việt
**Solution:**
```bash
# Check CLAUDE.md exists
ls -la CLAUDE.md

# Restart Claude Code
exit
claude
```

### Issue 2: /review command không hoạt động
**Solution:**
```bash
# Check command file
cat .claude/commands/review.md

# Restart Claude Code
```

### Issue 3: Skill không tự động kích hoạt
**Solution:**
```bash
# Check SKILL.md format
cat .claude/skills/giai-thich-code/SKILL.md

# Ensure có frontmatter với description
```

### Issue 4: Output style không apply
**Solution:**
```bash
# Re-activate
/output-style kien-truc-su

# Check file exists
ls .claude/output-styles/
```

---

## ✅ Test Complete!

Nếu tất cả tests đều pass:
🎉 **Template đã sẵn sàng để chia sẻ!**

Nếu có tests fail:
1. Đọc phần Troubleshooting trong `HUONG-DAN-SU-DUNG.md`
2. Check file configs
3. Restart Claude Code
4. Test lại

---

## 📝 Test Notes

Ghi chú của bạn:
```
Date: ___________
Tester: ___________
Claude Code Version: ___________

Notes:
-
-
-
```
