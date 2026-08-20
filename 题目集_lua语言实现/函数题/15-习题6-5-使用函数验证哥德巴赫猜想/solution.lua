-- Lua 5.3+
local data = io.read("*a")
local values = {}
for value in data:gmatch("%S+") do
    values[#values + 1] = value
end
local pos = 1
local function next_value()
    local value = values[pos]
    pos = pos + 1
    return value
end
local function next_number()
    return tonumber(next_value())
end

local m,n=next_number(),next_number(); local function prime(x) if x<2 then return false end; for i=2,math.sqrt(x) do if x%i==0 then return false end end; return true end; if prime(m) then print(m.." is a prime number") end; if m<6 then m=6 end; if m%2~=0 then m=m+1 end; local out={}; for x=m,n,2 do for p=3,x/2,2 do if prime(p) and prime(x-p) then out[#out+1]=string.format("%d=%d+%d",x,p,x-p); break end end end; print(table.concat(out,", "))
