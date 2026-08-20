-- Lua 5.3+
local n=tonumber(io.read("*l")); local books={}; for i=1,n do local name=io.read("*l") or ""; local price=tonumber(io.read("*l")); books[#books+1]={name=name,price=price} end; table.sort(books,function(a,b)return a.price>b.price end); print(string.format("%.2f, %s",books[1].price,books[1].name)); print(string.format("%.2f, %s",books[#books].price,books[#books].name))
