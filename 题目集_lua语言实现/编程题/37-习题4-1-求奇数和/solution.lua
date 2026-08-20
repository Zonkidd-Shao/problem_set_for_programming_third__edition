-- Lua 5.3+
local sum = 0
for value in io.read("*a"):gmatch("%-?%d+") do local n=tonumber(value); if n<0 then break elseif n%2~=0 then sum=sum+n end end
print(sum)
