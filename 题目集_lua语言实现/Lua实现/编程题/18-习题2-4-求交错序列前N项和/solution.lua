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

local n, sum = next_number(), 0
for i = 1, n do sum = sum + (i % 2 == 1 and 1 or -1) / i end
print(string.format("%.3f", sum))
