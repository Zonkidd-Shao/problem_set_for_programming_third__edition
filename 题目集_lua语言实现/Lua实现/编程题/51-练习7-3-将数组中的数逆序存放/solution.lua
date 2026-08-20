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

local n=next_number(); local a={}; for i=1,n do a[i]=next_number() end; local out={}; for i=n,1,-1 do out[#out+1]=a[i] end; print(table.concat(out," "))
