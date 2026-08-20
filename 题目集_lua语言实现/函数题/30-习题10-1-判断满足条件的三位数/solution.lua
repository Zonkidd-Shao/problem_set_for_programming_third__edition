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

local n=next_number(); local count=0; for x=100,999 do local a=math.floor(x/100); local b=math.floor(x/10)%10; local c=x%10; if a+b+c==n then count=count+1 end end; print(count)
