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

local x1,y1,x2,y2=next_number(),next_number(),next_number(),next_number(); print(string.format("dist = %.2f",math.sqrt((x1-x2)^2+(y1-y2)^2)))
