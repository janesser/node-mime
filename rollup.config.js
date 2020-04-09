import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: "index.js",
        output: [
            {
                file: "dist/mime.mjs",
                format: "esm"
            }
        ],
        plugins: [commonjs()]
    }
];
