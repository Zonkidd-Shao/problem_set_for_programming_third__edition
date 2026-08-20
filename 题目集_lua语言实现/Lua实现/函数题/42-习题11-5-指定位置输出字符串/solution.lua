-- Lua 5.3+
local s=io.read("*l") or ""; local start=tonumber(io.read("*l")) or 1; local length=tonumber(io.read("*l")) or (#s-start+1); print(s:sub(start,start+length-1))
