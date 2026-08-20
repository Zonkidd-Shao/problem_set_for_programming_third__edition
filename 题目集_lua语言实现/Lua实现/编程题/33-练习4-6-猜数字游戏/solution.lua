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

local secret = next_number()
while true do local guess=next_number(); if not guess then break elseif guess==secret then print("Bingo"); print("Game Over"); break elseif guess>secret then print("Too big") else print("Too small") end end
