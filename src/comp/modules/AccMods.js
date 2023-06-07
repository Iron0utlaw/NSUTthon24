export function LeaderToggle(id, data, setData){
    var result = data;
    result = result.map((x) => {
      if(x.id === id){
        x.leader = true;
        return x;
      }else{
        x.leader = false;
        return x;
      }
    })
    setData(result);
}

export function emailHandler(e, id, data, setData){
    var result = data;
    result = result.map((x) => {
      if (x.id === id) {
        x.email = e.target.value.toLowerCase();
        return x;
      } else return x;
    });
    setData(result);
};

export function nameHandler(e, id, data, setData){
    var result = data;
    result = result.map((x) => {
      if (x.id === id) {
        x.name = e.target.value.toUpperCase();
        return x;
      } else return x;
    });
    setData(result);
};

export function rollnoHandler(e, id, data, setData){
    var result = data;
    result = result.map((x) => {
      if (x.id === id) {
        x.rollno = e.target.value.toUpperCase();
        return x;
      } else return x;
    });
    setData(result);
  };
export function branchHandler(value, id, data, setData){
    var result = data;
    result = result.map((x) => {
      if (x.id === id) {
        x.branch = value.value.toUpperCase();
        return x;
      } else return x;
    });
    setData(result);
};