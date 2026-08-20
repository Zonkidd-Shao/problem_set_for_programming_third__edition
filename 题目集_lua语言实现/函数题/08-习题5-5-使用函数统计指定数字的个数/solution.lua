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

local number,digit=next_number(),next_number(); local s=tostring(math.abs(number)); local count=0; for c in s:gmatch(".") do if tonumber(c)==digit then count=count+1 end end; if digit==0 and math.abs(number)==0 then count=1 end; print(string.format("Number of digit %d in %d: %d",digit,number,count))
