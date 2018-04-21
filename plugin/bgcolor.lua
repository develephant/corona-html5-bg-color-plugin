--#############################################################################
--# Background Color Plugin
--# (c)2018 C. Byerley (develephant)
--#############################################################################
local lib

local platform = system.getInfo("platform")
if platform == 'html5' then
	-- use native JS plugin
	lib = require("bgcolor_js")
else
	-- wrapper for non web platforms
	local CoronaLibrary = require "CoronaLibrary"
	-- Create stub library for simulator
	lib = CoronaLibrary:new{ name='bgcolor', publisherId='com.develephant' }

	-- Default implementations
	local function defaultFunction()
		print( "WARNING: The '" .. lib.name .. "' library is not available on this platform." )
	end

  lib.setHex = defaultFunction
  lib.setColor = defaultFunction
	lib.setRGB = defaultFunction
end

-- Return an instance
return lib