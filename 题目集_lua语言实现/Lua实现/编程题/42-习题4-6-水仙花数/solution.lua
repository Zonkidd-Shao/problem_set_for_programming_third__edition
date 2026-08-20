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

local n=next_number(); local first=10^(n-1); local last=10^n-1
for x=first,last do local t=x,sum=0; while t>0 do local d=t%10; sum=sum+d^n; t=math.floor(t/10) end; if sum==x then print(x) end end
