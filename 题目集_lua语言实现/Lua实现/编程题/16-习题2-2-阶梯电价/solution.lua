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

local kwh = next_number()
local cost
if kwh <= 50 then cost = kwh * 0.53
elseif kwh <= 200 then cost = 50 * 0.53 + (kwh - 50) * 0.58
else cost = 50 * 0.53 + 150 * 0.58 + (kwh - 200) * 0.63 end
if kwh < 0 then print("Invalid Value!") else print(string.format("cost = %.2f", cost)) end
