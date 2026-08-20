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

local m, n = next_number(), next_number()
if m > n then m, n = n, m end
local found = false
for year = m, n do
    if year % 400 == 0 or (year % 4 == 0 and year % 100 ~= 0) then print(year); found = true end
end
if not found then print("None") end
