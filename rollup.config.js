import rollupTypescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'typescript';

export default {
    entry: 'src/server.ts',
    format: 'iife',
    dest: 'dist/server.js',
    plugins: [
        rollupTypescript({ typescript }),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**'
        })
    ],
    external: [
        'webserver',
        'system',
        'webpage',
        'child_process',
        'fs'
    ]
};
