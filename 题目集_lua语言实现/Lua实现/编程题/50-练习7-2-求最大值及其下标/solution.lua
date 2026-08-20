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

local n=next_number(); local best, index=-math.huge,0; for i=1,n do local x=next_number(); if x>best then best,index=x,i-1 end end; print(best,index)
