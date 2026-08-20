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

local n=next_number(); local sum,mx,mn=0,-math.huge,math.huge; for i=1,n do local x=next_number(); sum=sum+x; mx=math.max(mx,x); mn=math.min(mn,x) end; print(string.format("average = %.2f",sum/n)); print(string.format("max = %.2f",mx)); print(string.format("min = %.2f",mn))
