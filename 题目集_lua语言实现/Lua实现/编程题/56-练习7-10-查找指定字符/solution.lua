-- Lua 5.3+
local c=io.read(1); io.read(1); local line=io.read("*l") or ""; local index=-1; for i=1,#line do if line:sub(i,i)==c then index=i-1 end end; if index>=0 then print("index = "..index) else print("Not Found") end
