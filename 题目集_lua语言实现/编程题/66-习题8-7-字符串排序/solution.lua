-- Lua 5.3+
local words={}; for w in (io.read("*a") or ""):gmatch("%S+") do words[#words+1]=w end; table.sort(words); print("After sorted:"); for _,w in ipairs(words) do print(w) end
