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

local score = next_number()
local grade = score >= 90 and "A" or (score >= 80 and "B" or (score >= 70 and "C" or (score >= 60 and "D" or "E")))
print(grade)
