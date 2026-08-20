-- Lua 5.3+
local h,m,s=(io.read("*l") or ""):match("(%d+):(%d+):(%d+)"); h,m,s=tonumber(h),tonumber(m),tonumber(s); local n=tonumber(io.read("*l")) or 0; local total=(h*3600+m*60+s+n)%(24*3600); print(string.format("%02d:%02d:%02d",math.floor(total/3600),math.floor(total/60)%60,total%60))
