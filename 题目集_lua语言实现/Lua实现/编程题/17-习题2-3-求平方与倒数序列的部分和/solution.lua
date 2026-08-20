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

local m, n = next_number(), next_number()
local sum = 0
for i = m, n do sum = sum + i * i + 1 / i end
print(string.format("sum = %.6f", sum))
