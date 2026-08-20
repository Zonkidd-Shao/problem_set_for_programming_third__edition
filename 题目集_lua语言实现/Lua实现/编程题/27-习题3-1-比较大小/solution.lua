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

local a, b, c = next_number(), next_number(), next_number()
local x = {a, b, c}; table.sort(x)
print(string.format("%g->%g->%g", x[1], x[2], x[3]))
