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

local n=next_number(); local counts={A=0,B=0,C=0,D=0,E=0}; for i=1,n do local s=next_number(); local g=s>=90 and "A" or (s>=80 and "B" or (s>=70 and "C" or (s>=60 and "D" or "E"))); counts[g]=counts[g]+1 end; print(counts.A,counts.B,counts.C,counts.D,counts.E)
