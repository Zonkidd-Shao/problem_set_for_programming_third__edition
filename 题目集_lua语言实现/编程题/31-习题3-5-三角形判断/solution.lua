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

local x1,y1,x2,y2,x3,y3 = next_number(),next_number(),next_number(),next_number(),next_number(),next_number()
local a = math.sqrt((x1-x2)^2+(y1-y2)^2); local b = math.sqrt((x1-x3)^2+(y1-y3)^2); local c = math.sqrt((x2-x3)^2+(y2-y3)^2)
if a+b<=c or a+c<=b or b+c<=a then print("Impossible") else local s=(a+b+c)/2; print(string.format("L = %.2f, A = %.2f", a+b+c, math.sqrt(s*(s-a)*(s-b)*(s-c)))) end
