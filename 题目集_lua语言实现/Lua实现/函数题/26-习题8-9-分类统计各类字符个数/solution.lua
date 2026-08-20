-- Lua 5.3+
local s=io.read("*a") or ""; local letter,space,digit,other=0,0,0,0; for c in s:gmatch(".") do if c:match("%a") then letter=letter+1 elseif c==" " then space=space+1 elseif c:match("%d") then digit=digit+1 else other=other+1 end end; print(letter,space,digit,other)
