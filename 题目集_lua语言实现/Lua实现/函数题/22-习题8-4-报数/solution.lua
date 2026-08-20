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

local n,m=next_number(),next_number(); local people={}; for i=1,n do people[i]=i end; local index=1; local out={}; while #people>0 do index=(index+m-2)%#people+1; out[#out+1]=table.remove(people,index) end; print(table.concat(out," "))
