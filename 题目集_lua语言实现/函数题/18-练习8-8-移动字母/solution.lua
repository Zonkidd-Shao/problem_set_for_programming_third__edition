-- Lua 5.3+
local s=io.read("*l") or ""; local k=math.floor(#s/2); print(s:sub(k+1)..s:sub(1,k))
