var arr=[
    {
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
      },
      {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
      },
      {
        "id": 3,
        "first_name": "Anna",
        "last_name": "Smith",
        "email": "annasmith23@gmail.com"
      }];
      //for in
      //for (var w in arr) {
        //console.log(w);
        //console.log(arr[w]);
      //}
      // for loop
      for(var i=0;i<arr.length;i++) {
        console.log(arr[i].id+" "+arr[i].first_name+" "+arr[i].last_name);
      }