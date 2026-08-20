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

local lower, upper = next_number(), next_number()
print("fahr celsius")
for f = lower, upper, 2 do
    print(string.format("%d%6.1f", f, 5 * (f - 32) / 9))
end
