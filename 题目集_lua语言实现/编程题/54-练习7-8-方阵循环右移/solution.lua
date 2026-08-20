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

local m,n=next_number(),next_number(); local a={}; for i=1,n do a[i]={}; for j=1,n do a[i][j]=next_number() end end; m=m%n
for i=1,n do local row={}; for j=1,n do row[j]=a[i][(j-m-1+n)%n+1] end; for j=1,n do io.write(row[j]," ") end; print() end
