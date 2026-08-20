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

local n=next_number(); local a={}; for i=1,n do a[i]=next_number() end; local x=next_number(); local index=-1; for i=1,n do if a[i]==x then index=i-1; break end end; if index>=0 then print("index = "..index) else print("Not found") end
