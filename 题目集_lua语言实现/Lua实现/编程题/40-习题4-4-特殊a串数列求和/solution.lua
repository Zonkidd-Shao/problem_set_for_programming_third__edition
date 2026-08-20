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

local a,n=next_number(),next_number(); local term=0; for i=1,n do term=term*10+a end
local sum=0; for i=1,n do sum=sum+term; term=math.floor(term/10) end
print(string.format("s = %d", sum))
