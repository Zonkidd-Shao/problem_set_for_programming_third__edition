-- Lua 5.3+
local s=io.read("*l") or ""; local sub=io.read("*l") or ""; print(s:find(sub,1,true) or -1)
