-- Lua 5.3+
local n=tonumber(io.read("*l")); local people={}; for i=1,n do local name,birth,phone=(io.read("*l") or ""):match("(%S+)%s+(%S+)%s+(.+)"); people[#people+1]={name=name,birth=birth,phone=phone} end; table.sort(people,function(a,b)return a.birth<b.birth end); for _,p in ipairs(people) do print(p.name,p.birth,p.phone) end
