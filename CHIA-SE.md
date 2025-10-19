# 📤 Hướng Dẫn Chia Sẻ Template

## 3 Cách Chia Sẻ Template Này

### 🌟 Cách 1: Qua GitHub (Khuyến Nghị)

**Ưu điểm:**
- Dễ cập nhật
- Version control
- Người khác chỉ cần 1 lệnh git clone
- Có thể làm public hoặc private

**Bước thực hiện:**

#### A. Tạo Repository Mới Trên GitHub

1. Vào https://github.com/new
2. Repository name: `claude-code-vietnamese-template`
3. Description: "Template Claude Code với đầy đủ configs tiếng Việt"
4. Chọn Public hoặc Private
5. **KHÔNG** chọn "Add a README" (đã có sẵn)
6. Click "Create repository"

#### B. Push Template Lên GitHub

```bash
# 1. Navigate vào thư mục template
cd /c/Users/Administrator/Desktop/claude-code-vietnamese-template

# 2. Initialize git
git init

# 3. Add tất cả files
git add .

# 4. Commit
git commit -m "Initial commit: Claude Code Vietnamese Template v1.0"

# 5. Add remote (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/claude-code-vietnamese-template.git

# 6. Push lên GitHub
git branch -M main
git push -u origin main
```

#### C. Hướng Dẫn Người Khác Sử Dụng

Gửi cho họ link GitHub và hướng dẫn:

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/claude-code-vietnamese-template.git

# Navigate vào thư mục
cd claude-code-vietnamese-template

# Mở Claude Code
claude

# Done! Claude giờ đã có tất cả configs tiếng Việt
```

#### D. Cập Nhật Template (Khi Có Thay Đổi)

```bash
# Người khác chỉ cần:
cd claude-code-vietnamese-template
git pull

# Lấy updates mới nhất!
```

---

### 📦 Cách 2: Qua File ZIP

**Ưu điểm:**
- Đơn giản, không cần GitHub
- Chia sẻ qua email, USB, Google Drive, etc.

**Bước thực hiện:**

#### A. Tạo File ZIP

**Windows:**
```bash
# Dùng PowerShell
cd /c/Users/Administrator/Desktop
Compress-Archive -Path claude-code-vietnamese-template -DestinationPath claude-code-template.zip
```

Hoặc:
- Right-click vào folder `claude-code-vietnamese-template`
- Chọn "Send to" > "Compressed (zipped) folder"

**Mac/Linux:**
```bash
cd /c/Users/Administrator/Desktop
zip -r claude-code-template.zip claude-code-vietnamese-template
```

#### B. Chia Sẻ File ZIP

Upload lên:
- Google Drive
- Dropbox
- OneDrive
- WeTransfer
- Email (nếu < 25MB)

#### C. Hướng Dẫn Người Khác

1. Download file ZIP
2. Giải nén (Right-click > Extract All)
3. Mở terminal tại thư mục đã giải nén
4. Chạy `claude`
5. Done!

---

### 💾 Cách 3: Copy Trực Tiếp (Local/USB)

**Ưu điểm:**
- Nhanh nhất cho sharing local
- Không cần internet

**Bước thực hiện:**

#### A. Copy Folder

**Qua USB:**
```bash
# Copy folder vào USB
cp -r /c/Users/Administrator/Desktop/claude-code-vietnamese-template /d/

# USB = D:\ (hoặc E:\, F:\, etc.)
```

**Qua Shared Network Folder:**
```bash
# Copy vào shared folder
cp -r /c/Users/Administrator/Desktop/claude-code-vietnamese-template \\\\server\\shared\\
```

#### B. Hướng Dẫn Người Khác

1. Copy folder từ USB/shared drive vào máy của họ
2. Paste vào nơi họ muốn (Desktop, Documents, etc.)
3. Mở terminal tại đó
4. Chạy `claude`
5. Done!

---

## 🎁 Tạo Installer Script (Bonus)

Để người khác cài đặt dễ dàng hơn, tạo script tự động:

### Windows: `install.bat`

```batch
@echo off
echo ============================================
echo   CLAUDE CODE VIETNAMESE TEMPLATE
echo   Installer v1.0
echo ============================================
echo.

:: Check if Claude Code is installed
where claude >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Claude Code chua duoc cai dat!
    echo Vui long cai dat tu: https://claude.ai/download
    pause
    exit /b 1
)

echo [OK] Claude Code da duoc cai dat
echo.

:: Copy files to user directory
set DEST=%USERPROFILE%\claude-projects\vietnamese-template
echo Dang sao chep files vao: %DEST%

if not exist "%USERPROFILE%\claude-projects" mkdir "%USERPROFILE%\claude-projects"
xcopy /E /I /Y "." "%DEST%"

