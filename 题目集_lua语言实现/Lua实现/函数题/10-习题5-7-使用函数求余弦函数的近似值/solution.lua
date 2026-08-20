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

local e,x=next_number(),next_number(); local sum,term=1,1; for i=1,10000 do term=-term*x*x/((2*i-1)*(2*i)); sum=sum+term; if math.abs(term)<e then break end end; print(string.format("cos(%.2f) = %.6f",x,sum))
