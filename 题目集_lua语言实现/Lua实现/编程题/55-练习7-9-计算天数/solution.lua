-- Lua 5.3+
local y,m,d=(io.read("*l") or ""):match("(%d+)/(%d+)/(%d+)"); y,m,d=tonumber(y),tonumber(m),tonumber(d); local days={31,28,31,30,31,30,31,31,30,31,30,31}; if y%400==0 or (y%4==0 and y%100~=0) then days[2]=29 end; local sum=d; for i=1,m-1 do sum=sum+days[i] end; print(sum)