echo.
echo ============================================
echo   CAI DAT THANH CONG!
echo ============================================
echo.
echo Template da duoc cai dat tai:
echo %DEST%
echo.
echo De su dung:
echo   cd %DEST%
echo   claude
echo.
pause
```

### Mac/Linux: `install.sh`

```bash
#!/bin/bash

echo "============================================"
echo "  CLAUDE CODE VIETNAMESE TEMPLATE"
echo "  Installer v1.0"
echo "============================================"
echo ""

# Check if Claude Code is installed
if ! command -v claude &> /dev/null; then
    echo "[ERROR] Claude Code chưa được cài đặt!"
    echo "Vui lòng cài đặt từ: https://claude.ai/download"
    exit 1
fi

echo "[OK] Claude Code đã được cài đặt"
echo ""

# Copy files to user directory
DEST="$HOME/claude-projects/vietnamese-template"
echo "Đang sao chép files vào: $DEST"

mkdir -p "$HOME/claude-projects"
cp -r . "$DEST"

echo ""
echo "============================================"
echo "  CÀI ĐẶT THÀNH CÔNG!"
echo "============================================"
echo ""
echo "Template đã được cài đặt tại:"
echo "$DEST"
echo ""
echo "Để sử dụng:"
echo "  cd $DEST"
echo "  claude"
echo ""
```

Cho phép execute:
```bash
chmod +x install.sh
```

---

## 📋 Checklist Trước Khi Chia Sẻ

Đảm bảo template có đầy đủ:

```
✅ CLAUDE.md
✅ README.md
✅ HUONG-DAN-SU-DUNG.md
✅ QUICK-START.md
✅ CHIA-SE.md (file này)
✅ .gitignore
✅ .claude/
   ✅ commands/review.md
   ✅ output-styles/kien-truc-su.md
   ✅ skills/giai-thich-code/SKILL.md
   ✅ agents/debug-expert.md
```

Test template:
```bash
cd claude-code-vietnamese-template
claude
# Gõ "xin chào" để test
# Thử /review
# Thử /output-style kien-truc-su
```

---

## 🌍 Chia Sẻ Rộng Rãi

### Share Trên Social Media

**Facebook:**
```
🇻🇳 Claude Code Vietnamese Template!

Tôi vừa tạo một template Claude Code hoàn chỉnh bằng tiếng Việt với:
✅ Auto context tiếng Việt
✅ Slash commands để review code
✅ Output styles cho architect mode
✅ Skills giải thích code chi tiết
✅ Debug agent chuyên nghiệp

Download: [GitHub link]

#ClaudeCode #AI #Coding #Vietnamese
```

**GitHub README Badge:**
Thêm vào README.md:
```markdown
![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-red)
![Language](https://img.shields.io/badge/Language-Ti%E1%BA%BFng%20Vi%E1%BB%87t-blue)
![Claude Code](https://img.shields.io/badge/Claude-Code-orange)
```

### Đóng Góp Vào Community

1. Post trên:
   - GitHub Discussions
   - Reddit r/ClaudeAI
   - Vietnamese dev communities
   - Discord servers

2. Viết blog post giới thiệu

3. Tạo video hướng dẫn YouTube

---

## 🔄 Maintain & Update

### Version Control

Khi có updates, tag versions:
```bash
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0

# Khi có update:
git tag -a v1.1.0 -m "Add new skills"
git push origin v1.1.0
```

### Changelog

Tạo file `CHANGELOG.md`:
```markdown
# Changelog

## [1.0.0] - 2025-10-19
### Added
- Initial release
- CLAUDE.md with Vietnamese context
- /review command
- /output-style kien-truc-su
- Skill: giai-thich-code
- Agent: debug-expert

## [1.1.0] - TBD
### Planned
- More skills
- More output styles
- Example projects
```

---

## 💬 Hỗ Trợ Người Dùng

Tạo **Issues template** trên GitHub:

`.github/ISSUE_TEMPLATE/bug_report.md`:
```markdown
---
name: Bug Report
about: Báo lỗi
---

**Mô tả lỗi:**
[Mô tả chi tiết]

**Các bước tái hiện:**
1. ...
2. ...

**Expected behavior:**
[Mong đợi gì]

**Actual behavior:**
[Thực tế xảy ra gì]

**Screenshots:**
[Nếu có]

**Environment:**
- OS: [Windows/Mac/Linux]
- Claude Code version: [chạy `claude --version`]
```

---

## 🎉 Done!

Template của bạn giờ đã sẵn sàng để chia sẻ!

**Chúc bạn có nhiều người dùng! 🚀**
