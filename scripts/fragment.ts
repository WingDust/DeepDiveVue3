import {appendFileSync,existsSync,unlinkSync,readFileSync} from "fs";
import {execSync,} from "child_process";
import { posix } from "path";

const args = process.argv.slice(2);

// 判断
if (args.length===0) {
  process.exit(0);
}


const prettierobj = (obj:string|Object)=>{
  switch (typeof(obj)) {
    case 'string':{
      console.log(JSON.stringify(JSON.parse(obj),null,2));
      break;
    }
    case 'object':{
      console.log(JSON.stringify(obj,null,2));
      break;
    }
    default:
      console.log(`not string or object :{obj}`);
      break;
  }
}
// 根据文件后缀生成对应 Fragments.md 文件
// ts 对应 ts-Fragments.md
const fragmentfile = posix.join(process.cwd().replace(/\\/g,'/'),args[0]+'-Fragments.md');
console.log(fragmentfile);

interface Fragment{
  text:string
  lineNumber:number
}
interface Fragments{
  filename:string
  frags:Fragment[]
}



/** 判断文件内容是否为空
 * @param path 
 * @returns boolean
 */
export const isEmptyContent = (path:string):boolean=>{
  if (existsSync(path)) {
    if (readFileSync(path).length===0) {
    return true;
    }
    // 文件存在并有内容
    else{
      return false
    }
  } 
  // 不存在
  else {
    return true;
  }
};

const write = (str:string)=>{
  appendFileSync(fragmentfile,str+'\n');
};

const contentnormalize = (content:Fragments[])=>{
  for (const [i,fragment] of content.entries()) {
      console.log({i});
    // 文件写入检查，不为空删除文件
    if (i === 0 && !isEmptyContent(fragmentfile)) {
      console.log('remove fragment-file because it not empty');
      unlinkSync(fragmentfile);
    };

    for (const j of fragment.frags) {
          console.log({j});
      for (const [k,line] of j.text.split('\n').entries()) {
          console.log({k});
        w:{
          console.log({k});
          switch (k) {
            case 0:{ 


              let title = line.trim().substr(3,line.length).trim();
              if (title.length!==0) {
                write(title);
                write(`> ${fragment.filename.replace(process.cwd()+'\\','').replace(/\\/g,'/')}:${j.lineNumber}`);
                break;
              }
              console.log(JSON.stringify(title));
              break w;
            }
            default:{
              if (line.trim().substr(3,line.length).trim()==='') {break;}
              write(line.trim().substr(3,line.length).trim());
              break;
            }
          }
        }
    }
    }
  }
};


export const lsfiles = () => {

  let content:Fragments[] = [];

  /**
   * 用来保存
   */
  let comp:Fragments = Object.create(null);
  comp.frags=[];

    /*\ ## rg 正则表达式问题
    |*| - [Does not support (?!...) negative lookahead assertion? ](https://github.com/rust-lang/regex/issues/127)
    |*| - [allow handling lookbehind assertions of non-fixed length](https://github.com/BurntSushi/ripgrep/issues/1025)
    |*| - [support fancier regex features such as look-around and backreferences](https://github.com/BurntSushi/ripgrep/issues/188)
    |*| - [常用 regex 方言总结](https://hoblovski.github.io/2019/05/30/%E5%A5%87%E5%A5%87%E6%80%AA%E6%80%AA%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E6%80%BB%E7%BB%93.html)
    |*| - [捕获组](https://zh.javascript.info/regexp-groups)
    |*| - [Javascript 正则表达式详解](https://www.huaweicloud.com/articles/56f54b2591b67aafd3d241481b397503.html)
    \*/
  const multiline = '-U';
  const jsonoutput = '--json';
  const regex = String.raw`-P '(?<=^|\n)(?P<i>\s*)/\*\\.*(\n\k<i>\|\*\|.*)+\n\k<i>\\\*/'`;
  const ignoremdorg = "-g '!*.md' -g '!*.org' -g '!scripts/fragment.ts'";
  const ignorereult = "-g '!**/Fragments.md'";
  const workspace = process.cwd();
  // const resultfile = '-i' + process.cwd() + '\\Fragments.md';
  
  const run = `rg ${jsonoutput} ${multiline} ${regex} ${ignoremdorg} ${ignorereult} ${workspace} `;
  
  // const run = String.raw`rg --json -U -P '(?<=^|\n)(?P<i>\s*)/\*\\.*(\n\k<i>\|\*\|.*)+\n\k<i>\\\*/' -g '!*.md' -g '!*.org' ${process.cwd()} -i ${process.cwd()+'\\Fragments.md'}`;
  // console.trace(run);
  // console.trace(workspace);
  
  
  const re =  execSync(run,{shell:'pwsh',encoding:'utf-8'});
  // console.trace(re);
  
    /*\ ## 中断 `forof`
    |*| - throw new Error('')
    |*| - break
    |*| - [try...catch 对JS的性能影响有多大？](https://k8w.io/post/72)
    \*/
    let err;//记录 JSON.parse 有误的信息
    try {
      // 由于 re 返回的为字符串，需要以分割换行转成一个个可 JSON.parse 的 JSON 字符串
      for (const i of re.split('\n')) {
        err = i;
        // console.trace(i);
        // prettierobj(i)
        if(i===''||i==='\r') {break;};
        let ctx = JSON.parse(i);
        // 当属性 type 表示 re 遍历完成，应该执行最后写入步骤
        if (ctx?.type ==='summary') {
          // prettierobj(content);
          contentnormalize(content);
          break;
        }
        if (ctx?.type==='begin') {
          comp.filename = ctx.data.path.text;
        }
        if (ctx?.type==='match') {
          comp.frags.push({text:ctx.data.lines.text,lineNumber:ctx.data.line_number});
        }
        if (ctx?.type==='end'){
          content.push(Object.assign({},comp));
          // 清空 comp
          comp.filename = '';
          comp.frags = [];
        }
      }
    }
    // 
    catch (error) {
      if((<string>error.message).includes('JSON')){
        console.log('JSON:',JSON.stringify(err));
      }
      else{
        // console.log(error);
      }
    }
  

};
lsfiles();
