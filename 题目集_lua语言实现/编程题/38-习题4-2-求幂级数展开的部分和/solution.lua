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

local x, sum, term = next_number(), 1, 1
for i=1,1000 do term=term*x/i; sum=sum+term; if math.abs(term)<0.0001 then break end end
print(string.format("%.4f", sum))
