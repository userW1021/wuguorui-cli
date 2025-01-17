import simpleGit,{SimpleGitOptions} from "simple-git"
import createLogger from "progress-estimator";
import chalk from "chalk"

//初始化进度条

const logger = createLogger({
    spinner: {
        interval: 100,
        frames: ["-", "+", "-"].map((item) => chalk.green(item)) 
    }
});


const gitOptions: Partial<SimpleGitOptions>= {
    baseDir: process.cwd(),//当前工作目录
    binary: 'git',//指定二进制文件路径
    maxConcurrentProcesses:6//最大的并发进程
};
export const clone =async (url:string,projectName:string,options:string[])=>{
    const git = simpleGit(gitOptions)
    try {
        await  logger(git.clone(url,projectName,options),"代码下载中...",{
            estimate:7000 //预计下载时间
        });
        console.log()
        console.log(chalk.green("代码下载成功"))
        console.log(chalk.blackBright("==========================================="))
        console.log(chalk.blackBright("======欢迎使用 wuguorui-cli脚手架==========="))
        console.log(chalk.blackBright("==========================================="))
        console.log()
        console.log()
        console.log(chalk.blackBright("============请使用npm install 安装依赖======="))
        console.log(chalk.blackBright("============npm run dev 运行项目======="))
    }catch (error){
        console.error(chalk.red("代码下载失败"))
        console.log(error)
    }
}