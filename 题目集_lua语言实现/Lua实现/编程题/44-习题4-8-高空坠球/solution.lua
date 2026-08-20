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

local h,n=next_number(),next_number(); local distance=0; local rebound=h/2
if n>0 then distance=h; for i=2,n do distance=distance+2*rebound; rebound=rebound/2 end end
print(string.format("%.1f %.1f",distance,rebound))
