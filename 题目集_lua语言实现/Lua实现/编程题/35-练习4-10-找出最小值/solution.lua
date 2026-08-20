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

local n, mn = next_number(), math.huge
for i=1,n do local v=next_number(); if v<mn then mn=v end end
print(string.format("min = %g", mn))
