import { defineConfig } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import externals from "rollup-plugin-node-externals";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default defineConfig([
    {
        input:{
            index:"src/utils/index.ts" //入口文件
        },
        output:[
            {
                dir:"dist" ,//打包到dist目录下
                format:"cjs", //输出commonjs文件
            }
        ],
        plugins:[
            nodeResolve(),//支持rollup打包node.js模块
            externals({
                devDeps:false,//可以识别 package.json 中的 devDependencies 依赖 当作外部依赖
            }),
            typescript(),//支持rollup打包ts文件
            json(),//支持rollup打包json文件
            commonjs(),//支持rollup打包commonjs模块
            terser()//压缩打包代码
        ]

        
    }
])