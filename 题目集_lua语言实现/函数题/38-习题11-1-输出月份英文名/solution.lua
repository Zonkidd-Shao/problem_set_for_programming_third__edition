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

local n=next_number(); local out={}; for i=1,n do out[i]=next_number() end; local start=next_number() or 1; local finish=next_number() or n; for i=start,finish do out[#out+1]=out[i] end; print(table.concat(out," "))
