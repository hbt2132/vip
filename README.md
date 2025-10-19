# 🇻🇳 Claude Code - Template Tiếng Việt

> Template cấu hình Claude Code với đầy đủ Skills, Commands, Output Styles và Agents bằng tiếng Việt

## 📖 Giới Thiệu

Template này giúp bạn có một **Claude Code siêu mạnh** với các tính năng:
- ✅ Trả lời **100% tiếng Việt**
- ✅ Slash Commands để làm việc nhanh hơn
- ✅ Output Styles cho các phong cách trả lời khác nhau
- ✅ Skills tự động kích hoạt khi cần
- ✅ Sub-Agents chuyên môn hóa

## 🚀 Cài Đặt Nhanh (3 Bước)

### Bước 1: Download Template
```bash
# Option 1: Clone từ GitHub (nếu bạn đã push lên)
git clone https://github.com/your-username/claude-code-vietnamese-template.git
cd claude-code-vietnamese-template

# Option 2: Giải nén file ZIP (nếu chia sẻ qua file)
# - Giải nén file ZIP vào thư mục bạn muốn
# - Mở terminal tại thư mục đó
```

### Bước 2: Mở Claude Code
```bash
# Mở Claude Code trong thư mục này
claude-code
# Hoặc mở terminal tại đây và gõ: claude
```

### Bước 3: Test Thử
Gõ bất kỳ câu hỏi nào bằng tiếng Việt, Claude sẽ tự động trả lời bằng tiếng Việt!

```
Bạn: "Xin chào, giới thiệu về bạn"
Claude: "Xin chào! Tôi là Claude Code..."
```

## 📁 Cấu Trúc Template

```
claude-code-vietnamese-template/
├── CLAUDE.md                          # ← Context tự động (tiếng Việt)
├── README.md                          # ← File hướng dẫn này
├── HUONG-DAN-SU-DUNG.md              # ← Hướng dẫn chi tiết
└── .claude/                           # ← Thư mục configs
    ├── commands/                      # ← Slash commands
    │   └── review.md                  # → /review <file>
    ├── output-styles/                 # ← Output styles
    │   └── kien-truc-su.md           # → /output-style kien-truc-su
    ├── skills/                        # ← Skills tự động
    │   └── giai-thich-code/
    │       └── SKILL.md              # → Tự động giải thích code
    └── agents/                        # ← Sub-agents
        └── debug-expert.md           # → Agent debug chuyên nghiệp
```

## 🎯 Tính Năng Chính

### 1. CLAUDE.md - Context Tự Động
- **Tự động kích hoạt**: Không cần làm gì!
- **Chức năng**:
  - Claude luôn trả lời bằng tiếng Việt
  - Tuân thủ best practices
  - Giải thích code chi tiết, dễ hiểu

### 2. Slash Command: `/review`
**Cách dùng:**
```bash
/review path/to/your/file.js
```

**Kết quả:**
- Đánh giá chất lượng code
- Phân tích bugs, lỗi bảo mật
- Đề xuất cải thiện
- Tất cả bằng tiếng Việt!

### 3. Output Style: `/output-style kien-truc-su`
**Cách dùng:**
```bash
/output-style kien-truc-su
```

**Kết quả:**
- Claude trả lời theo phong cách Kiến Trúc Sư
- Phân tích kiến trúc hệ thống
- So sánh options với ưu/nhược điểm
- Sơ đồ ASCII minh họa

### 4. Skill: Giải Thích Code
**Tự động kích hoạt khi:**
```
"Giải thích code này cho tôi"
"Code này hoạt động thế nào?"
"Phân tích đoạn code này"
```

**Kết quả:**
- Giải thích từng dòng code
- Ví dụ thực tế dễ hiểu
- Phân tích khái niệm
- Common mistakes và cách tránh

### 5. Agent: Debug Expert
**Tự động dùng khi:**
- Debug code phức tạp
- Phân tích lỗi có hệ thống
- Tìm root cause của bugs

## 💡 Ví Dụ Sử Dụng

### Ví dụ 1: Review Code
```bash
/review app.js
```

Output:
```
## 📊 Tổng Quan
- Điểm mạnh: Code structure tốt, có error handling
- Điểm cần cải thiện: Performance và security

## ⚠️ Vấn Đề Cần Chú Ý
1. [Mức độ: Cao] SQL Injection vulnerability
   - Line 45: Query không parameterized
   - Giải pháp: Dùng prepared statements
...
```

