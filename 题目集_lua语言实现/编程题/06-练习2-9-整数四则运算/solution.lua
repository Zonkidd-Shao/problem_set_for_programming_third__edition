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

local a, b = next_number(), next_number()
print(string.format("%d + %d = %d", a, b, a + b))
print(string.format("%d - %d = %d", a, b, a - b))
print(string.format("%d * %d = %d", a, b, a * b))
if b == 0 then print("ERROR") else print(string.format("%d / %d = %d", a, b, math.modf(a / b))) end
