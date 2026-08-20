-- Lua 5.3+
local lines={}; for line in io.lines() do lines[#lines+1]=line end; local source=lines[1] or ""; local start=tonumber(lines[2] or 1) or 1; local length=tonumber(lines[3] or #source) or #source; print(source:sub(start,start+length-1))
