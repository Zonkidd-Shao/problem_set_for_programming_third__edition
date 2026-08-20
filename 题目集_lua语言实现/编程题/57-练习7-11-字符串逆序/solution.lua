-- Lua 5.3+
local line=io.read("*l") or ""; local out={}; for i=#line,1,-1 do out[#out+1]=line:sub(i,i) end; print(table.concat(out))
