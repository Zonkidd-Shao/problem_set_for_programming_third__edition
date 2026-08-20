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

local n=next_number(); local counts={0,0,0,0,0,0,0,0,0,0}; for i=1,n do local x=next_number(); if x==0 then counts[1]=counts[1]+1 else while x>0 do counts[x%10+1]=counts[x%10+1]+1; x=math.floor(x/10) end end end; local mx=0; for _,v in ipairs(counts) do if v>mx then mx=v end end; local out={}; for d,v in ipairs(counts) do if v==mx then out[#out+1]=d-1 end end; print(mx..": "..table.concat(out," "))
