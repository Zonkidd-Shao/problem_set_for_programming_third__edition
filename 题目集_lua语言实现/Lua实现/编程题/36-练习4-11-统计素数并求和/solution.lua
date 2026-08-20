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

local m,n=next_number(),next_number(); local count,sum=0,0
local function prime(x) if x<2 then return false end; for i=2,math.floor(math.sqrt(x)) do if x%i==0 then return false end end; return true end
for x=m,n do if prime(x) then count=count+1; sum=sum+x end end
print(count, sum)
