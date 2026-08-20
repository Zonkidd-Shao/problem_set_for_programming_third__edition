from pathlib import Path
import re
import importlib.util

root = Path(__file__).resolve().parents[1] / "Lua实现"
problems = []
errors = []
for category in ("编程题", "函数题"):
    category_dir = root / category
    folders = sorted(p for p in category_dir.iterdir() if p.is_dir())
    problems.extend((category, p) for p in folders)
    for folder in folders:
        statement = folder / "题目.md"
        solution = folder / "solution.lua"
        if not statement.exists():
            errors.append(f"缺少题目: {folder}")
        if not solution.exists():
            errors.append(f"缺少代码: {folder}")
        elif not solution.read_text(encoding="utf-8").strip():
            errors.append(f"空代码: {solution}")
        else:
            text = solution.read_text(encoding="utf-8")
            if text.count("[[") != text.count("]]" ):
                errors.append(f"长字符串标记不平衡: {solution}")
            if text.count("(") != text.count(")"):
                errors.append(f"括号数量可疑: {solution}")

print(f"题目目录: {len(problems)}")
print(f"Lua 文件: {sum((p / 'solution.lua').exists() for _, p in problems)}")
print(f"题目文件: {sum((p / '题目.md').exists() for _, p in problems)}")
if errors:
    print("错误:")
    print("\n".join(errors))
    raise SystemExit(1)
print("结构检查通过")
print("静态检查: 已完成括号与文件完整性检查；当前环境未发现 Lua 解释器")
