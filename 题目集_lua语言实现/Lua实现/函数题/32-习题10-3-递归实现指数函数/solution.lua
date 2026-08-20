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

local function power(x,n) if n==0 then return 1 end return x*power(x,n-1) end; local x,n=next_number(),next_number(); print(power(x,n))
