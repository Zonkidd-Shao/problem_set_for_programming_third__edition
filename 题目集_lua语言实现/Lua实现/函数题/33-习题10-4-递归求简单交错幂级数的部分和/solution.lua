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

local x, n=next_number(),next_number(); local function series(k) if k==0 then return 1 end return (-1)^k*x^k end; local s=0; for i=0,n do s=s+series(i) end; print(string.format("%.2f",s))
