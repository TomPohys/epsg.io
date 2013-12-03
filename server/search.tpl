<html>
<html>
<head>
	
	<title>EPSG.io - Coordinate systems for spatial reference worldwide</title>

</head>
<body>
	
	<a href=/about>About</a>
	<h1>EPSG.io</h1>
	<h2>Coordinate systems for spatial reference worldwide</h2>

<form action= "/" method="get">

	<input type="text" name="q" placeholder="country, code or name of a coordinate system" style="width: 300px"/>
	
	<input type="submit" value="search">
	<input type="checkbox" value="0" name="valid" checked> Valid
	<select name="kind">
			<option value = "CRS-*"selected>Coordinate reference systems</option>

			<option value = "CRS-projected" >&nbsp; &nbsp; Projected</option>
			<option value = "CRS-geo*" >&nbsp; &nbsp; Geodetic</option>
			
			<option value = '"CRS-geographic2D"'> &nbsp; &nbsp; &nbsp; Geographic 2D</option>
			<option value = '"CRS-geographic3D"'> &nbsp; &nbsp; &nbsp; Geographic 3D</option>
			<option value = "CRS-geocentric"> &nbsp; &nbsp; &nbsp; Geocentric</option>
			<option value = "CRS-vertical">&nbsp; &nbsp; Vertical</option>
			<option value = "CRS-engineering">&nbsp; &nbsp; Engineering</option>
			<option value = "CRS-compound">&nbsp; &nbsp; Compound</option>

			<option value = "Datum-*">Datum</option>			
			<option value = "Datum-vertical">&nbsp; &nbsp; Vertical</option>
			<option value = "Datum-engineering">&nbsp; &nbsp; Engineering</option>
			<option value = "Datum-geodetic">&nbsp; &nbsp; Geodetic</option>

			<option value = "Ellipsoid">Ellipsoid</option>
			<option value = '"Prime meridian"'>Prime meridian</option>
			<option value = "Method">Method</option>
			
			<option value = "CoordSys-*"> Coordinate systems </option>
			<option value = '"CoordSys-vertical"'>&nbsp; &nbsp; Vertical</option>
			<option value = "CoordSys-spherical">&nbsp; &nbsp; Spherical</option>
			<option value = "CoordSys-Cartesian">&nbsp; &nbsp; Cartesian</option>
			<option value = "CoordSys-ellipsoidal">&nbsp; &nbsp; Ellipsoidal</option>
	
			<option value = "Axis"> Axis </option>
			<option value = "Area"> Area </option>
			
			<option value = "Measure-*">Measure</option>			
			<option value = "Measure-angle">&nbsp; &nbsp; Angle</option>
			<option value = "Measure-scale">&nbsp; &nbsp; Scale</option>
			<option value = "Measure-length">&nbsp; &nbsp; Length</option>
		 	<option value = "*"> In all categories </option>
		
		 
		 
		</select>





</form>
</body>
</html>
