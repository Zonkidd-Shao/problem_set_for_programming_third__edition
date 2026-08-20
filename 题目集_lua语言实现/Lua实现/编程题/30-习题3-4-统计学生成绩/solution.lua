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

local n, counts = next_number(), {0, 0, 0, 0, 0}
for i = 1, n do local s = next_number(); local index = s >= 90 and 1 or (s >= 80 and 2 or (s >= 70 and 3 or (s >= 60 and 4 or 5))); counts[index] = counts[index] + 1 end
print(table.concat(counts, " "))
