-- Lua 5.3+
local s=io.read("*l") or ""; local sign=1; local first=s:find("[%x]"); if first and s:sub(1,first-1):find("%-") then sign=-1 end; local digits=s:sub(first or 1):match("^[%x]+") or "0"; print(sign*tonumber(digits,16))
