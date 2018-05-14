/**
 * Created by george.calcea on 10/28/2016.
 */
/**
 * Get the mean of the emotion
 * @param emotionsData
 * @param emotionName
 * @returns {number}
 */
function getMean(emotionsData, emotionName)
{
    var sum     = 0;
    var entries = 0;

    for (i in emotionsData) {
        var emotionValue = parseFloat(emotionsData[i][emotionName]);

        entries++;
        sum += emotionValue;
    }

    var mean = sum * 100 / entries;

    return mean.toFixed(2);
}
