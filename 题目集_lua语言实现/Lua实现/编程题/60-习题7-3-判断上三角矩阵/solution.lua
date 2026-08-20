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

    local t=next_number(); local out={}; for case=1,t do local n=next_number(); local yes=true; for i=1,n do for j=1,n do local x=next_number(); if i>j and x~=0 then yes=false end end end; out[#out+1]=yes and "YES" or "NO" end; print(table.concat(out,"
"))
