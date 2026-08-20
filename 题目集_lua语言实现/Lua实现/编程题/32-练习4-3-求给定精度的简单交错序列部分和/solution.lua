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

local x, eps = next_number(), next_number() or 1e-6
local sum, term, i = 0, 1, 0
repeat i=i+1; term=term*x/i; sum=sum+((i%2==1) and term or -term) until math.abs(term)<eps
print(string.format("sum = %.6f", sum))
