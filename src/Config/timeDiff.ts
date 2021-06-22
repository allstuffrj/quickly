import DateTimeFormat = Intl.DateTimeFormat;

const timeDiff =  function( startTime : Date,endTime :Date) :String
{

    var datetime = new Date( startTime ).getTime();
    var now = new Date(endTime).getTime();

    if( isNaN(datetime) )
    {
        return "";
    }


    if (datetime < now) {
        var milisec_diff = now - datetime;
    }else{
        var milisec_diff = datetime - now;
    }

    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

    var date_diff = new Date( milisec_diff );


    var returnString = '';
    var hours = date_diff.getUTCHours();
    var minutes = date_diff.getUTCMinutes();
    var seconds = date_diff.getSeconds();
    // + " Hours " + date_diff.getMinutes() + " Minutes " + date_diff.getSeconds() + " Seconds"
        if(hours > 0)
            returnString += hours+'h ';

        if(minutes)
               returnString +=minutes+'m ';

        if(seconds)
                returnString +=seconds+'s ';

    return returnString;
}

export default timeDiff;
