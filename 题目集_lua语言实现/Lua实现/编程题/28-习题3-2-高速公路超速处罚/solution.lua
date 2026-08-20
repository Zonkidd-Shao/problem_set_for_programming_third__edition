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

local speed, limit = next_number(), next_number()
if speed <= limit then print("OK") else
    local percent = math.floor((speed - limit) / limit * 100 + 0.5)
    if percent <= 10 then print(string.format("Exceed %d%%. Ticket 200", percent)) else print(string.format("Exceed %d%%. License Revoked", percent)) end
end
