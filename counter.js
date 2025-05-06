let counter=0;
const history=[];


function convertToBerlinTime(utcTimestamp) {
    const utcDate = new Date(utcTimestamp);  
    const berlinTime = utcDate.toLocaleString('en-GB', { timeZone: 'Europe/Berlin' });  // Convert to Berlin time
    return berlinTime;
  }

function getCounter(){
    return counter;
}

function incrementCounter(){
    counter +=1;
    const currentTimestamp = new Date().toISOString();  
    history.push(currentTimestamp);
    const berlinTime = convertToBerlinTime(currentTimestamp); // Convert the latest timestamp to Berlin time and log it
    console.log('Counter incremented:', counter);
    console.log('Last 5 timestamps (in Berlin time):', history.map((timestamp) => convertToBerlinTime(timestamp)));

    if (history.length > 5) {
        history.shift();
    }
    return counter;
}

function getTimestampHistory() {
    return history;
  }

module.exports= { getCounter,incrementCounter,getTimestampHistory};