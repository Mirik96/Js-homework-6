// let ds = []

// for(let i = 0; i < Infinity; i++){
//     let dxd = prompt('Введите команду');
        
//     let dx = dxd.split(', ');
//     if(dx[0] == 'add'){
//         ds.push(dx[1]);
//     }else if(dx[0] == 'del'){
//         for(let key in ds){
//             ds[key] == dx[1] ? ds.splice(key,1) : '';
//         }
//     }else if(dxd == 'stop'){
//         break;
//     }
// }console.log(ds);

// let arr = []

// for(let i = 0; i < Infinity; i++){
//     let num =prompt('enter command');
//     let com = num.split(', ');
//     if(com[0] == 'add'){
//         arr.push(com[1]);
//     }else if(com[0] == 'del'){
//         for(let key in com){
//             com[key] = com[1] ? com.splice(key,1) : '';
//         }
//     }else if(num == 'stop'){
//         break;
//     }
    
    
//     console.log(key);
// }
// console.log(arr);




let arr = []
let pit = 'write esc to delete'
let kit = 'write push to add'
let pause = 'write pause to stop'
 for(let i = 0; i < Infinity; i++){
     let num =prompt('enter code');
     let code = num.split(', ');
     if(code[0] == 'push'){
         arr.push(code[1]);
        }else if(code[0] == 'esc'){
            for(let x = 0; x < arr.length; x++){
                arr[x] == code[1] ? arr.splice(x,1) : ''; 
            }
        }else if(code[0] == 'pause'){
            break;
        }else if(code[0] == 'del'){
            alert(pit);
        }else if(code[0] == 'add'){
            alert(kit);
        }else if(code[0] == 'stop'){
            alert(pause);
        }
        console.log(arr);
    }
    
    