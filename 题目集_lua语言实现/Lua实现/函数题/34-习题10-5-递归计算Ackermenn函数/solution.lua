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

local function ack(m,n) if m==0 then return n+1 elseif n==0 then return ack(m-1,1) else return ack(m-1,ack(m,n-1)) end end; print(ack(next_number(),next_number()))
