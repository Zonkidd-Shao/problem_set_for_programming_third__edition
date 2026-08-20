-- Lua 5.3+
local expression=io.read("*l") or ""; expression=expression:gsub("=+$", "")
local number, result, operator = "", nil, nil
local function apply(value)
    value=tonumber(value); if not value then return false end
    if not result then result=value elseif operator=="+" then result=result+value elseif operator=="-" then result=result-value elseif operator=="*" then result=result*value elseif operator=="/" then if value==0 then return false end; result=result/value else return false end
    return true
end
local ok=true
for c in expression:gmatch(".") do if c:match("[%d]") then number=number..c elseif c:match("[%+%-%*/]") then ok=apply(number); number=""; operator=c; if not ok then break end else ok=false; break end end
if ok then ok=apply(number) end
if ok then print(math.modf(result)) else print("ERROR") end
