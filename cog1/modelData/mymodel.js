/**
 * Empty object for groups in scenegraph.
 * 
 * @namespace cog1.data
 * @module empty
 */
define(["exports", "data"], function(exports, data) {
	"use strict";

	/**
	 * Create an instance of the model defined in this module.
	 * 
	 * @parameter object with fields:
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {
		
		if(parameter) {
			var scale = parameter.scale;
			var textureURL = parameter.textureURL;
			// Each face shows a different area of the given texture (e.g, a dice).
			var sixFacesTexture = parameter.sixFacesTexture;
		}
		// Set default values if parameter is undefined.
		if(scale == undefined){
			scale = 200;
		}
		if(textureURL == undefined){
			textureURL = "";
		}
		if(sixFacesTexture == undefined){
			sixFacesTexture = false;
		}

		// Instance of the model to be returned.
		var instance = {};

		// Vertex indices:							
		//   7----6
		//	/|   /|
		// 4----5 |
		// | 3--|-2
		// |/   |/
		// 0----1
		instance.vertices = [
			// bottom (y=-1)
			[-2,-1, 1],
			[ 1,-1, 1],
			[ 1,-1,-1],
			[-2,-1,-1],
			// top (y=+1)		
			[-2,1, 1],
			[ 1,1, 1],
			[ 1,1,-1],
			[-2,1,-1],

			//wand vorne 
			[-2,-1,1],
			[1,-1,1],
			[-2,1,1],
			[1,1,1],

			//spitzdach - spitze
			[-1.5,3,0],
			[0.5,3,0],

		];
		// Use default colors, implicitly.
		// instance.colors = data.colors;

		// Corners of the faces have to fit the texture coordinates.			
		// Faces: bottom/down, top/up, front, right, back, left. 
		instance.polygonVertices = [
			

			// mein haus - spitzdach 

			//bodenplatte
			[0,1,2,3],
			
			//front
			[0,1,5,4],

			//back
			[2,3,7,6],

			//left
			[0,3,7,4],
			
			//right
			[1,2,6,5],

			//dachfront
			[4,5,13,12],
			
			//dachback
			[7,6,13,12],

			//dachleft
			[4,7,12],

			//dachright
			[5,6,13],
			

			/*[4,5,6,7],
			[4,0,1,5],
			[1,2,6,5],
			[6,2,3,7],
			[3,0,4,7]*/
		];	

		instance.polygonColors = [0,0,0,0,0,6,6,6,6];
		
		//instance.vertexNormals = [];
		//instance.polygonNormals = [];

		if( ! sixFacesTexture){
	        // Use default texture coordinates.
			// instance.textureCoord = [];	
			// For order of corners of faces, see polygonVertices.
			instance.polygonTextureCoord = [
				[1,2,3,0],
				[1,2,3,0],
				[1,0,3,2],
				[3,0,1,2],
				[3,0,1,2],
				[3,0,1,2]
			];
		} else {
			// BEGIN exercise Cube-Dice-Texture
			
			// Order 0 to 16 form bottom-left to top-right
			// line by line, indices in spatial order:
			instance.textureCoord = [];
			// ...

			// Use textureCoord in order given for textureCoord.
			// The order of corners of faces must fit the one given in polygonVertices.
			// Match orientation of face given for polygonVertices.
			// D=bottom/down, U=top/up, F=front, R=right, B=back, L=left
			// The mapping is explained on the texture image.
			// instance.polygonTextureCoord = [ ....];

			// END exercise Cube-Dice-Texture			
		}
		
		instance.textureURL = textureURL;

		data.applyScale.call(instance, scale);

		return instance;






		return instance;		
	};
});