module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
	const secondsInHour = 3600;
    const turns = Math.pow(2, disksNumber) - 1
    return {
        turns: turns,
        seconds: turns / (turnsSpeed / secondsInHour)
    };
}