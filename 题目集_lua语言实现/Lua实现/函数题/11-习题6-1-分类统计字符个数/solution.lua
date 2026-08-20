-- Lua 5.3+
local s=io.read("*a") or ""; local letter,blank,digit,other=0,0,0,0; for c in s:gmatch(".") do if c:match("%a") then letter=letter+1 elseif c==" " or c=="
" then blank=blank+1 elseif c:match("%d") then digit=digit+1 else other=other+1 end end; if s:sub(-1)=="
" then blank=blank-1 end; print(string.format("letter = %d, blank = %d, digit = %d, other = %d",letter,blank,digit,other))
