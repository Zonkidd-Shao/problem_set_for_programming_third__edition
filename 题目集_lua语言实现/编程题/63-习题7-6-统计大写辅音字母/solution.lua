-- Lua 5.3+
local s=io.read("*a") or ""; local count=0; for c in s:gmatch("[A-Z]") do if not c:match("[AEIOU]") then count=count+1 end end; print(count)
