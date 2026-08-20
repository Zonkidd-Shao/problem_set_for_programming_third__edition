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

local x1,y1,x2,y2=next_number(),next_number(),next_number(),next_number(); local x,y=x1+x2,y1+y2; if math.abs(x)<0.05 then x=0 end; if math.abs(y)<0.05 then y=0 end; print(string.format("(%.1f, %.1f)",x,y))
