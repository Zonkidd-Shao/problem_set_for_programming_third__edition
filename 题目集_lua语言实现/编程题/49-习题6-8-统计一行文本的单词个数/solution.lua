-- Lua 5.3+
local line=io.read("*l") or ""; local count=0; for word in line:gmatch("%S+") do count=count+1 end; print(count)
