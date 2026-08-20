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

local a,b,c,d=next_number(),next_number(),next_number(),next_number(); print(string.format("(%g%+gi) * (%g%+gi) = %g%+gi",a,b,c,d,a*c-b*d,a*d+b*c))
