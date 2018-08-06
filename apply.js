export default function apply(count, func, arg){
  var b = arg;
  for(var i = 0; i < count; i++){
    b = func(b);
  }
  return b;
