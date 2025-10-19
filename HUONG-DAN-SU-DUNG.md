# 📚 Hướng Dẫn Sử Dụng Chi Tiết

## Mục Lục
1. [Cài Đặt Ban Đầu](#cài-đặt-ban-đầu)
2. [Các Tính Năng](#các-tính-năng)
3. [Ví Dụ Thực Tế](#ví-dụ-thực-tế)
4. [Tùy Chỉnh](#tùy-chỉnh)
5. [Troubleshooting](#troubleshooting)

---

## Cài Đặt Ban Đầu

### Bước 1: Kiểm Tra Claude Code Đã Cài Chưa
```bash
claude --version
```

Nếu chưa có, cài đặt:
```bash
npm install -g @anthropics/claude-code
# Hoặc
curl -fsSL https://claude.ai/install.sh | sh
```

### Bước 2: Đăng Nhập
```bash
claude login
```

### Bước 3: Navigate Vào Template
```bash
cd path/to/claude-code-vietnamese-template
```

### Bước 4: Khởi Động Claude Code
```bash
claude
```

---

## Các Tính Năng

### 1️⃣ CLAUDE.md - Auto Context

**Không cần làm gì!** File này tự động được Claude đọc.

**Nội dung:**
- Hướng dẫn trả lời tiếng Việt
- Quy tắc viết code
- Best practices
- Phong cách giải thích

**Khi nào dùng:** Luôn luôn (tự động)

**Customize:**
Chỉnh sửa file `CLAUDE.md` để thay đổi hành vi mặc định của Claude.

---

### 2️⃣ Slash Command: /review

**Syntax:**
```bash
/review <file_path>
```

**Ví dụ:**
```bash
/review src/app.js
/review components/Button.tsx
/review utils/helpers.py
```

**Output:**
- ✅ Điểm mạnh của code
- ⚠️ Vấn đề cần chú ý (bugs, security, performance)
- 💡 Đề xuất cải thiện
- 📝 Kết luận

**Use cases:**
- Code review trước khi commit
- Audit security
- Học cách viết code tốt hơn

---

### 3️⃣ Output Style: /output-style kien-truc-su

**Syntax:**
```bash
/output-style kien-truc-su
```

**Khi nào dùng:**
- Thiết kế kiến trúc hệ thống
- So sánh các approaches
- Phân tích trade-offs
- Quyết định technical decisions

**Output format:**
- 🏗️ Tổng quan kiến trúc
- 🔄 Các lựa chọn (Options)
- ⚖️ Bảng so sánh
- ✅ Khuyến nghị
- 📋 Roadmap implement

**Ví dụ:**
```
Bạn: /output-style kien-truc-su
Bạn: Nên dùng REST API hay GraphQL cho dự án e-commerce?

Claude sẽ trả lời theo format architect với:
- So sánh REST vs GraphQL
- Pros/Cons của mỗi cái
- Trade-offs
- Recommendation dựa trên context
```

**Tắt output style:**
```bash
/output-style default
```

---

### 4️⃣ Skill: Giải Thích Code

**Tự động kích hoạt khi bạn nói:**
- "Giải thích code này"
- "Code này hoạt động thế nào"
- "Phân tích đoạn code này"
- "Explain this code"

**Output:**
```markdown
### 📋 Tổng Quan
- Mô tả ngắn gọn
- Input/Output

### 🔍 Phân Tích Chi Tiết
[Từng dòng code với giải thích]

### 💡 Khái Niệm
[Giải thích các khái niệm liên quan]

### 🗣️ Nói Cách Khác
[Giải thích bằng ngôn ngữ đời thường]

### ⚠️ Lỗi Thường Gặp
[Common mistakes và cách tránh]

### 📚 Nên Tìm Hiểu Thêm
[Related topics]
```

**Ví dụ:**
```
Bạn: Giải thích code này:
async function fetchData() {
  const res = await fetch('/api/data');
  return res.json();
}

Claude sẽ giải thích:
- async/await là gì
- fetch hoạt động thế nào
- .json() làm gì
- Khi nào dùng pattern này
- Error handling thiếu gì
```

---

### 5️⃣ Agent: Debug Expert

**Tự động được gọi khi:**
- Lỗi phức tạp
- Cần trace root cause
- Debug có hệ thống

**Phương pháp:**
1. Thu thập thông tin
2. Tái hiện lỗi
3. Isolation (cô lập)
4. Hypothesis (giả thuyết)
5. Testing
6. Fix
7. Verify

**Output:**
```markdown
## 🐛 Bug Report
### Mô Tả Lỗi
### Error Message
### Root Cause
### Giải Pháp (nhiều options)
### Code Fix
### Test Cases
### Prevention
```

---

## Ví Dụ Thực Tế

### Ví dụ 1: Code Review Workflow

**Scenario:** Bạn vừa viết xong một function, muốn review trước khi commit.

```bash
# Bước 1: Review code
/review src/utils/auth.js

# Claude sẽ phân tích và đưa ra feedback

# Bước 2: Fix theo feedback
# ... sửa code ...

# Bước 3: Review lại
/review src/utils/auth.js

# Bước 4: Commit
git add src/utils/auth.js
git commit -m "Add auth utility with security improvements"
```

---

### Ví dụ 2: Learning Workflow

**Scenario:** Bạn đang học React và không hiểu useEffect.

```
Bạn: Giải thích code này:
useEffect(() => {
  fetchData();
}, [id]);

Claude (với Skill tự động):
### 📋 Tổng Quan
useEffect là React Hook để xử lý side effects...

### 🔍 Phân Tích
- useEffect chạy khi nào
- Dependency array [id] có ý nghĩa gì
- Cleanup function là gì

### 💡 Khái Niệm: Side Effects
...

### 🗣️ Nói Cách Khác
Giống như khi bạn vào một căn phòng (component mount)...

Bạn: Còn nếu dependency array rỗng thì sao?

Claude: Nếu [], useEffect chỉ chạy 1 lần khi component mount...
```

---

### Ví dụ 3: Architecture Design Workflow

**Scenario:** Bạn cần thiết kế hệ thống chat real-time.

```bash
# Bước 1: Kích hoạt architect mode
/output-style kien-truc-su

# Bước 2: Hỏi
Thiết kế kiến trúc cho chat app với 100k concurrent users

# Claude sẽ trả lời:
## 🏗️ Tổng Quan Kiến Trúc
...

## 🔄 Các Lựa Chọn

### Option 1: WebSocket với Redis Pub/Sub
**Ưu điểm:**
- Real-time bidirectional
- Mature technology
**Nhược điểm:**
- Scaling complexity
- Connection management

### Option 2: Server-Sent Events với Message Queue
...

### Option 3: WebRTC P2P
...

## ⚖️ Trade-offs Matrix
| Tiêu chí | WS+Redis | SSE+MQ | WebRTC |
...

## ✅ Khuyến Nghị
Dựa trên yêu cầu 100k users, recommend Option 1...

## 📋 Implementation Roadmap
1. Setup WebSocket server
2. Configure Redis cluster
3. Implement message routing
...
```

---

### Ví dụ 4: Debug Workflow

**Scenario:** App của bạn crash với error không rõ ràng.

```
Bạ: App của tôi bị crash với lỗi này:
TypeError: Cannot read property 'map' of undefined
at UserList.jsx:15

Claude (Debug Agent tự động):
## 🐛 Phân Tích Lỗi

### 1️⃣ Thu Thập Thông Tin
Lỗi xảy ra ở UserList.jsx dòng 15
Error type: TypeError - accessing property of undefined

### 2️⃣ Root Cause
Có thể do:
1. API chưa trả về data
2. State initialization sai
3. Async timing issue

### 3️⃣ Debug Steps
Hãy kiểm tra:
- Line 15 của UserList.jsx
- State initialization
- API response

Bạn có thể show tôi code quanh line 15 không?

Bạn: [paste code]

Claude: Ah, tôi thấy vấn đề rồi!

### Root Cause
`users` state là `undefined` khi component render lần đầu,
trước khi API call hoàn thành.

### Giải Pháp
[Code fix with explanation]

### Test Cases
[Test cases để verify]
```

---

## Tùy Chỉnh

### Thêm Slash Command Mới

**Ví dụ: Tạo `/translate` command**

1. Tạo file: `.claude/commands/translate.md`

```markdown
# Translate Code

Translate code from one language to another.

## Usage
/translate {{arg1}} to {{arg2}}

## Instructions
Please translate the following code from {{arg1}} to {{arg2}}.

Ensure:
- Maintain logic and structure
- Follow {{arg2}} best practices
- Add comments explaining key differences
```

2. Sử dụng:
```bash
/translate JavaScript to Python
```

---

### Thêm Output Style Mới

**Ví dụ: Tạo style "Giáo Viên"**

1. Tạo file: `.claude/output-styles/giao-vien.md`

```markdown
---
description: Phong cách giáo viên dạy học, kiên nhẫn, từng bước
---

# Output Style: Giáo Viên

Bạn đang hành động như một giáo viên dạy lập trình.

## Nguyên Tắc
- Kiên nhẫn, không bao giờ nói "đơn giản"
- Giải thích từ cơ bản đến nâng cao
- Dùng nhiều ví dụ thực tế
- Khuyến khích đặt câu hỏi
- Check understanding sau mỗi phần

## Response Structure
1. Giới thiệu khái niệm
2. Giải thích chi tiết với ví dụ
3. Practice exercise
4. Kiểm tra hiểu bài
```

2. Sử dụng:
```bash
/output-style giao-vien
```

---

### Thêm Skill Mới

**Ví dụ: Tạo skill "Test Generator"**

1. Tạo thư mục: `.claude/skills/test-generator/`
2. Tạo file: `SKILL.md`

```markdown
---
name: test-generator
description: Tự động generate test cases cho code. Kích hoạt khi user muốn viết tests hoặc test coverage.
---

# Skill: Test Generator

## Mục Đích
Tự động generate unit tests, integration tests cho code.

## Khi Nào Kích Hoạt
- "Viết test cho code này"
- "Generate test cases"
- "Cần test coverage"

## Output Format
```[language]
// Test file: [name].test.js

describe('[Component/Function name]', () => {
  test('should [expected behavior]', () => {
    // Arrange
    // Act
    // Assert
  });
});
```

## Principles
- Cover happy path
- Cover edge cases
- Cover error cases
- Aim for 80%+ coverage
```

3. Claude sẽ tự động dùng khi bạn hỏi về tests!

---

## Troubleshooting

### Vấn đề 1: Claude không trả lời tiếng Việt

**Nguyên nhân:** File CLAUDE.md không được đọc

**Giải pháp:**
```bash
# Kiểm tra file có tồn tại không
ls -la CLAUDE.md

# Kiểm tra quyền đọc
cat CLAUDE.md

# Restart Claude Code
exit
claude
```

---

### Vấn đề 2: Slash command không hoạt động

**Nguyên nhân:** File command không đúng format hoặc vị trí

**Giải pháp:**
```bash
# Kiểm tra cấu trúc
ls -la .claude/commands/

# Kiểm tra nội dung file
cat .claude/commands/review.md

# File phải có extension .md
# File phải nằm trong .claude/commands/
```

---

### Vấn đề 3: Skill không tự động kích hoạt

**Nguyên nhân:** Thiếu frontmatter hoặc description không rõ

**Giải pháp:**
Đảm bảo file SKILL.md có format:
```markdown
---
name: skill-name
description: Mô tả rõ ràng khi nào skill được dùng
---

# Nội dung skill
```

---

### Vấn đề 4: Output style không áp dụng

**Giải pháp:**
```bash
# List available styles
ls .claude/output-styles/

# Kích hoạt lại
/output-style kien-truc-su

# Kiểm tra đã active chưa
# (Claude sẽ trả lời theo style đó)
```

---

## Tips & Tricks

### Tip 1: Combine Multiple Features
```bash
# Kích hoạt architect mode
/output-style kien-truc-su

# Sau đó review code với perspective architect
/review src/architecture/
```

### Tip 2: Create Project-Specific Commands
Thêm commands cho workflow của project:
- `/deploy` - Deploy instructions
- `/test` - Run tests
- `/docs` - Generate documentation

### Tip 3: Version Control Your Configs
```bash
git add .claude/ CLAUDE.md
git commit -m "Add Claude Code configs"

# Team members clone và có cùng setup!
```

### Tip 4: Iterate on Skills
Skills càng dùng càng tốt. Hãy:
- Thử nghiệm
- Điều chỉnh descriptions
- Thêm examples
- Refine dần

---

## Next Steps

1. ✅ Thử tất cả features cơ bản
2. ✅ Tùy chỉnh để phù hợp workflow
3. ✅ Chia sẻ với team
4. ✅ Đóng góp skills mới lên community

**Happy Coding with Claude! 🚀**
