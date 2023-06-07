export function tName(e, id, data, setData){
    var result = data;
    result = result.map((x) => {
      if (x.id === id) {
        x.teamName = e.target.value.toUpperCase();
        return x;
      } else return x;
    });
    setData(result);
};

export function clear(data,setData,team){
    var result = data;
    result = result.map((x) => {
        if (x.id >= team) {
            data[x.id] = {
                id: x.id,
                name: '',
                email: '',
                rollno: '',
                branch: '',
                leader: false,
            }
            return x;
      } else return x;
    });
    setData(result);
};