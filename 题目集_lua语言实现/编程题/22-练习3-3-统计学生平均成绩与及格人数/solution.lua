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

local n, sum, pass = next_number(), 0, 0
for i = 1, n do local score = next_number(); sum = sum + score; if score >= 60 then pass = pass + 1 end end
print(string.format("average = %.1f", sum / n))
print(string.format("count = %d", pass))
