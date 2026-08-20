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

local n=next_number(); local out={}; repeat out[#out+1]=n%2; n=math.floor(n/2) until n==0; for i=#out,1,-1 do io.write(out[i]) end; print()
