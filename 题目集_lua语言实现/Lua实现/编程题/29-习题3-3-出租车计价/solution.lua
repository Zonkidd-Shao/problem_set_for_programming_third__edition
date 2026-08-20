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

local distance, wait = next_number(), next_number()
local fare = 10
if distance > 3 then fare = fare + math.ceil((distance - 3) * 2) end
fare = fare + math.floor(wait / 5) * 2
print(fare)
