const canvas = document.querySelector('canvas');
const gl  = canvas.getContext('webgl');

if(!gl) {
    throw new Error("Sorry, WebGL not supported. You can't go here in this html. ERROR CODE: 00");
}

alert("Everything's PIxel hear with WebGL")

const vertexData = [
    0, 1, 0,
    1, -1, 0,
    -1, -1, 0,
];

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1);
}
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
void main() {
    gl_FragColor = vec4(1, 0, 1, 1);
}
`);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

const positionLocation = gl.getAttribLocation(program, `position`);
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program);
gl.drawArrays(gl.TRIANGLES, 0, 3);

const vertexData1 = [
    0, 1, 0,
    1, 1,  0,
    -1, -1, 0,
];

const buffer1 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer1);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData1), gl.STATIC_DRAW);

const vertexShader1 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader1, `
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1);
}
`);
gl.compileShader(vertexShader1);

const fragmentShader1 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader1, `
void main() {
    gl_FragColor = vec4(1, 0, 0.6, 1);
}
`);
gl.compileShader(fragmentShader1);

const program1 = gl.createProgram();
gl.attachShader(program1, vertexShader1);
gl.attachShader(program1, fragmentShader1);
gl.linkProgram(program1);

const positionLocation1 = gl.getAttribLocation(program1, `position`);
gl.enableVertexAttribArray(positionLocation1);
gl.vertexAttribPointer(positionLocation1, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program1);
gl.drawArrays(gl.TRIANGLES, 0, 3);



const vertexData2 = [
    0, 1, 0,
    1, -1, 0,
    -1, -1, 0,
];

const buffer2 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer2);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData2), gl.STATIC_DRAW);

const vertexShader2 = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader2, `
attribute vec3 position;
void main() {
    gl_Position = vec4(position2, 1);
}
`);
gl.compileShader(vertexShader2);

const fragmentShader2 = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader2, `
void main() {
    gl_FragColor = vec4(1, 0, 0, 1);
}
`);
gl.compileShader(fragmentShader2);

const program2 = gl.createProgram();
gl.attachShader(program2, vertexShader2);
gl.attachShader(program, fragmentShader2);
gl.linkProgram(program2);

const positionLocation2 = gl.getAttribLocation(program2, `position`);
gl.enableVertexAttribArray(positionLocation2);
gl.vertexAttribPointer(positionLocation2, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program2);
gl.drawArrays(gl.TRIANGLES, 0, 4);
