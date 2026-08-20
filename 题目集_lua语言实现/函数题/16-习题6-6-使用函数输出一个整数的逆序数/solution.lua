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

local n=next_number(); local sign=n<0 and -1 or 1; n=math.abs(n); local r=0; repeat r=r*10+n%10; n=math.floor(n/10) until n==0; print(sign*r)
