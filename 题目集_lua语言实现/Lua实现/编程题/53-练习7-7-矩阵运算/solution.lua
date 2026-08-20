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

local n=next_number(); local sum=0; for i=1,n do for j=1,n do local x=next_number(); if i<n and j<n and i+j~=n+1 then sum=sum+x end end end; print(sum)
