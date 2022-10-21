const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((success) => {
      resolve(success);
    }, (error) => {
      reject(error)
    },opts);
  });

  return promise;
}
const setTimer = (duration) =>
{
  const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Done");
    },duration);
  });
  return promise;
}

function trackUserHandler() {
  // navigator.geolocation.getCurrentPosition(
  //   posdata=>{
  //     setTimer(2000).then(data => console.log(data,posdata));
  //   },error => {
  //     console.log(error)
  //   }
  // );
  let positionData;
  getPosition().then(posdata => {
    //  console.log(posdata) 
    positionData = posdata;
    //  setTimer(2000).then(data => console.log(data));
    return setTimer(2000);
    },//err => {console.log(err);}
  ).catch(err => {
    console.log(err);
    return 'on we go..';
  })
  .then(data => {
    console.log(positionData,data);
  }).catch();
  setTimer(1000).then(() => console.log("It's Finally done ok!"));
  console.log('Getting Position...');
}

// function trackUserHandler() {
//   console.log('Clicked!');
// }

button.addEventListener('click', trackUserHandler);


// let result = 0;
// for(let i=0;i<100000000;i++)
// {
//   result +=i;
// }
// console.log(result);