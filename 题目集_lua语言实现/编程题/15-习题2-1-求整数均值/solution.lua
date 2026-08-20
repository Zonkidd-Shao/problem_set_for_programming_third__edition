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

local sum = 0
for i = 1, 4 do sum = sum + next_number() end
print(string.format("Sum = %g; Average = %.1f", sum, sum / 4))