### Ví dụ 2: Giải Thích Code
```
Bạn: "Giải thích code này:
const arr = [1,2,3].map(x => x * 2);
"

Claude: "
### 📋 Tổng Quan
Code nhân đôi mỗi số trong mảng
- Input: [1,2,3]
- Output: [2,4,6]

### 🔍 Phân Tích
...
"
```

### Ví dụ 3: Architect Mode
```bash
/output-style kien-truc-su
```
```
Bạn: "Thiết kế kiến trúc microservices cho e-commerce"

Claude: "
## 🏗️ Tổng Quan Kiến Trúc
...

## 🔄 Các Lựa Chọn
### Option 1: Event-Driven Architecture
**Ưu điểm:**
- Loose coupling
- Scalability cao
...
"
```

## 🛠️ Tùy Chỉnh Template

### Thêm Slash Command Mới
1. Tạo file `.claude/commands/ten-command.md`
2. Viết nội dung command (dùng `{{arg1}}` cho arguments)
3. Sử dụng: `/ten-command <args>`

### Thêm Output Style Mới
1. Tạo file `.claude/output-styles/ten-style.md`
2. Viết hướng dẫn cho style đó
3. Kích hoạt: `/output-style ten-style`

### Thêm Skill Mới
1. Tạo thư mục `.claude/skills/ten-skill/`
2. Tạo file `SKILL.md` với frontmatter `description`
3. Claude tự động dùng khi phù hợp

## 📤 Cách Chia Sẻ Template Này

### Option 1: Qua GitHub (Khuyến nghị)
```bash
# 1. Tạo repo mới trên GitHub
# 2. Push template lên
cd claude-code-vietnamese-template
git init
git add .
git commit -m "Initial commit: Claude Code Vietnamese Template"
git remote add origin https://github.com/your-username/claude-code-vietnamese-template.git
git push -u origin main

# 3. Người khác chỉ cần:
git clone https://github.com/your-username/claude-code-vietnamese-template.git
```

### Option 2: Qua ZIP File
```bash
# 1. Nén thư mục thành ZIP
# 2. Chia sẻ qua email, Google Drive, etc.
# 3. Người khác giải nén và dùng
```

### Option 3: Qua USB/Shared Folder
```bash
# Copy trực tiếp folder này
# Paste vào máy người khác
```

## ❓ FAQ (Câu Hỏi Thường Gặp)

### Q1: Claude Code là gì?
**A:** Claude Code là CLI tool của Anthropic, giúp AI viết code và làm việc với codebase.

### Q2: Tôi cần cài gì không?
**A:** Bạn cần:
- Claude Code CLI đã được cài đặt
- Tài khoản Claude (Pro, Max, Team, hoặc Enterprise)

### Q3: Template này có hoạt động với VS Code không?
**A:** Template này dành cho Claude Code CLI. Với VS Code, bạn cần extension khác.

### Q4: Tôi có thể chỉnh sửa được không?
**A:** Có! Mọi file `.md` đều có thể chỉnh sửa tùy ý.

### Q5: Có cần internet không?
**A:** Có, Claude Code cần kết nối internet để gọi API.

### Q6: Template này miễn phí không?
**A:** Template miễn phí, nhưng Claude Code cần subscription.

## 🎓 Tài Liệu Tham Khảo

- [Claude Code Official Docs](https://docs.claude.com/en/docs/claude-code)
- [Repository gốc phân tích](https://github.com/AgiFlow/claude-code-prompt-analysis)
- [Claude Skills Collection](https://github.com/abubakarsiddik31/claude-skills-collection)

## 🤝 Đóng Góp

Nếu bạn muốn thêm skills, commands, hoặc cải thiện template:
1. Fork repository
2. Tạo branch mới: `git checkout -b feature/ten-feature`
3. Commit changes: `git commit -m "Add some feature"`
4. Push to branch: `git push origin feature/ten-feature`
5. Tạo Pull Request

## 📝 License

MIT License - Sử dụng tự do cho mục đích cá nhân và thương mại.

## 💬 Liên Hệ & Hỗ Trợ

Nếu có vấn đề hoặc câu hỏi:
- Tạo Issue trên GitHub
- Email: [your-email@example.com]
- Facebook: [Your Facebook]

---

**Made with ❤️ by Vietnamese AI Enthusiasts**

*Tạo ngày: 2025-10-19*
*Phiên bản: 1.0.0*
