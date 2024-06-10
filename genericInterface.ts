interface GenericInterface<T>{
    property : T;
  }
  
  let t1:GenericInterface<string> = {
      property : "asdfg"
  }
  console.log(t1);