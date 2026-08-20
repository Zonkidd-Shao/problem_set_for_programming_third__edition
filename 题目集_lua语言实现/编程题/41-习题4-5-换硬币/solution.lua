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

local total=next_number(); local count=0
for a=0,math.floor(total/5) do for b=0,math.floor((total-5*a)/2) do local c=total-5*a-2*b; if c>=0 then print(string.format("fen5:%d, fen2:%d, fen1:%d, total:%d",a,b,c,a+b+c)); count=count+1 end end end
print("count = "..count)
