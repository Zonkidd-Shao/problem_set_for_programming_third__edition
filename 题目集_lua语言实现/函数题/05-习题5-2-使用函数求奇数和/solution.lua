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

local n=next_number(); local a={}; local s=0; for i=1,n do a[i]=next_number(); if a[i]%2~=0 then s=s+a[i] end end; local odd={}; for _,x in ipairs(a) do if x%2~=0 then odd[#odd+1]=x end end; print("Sum of ( "..table.concat(odd," ").." ) = "..s)
