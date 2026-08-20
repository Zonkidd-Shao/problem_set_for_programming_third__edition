-- Lua 5.3+
local s=io.read("*l") or ""; print((s:gsub("%u",function(c)return string.char(155-c:byte()) end)))
